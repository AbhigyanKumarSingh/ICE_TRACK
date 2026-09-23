import { StorageService } from './data.js';

/**
 * ICETRACK Polar Operations - Normal Logistics & Mission Analytics Engine
 * Starts at 0% baseline and dynamically recalculates delivery progress,
 * supply buffers, and cryogenic risk as data is added or modified.
 */
export class AnalyticsEngine {
  constructor() {
    this.isZeroBaseline = StorageService.getItem('icetrack_analytics_zero_baseline') === 'true';
  }

  init() {
    this.bindEvents();
    this.render();
  }

  bindEvents() {
    const btnAddCargo = document.getElementById('btnAnalyticsQuickAddCargo');
    if (btnAddCargo && !btnAddCargo.hasAttribute('data-bound')) {
      btnAddCargo.setAttribute('data-bound', 'true');
      btnAddCargo.addEventListener('click', () => {
        this.quickAddCargo();
      });
    }

    const btnDeliver = document.getElementById('btnAnalyticsQuickDeliver');
    if (btnDeliver && !btnDeliver.hasAttribute('data-bound')) {
      btnDeliver.setAttribute('data-bound', 'true');
      btnDeliver.addEventListener('click', () => {
        this.quickDeliverCargo();
      });
    }

    const btnReset = document.getElementById('btnAnalyticsResetZero');
    if (btnReset && !btnReset.hasAttribute('data-bound')) {
      btnReset.setAttribute('data-bound', 'true');
      btnReset.addEventListener('click', () => {
        this.resetToZero();
      });
    }
  }

  // Quick action: Add new consignment
  quickAddCargo() {
    this.isZeroBaseline = false;
    StorageService.removeItem('icetrack_analytics_zero_baseline');

    const cargoList = StorageService.getData('cargo') || [];
    const newId = `CGO-${Math.floor(1000 + Math.random() * 9000)}`;
    const destinations = ['Maitri Station', 'Bharati Station', 'Dakshin Ice Camp'];
    const dest = destinations[Math.floor(Math.random() * destinations.length)];
    const newItem = {
      id: newId,
      item: 'Cryogenic Liquid Nitrogen & Battery Buffer',
      weightKg: 650,
      destination: dest,
      priority: 'High',
      status: 'In Transit',
      dispatchedDate: new Date().toISOString().split('T')[0]
    };
    cargoList.unshift(newItem);
    StorageService.saveData('cargo', cargoList);

    this.render();
    if (window.IceTrack && typeof window.IceTrack.renderCargo === 'function') {
      window.IceTrack.renderCargo();
    }
    if (window.IceTrack && typeof window.IceTrack.renderDashboardMetrics === 'function') {
      window.IceTrack.renderDashboardMetrics();
    }
  }

  // Quick action: Mark a consignment delivered
  quickDeliverCargo() {
    this.isZeroBaseline = false;
    StorageService.removeItem('icetrack_analytics_zero_baseline');

    const cargoList = StorageService.getData('cargo') || [];
    const nonDelivered = cargoList.find(c => !c.status || !c.status.toLowerCase().includes('deliver'));
    if (nonDelivered) {
      nonDelivered.status = 'Delivered';
      StorageService.saveData('cargo', cargoList);
    } else {
      const newId = `CGO-${Math.floor(1000 + Math.random() * 9000)}`;
      cargoList.unshift({
        id: newId,
        item: 'Geophysical Core Drill Bits & Spares',
        weightKg: 420,
        destination: 'Bharati Station',
        priority: 'Normal',
        status: 'Delivered',
        dispatchedDate: new Date().toISOString().split('T')[0]
      });
      StorageService.saveData('cargo', cargoList);
    }
    this.render();
    if (window.IceTrack && typeof window.IceTrack.renderCargo === 'function') {
      window.IceTrack.renderCargo();
    }
    if (window.IceTrack && typeof window.IceTrack.renderDashboardMetrics === 'function') {
      window.IceTrack.renderDashboardMetrics();
    }
  }

  // Reset to 0% baseline
  resetToZero() {
    this.isZeroBaseline = true;
    StorageService.setItem('icetrack_analytics_zero_baseline', 'true');
    this.render();
  }

