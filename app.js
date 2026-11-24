(() => {
  'use strict';

  const STORAGE_STATE = 'limit_gemini_usage_state_v1';
  const STORAGE_HISTORY = 'limit_gemini_usage_history_v1';
  const STORAGE_PREFS = 'limit_gemini_usage_prefs_v1';

  const I18N = {
    th: {
      statusReady: 'พร้อมติดตามโควตา',
      statusUpdated: 'อัปเดตล่าสุดเมื่อ',
      statusOffline: 'ออฟไลน์ (ใช้ข้อมูลในเครื่อง)',
      offlineChip: 'ออฟไลน์',
      quotaOverview: 'สถานะโควตาปัจจุบัน',
      fiveHrLabel: 'รอบ 5 ชั่วโมง',
      weeklyLabel: 'ขีดจำกัดรายสัปดาห์',
      resetPrefix: 'รีเซ็ตใน',
      resetReady: 'รีเซ็ตแล้ว',
      noDataSub: 'ยังไม่มีข้อมูล — กดซิงค์หรือกรอกค่าเพื่อเริ่มต้น',
      resetAtLabel: 'รีเซ็ตเวลา',
      badgeHigh: 'ใกล้เต็ม',
      badgeCrit: 'วิกฤต',
      btnClipboard: 'ซิงค์จากคลิปบอร์ด',
      btnManual: 'กรอก / แก้ไขค่า',
      btnBookmarklet: 'One-Tap Bookmarklet',
      btnOpenGemini: 'เปิดหน้า Gemini Usage',
      installTitle: 'ติดตั้งแอปลงอุปกรณ์',
      installDesc: 'เปิดใช้งานแบบเต็มจอและดูข้อมูลออฟไลน์ได้ทันที',
      installBtn: 'ติดตั้งแอป',
      iosBtn: 'วิธีติดตั้ง iOS',
      iosInline: 'วิธีติดตั้งบน iOS Safari',
      installInline: 'ติดตั้งเป็นแอป (PWA)',
      installedInline: 'ติดตั้งแอปแล้ว (Standalone)',
      historyTitle: 'ประวัติการอัปเดตล่าสุด',
      historySubtitle: 'เก็บข้อมูลในอุปกรณ์ 100% (localStorage)',
      clearHistory: 'ล้างประวัติ',
      historyEmpty: 'ยังไม่มีประวัติการอัปเดต',
      srcClipboard: 'คลิปบอร์ด',
      srcManual: 'กรอกเอง',
      srcBookmarklet: 'Bookmarklet',
      modalManualTitle: 'กรอก / แก้ไขโควตา',
      labelManualFivePct: 'รอบ 5 ชั่วโมง (%)',
      labelManualFiveReset: 'เวลาที่เหลือจนถึง Reset (ชม. / นาที)',
      labelManualWeeklyPct: 'ขีดจำกัดรายสัปดาห์ (%)',
      labelManualWeeklyReset: 'เวลาที่เหลือจนถึง Reset (วัน / ชม. / นาที)',
      unitDays: 'วัน',
      unitHours: 'ชม.',
      unitMins: 'นาที',
      cancel: 'ยกเลิก',
      save: 'บันทึกข้อมูล',
      modalPasteTitle: 'วางข้อความจากหน้า Gemini Usage',
      modalPasteDesc: 'คัดลอกข้อความทั้งหมดจากหน้า gemini.google.com/usage แล้ววางลงในช่องด้านล่างเพื่อวิเคราะห์อัตโนมัติ',
      pastePlaceholder: 'ตัวอย่าง: รอบ 5 ชั่วโมง 35% รีเซ็ตใน 3 ชม. 20 นาที...',
      parseAndSave: 'วิเคราะห์และบันทึก',
      bookmarkletDesc: 'ลากปุ่มด้านล่างไปวางบนแถบ Bookmark ของเบราว์เซอร์ (หรือคัดลอกโค้ดไปสร้าง Bookmark บนมือถือ) จากนั้นเมื่อเปิดหน้า gemini.google.com/usage ให้กด Bookmark นี้เพื่อซิงค์ค่ากลับมาทันที',
      close: 'ปิด',
      copyBookmarklet: 'คัดลอกโค้ด Bookmarklet',
      iosTitle: 'วิธีติดตั้งบน iOS Safari',
      iosStep1: 'เปิดเว็บไซต์นี้ด้วยเบราว์เซอร์ <strong>Safari</strong> บน iPhone หรือ iPad',
      iosStep2: 'แตะปุ่ม <strong>แชร์ (Share)</strong> ไอคอนสี่เหลี่ยมมีลูกศรชี้ขึ้นบริเวณแถบด้านล่าง',
      iosStep3: 'เลื่อนลงแล้วเลือก <strong>"เพิ่มไปยังหน้าจอโฮม" (Add to Home Screen)</strong>',
      iosStep4: 'กด <strong>เพิ่ม (Add)</strong> ที่มุมขวาบน เพื่อใช้งานแบบเต็มจอเหมือนแอป Native',
      understood: 'เข้าใจแล้ว',
      toastSynced: 'ซิงค์ข้อมูลโควตาเรียบร้อยแล้ว',
      toastSaved: 'บันทึกข้อมูลโควตาแล้ว',
      toastCleared: 'ล้างประวัติเรียบร้อยแล้ว',
      toastCopied: 'คัดลอกโค้ด Bookmarklet แล้ว',
      toastClipboardDenied: 'ไม่สามารถอ่านคลิปบอร์ดอัตโนมัติ กรุณาวางข้อความในช่องด้านล่าง',
      toastParseFail: 'ไม่พบตัวเลข % ในข้อความ กรุณาตรวจสอบอีกครั้ง',
      toastInstallPromptUnavailable: 'เบราว์เซอร์นี้ยังไม่รองรับปุ่มติดตั้งอัตโนมัติ หรือติดตั้งไปแล้ว (ลองดูเมนูเบราว์เซอร์ → Add to Home Screen)',
      footerNote: 'Liquid Glass × Material Design 3 • ความเป็นส่วนตัว 100% บนอุปกรณ์'
    },
    en: {
      statusReady: 'Ready to monitor quota',
      statusUpdated: 'Last updated at',
      statusOffline: 'Offline (local data active)',
      offlineChip: 'Offline',
      quotaOverview: 'Current Quota Status',
      fiveHrLabel: '5-Hour Limit',
      weeklyLabel: 'Weekly Limit',
      resetPrefix: 'Resets in',
      resetReady: 'Reset ready',
      noDataSub: 'No data yet — sync or edit values to get started',
      resetAtLabel: 'Resets at',
      badgeHigh: 'High',
      badgeCrit: 'Critical',
      btnClipboard: 'Sync from Clipboard',
      btnManual: 'Edit Manually',
      btnBookmarklet: 'One-Tap Bookmarklet',
      btnOpenGemini: 'Open Gemini Usage',
      installTitle: 'Install App on Device',
      installDesc: 'Launch full-screen and access your quota offline anytime',
      installBtn: 'Install App',
      iosBtn: 'iOS Guide',
      iosInline: 'iOS Safari Install Guide',
      installInline: 'Install App (PWA)',
      installedInline: 'App Installed (Standalone)',
      historyTitle: 'Recent Update History',
      historySubtitle: 'Stored 100% on-device (localStorage)',
      clearHistory: 'Clear',
      historyEmpty: 'No update history yet',
      srcClipboard: 'Clipboard',
      srcManual: 'Manual',
      srcBookmarklet: 'Bookmarklet',
      modalManualTitle: 'Edit Quota Values',
      labelManualFivePct: '5-Hour Limit (%)',
      labelManualFiveReset: 'Time remaining until reset (Hrs / Mins)',
      labelManualWeeklyPct: 'Weekly Limit (%)',
      labelManualWeeklyReset: 'Time remaining until reset (Days / Hrs / Mins)',
      unitDays: 'days',
      unitHours: 'hrs',
      unitMins: 'mins',
      cancel: 'Cancel',
      save: 'Save Quota',
      modalPasteTitle: 'Paste Gemini Usage Text',
      modalPasteDesc: 'Copy all text from gemini.google.com/usage and paste it below to auto-parse.',
      pastePlaceholder: 'Example: 5-hour limit 35% Resets in 3 hours 20 minutes...',
      parseAndSave: 'Parse & Save',
      bookmarkletDesc: 'Drag the button below to your browser bookmarks bar (or copy the code on mobile). When viewing gemini.google.com/usage, tap it to sync your quota in one tap.',
      close: 'Close',
      copyBookmarklet: 'Copy Bookmarklet Code',
      iosTitle: 'Install on iOS Safari',
      iosStep1: 'Open this website in <strong>Safari</strong> on your iPhone or iPad.',
      iosStep2: 'Tap the <strong>Share</strong> button (square with upward arrow) at the bottom bar.',
      iosStep3: 'Scroll down and select <strong>"Add to Home Screen"</strong>.',
      iosStep4: 'Tap <strong>Add</strong> in the top-right corner for a native full-screen app.',
      understood: 'Got it',
      toastSynced: 'Quota synced successfully',
      toastSaved: 'Quota saved',
      toastCleared: 'History cleared',
      toastCopied: 'Bookmarklet code copied',
      toastClipboardDenied: 'Clipboard access blocked — please paste text below',
      toastParseFail: 'Could not find percentage values in text',
      toastInstallPromptUnavailable: 'Install prompt unavailable or already installed (check browser menu → Install App / Add to Home Screen)',
      footerNote: 'Liquid Glass × Material Design 3 • Privacy-first 100% On-Device'
    }
  };

  // DOM helpers
  const $ = (id) => document.getElementById(id);

  // State
  let prefs = loadJSON(STORAGE_PREFS, {
    lang: 'th',
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  });

  let quotaState = loadJSON(STORAGE_STATE, {
    fiveHrPct: null,
    fiveHrResetAt: null,
    fiveHrResetRaw: '',
    weeklyPct: null,
    weeklyResetAt: null,
    weeklyResetRaw: '',
    lastUpdatedAt: null,
    lastSource: null
  });

  let historyList = loadJSON(STORAGE_HISTORY, []);
  let deferredInstallPrompt = null;

  function loadJSON(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveJSON(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.warn('localStorage write failed:', e);
    }
  }

  function t(key) {
    return (I18N[prefs.lang] && I18N[prefs.lang][key]) || I18N.en[key] || key;
  }

  function showToast(msg) {
    const el = $('toast');
    el.textContent = msg;
    el.classList.remove('hidden');
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      el.classList.add('hidden');
    }, 3200);
  }

  // Theme & Language
  function applyTheme() {
    document.documentElement.setAttribute('data-theme', prefs.theme);
    const metaTheme = $('metaThemeColor');
    if (metaTheme) {
      metaTheme.setAttribute('content', prefs.theme === 'dark' ? '#0B0F1A' : '#4F46E5');
    }
  }

  function applyLanguage() {
    document.documentElement.lang = prefs.lang;
    $('langLabel').textContent = prefs.lang.toUpperCase();

    $('offlineChip').textContent = t('offlineChip');
    $('quotaOverviewLabel').textContent = t('quotaOverview');
    $('fiveHrLabel').textContent = t('fiveHrLabel');
    $('weeklyLabel').textContent = t('weeklyLabel');
    $('fiveHrResetPrefix').textContent = t('resetPrefix');
    $('weeklyResetPrefix').textContent = t('resetPrefix');
    $('btnClipboardText').textContent = t('btnClipboard');
    $('btnManualText').textContent = t('btnManual');
    $('btnBookmarkletText').textContent = t('btnBookmarklet');
    $('btnOpenGeminiText').textContent = t('btnOpenGemini');

    $('installBannerTitle').textContent = t('installTitle');
    $('installBannerDesc').textContent = t('installDesc');
    $('btnInstallApp').textContent = t('installBtn');
    $('btnIosGuide').textContent = t('iosBtn');
    $('iosGuideInlineText').textContent = t('iosInline');
    updateInstallInlineLabel();

    $('historyTitle').textContent = t('historyTitle');
    $('historySubtitle').textContent = t('historySubtitle');
    $('btnClearHistory').textContent = t('clearHistory');
    $('footerNote').textContent = t('footerNote');

    // Modals
    $('modalManualTitle').textContent = t('modalManualTitle');
    $('labelManualFivePct').textContent = t('labelManualFivePct');
    $('labelManualFiveReset').textContent = t('labelManualFiveReset');
    $('labelManualWeeklyPct').textContent = t('labelManualWeeklyPct');
    $('labelManualWeeklyReset').textContent = t('labelManualWeeklyReset');
    $('btnCancelManual').textContent = t('cancel');
    $('btnSaveManual').textContent = t('save');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const k = el.getAttribute('data-i18n');
      if (k) el.textContent = t(k);
    });

    $('modalPasteTitle').textContent = t('modalPasteTitle');
    $('modalPasteDesc').textContent = t('modalPasteDesc');
    $('pasteTextarea').placeholder = t('pastePlaceholder');
    $('btnCancelPaste').textContent = t('cancel');
    $('btnParsePaste').textContent = t('parseAndSave');

    $('bookmarkletDesc').textContent = t('bookmarkletDesc');
    $('btnCloseBookmarklet').textContent = t('close');
    $('btnCopyBookmarklet').textContent = t('copyBookmarklet');

    $('modalIosTitle').textContent = t('iosTitle');
    $('iosStep1').innerHTML = t('iosStep1');
    $('iosStep2').innerHTML = t('iosStep2');
    $('iosStep3').innerHTML = t('iosStep3');
    $('iosStep4').innerHTML = t('iosStep4');
    $('btnCloseIos').textContent = t('understood');

    renderQuota();
    renderHistory();
  }

  // Countdown formatting
  function formatCountdown(resetAt) {
    if (!resetAt) return '--:--:--';
    const diffMs = resetAt - Date.now();
    if (diffMs <= 0) return t('resetReady');

    const totalSec = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSec / 86400);
    const hours = Math.floor((totalSec % 86400) / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;

    const pad = (n) => String(n).padStart(2, '0');
    if (days > 0) {
      return prefs.lang === 'th'
        ? `${days} วัน ${hours} ชม. ${pad(mins)} น.`
        : `${days}d ${hours}h ${pad(mins)}m`;
    }
    return `${pad(hours)}:${pad(mins)}:${pad(secs)}`;
  }

  function formatResetClock(resetAt, rawLabel) {
    if (!resetAt) return rawLabel || t('noDataSub');
    const d = new Date(resetAt);
    const locale = prefs.lang === 'th' ? 'th-TH' : 'en-US';
    const formatted = d.toLocaleString(locale, {
      weekday: 'short',
      hour: '2-digit',
      minute: '2-digit'
    });
    return `${t('resetAtLabel')} ${formatted}`;
  }

  function updateBadge(badgeEl, pct) {
    if (pct === null || pct === undefined) {
      badgeEl.classList.add('hidden');
      return;
    }
    if (pct >= 90) {
      badgeEl.textContent = t('badgeCrit');
      badgeEl.className = 'quota-badge crit';
    } else if (pct >= 75) {
      badgeEl.textContent = t('badgeHigh');
      badgeEl.className = 'quota-badge warn';
    } else {
      badgeEl.classList.add('hidden');
    }
  }

  function renderQuota() {
    const hasFive = typeof quotaState.fiveHrPct === 'number';
    const hasWeekly = typeof quotaState.weeklyPct === 'number';

    const fiveVal = hasFive ? Math.max(0, Math.min(100, quotaState.fiveHrPct)) : 0;
    const weeklyVal = hasWeekly ? Math.max(0, Math.min(100, quotaState.weeklyPct)) : 0;

    $('fiveHrPct').textContent = hasFive ? `${fiveVal}%` : '--%';
    $('fiveHrProgress').style.width = `${fiveVal}%`;
    $('fiveHrTrack').setAttribute('aria-valuenow', String(fiveVal));
    $('fiveHrCountdown').textContent = formatCountdown(quotaState.fiveHrResetAt);
    $('fiveHrSubtext').textContent = hasFive
      ? formatResetClock(quotaState.fiveHrResetAt, quotaState.fiveHrResetRaw)
      : t('noDataSub');
    updateBadge($('fiveHrBadge'), hasFive ? fiveVal : null);

    $('weeklyPct').textContent = hasWeekly ? `${weeklyVal}%` : '--%';
    $('weeklyProgress').style.width = `${weeklyVal}%`;
    $('weeklyTrack').setAttribute('aria-valuenow', String(weeklyVal));
    $('weeklyCountdown').textContent = formatCountdown(quotaState.weeklyResetAt);
    $('weeklySubtext').textContent = hasWeekly
      ? formatResetClock(quotaState.weeklyResetAt, quotaState.weeklyResetRaw)
      : t('noDataSub');
    updateBadge($('weeklyBadge'), hasWeekly ? weeklyVal : null);

    // Status line
    if (!navigator.onLine) {
      $('statusText').textContent = t('statusOffline');
      $('offlineChip').classList.remove('hidden');
    } else if (quotaState.lastUpdatedAt) {
      const timeStr = new Date(quotaState.lastUpdatedAt).toLocaleTimeString(
        prefs.lang === 'th' ? 'th-TH' : 'en-US',
        { hour: '2-digit', minute: '2-digit' }
      );
      $('statusText').textContent = `${t('statusUpdated')} ${timeStr}`;
      $('offlineChip').classList.add('hidden');
    } else {
      $('statusText').textContent = t('statusReady');
      $('offlineChip').classList.add('hidden');
    }
  }

  function renderHistory() {
    const listEl = $('historyList');
    listEl.innerHTML = '';

    if (!historyList.length) {
      const empty = document.createElement('li');
      empty.className = 'history-empty';
      empty.textContent = t('historyEmpty');
      listEl.appendChild(empty);
      return;
    }

    const locale = prefs.lang === 'th' ? 'th-TH' : 'en-US';
    historyList.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'history-item';

      const srcLabel =
        item.source === 'clipboard'
          ? t('srcClipboard')
          : item.source === 'bookmarklet'
          ? t('srcBookmarklet')
          : t('srcManual');

      const timeStr = new Date(item.timestamp).toLocaleString(locale, {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

      li.innerHTML = `
        <div class="history-left">
          <span class="history-time">${timeStr}</span>
          <span class="history-source">${srcLabel}</span>
        </div>
        <div class="history-values">
          <span class="val-chip five">5h: ${item.fiveHrPct ?? '--'}%</span>
          <span class="val-chip weekly">W: ${item.weeklyPct ?? '--'}%</span>
        </div>
      `;
      listEl.appendChild(li);
    });
  }

  function commitQuotaUpdate(nextData, source) {
    const now = Date.now();
    quotaState = {
      ...quotaState,
      ...nextData,
      lastUpdatedAt: now,
      lastSource: source
    };
    saveJSON(STORAGE_STATE, quotaState);

    historyList.unshift({
      id: `${now}-${Math.random().toString(36).slice(2, 6)}`,
      timestamp: now,
      source,
      fiveHrPct: quotaState.fiveHrPct,
      weeklyPct: quotaState.weeklyPct
    });
    if (historyList.length > 30) historyList = historyList.slice(0, 30);
    saveJSON(STORAGE_HISTORY, historyList);

    renderQuota();
    renderHistory();
  }

  // Smart Parser for Gemini Usage Text (TH & EN)
  function parseDurationFromLine(line, defaultMs) {
    let totalMs = 0;
    let matched = false;

    const daysMatch = line.match(/(\d+)\s*(?:วัน|days?|d\b)/i);
    const hrsMatch = line.match(/(\d+)\s*(?:ชั่วโมง|ชม\.?|hours?|hrs?|h\b)/i);
    const minsMatch = line.match(/(\d+)\s*(?:นาที|น\.?|minutes?|mins?|m\b)/i);

    if (daysMatch) {
      totalMs += parseInt(daysMatch[1], 10) * 86400000;
      matched = true;
    }
    if (hrsMatch) {
      totalMs += parseInt(hrsMatch[1], 10) * 3600000;
      matched = true;
    }
    if (minsMatch) {
      totalMs += parseInt(minsMatch[1], 10) * 60000;
      matched = true;
    }

    if (matched && totalMs > 0) {
      return Date.now() + totalMs;
    }

    // Fallback: clock time like 14:30 or 2:30 PM
    const clockMatch = line.match(/\b(\d{1,2}):(\d{2})(?:\s*(AM|PM))?\b/i);
    if (clockMatch) {
      let h = parseInt(clockMatch[1], 10);
      const m = parseInt(clockMatch[2], 10);
      const ampm = clockMatch[3] ? clockMatch[3].toUpperCase() : null;
      if (ampm === 'PM' && h < 12) h += 12;
      if (ampm === 'AM' && h === 12) h = 0;
      const target = new Date();
      target.setHours(h, m, 0, 0);
      if (target.getTime() <= Date.now()) {
        target.setDate(target.getDate() + 1);
      }
      return target.getTime();
    }

    return Date.now() + defaultMs;
  }

  function parseGeminiUsageText(rawText) {
    const pctMatches = [...rawText.matchAll(/(\d+)\s*%/g)].map((m) =>
      Math.max(0, Math.min(100, parseInt(m[1], 10)))
    );

    if (pctMatches.length === 0) return null;

    const lines = rawText
      .split(/\r?\n/)
      .map((l) => l.trim())
      .filter(Boolean);

    const resetLines = lines.filter((l) =>
      /รีเซ็ต|reset|ชั่วโมง|สัปดาห์|hour|week|วัน|day|นาที|min/i.test(l)
    );

    const fiveHrPct = pctMatches[0];
    const weeklyPct = pctMatches.length >= 2 ? pctMatches[1] : quotaState.weeklyPct ?? 0;

    const fiveLine = resetLines[0] || '';
    const weeklyLine = resetLines[1] || '';

    const fiveHrResetAt = parseDurationFromLine(fiveLine, 5 * 3600000);
    const weeklyResetAt = parseDurationFromLine(weeklyLine, 7 * 86400000);

    return {
      fiveHrPct,
      fiveHrResetAt,
      fiveHrResetRaw: fiveLine,
      weeklyPct,
      weeklyResetAt,
      weeklyResetRaw: weeklyLine
    };
  }

  // Modal helpers
  function openModal(id) {
    $(id).classList.remove('hidden');
  }

  function closeModal(id) {
    $(id).classList.add('hidden');
  }

  document.querySelectorAll('[data-close]').forEach((btn) => {
    btn.addEventListener('click', () => closeModal(btn.getAttribute('data-close')));
  });

  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) backdrop.classList.add('hidden');
    });
  });

  // Clipboard Sync
  $('btnClipboardSync').addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.readText) {
        throw new Error('Clipboard API unavailable');
      }
      const text = await navigator.clipboard.readText();
      if (!text || !text.trim()) {
        openModal('modalPaste');
        return;
      }
      const parsed = parseGeminiUsageText(text);
      if (!parsed) {
        $('pasteTextarea').value = text;
        openModal('modalPaste');
        showToast(t('toastParseFail'));
        return;
      }
      commitQuotaUpdate(parsed, 'clipboard');
      showToast(t('toastSynced'));
    } catch {
      showToast(t('toastClipboardDenied'));
      openModal('modalPaste');
    }
  });

  $('btnParsePaste').addEventListener('click', () => {
    const raw = $('pasteTextarea').value.trim();
    const parsed = parseGeminiUsageText(raw);
    if (!parsed) {
      showToast(t('toastParseFail'));
      return;
    }
    commitQuotaUpdate(parsed, 'clipboard');
    closeModal('modalPaste');
    $('pasteTextarea').value = '';
    showToast(t('toastSynced'));
  });

  // Manual Edit
  function syncSliderPair(rangeEl, numEl, previewEl) {
    rangeEl.addEventListener('input', () => {
      numEl.value = rangeEl.value;
      previewEl.textContent = `${rangeEl.value}%`;
    });
    numEl.addEventListener('input', () => {
      const v = Math.max(0, Math.min(100, parseInt(numEl.value || '0', 10)));
      rangeEl.value = v;
      previewEl.textContent = `${v}%`;
    });
  }

  syncSliderPair($('rangeFivePct'), $('inputFivePct'), $('previewFivePct'));
  syncSliderPair($('rangeWeeklyPct'), $('inputWeeklyPct'), $('previewWeeklyPct'));

  $('btnManualEdit').addEventListener('click', () => {
    const fPct = quotaState.fiveHrPct ?? 0;
    const wPct = quotaState.weeklyPct ?? 0;

    $('rangeFivePct').value = fPct;
    $('inputFivePct').value = fPct;
    $('previewFivePct').textContent = `${fPct}%`;

    $('rangeWeeklyPct').value = wPct;
    $('inputWeeklyPct').value = wPct;
    $('previewWeeklyPct').textContent = `${wPct}%`;

    // Pre-fill remaining time if available
    if (quotaState.fiveHrResetAt && quotaState.fiveHrResetAt > Date.now()) {
      const rem = Math.floor((quotaState.fiveHrResetAt - Date.now()) / 60000);
      $('inputFiveHours').value = Math.min(5, Math.floor(rem / 60));
      $('inputFiveMins').value = rem % 60;
    } else {
      $('inputFiveHours').value = 5;
      $('inputFiveMins').value = 0;
    }

    if (quotaState.weeklyResetAt && quotaState.weeklyResetAt > Date.now()) {
      const rem = Math.floor((quotaState.weeklyResetAt - Date.now()) / 60000);
      $('inputWeeklyDays').value = Math.min(7, Math.floor(rem / 1440));
      $('inputWeeklyHours').value = Math.floor((rem % 1440) / 60);
      $('inputWeeklyMins').value = rem % 60;
    } else {
      $('inputWeeklyDays').value = 7;
      $('inputWeeklyHours').value = 0;
      $('inputWeeklyMins').value = 0;
    }

    openModal('modalManual');
  });

  $('manualForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const fiveHrPct = Math.max(0, Math.min(100, parseInt($('inputFivePct').value || '0', 10)));
    const weeklyPct = Math.max(0, Math.min(100, parseInt($('inputWeeklyPct').value || '0', 10)));

    const fHrs = Math.max(0, parseInt($('inputFiveHours').value || '0', 10));
    const fMins = Math.max(0, parseInt($('inputFiveMins').value || '0', 10));
    const fiveHrResetAt = Date.now() + (fHrs * 60 + fMins) * 60000;

    const wDays = Math.max(0, parseInt($('inputWeeklyDays').value || '0', 10));
    const wHrs = Math.max(0, parseInt($('inputWeeklyHours').value || '0', 10));
    const wMins = Math.max(0, parseInt($('inputWeeklyMins').value || '0', 10));
    const weeklyResetAt = Date.now() + (wDays * 1440 + wHrs * 60 + wMins) * 60000;

    commitQuotaUpdate(
      {
        fiveHrPct,
        fiveHrResetAt,
        fiveHrResetRaw: '',
        weeklyPct,
        weeklyResetAt,
        weeklyResetRaw: ''
      },
      'manual'
    );
    closeModal('modalManual');
    showToast(t('toastSaved'));
  });

  // One-Tap Bookmarklet
  function buildBookmarkletCode() {
    const appBase = `${window.location.origin}${window.location.pathname}`;
    const fn = `(function(){var t=document.body.innerText||"";var ls=t.split('\\n').map(function(l){return l.trim()}).filter(function(l){return l.length>0});var m=ls.filter(function(l){return /%|รีเซ็ต|reset|ชั่วโมง|สัปดาห์|hour|week/i.test(l)});var raw=m.length?m.join('\\n'):t.slice(0,500);var p=btoa(unescape(encodeURIComponent(JSON.stringify({raw:raw}))));window.open('${appBase}?sync='+encodeURIComponent(p),'_blank');})();`;
    return `javascript:${fn}`;
  }

  $('btnBookmarkletModal').addEventListener('click', () => {
    const code = buildBookmarkletCode();
    $('bookmarkletLink').setAttribute('href', code);
    $('bookmarkletCode').value = code;
    openModal('modalBookmarklet');
  });

  $('btnCopyBookmarklet').addEventListener('click', async () => {
    const code = $('bookmarkletCode').value;
    try {
      await navigator.clipboard.writeText(code);
      showToast(t('toastCopied'));
    } catch {
      $('bookmarkletCode').select();
      document.execCommand('copy');
      showToast(t('toastCopied'));
    }
  });

  // Handle ?sync= from Bookmarklet
  function handleUrlSync() {
    const params = new URLSearchParams(window.location.search);
    const syncParam = params.get('sync');
    if (!syncParam) return;

    try {
      const jsonStr = decodeURIComponent(escape(atob(syncParam)));
      const payload = JSON.parse(jsonStr);
      if (payload && payload.raw) {
        const parsed = parseGeminiUsageText(payload.raw);
        if (parsed) {
          commitQuotaUpdate(parsed, 'bookmarklet');
          showToast(t('toastSynced'));
        }
      }
    } catch (e) {
      console.warn('Bookmarklet sync decode failed:', e);
    } finally {
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  // History Clear
  $('btnClearHistory').addEventListener('click', () => {
    historyList = [];
    saveJSON(STORAGE_HISTORY, historyList);
    renderHistory();
    showToast(t('toastCleared'));
  });

  // Language & Theme toggles
  $('btnLangToggle').addEventListener('click', () => {
    prefs.lang = prefs.lang === 'th' ? 'en' : 'th';
    saveJSON(STORAGE_PREFS, prefs);
    applyLanguage();
  });

  $('btnThemeToggle').addEventListener('click', () => {
    prefs.theme = prefs.theme === 'dark' ? 'light' : 'dark';
    saveJSON(STORAGE_PREFS, prefs);
    applyTheme();
  });

  // PWA Install & iOS Safari Detection
  function isIosSafari() {
    const ua = window.navigator.userAgent;
    const isIos = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
    return isIos && !isStandalone;
  }

  function isStandaloneMode() {
    return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  }

  function updateInstallInlineLabel() {
    if (isStandaloneMode()) {
      $('installInlineText').textContent = t('installedInline');
      $('btnInstallInline').disabled = true;
    } else {
      $('installInlineText').textContent = t('installInline');
      $('btnInstallInline').disabled = false;
    }
  }

  async function triggerInstall() {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const { outcome } = await deferredInstallPrompt.userChoice;
      if (outcome === 'accepted') {
        $('installBanner').classList.add('hidden');
      }
      deferredInstallPrompt = null;
    } else if (isIosSafari()) {
      openModal('modalIos');
    } else {
      showToast(t('toastInstallPromptUnavailable'));
    }
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    $('installBanner').classList.remove('hidden');
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    $('installBanner').classList.add('hidden');
    updateInstallInlineLabel();
  });

  $('btnInstallApp').addEventListener('click', triggerInstall);
  $('btnInstallInline').addEventListener('click', triggerInstall);
  $('btnIosGuide').addEventListener('click', () => openModal('modalIos'));
  $('btnIosGuideInline').addEventListener('click', () => openModal('modalIos'));

  if (isIosSafari()) {
    $('installBanner').classList.remove('hidden');
    $('btnInstallApp').classList.add('hidden');
  }

  // Online / Offline listeners
  window.addEventListener('online', renderQuota);
  window.addEventListener('offline', renderQuota);

  // Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch((err) => {
        console.warn('ServiceWorker registration failed:', err);
      });
    });
  }

  // Init
  applyTheme();
  applyLanguage();
  handleUrlSync();
  setInterval(renderQuota, 1000);
})();