  render() {
    let totalCargo = 0;
    let deliveredCount = 0;
    let transitCount = 0;
    let preparingCount = 0;
    let totalGrossMass = 0;

    let totalInv = 0;
    let safeCount = 0;
    let modCount = 0;
    let highCount = 0;

    let totalExpeditions = 0;

    if (!this.isZeroBaseline) {
      const cargoList = StorageService.getData('cargo') || [];
      const invList = StorageService.getData('inventory') || [];
      const expList = StorageService.getData('expeditions') || [];

      totalCargo = cargoList.length;
      totalExpeditions = expList.length;

      cargoList.forEach(c => {
        const weight = Number(c.weightKg || c.weight || 0);
        totalGrossMass += weight;

        const st = (c.status || '').toLowerCase();
        if (st.includes('deliver')) {
          deliveredCount++;
        } else if (st.includes('transit') || st.includes('ocean') || st.includes('route')) {
          transitCount++;
        } else {
          preparingCount++;
        }
      });

      totalInv = invList.length;
      invList.forEach(i => {
        const qty = Number(i.quantity || 0);
        const min = Number(i.minRequired || i.threshold || 100);
        if (qty >= min) {
          safeCount++;
        } else if (qty >= min * 0.5) {
          modCount++;
        } else {
          highCount++;
        }
      });
    }

    const deliveredPct = totalCargo > 0 ? Math.round((deliveredCount / totalCargo) * 100) : 0;
    const transitPct = totalCargo > 0 ? Math.round((transitCount / totalCargo) * 100) : 0;
    const preparingPct = totalCargo > 0 ? Math.round((preparingCount / totalCargo) * 100) : 0;
    const safeStockPct = totalInv > 0 ? Math.round((safeCount / totalInv) * 100) : 0;

    // Update KPI Cards
    const elTotal = document.getElementById('analyticsMetricTotal');
    if (elTotal) elTotal.textContent = totalCargo;

    const elSubTotal = document.getElementById('analyticsSubTotal');
    if (elSubTotal) elSubTotal.textContent = `${(totalGrossMass / 1000).toFixed(1)} MT Gross Mass`;

    const elDeliveredRate = document.getElementById('analyticsMetricDeliveredRate');
    if (elDeliveredRate) elDeliveredRate.textContent = `${deliveredPct}%`;

    const elSubDelivered = document.getElementById('analyticsSubDelivered');
    if (elSubDelivered) elSubDelivered.textContent = `${deliveredCount} of ${totalCargo} Consignments`;

    const elSafeStock = document.getElementById('analyticsMetricSafeStock');
    if (elSafeStock) elSafeStock.textContent = `${safeStockPct}%`;

    const elSubSafe = document.getElementById('analyticsSubSafe');
    if (elSubSafe) elSubSafe.textContent = `${safeCount} of ${totalInv} Safe Reserves`;

    const elExp = document.getElementById('analyticsMetricExpeditions');
    if (elExp) elExp.textContent = totalExpeditions;

    // Update Cargo Delivery Progress Card
    const elCargoCounter = document.getElementById('analyticsCargoCounter');
    if (elCargoCounter) elCargoCounter.textContent = `${totalCargo} records`;

    const elDeliveredPct = document.getElementById('analyticsDeliveredPct');
    if (elDeliveredPct) elDeliveredPct.textContent = `${deliveredPct}%`;

    const elDeliveredBar = document.getElementById('analyticsDeliveredBar');
    if (elDeliveredBar) elDeliveredBar.style.width = `${deliveredPct}%`;

    const elDeliveredCount = document.getElementById('analyticsDeliveredCount');
    if (elDeliveredCount) elDeliveredCount.textContent = `${deliveredCount} consignments`;

    const elTransitPct = document.getElementById('analyticsTransitPct');
    if (elTransitPct) elTransitPct.textContent = `${transitPct}%`;

    const elTransitBar = document.getElementById('analyticsTransitBar');
    if (elTransitBar) elTransitBar.style.width = `${transitPct}%`;

    const elTransitCount = document.getElementById('analyticsTransitCount');
    if (elTransitCount) elTransitCount.textContent = `${transitCount} consignments`;

    const elPreparingPct = document.getElementById('analyticsPreparingPct');
    if (elPreparingPct) elPreparingPct.textContent = `${preparingPct}%`;

    const elPreparingBar = document.getElementById('analyticsPreparingBar');
    if (elPreparingBar) elPreparingBar.style.width = `${preparingPct}%`;

    const elPreparingCount = document.getElementById('analyticsPreparingCount');
    if (elPreparingCount) elPreparingCount.textContent = `${preparingCount} consignments`;

    // Update Inventory Risk Assessment Card
    const elInvCounter = document.getElementById('analyticsInventoryCounter');
    if (elInvCounter) elInvCounter.textContent = `${totalInv} items`;

    const elSafePct = document.getElementById('analyticsSafeStockPct');
    if (elSafePct) elSafePct.textContent = `${safeStockPct}%`;

    const elRiskCircle = document.getElementById('analyticsRiskCircle');
    if (elRiskCircle) {
      elRiskCircle.setAttribute('stroke-dasharray', `${safeStockPct}, 100`);
    }

    const elLowRisk = document.getElementById('analyticsCountLowRisk');
    if (elLowRisk) elLowRisk.textContent = safeCount;

    const elModRisk = document.getElementById('analyticsCountModerateRisk');
    if (elModRisk) elModRisk.textContent = modCount;

    const elHighRisk = document.getElementById('analyticsCountHighRisk');
    if (elHighRisk) elHighRisk.textContent = highCount;
  }
}
