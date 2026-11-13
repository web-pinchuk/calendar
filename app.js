(() => {
  'use strict';

  // ---------- Texts ----------
  const T = {
    en: {
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      daysShort: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      longDate: d => `${T.en.months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
      dayDate: d => `${T.en.days[dow(d)]}, ${T.en.months[d.getMonth()].slice(0, 3)} ${d.getDate()}`,
      month: 'Month', week: 'Week', day: 'Day', today: 'Today',
      projects: 'Projects', hours24: '24 hours', start: 'START', stop: 'STOP',
      startTimer: 'Start timer', stopTimer: 'Stop timer',
      lunch: 'Lunch', everyDay: 'Every day', color: 'Project color',
      titlePh: 'Project name', addToDial: 'Add to circle', addTime: 'Add time', removeTime: 'Remove this time',
      add: 'Add Event', save: 'Save', del: 'Delete', cancel: 'Cancel', dup: 'Duplicate', total: 'Total',
      more: n => `${n} more`,
      badTime: 'Check the time', badTimeBody: 'The end must be later than the start.',
      notifNone: 'Notifications unavailable', notifNoneBody: 'This browser does not support system notifications.',
      notifOff: 'Notifications off', notifBlocked: 'Notifications blocked', notifBlockedBody: 'Allow notifications for this site in your browser settings.',
      notifOn: 'Notifications on', notifOnBody: m => `I will remind you ${m} min before each event.`,
      inMin: m => `In ${m} min`, startsNow: 'Starting now', bell: 'Event notifications',
      appName: 'Account',
      planner: 'Planner', planEmpty: 'Plan your projects', planCount: n => (n === 1 ? '1 project' : n + ' projects'),
      planHelp: 'List your projects with hours and deadlines. The planner fits them into your free time: nearest deadlines first, hard work earlier in the day.',
      planWork: 'Working time', planFrom: 'From', planTo: 'To', planBlock: 'Focus block', planGap: 'Break', noBreak: 'No break', h: 'h', min: ' min',
      planProjectsTitle: 'Projects', planName: 'Project', planHours: 'Hours', planDeadline: 'Deadline', planDiff: 'Difficulty', diff: ['Easy', 'Medium', 'Hard'],
      planAddTask: 'Add project', removeTask: 'Remove project', planClear: 'Clear plan', planRun: 'Plan',
      planNoTasks: 'No projects yet. Add the first one.', planNone: 'Add a project with a name, hours and a deadline first.',
      planNeed: 'To do', planFree: 'free before the last deadline', planDone: 'done', planLeft: 'left',
      planFits: 'Fits', planEnds: 'finishes', planAllDone: 'All hours are already done',
      planShort: h => 'Not enough time: ' + h + ' will not fit before the deadline',
      planMade: (b, d) => 'Planned ' + b + (b === 1 ? ' block' : ' blocks') + ' over ' + d + (d === 1 ? ' day' : ' days'), syncLocal: 'This device only',
      accTitle: 'Account', accIn: 'Sign in with Google', accOut: 'Sign out', accAs: 'Signed in as', close: 'Close',
      accHelp: 'Sign in with your Google account to keep the calendar in the cloud and open it on any device.',
      accNoConfig: 'Cloud sign-in is not set up yet.', accErrLoad: 'could not load the cloud library',
      accIsOff: 'Not signed in', accIsOk: 'Synced', accIsBusy: 'Syncing…', accIsError: 'Sync failed',
    },
    uk: {
      months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      monthsGen: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
      days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'],
      daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
      longDate: d => `${d.getDate()} ${T.uk.monthsGen[d.getMonth()]} ${d.getFullYear()}`,
      dayDate: d => `${T.uk.days[dow(d)]}, ${d.getDate()} ${T.uk.monthsGen[d.getMonth()]}`,
      month: 'Місяць', week: 'Тиждень', day: 'День', today: 'Сьогодні',
      projects: 'Проєкти', hours24: '24 години', start: 'СТАРТ', stop: 'СТОП',
      startTimer: 'Запустити таймер', stopTimer: 'Зупинити таймер',
      lunch: 'Обід', everyDay: 'Щодня', color: 'Колір проєкту',
      titlePh: 'Назва проєкту', addToDial: 'Додати в круг', addTime: 'Додати час', removeTime: 'Прибрати цей час',
      add: 'Додати подію', save: 'Зберегти', del: 'Видалити', cancel: 'Скасувати', dup: 'Дублювати', total: 'Всього',
      more: n => `ще ${n}`,
      badTime: 'Перевірте час', badTimeBody: 'Кінець має бути пізніше за початок.',
      notifNone: 'Сповіщення недоступні', notifNoneBody: 'Цей браузер не підтримує системні сповіщення.',
      notifOff: 'Сповіщення вимкнено', notifBlocked: 'Сповіщення заблоковано', notifBlockedBody: 'Дозвольте сповіщення для цього сайту в налаштуваннях браузера.',
      notifOn: 'Сповіщення увімкнено', notifOnBody: m => `Нагадаю за ${m} хв до початку кожної події.`,
      inMin: m => `Через ${m} хв`, startsNow: 'Починається зараз', bell: 'Сповіщення про події',
      appName: 'Акаунт',
      planner: 'Планувальник', planEmpty: 'Розпланувати проєкти',
      planCount: n => n + (n % 10 === 1 && n % 100 !== 11 ? ' проєкт' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? ' проєкти' : ' проєктів'),
      planHelp: 'Додайте проєкти з годинами й дедлайнами. Планувальник розкладе їх у вільний час: спершу найближчі дедлайни, складне на початок дня.',
      planWork: 'Робочий час', planFrom: 'З', planTo: 'До', planBlock: 'Блок роботи', planGap: 'Перерва', noBreak: 'Без перерви', h: ' год', min: ' хв',
      planProjectsTitle: 'Проєкти', planName: 'Проєкт', planHours: 'Години', planDeadline: 'Дедлайн', planDiff: 'Складність', diff: ['Легко', 'Середньо', 'Важко'],
      planAddTask: 'Додати проєкт', removeTask: 'Прибрати проєкт', planClear: 'Очистити план', planRun: 'Розпланувати',
      planNoTasks: 'Проєктів ще немає. Додайте перший.', planNone: 'Спершу додайте проєкт з назвою, годинами й дедлайном.',
      planNeed: 'Залишилось', planFree: 'вільно до останнього дедлайну', planDone: 'зроблено', planLeft: 'залишилось',
      planFits: 'Вміщається', planEnds: 'завершення', planAllDone: 'Усі години вже відпрацьовано',
      planShort: h => 'Не вистачає часу: ' + h + ' не вміщається до дедлайну',
      planMade: (b, d) => 'Заплановано блоків: ' + b + ', днів: ' + d, syncLocal: 'Лише цей пристрій',
      accTitle: 'Акаунт', accIn: 'Увійти через Google', accOut: 'Вийти', accAs: 'Ви ввійшли як', close: 'Закрити',
      accHelp: 'Увійдіть через Google-акаунт, щоб календар зберігався в хмарі й відкривався на будь-якому пристрої.',
      accNoConfig: 'Вхід у хмару ще не налаштовано.', accErrLoad: 'не вдалося завантажити хмарну бібліотеку',
      accIsOff: 'Ви не ввійшли', accIsOk: 'Синхронізовано', accIsBusy: 'Синхронізація…', accIsError: 'Помилка синхронізації',
    },
  };

  // Project colours: `soft` fills the calendar block, `arc` draws the dial line.
  const PALETTE = [
    { id: 'blue', soft: '#b8d8fc', arc: '#4c8df6' },
    { id: 'yellow', soft: '#fcd68b', arc: '#f6a723' },
    { id: 'pink', soft: '#f6a9d6', arc: '#d96bd0' },
    { id: 'green', soft: '#a8e9be', arc: '#3dd27a' },
    { id: 'purple', soft: '#cdbcfa', arc: '#8a5be8' },
    { id: 'coral', soft: '#fbb9a8', arc: '#f0623e' },
    { id: 'teal', soft: '#a6e6e1', arc: '#22b8b0' },
  ];
  const COLOR = Object.fromEntries(PALETTE.map(c => [c.id, c]));
  const colorOf = e => COLOR[e.color] || PALETTE[0];
  const REMIND_MIN = 10;
  const LUNCH = 'lunch';

  // ---------- Helpers ----------
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  const pad = n => String(n).padStart(2, '0');
  const key = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const fromKey = k => { const [y, m, d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
  const addDays = (d, n) => new Date(d.getFullYear(), d.getMonth(), d.getDate() + n);
  function dow(d) { return (d.getDay() + 6) % 7; } // Monday = 0
  const weekStart = d => addDays(d, -dow(d));
  const hm = min => `${pad(Math.floor(min / 60))}:${pad(min % 60)}`;
  const clamp = (v, a, b) => Math.max(a, Math.min(v, b));
  const uid = () => (crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random());

  const load = (k, fallback) => {
    try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fallback; } catch { return fallback; }
  };
  const SYNCED_KEYS = ['cd.events', 'cd.lunch', 'cd.timer3', 'cd.tasks', 'cd.planCfg'];
  let syncQuiet = true; // true while starting up or applying cloud data: those saves are not local edits
  const save = (k, v) => {
    try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ }
    if (!syncQuiet && SYNCED_KEYS.includes(k)) markDirty();
  };

  // ---------- State ----------
  // A project (event) lives on one date and has one or more time slots: { start, end } in minutes.
  let lang = load('cd.lang', 'en') === 'uk' ? 'uk' : 'en';
  const L = () => T[lang];

  let view = load('cd.view', 'week');
  let sel = new Date(); sel.setHours(0, 0, 0, 0);
  let miniMonth = new Date(sel.getFullYear(), sel.getMonth(), 1);
  let events = load('cd.events', []) || [];
  let lunch = { title: '', color: 'yellow', onDial: false, slots: [{ start: 720, end: 780 }], ...load('cd.lunch', {}) };
  let draft = null; // project being edited in the popover
  let H = 30; // px per hour, fitted to the viewport so the whole day is visible
  let dragging = false, dragEndedAt = 0, popClosedAt = 0;
  const justActed = () => Date.now() - dragEndedAt < 300 || Date.now() - popClosedAt < 400;

  // One-time data setup: drop the old demo events, add the work blocks for today.
  if (!load('cd.v2', false)) {
    const DEMO = ['Планування тижня', 'Тренування', 'Дизайн-сесія', 'Англійська', 'Обід з друзями', 'Огляд проєкту', 'Прогулянка'];
    events = events.filter(e => !DEMO.includes(e.title)); // a new browser starts with an empty calendar
    save('cd.v2', true);
    save('cd.v3', true);
  }
  // Older saved data: categories -> colours, single start/end -> slots.
  const toSlots = o => {
    if (!Array.isArray(o.slots) || !o.slots.length) o.slots = [{ start: o.start ?? 720, end: o.end ?? 780 }];
    delete o.start; delete o.end; delete o.loc;
  };
  events.forEach(e => {
    if (!COLOR[e.color]) e.color = { work: 'blue', lunch: 'yellow', personal: 'pink' }[e.cat] || 'blue';
    delete e.cat;
    toSlots(e);
  });
  toSlots(lunch);
  if (!load('cd.v3', false)) {
    const preset = { 'Робота-2': 'purple', 'Робота-3': 'teal' };
    events.forEach(e => { if (preset[e.title] && e.color === 'blue') e.color = preset[e.title]; });
    save('cd.v3', true);
  }
  // Earlier versions filled every new browser with three sample blocks dated that day.
  // Remove those untouched copies once (the originals were created on 2026-11-10).
  if (!load('cd.v4', false)) {
    const SAMPLE = { 'Робота-1': '540-840', 'Робота-2': '840-960', 'Робота-3': '960-1020' };
    events = events.filter(e => !(e.date !== '2026-11-10' && !e.onDial && e.slots.length === 1
      && SAMPLE[e.title] === `${e.slots[0].start}-${e.slots[0].end}`));
    save('cd.v4', true);
  }
  const saveEvents = () => save('cd.events', events);
  const saveLunch = () => save('cd.lunch', lunch);
  saveEvents();

  const lunchOn = k => ({ id: LUNCH, daily: true, date: k, ...lunch, title: lunch.title || L().lunch });
  const firstStart = e => Math.min(...e.slots.map(s => s.start));
  const LUNCH_ENABLED = false; // the automatic daily lunch block is switched off: the calendar starts empty
  const isWorkday = k => dow(fromKey(k)) < 5; // (when enabled) lunch is scheduled Monday to Friday only
  const projectsOn = (k, withLunch = true) => events.filter(e => e.date === k).concat(LUNCH_ENABLED && withLunch && isWorkday(k) ? [lunchOn(k)] : [])
    .sort((a, b) => firstStart(a) - firstStart(b));
  // One calendar block per time slot of every project of the day.
  const blocksOn = k => projectsOn(k).flatMap(e => e.slots.map((s, i) => ({ e, i, start: s.start, end: s.end })))
    .sort((a, b) => a.start - b.start);

  // ---------- Language ----------
  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = L()[n.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-ph]').forEach(n => { n.placeholder = L()[n.dataset.i18nPh]; });
    document.querySelectorAll('#lang button').forEach(b => b.classList.toggle('on', b.dataset.lang === lang));
    $('bell').title = L().bell;
    $('bell').setAttribute('aria-label', L().bell);
    $('fColor').title = L().color;
    $('fColor').setAttribute('aria-label', L().color);
  }
  document.querySelectorAll('#lang button').forEach(b => {
    b.onclick = () => {
      lang = b.dataset.lang;
      save('cd.lang', lang);
      closeEditor();
      applyLang();
      render();
      renderTimer();
      setSyncState($('cloud').dataset.state || 'off');
    };
  });

  // ---------- Sidebar: header + mini calendar ----------
  function renderHead() {
    const now = new Date();
    $('bell').classList.toggle('on', notifOn());
  }

  function renderMini() {
    $('miniTitle').textContent = `${L().months[miniMonth.getMonth()]} ${miniMonth.getFullYear()}`;
    const grid = $('miniGrid');
    grid.replaceChildren();
    const head = el('div', 'mini-row dow');
    L().daysShort.forEach(d => head.append(el('span', '', d)));
    grid.append(head);
    const todayK = key(new Date()), selK = key(sel), m = miniMonth.getMonth();
    let d = weekStart(miniMonth);
    while (d.getMonth() === m || d <= miniMonth) {
      const row = el('div', 'mini-row');
      for (let c = 0; c < 7; c++, d = addDays(d, 1)) {
        const day = d, k = key(day);
        if (day.getMonth() !== m) { row.append(el('span')); continue; } // other months stay blank
        const b = el('button', '', day.getDate());
        b.type = 'button';
        if (k === todayK) b.classList.add('today');
        if (k === selK) { b.classList.add('sel'); row.classList.add('cur'); }
        // Up to three dots: the projects of that day (the daily lunch is not counted).
        const dots = el('em', 'dots');
        projectsOn(k, false).slice(0, 3).forEach(e => { const i = el('i'); i.style.background = colorOf(e).arc; dots.append(i); });
        b.append(dots);
        b.onclick = () => select(day);
        row.append(b);
      }
      grid.append(row);
    }
  }

  function select(d, newView) {
    sel = new Date(d.getFullYear(), d.getMonth(), d.getDate());
    miniMonth = new Date(sel.getFullYear(), sel.getMonth(), 1);
    if (newView) { view = newView; save('cd.view', view); }
    closeEditor();
    render();
  }

  // ---------- Main ----------
  function renderTop() {
    $('title').textContent = `${L().months[sel.getMonth()]}, ${sel.getFullYear()}`;
    $('navDate').textContent = view === 'month' ? `${L().months[sel.getMonth()]} ${sel.getFullYear()}` : L().dayDate(sel);
    document.querySelectorAll('#seg button').forEach(b => b.classList.toggle('on', b.dataset.view === view));
  }

  function renderStrip() {
    const strip = $('strip');
    strip.dataset.view = view;
    strip.style.display = view === 'month' ? 'none' : '';
    strip.replaceChildren();
    if (view === 'month') return;
    const ico = el('div', 'ico');
    ico.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="15.5" rx="3"/><path d="M3.5 10h17M8 3v4M16 3v4"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" stroke-width="2.2"/></svg>';
    strip.append(ico);
    const w = weekStart(sel), todayK = key(new Date()), selK = key(sel);
    for (let i = 0; i < 7; i++) {
      const d = addDays(w, i), k = key(d);
      const b = el('button');
      b.type = 'button';
      b.append(el('span', 'full', L().days[i]), el('span', 'short', L().daysShort[i]), el('b', '', d.getDate()));
      if (k === selK) b.classList.add('sel');
      if (k === todayK) b.classList.add('now');
      b.onclick = () => select(d);
      strip.append(b);
    }
  }

  // Greedy column packing for overlapping blocks.
  function layout(list) {
    const out = [];
    let cluster = [], clusterEnd = -1;
    const flush = () => {
      const cols = [];
      cluster.forEach(blk => {
        let c = cols.findIndex(end => end <= blk.start);
        if (c < 0) { c = cols.length; cols.push(0); }
        cols[c] = blk.end;
        out.push({ blk, c });
      });
      out.slice(-cluster.length).forEach(o => { o.n = cols.length; });
      cluster = [];
    };
    list.forEach(blk => {
      if (cluster.length && blk.start >= clusterEnd) flush();
      cluster.push(blk);
      clusterEnd = Math.max(clusterEnd, blk.end);
    });
    if (cluster.length) flush();
    return out;
  }

  const GRID_PAD = 16; // top/bottom margin of .grid, must match styles.css
  const DAY_START = 480, DAY_END = 1440; // the calendar shows 8:00 to midnight
  const DAY_HOURS = (DAY_END - DAY_START) / 60;
  const fitHour = () => Math.max(18, ($('body').clientHeight - GRID_PAD * 2) / DAY_HOURS);
  const yOf = min => (min - DAY_START) / 60 * H;
  const blockHeight = (s, e) => Math.max((e - Math.max(s, DAY_START)) / 60 * H, 16);

  function renderGrid() {
    const body = $('body');
    H = fitHour();
    const days = view === 'day' ? [sel] : Array.from({ length: 7 }, (_, i) => addDays(weekStart(sel), i));
    const grid = el('div', 'grid');
    grid.style.setProperty('--cols', days.length);
    grid.style.setProperty('--hour', `${H}px`);
    grid.style.height = `${H * DAY_HOURS}px`;

    const hours = el('div', 'hours');
    const step = H < 20 ? 2 : 1;
    const now = new Date(), todayK = key(now);
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const showNow = nowMin >= DAY_START && days.some(d => key(d) === todayK);
    const ampm = () => 'AM'; // the scale is 12-hour without PM: 13:00 reads "1 AM"
    for (let h = DAY_START / 60; h <= DAY_END / 60; h += step) {
      if (showNow && Math.abs(h * 60 - nowMin) / 60 * H < 15) continue; // the "now" badge takes this place
      const s = el('span', '', `${h % 12 || 12} ${ampm(h)}`);
      s.style.top = `${yOf(h * 60)}px`;
      hours.append(s);
    }
    if (showNow) {
      const badge = el('span', 'nowbadge', `${now.getHours() % 12 || 12}:${pad(now.getMinutes())} ${ampm(now.getHours())}`);
      badge.style.top = `${yOf(nowMin)}px`;
      hours.append(badge);
    }
    grid.append(hours);

    days.forEach(d => {
      const k = key(d);
      const col = el('div', 'col');
      col.dataset.date = k;
      if (k === todayK) {
        col.classList.add('is-today');
        if (showNow) {
          const line = el('div', 'nowline');
          line.style.top = `${yOf(nowMin)}px`;
          col.append(line);
        }
      }
      layout(blocksOn(k).filter(blk => blk.end > DAY_START)).forEach(({ blk, c, n }) => {
        const e = blk.e;
        const b = el('button', 'ev');
        b.type = 'button';
        const h = blockHeight(blk.start, blk.end);
        b.classList.toggle('short', h < 48);
        b.classList.toggle('active', k === todayK && e.id === timer.sel);
        b.style.background = colorOf(e).soft;
        b.style.top = `${yOf(Math.max(blk.start, DAY_START))}px`;
        b.style.height = `${h}px`;
        b.style.left = `${c / n * 100}%`;
        b.style.width = `${100 / n}%`;
        b.append(el('strong', '', e.title), el('span', '', `${hm(blk.start)} - ${hm(blk.end)}`));
        b.title = `${e.title}\n${e.slots.map(s => `${hm(s.start)} – ${hm(s.end)}`).join('\n')}`;
        b.onpointerdown = ev => startDrag(ev, blk, b);
        b.onclick = ev => {
          ev.stopPropagation();
          if (justActed()) return;
          openEditor({ ...e, slots: e.slots.map(s => ({ ...s })) }, b, null, { x: ev.clientX, y: ev.clientY });
        };
        col.append(b);
      });
      col.onclick = ev => {
        if (ev.target !== col || justActed()) return;
        const start = clamp(DAY_START + Math.floor(ev.offsetY / H * 2) * 30, DAY_START, DAY_END - 60);
        openEditor({ date: k, slots: [{ start, end: start + 60 }] }, null, col, { x: ev.clientX, y: ev.clientY });
      };
      grid.append(col);
    });

    body.replaceChildren(grid);
  }

  // Drag the middle of a block to move it, its top/bottom edge to stretch it (15-min steps).
  function startDrag(ev, blk, b) {
    if (ev.button !== 0 || !pop.hidden || justActed()) return;
    const e = blk.e;
    const r = b.getBoundingClientRect();
    const y = ev.clientY - r.top, edge = Math.min(7, r.height / 4);
    const mode = y < edge ? 'top' : y > r.height - edge ? 'bottom' : 'move';
    const st = { start: blk.start, end: blk.end, date: e.date, moved: false };
    const x0 = ev.clientX, y0 = ev.clientY;
    b.setPointerCapture(ev.pointerId);

    const move = m => {
      const dy = m.clientY - y0;
      if (!st.moved) {
        if (Math.abs(dy) < 4 && Math.abs(m.clientX - x0) < 4) return;
        st.moved = true;
        dragging = true;
        b.classList.add('dragging');
        b.style.left = '0';
        b.style.width = '100%';
      }
      const dmin = Math.round(dy / H * 60 / 15) * 15;
      if (mode === 'top') st.start = clamp(blk.start + dmin, DAY_START, blk.end - 15);
      else if (mode === 'bottom') st.end = clamp(blk.end + dmin, Math.max(blk.start, DAY_START) + 15, DAY_END);
      else {
        const len = blk.end - blk.start;
        st.start = clamp(blk.start + dmin, DAY_START, DAY_END - len);
        st.end = st.start + len;
        if (!e.daily) {
          const col = document.elementsFromPoint(m.clientX, m.clientY).find(n => n.classList.contains('col'));
          if (col && col !== b.parentNode) { col.append(b); st.date = col.dataset.date; }
        }
      }
      const h = blockHeight(st.start, st.end);
      b.classList.toggle('short', h < 48);
      b.style.top = `${yOf(Math.max(st.start, DAY_START))}px`;
      b.style.height = `${h}px`;
      b.querySelector('span').textContent = `${hm(st.start)} - ${hm(st.end)}`;
    };
    const up = () => {
      b.removeEventListener('pointermove', move);
      b.removeEventListener('pointerup', up);
      b.removeEventListener('pointercancel', up);
      if (!st.moved) return;
      dragging = false;
      dragEndedAt = Date.now();
      if (e.id === LUNCH) {
        lunch.slots[blk.i] = { start: st.start, end: st.end };
        saveLunch();
      } else {
        const real = events.find(x => x.id === e.id);
        if (real) {
          real.slots[blk.i] = { start: st.start, end: st.end };
          real.date = st.date; // moving one block to another day moves the whole project
          saveEvents();
        }
      }
      render();
      renderTimer();
      checkReminders();
    };
    b.addEventListener('pointermove', move);
    b.addEventListener('pointerup', up);
    b.addEventListener('pointercancel', up);
  }

  function renderMonth() {
    const wrap = el('div', 'month');
    L().daysShort.forEach(d => wrap.append(el('div', 'dow', d)));
    const first = new Date(sel.getFullYear(), sel.getMonth(), 1);
    const todayK = key(new Date());
    let d = weekStart(first);
    for (let i = 0; i < 42; i++, d = addDays(d, 1)) {
      const day = d, k = key(day);
      const cell = el('button', 'cell');
      cell.type = 'button';
      if (day.getMonth() !== sel.getMonth()) cell.classList.add('out');
      if (k === todayK) cell.classList.add('now');
      cell.append(el('b', '', day.getDate()));
      const list = projectsOn(k, false); // the daily lunch would only add noise here
      list.slice(0, 2).forEach(e => {
        const chip = el('span', 'chip', `${hm(firstStart(e))} ${e.title}`);
        chip.style.background = colorOf(e).soft;
        cell.append(chip);
      });
      if (list.length > 2) cell.append(el('span', 'more', L().more(list.length - 2)));
      cell.onclick = () => select(day, 'day');
      wrap.append(cell);
    }
    $('body').replaceChildren(wrap);
  }

  function render() {
    renderHead();
    renderMini();
    renderTop();
    renderStrip();
    if (view === 'month') renderMonth(); else renderGrid();
  }

  function shift(dir) {
    if (view === 'month') select(new Date(sel.getFullYear(), sel.getMonth() + dir, 1));
    else select(addDays(sel, dir * (view === 'week' ? 7 : 1)));
  }

  // ---------- Project editor ----------
  const pop = $('pop');
  let ghost = null, popAt = null;
  const timeOptions = from => {
    let html = '';
    for (let m = from; m <= (from > DAY_START ? 1440 : 1425); m += 15) html += `<option value="${m}">${m === 1440 ? '24:00' : hm(m)}</option>`;
    return html;
  };
  const START_OPTS = timeOptions(DAY_START), END_OPTS = timeOptions(DAY_START + 15);

  function buildEditor() {
    PALETTE.forEach(c => {
      const b = el('button');
      b.type = 'button';
      b.dataset.color = c.id;
      b.style.background = c.soft;
      b.setAttribute('aria-label', c.id);
      b.onclick = () => { setColor(c.id); $('fColors').hidden = true; };
      $('fColors').append(b);
    });
    $('fColor').onclick = () => { $('fColors').hidden = !$('fColors').hidden; placePop(); };
    $('fAddSlot').onclick = () => {
      const last = draft.slots[draft.slots.length - 1];
      const start = clamp(last.end + 60, DAY_START, 1380);
      draft.slots.push({ start, end: Math.min(start + 60, 1440) });
      renderSlots();
      placePop();
    };
  }
  function setColor(id) {
    draft.color = id;
    $('fColor').style.background = COLOR[id].soft;
    document.querySelectorAll('#fColors button').forEach(b => b.classList.toggle('on', b.dataset.color === id));
    if (ghost) ghost.style.borderColor = COLOR[id].arc;
  }

  // One row of start/end selects per time slot of the project.
  function renderSlots() {
    $('fSlots').replaceChildren(...draft.slots.map((s, i) => {
      const row = el('div', 'slot');
      const a = el('select'), b = el('select');
      a.innerHTML = START_OPTS; b.innerHTML = END_OPTS;
      a.value = s.start; b.value = s.end;
      a.onchange = () => {
        s.start = +a.value;
        if (s.end <= s.start) { s.end = Math.min(s.start + 60, 1440); b.value = s.end; }
      };
      b.onchange = () => { s.end = +b.value; };
      row.append(a, b);
      if (draft.slots.length > 1) {
        const rm = el('button', 'rm');
        rm.type = 'button';
        rm.title = L().removeTime;
        rm.setAttribute('aria-label', L().removeTime);
        rm.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';
        rm.onclick = () => { draft.slots.splice(i, 1); renderSlots(); placePop(); };
        row.append(rm);
      }
      return row;
    }));
  }

  // Keep the popover beside the click point (right of the cursor, or left when there is no room).
  function placePop() {
    if (pop.hidden || !popAt) return;
    const pw = pop.offsetWidth, ph = pop.offsetHeight;
    let left = popAt.x + 18;
    if (left + pw > innerWidth - 12) left = popAt.x - pw - 18;
    pop.style.left = `${clamp(left, 12, Math.max(12, innerWidth - pw - 12))}px`;
    pop.style.top = `${clamp(popAt.y - 28, 12, Math.max(12, innerHeight - ph - 12))}px`;
  }

  function openEditor(data, anchor, col, pt) {
    closeEditor();
    draft = { color: PALETTE[events.length % PALETTE.length].id, title: '', onDial: false, ...data };
    const isToday = draft.date === key(new Date());
    if (draft.id && isToday && draft.id !== timer.sel) { // today's clicked project becomes the one on the dial
      timer.sel = draft.id;
      saveTimer();
      renderTimer();
      document.querySelectorAll('.ev.active').forEach(n => n.classList.remove('active'));
      document.querySelectorAll('.col.is-today .ev').forEach(n => {
        if (n.querySelector('strong').textContent === draft.title) n.classList.add('active');
      });
    }
    if (col) {
      ghost = el('div', 'ghost');
      ghost.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v8M8 12h8"/></svg>';
      ghost.style.top = `${yOf(draft.slots[0].start)}px`;
      ghost.style.height = `${(draft.slots[0].end - draft.slots[0].start) / 60 * H}px`;
      col.append(ghost);
      anchor = ghost;
    }
    const isLunch = draft.id === LUNCH;
    $('fTitle').value = draft.title;
    $('fDate').value = draft.date;
    $('fDate').hidden = isLunch;
    $('fDaily').hidden = !isLunch;
    $('fDial').checked = !!draft.onDial;
    $('fColors').hidden = true;
    setColor(draft.color);
    renderSlots();
    $('fSave').textContent = draft.id ? L().save : L().add;
    const canDelete = draft.id && !isLunch;
    $('fDup').hidden = !canDelete;
    $('fDup').title = L().dup;
    $('fDup').setAttribute('aria-label', L().dup);
    const alt = $('fAlt'), altLabel = canDelete ? L().del : L().cancel;
    alt.setAttribute('aria-label', altLabel);
    alt.title = altLabel;
    alt.innerHTML = canDelete
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';

    pop.hidden = false;
    const r = anchor.getBoundingClientRect();
    popAt = pt || { x: r.right, y: r.top };
    placePop();
    if (matchMedia('(pointer: fine)').matches) $('fTitle').focus();
  }

  function closeEditor() {
    pop.hidden = true;
    draft = null;
    if (ghost) { ghost.remove(); ghost = null; }
  }

  pop.addEventListener('submit', ev => {
    ev.preventDefault();
    if (draft.slots.some(s => s.end <= s.start)) { toast(L().badTime, L().badTimeBody); return; }
    const title = $('fTitle').value.trim(), onDial = $('fDial').checked;
    const slots = draft.slots.map(s => ({ ...s })).sort((a, b) => a.start - b.start);
    if (!title) return;
    if (draft.id === LUNCH) {
      lunch = { slots, onDial, color: draft.color, title: title === L().lunch ? '' : title };
      saveLunch();
      closeEditor();
      render();
    } else {
      const e = { id: draft.id || uid(), title, date: $('fDate').value, slots, onDial, color: draft.color, ...(draft.plan ? { plan: draft.plan } : {}) };
      if (!e.date) return;
      events = events.filter(x => x.id !== e.id).concat(e);
      saveEvents();
      if (e.date === key(new Date())) { timer.sel = e.id; saveTimer(); }
      select(fromKey(e.date));
    }
    renderTimer();
    checkReminders();
  });
  $('fAlt').onclick = () => {
    if (draft && draft.id && draft.id !== LUNCH) {
      const id = draft.id;
      events = events.filter(x => x.id !== id);
      saveEvents();
      if (timer.run && timer.run.id === id) timer.run = null;
      timer.sessions = timer.sessions.filter(s => s.id !== id);
      saveTimer();
    }
    closeEditor();
    render();
    renderTimer();
  };
  // Duplicate: a copy of the project on the same day, placed right after the original when there is room.
  $('fDup').onclick = () => {
    const src = events.find(x => x.id === draft.id);
    if (!src) return;
    const first = firstStart(src), last = Math.max(...src.slots.map(s => s.end));
    const shift = Math.min(last - first, DAY_END - last);
    const copy = { ...src, id: uid(), onDial: false, slots: src.slots.map(s => ({ start: s.start + shift, end: s.end + shift })) };
    delete copy.plan; // a copy is a manual project, the planner will not move it
    events.push(copy);
    saveEvents();
    closeEditor();
    render();
    renderTimer();
  };
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !pop.hidden) closeEditor(); });
  // A click anywhere outside the open popover only closes it (it does not start a new event).
  document.addEventListener('pointerdown', e => {
    if (pop.hidden || pop.contains(e.target)) return;
    closeEditor();
    popClosedAt = Date.now();
  }, true);

  // ---------- Notifications ----------
  let swReg = null;
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
    navigator.serviceWorker.register('sw.js').then(r => { swReg = r; }).catch(() => {});
  }
  function notifOn() { return 'Notification' in window && Notification.permission === 'granted' && load('cd.notif', false); }

  function toast(title, body) {
    const t = el('div', 'toast');
    t.append(el('b', '', title));
    if (body) t.append(document.createTextNode(body));
    $('toasts').append(t);
    setTimeout(() => t.remove(), 6000);
  }

  function push(title, body, tag) {
    toast(title, body);
    if (!notifOn()) return;
    try {
      if (swReg) swReg.showNotification(title, { body, tag });
      else new Notification(title, { body, tag });
    } catch { /* notification API unavailable in this context */ }
  }

  $('bell').onclick = async () => {
    if (!('Notification' in window)) { toast(L().notifNone, L().notifNoneBody); return; }
    if (notifOn()) {
      save('cd.notif', false);
      toast(L().notifOff);
    } else {
      const p = await Notification.requestPermission();
      if (p !== 'granted') { toast(L().notifBlocked, L().notifBlockedBody); return; }
      save('cd.notif', true);
      push(L().notifOn, L().notifOnBody(REMIND_MIN), 'cd-on');
    }
    renderHead();
  };

  function checkReminders() {
    const now = new Date(), k = key(now), nowMin = now.getHours() * 60 + now.getMinutes();
    const sent = load('cd.sent', {});
    let changed = false;
    Object.keys(sent).forEach(id => { if (sent[id] !== k) { delete sent[id]; changed = true; } });
    blocksOn(k).forEach(blk => {
      const left = blk.start - nowMin, id = `${blk.e.plan || blk.e.id}@${blk.start}`; // re-planning keeps the same reminder
      if (left < 0 || left > REMIND_MIN || sent[id]) return;
      sent[id] = k;
      changed = true;
      push(blk.e.title, `${left ? L().inMin(left) : L().startsNow} · ${hm(blk.start)} – ${hm(blk.end)}`, id);
    });
    if (changed) save('cd.sent', sent);
  }

  // ---------- Project timer (dial, today only) ----------
  // Every project of today owns one ring. Lines sit at the real clock position of the time they
  // cover: Start/Stop sessions, plus the planned slots when "Add to circle" is ticked. Several
  // slots or sessions of one project share its ring, with gaps between them.
  let timer = { day: key(new Date()), sessions: [], run: null, sel: null, mode: '12', half: null, ...load('cd.timer3', {}) };
  timer.mode = '12'; timer.half = null; // the dial is a 12-hour face showing the current half of the day
  function saveTimer() { save('cd.timer3', timer); }
  const todayProjects = () => projectsOn(key(new Date()));
  const R_OUT = 108, R_IN = 72, R_STEP = 12;
  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([a, v]) => n.setAttribute(a, v));
    parent.append(n);
    return n;
  };
  let ringLayer = null, arcLayer = null, ringCount = -1, arcMarkup = '', ticks = [];

  // Segments of a project on today's dial, in minutes from midnight.
  function segmentsOf(e) {
    const mid = fromKey(timer.day).getTime(), toMin = ts => (ts - mid) / 60000;
    const segs = e.onDial ? e.slots.map(s => ({ a: s.start, b: s.end, planned: true })) : [];
    timer.sessions.forEach(s => { if (s.id === e.id) segs.push({ a: toMin(s.a), b: toMin(s.b) }); });
    if (timer.run && timer.run.id === e.id) segs.push({ a: toMin(timer.run.t0), b: toMin(Date.now()), live: true });
    return segs;
  }
  const dialTotal = e => segmentsOf(e).reduce((sum, s) => sum + (s.b - s.a), 0) * 60000;

  function rollover() {
    const k = key(new Date());
    if (timer.day === k) return;
    timer = { ...timer, day: k, sessions: [], run: null, sel: null, half: null }; // a new day starts with a clean circle
    const quiet = syncQuiet;
    syncQuiet = true; // the daily reset is not an edit to send to the cloud
    saveTimer();
    syncQuiet = quiet;
  }

  function ensureSel() {
    const list = todayProjects();
    if (list.some(e => e.id === timer.sel)) return;
    const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
    const own = list.filter(e => e.id !== LUNCH);
    const pick = own.find(e => e.slots.some(s => s.start <= nowMin && nowMin < s.end)) || own[0] || list[0];
    timer.sel = pick ? pick.id : null;
  }

  function stopRun() {
    if (!timer.run) return;
    if (Date.now() - timer.run.t0 >= 1000) timer.sessions.push({ id: timer.run.id, a: timer.run.t0, b: Date.now() });
    timer.run = null;
  }

  // Soft three-note chime for starting and finishing work.
  let audio = null;
  function chime(notes) {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      if (audio.state === 'suspended') audio.resume();
      notes.forEach((freq, i) => {
        const t = audio.currentTime + i * 0.13;
        const osc = audio.createOscillator(), gain = audio.createGain();
        osc.type = 'sine';
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, t);
        gain.gain.exponentialRampToValueAtTime(0.16, t + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.7);
        osc.connect(gain).connect(audio.destination);
        osc.start(t);
        osc.stop(t + 0.75);
      });
    } catch { /* audio unavailable */ }
  }


  function buildDial() {
    const svg = $('dialSvg');
    ringLayer = svgEl('g', {}, svg);
    // Hour labels sit at the same distance from the outer ring on all four sides.
    const gap = 9;
    ticks = [
      svgEl('text', { class: 'tick', x: 150, y: 150 - R_OUT - gap, 'text-anchor': 'middle' }, svg),
      svgEl('text', { class: 'tick', x: 150 + R_OUT + gap, y: 154, 'text-anchor': 'start' }, svg),
      svgEl('text', { class: 'tick', x: 150, y: 150 + R_OUT + gap + 8, 'text-anchor': 'middle' }, svg),
      svgEl('text', { class: 'tick', x: 150 - R_OUT - gap, y: 154, 'text-anchor': 'end' }, svg),
    ];
    arcLayer = svgEl('g', {}, svg);

    $('dialBtn').onclick = () => {
      ensureSel();
      if (!timer.sel) return; // nothing scheduled today
      const wasRunning = timer.run && timer.run.id === timer.sel;
      stopRun();
      if (wasRunning) chime([783.99, 659.25, 523.25]);
      else {
        timer.run = { id: timer.sel, t0: Date.now() };
        chime([523.25, 659.25, 783.99]);
      }
      saveTimer();
      renderTimer();
    };
  }

  function fmt(ms) { const m = Math.floor(ms / 60000); return `${Math.floor(m / 60)}:${pad(m % 60)}`; }

  function renderTimer() {
    rollover();
    ensureSel();
    const list = todayProjects();
    if (timer.run && !list.some(e => e.id === timer.run.id)) timer.run = null;

    // The dial is one 12-hour face for the whole day: 13:00-17:00 is drawn at 1:00-5:00.
    const span = 720;
    // Counter of all hours spent today (everything drawn on the circle).
    $('dialHalf').textContent = `${L().total} ${fmt(list.reduce((sum, e) => sum + dialTotal(e), 0))}`;
    ['12:00', '3:00', '6:00', '9:00'].forEach((t, i) => { ticks[i].textContent = t; });

    const step = list.length > 1 ? Math.min(R_STEP, (R_OUT - R_IN) / (list.length - 1)) : 0;
    const radius = i => R_OUT - i * step;
    if (ringCount !== list.length) { // one ring per project of the day
      ringCount = list.length;
      ringLayer.replaceChildren();
      list.forEach((_, i) => svgEl('circle', { class: 'ring', cx: 150, cy: 150, r: radius(i) }, ringLayer));
    }

    const angle = m => (m % span) / span * 2 * Math.PI - Math.PI / 2;
    const pt = (r, a) => `${(150 + r * Math.cos(a)).toFixed(1)} ${(150 + r * Math.sin(a)).toFixed(1)}`;
    let markup = '';
    const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
    list.forEach((e, i) => {
      const r = radius(i), c = colorOf(e).arc;
      segmentsOf(e).forEach(s => {
        if (s.b < s.a || (s.b === s.a && !s.live)) return;
        const a1 = angle(s.a), a2 = a1 + Math.min((s.b - s.a) / span * 2 * Math.PI, 2 * Math.PI - 0.002);
        markup += `<path class="arc" d="M${pt(r, a1)} A${r} ${r} 0 ${a2 - a1 > Math.PI ? 1 : 0} 1 ${pt(r, a2)}" stroke="${c}" style="filter:drop-shadow(0 0 4px ${c})"/>`;
        // White dot: only on the selected project, and only until that piece of work is finished.
        if (e.id === timer.sel && (s.live || (s.planned && s.b > nowMin))) {
          markup += `<circle class="${s.live ? 'live' : ''}" cx="${pt(r, a2).replace(' ', '" cy="')}" r="3.5" fill="#fff"/>`;
        }
      });
    });
    if (markup !== arcMarkup) { arcMarkup = markup; arcLayer.innerHTML = markup; }

    const e = list.find(x => x.id === timer.sel) || { id: null, title: '—', slots: [] };
    const t = dialTotal(e), on = !!timer.run && timer.run.id === e.id;
    $('dialCat').textContent = e.title;
    $('dialTime').innerHTML = `${fmt(t)}<small>:${pad(Math.floor(t / 1000) % 60)}</small>`;
    $('dialState').textContent = on ? L().stop : L().start;
    $('dialBtn').classList.toggle('run', on);
    $('dialBtn').setAttribute('aria-label', `${on ? L().stopTimer : L().startTimer}: ${e.title}`);
  }

  // ---------- Kyiv clock ----------
  let kyivFmt;
  try { kyivFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kyiv', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); }
  catch { kyivFmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Kiev', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }); }
  const renderClock = () => { $('clock').textContent = kyivFmt.format(new Date()); };

  // ---------- Planner ----------
  // The user lists projects (hours, deadline, difficulty); the planner turns them into calendar
  // blocks inside the free working time. Rules: nearest deadline first, at most two focus blocks
  // of one project per day while the deadlines allow it, harder work earlier in the day.
  // Planner blocks are ordinary projects tagged with `plan: <task id>`. Blocks that have already
  // started stay in the calendar and count as done hours; everything later is re-planned.
  let tasks = load('cd.tasks', []) || [];
  let planCfg = { days: [1, 1, 1, 1, 1, 0, 0], from: 540, to: 1080, block: 120, gap: 15, ...load('cd.planCfg', {}) };
  let planResult = null; // outcome of the last run: { byTask: { id: { rem, late, last, nothing } }, blocks, days }
  const saveTasks = () => save('cd.tasks', tasks);
  const savePlanCfg = () => save('cd.planCfg', planCfg);
  const nowMinutes = () => { const n = new Date(); return n.getHours() * 60 + n.getMinutes(); };
  const fmtH = min => `${+(min / 60).toFixed(2)}${L().h}`;
  const validTasks = () => tasks.filter(t => t.title.trim() && t.hours > 0 && t.deadline);

  function splitPlanned() {
    const today = key(new Date()), now = nowMinutes();
    const kept = [], done = {};
    events.forEach(e => {
      if (!e.plan) { kept.push(e); return; }
      const slots = e.date > today ? [] : e.date === today ? e.slots.filter(s => s.start < now) : e.slots;
      if (!slots.length) return;
      kept.push({ ...e, slots });
      done[e.plan] = (done[e.plan] || 0) + slots.reduce((sum, s) => sum + s.end - s.start, 0);
    });
    return { kept, done };
  }

  // Free working intervals of a day: working hours minus fixed projects (with a break around them).
  function freeIntervals(k, fixed) {
    if (!planCfg.days[dow(fromKey(k))]) return [];
    let from = Math.max(planCfg.from, DAY_START);
    const to = Math.min(planCfg.to, DAY_END);
    if (k === key(new Date())) from = Math.max(from, Math.ceil((nowMinutes() + 1) / 15) * 15);
    let free = from < to ? [[from, to]] : [];
    fixed.forEach(e => {
      if (e.date !== k) return;
      e.slots.forEach(s => {
        const a = s.start - planCfg.gap, b = s.end + planCfg.gap;
        free = free.flatMap(([x, y]) => (b <= x || a >= y ? [[x, y]] : [[x, Math.min(a, y)], [Math.max(b, x), y]].filter(([p, q]) => q > p)));
      });
    });
    return free.filter(([x, y]) => y - x >= 30);
  }

  function schedule(perDayCap) {
    const { kept, done } = splitPlanned();
    const today = fromKey(key(new Date()));
    const byDeadline = (a, b) => a.t.deadline.localeCompare(b.t.deadline) || b.t.diff - a.t.diff;
    const list = validTasks().map(t => {
      const rem = Math.max(0, Math.round((t.hours * 60 - (done[t.id] || 0)) / 15) * 15);
      return { t, rem, late: 0, last: null, nothing: rem === 0 };
    }).sort(byDeadline);
    const lastDeadline = list.reduce((m, x) => (x.t.deadline > m ? x.t.deadline : m), key(today));
    const horizon = addDays(fromKey(lastDeadline), 21);
    const out = [];

    for (let d = today, n = 0; d <= horizon && n < 180 && list.some(x => x.rem > 0); d = addDays(d, 1), n++) {
      const k = key(d), free = freeIntervals(k, kept);
      let capacity = free.reduce((sum, [x, y]) => sum + y - x, 0);
      if (!capacity) continue;

      // 1. Choose today's focus blocks: nearest deadline first, limited per project.
      const count = new Map(), chunks = [];
      // Projects whose deadline has already passed must not starve the ones that can still make it.
      const open = c => c.rem > 0 && (count.get(c) || 0) < perDayCap;
      for (;;) {
        const pause = chunks.length ? planCfg.gap : 0, room = capacity - pause;
        if (room < 15) break;
        const x = list.find(c => open(c) && c.t.deadline >= k) || list.find(open);
        if (!x) break;
        let len = Math.min(planCfg.block, x.rem, room);
        const tail = x.rem - len;
        if (tail > 0 && tail < 30 && tail <= pause) len += tail; // skip the break rather than leave a 15-minute stub
        chunks.push({ x, len });
        x.rem -= len;
        capacity -= len + pause;
        count.set(x, (count.get(x) || 0) + 1);
      }
      // 2. Order them: harder work earlier in the day.
      chunks.sort((a, b) => b.x.t.diff - a.x.t.diff || byDeadline(a.x, b.x));
      // 3. Lay them into the free intervals with breaks in between.
      const slotsOf = new Map();
      let i = 0, pos = free[0][0];
      chunks.forEach(c => {
        let left = c.len;
        while (left > 0 && i < free.length) {
          let room = free[i][1] - pos;
          const lack = left - room; // a little short: start earlier and shorten the break before this block
          if (lack > 0 && lack <= planCfg.gap && pos - lack >= free[i][0]) { pos -= lack; room = left; }
          if (room < Math.min(left, 30)) { i++; if (i < free.length) pos = free[i][0]; continue; }
          const take = Math.min(left, room);
          const slots = slotsOf.get(c.x) || [];
          const prev = slots[slots.length - 1];
          if (prev && prev.end === pos) prev.end += take; else slots.push({ start: pos, end: pos + take });
          slotsOf.set(c.x, slots);
          left -= take;
          pos += take + planCfg.gap;
        }
        c.x.rem += left; // did not fit today: goes to the following days
      });
      slotsOf.forEach((slots, x) => {
        out.push({ id: uid(), title: x.t.title.trim(), date: k, color: x.t.color, onDial: false, plan: x.t.id, slots });
        if (k > x.t.deadline) x.late += slots.reduce((sum, s) => sum + s.end - s.start, 0);
        x.last = k;
      });
    }
    return { kept, out, list, score: list.reduce((sum, x) => sum + x.late + x.rem, 0) };
  }

  function runPlanner() {
    if (!validTasks().length) { toast(L().planner, L().planNone); return; }
    let r = schedule(2); // spread projects over days...
    if (r.score > 0) { const tight = schedule(Infinity); if (tight.score < r.score) r = tight; } // ...unless deadlines are tight
    events = r.kept.concat(r.out);
    saveEvents();
    planResult = {
      byTask: Object.fromEntries(r.list.map(x => [x.t.id, { rem: x.rem, late: x.late, last: x.last, nothing: x.nothing }])),
      blocks: r.out.reduce((sum, e) => sum + e.slots.length, 0),
      days: new Set(r.out.map(e => e.date)).size,
    };
    render();
    renderTimer();
    checkReminders();
    updatePlanInfo();
  }

  function clearPlan() {
    events = splitPlanned().kept;
    saveEvents();
    planResult = null;
    render();
    renderTimer();
    updatePlanInfo();
  }

  const shortDate = k => { const d = fromKey(k); return `${L().daysShort[dow(d)]}, ${L().dayDate(d).split(', ')[1]}`; };

  // Notes under each project, the summary line and the sidebar card.
  function updatePlanInfo() {
    const { kept, done } = splitPlanned();
    const list = validTasks();
    const left = t => Math.max(0, t.hours * 60 - (done[t.id] || 0));
    document.querySelectorAll('#planTasks .task-note').forEach(note => {
      const t = tasks.find(x => x.id === note.dataset.id), r = planResult && planResult.byTask[note.dataset.id];
      note.className = 'task-note';
      if (!t) { note.textContent = ''; return; }
      const progress = done[t.id] ? `${fmtH(done[t.id])} ${L().planDone} · ${fmtH(left(t))} ${L().planLeft}` : '';
      if (!r) note.textContent = progress;
      else if (r.nothing) note.textContent = L().planAllDone;
      else if (r.rem + r.late > 0) { note.textContent = L().planShort(fmtH(r.rem + r.late)); note.classList.add('bad'); }
      else { note.textContent = `${L().planFits} · ${L().planEnds} ${shortDate(r.last)}`; note.classList.add('ok'); }
    });
    const need = list.reduce((sum, t) => sum + left(t), 0);
    const lastDeadline = list.reduce((m, t) => (t.deadline > m ? t.deadline : m), '');
    let free = 0;
    if (lastDeadline) {
      for (let d = fromKey(key(new Date())), n = 0; key(d) <= lastDeadline && n < 400; d = addDays(d, 1), n++) {
        free += freeIntervals(key(d), kept).reduce((sum, [x, y]) => sum + y - x, 0);
      }
    }
    const sum = $('planSum');
    sum.replaceChildren();
    if (list.length) {
      sum.append(`${L().planNeed} `, el('b', '', fmtH(need)), ` · ${L().planFree} `, el('b', '', fmtH(free)));
      if (planResult) sum.append(el('br'), L().planMade(planResult.blocks, planResult.days));
    }
    $('planSub').textContent = list.length ? `${L().planCount(list.length)} · ${fmtH(need)}` : L().planEmpty;
  }

  function taskRow(t) {
    const row = el('div', 'task');
    const edited = () => { planResult = null; saveTasks(); updatePlanInfo(); };
    const sw = el('button', 'swatch t-sw');
    sw.type = 'button';
    sw.title = L().color;
    sw.setAttribute('aria-label', L().color);
    sw.style.background = colorOf(t).soft;
    sw.onclick = () => { // next colour of the palette
      t.color = PALETTE[(PALETTE.findIndex(c => c.id === t.color) + 1) % PALETTE.length].id;
      sw.style.background = colorOf(t).soft;
      edited();
    };
    const name = el('input', 't-name');
    name.type = 'text'; name.maxLength = 80; name.value = t.title; name.placeholder = L().titlePh;
    name.setAttribute('aria-label', L().planName);
    name.oninput = () => { t.title = name.value; edited(); };
    const hrs = el('input', 't-hrs');
    hrs.type = 'number'; hrs.min = '0.5'; hrs.max = '500'; hrs.step = '0.5'; hrs.value = t.hours;
    hrs.setAttribute('aria-label', L().planHours);
    hrs.oninput = () => { t.hours = clamp(parseFloat(hrs.value) || 0, 0, 500); edited(); };
    const dl = el('input', 't-dl');
    dl.type = 'date'; dl.value = t.deadline;
    dl.setAttribute('aria-label', L().planDeadline);
    dl.oninput = () => { t.deadline = dl.value; edited(); };
    const diff = el('div', 'seg3 t-diff');
    diff.setAttribute('role', 'group');
    diff.setAttribute('aria-label', L().planDiff);
    L().diff.forEach((label, i) => {
      const b = el('button', t.diff === i + 1 ? 'on' : '', label);
      b.type = 'button';
      b.onclick = () => { t.diff = i + 1; [...diff.children].forEach((c, j) => c.classList.toggle('on', j === i)); edited(); };
      diff.append(b);
    });
    const rm = el('button', 'rm t-rm');
    rm.type = 'button';
    rm.title = L().removeTask;
    rm.setAttribute('aria-label', L().removeTask);
    rm.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';
    rm.onclick = () => { tasks = tasks.filter(x => x !== t); planResult = null; saveTasks(); renderPlanner(); };
    const note = el('div', 'task-note');
    note.dataset.id = t.id;
    row.append(sw, name, hrs, dl, diff, rm, note);
    return row;
  }

  function renderPlanner() {
    $('planDays').replaceChildren(...L().daysShort.map((d, i) => {
      const b = el('button', planCfg.days[i] ? 'on' : '', d);
      b.type = 'button';
      b.setAttribute('aria-pressed', !!planCfg.days[i]);
      b.onclick = () => { planCfg.days[i] = planCfg.days[i] ? 0 : 1; planResult = null; savePlanCfg(); renderPlanner(); };
      return b;
    }));
    const fill = (id, values, label, value) => {
      const s = $(id);
      s.innerHTML = values.map(v => `<option value="${v}">${label(v)}</option>`).join('');
      s.value = value;
    };
    const half = (a, b) => Array.from({ length: (b - a) / 30 + 1 }, (_, i) => a + i * 30);
    fill('planFrom', half(DAY_START, DAY_END - 60), hm, planCfg.from);
    fill('planTo', half(DAY_START + 60, DAY_END), v => (v === 1440 ? '24:00' : hm(v)), planCfg.to);
    fill('planBlock', [60, 90, 120, 180, 240], fmtH, planCfg.block);
    fill('planGap', [0, 10, 15, 30], v => (v ? `${v}${L().min}` : L().noBreak), planCfg.gap);
    const list = $('planTasks');
    list.replaceChildren(...(tasks.length ? tasks.map(taskRow) : [el('p', 'plan-empty', L().planNoTasks)]));
    $('planTaskHead').hidden = !tasks.length;
    updatePlanInfo();
  }

  function buildPlanner() {
    const dlg = $('planDlg');
    $('planCard').onclick = () => { renderPlanner(); dlg.showModal(); };
    $('planClose').onclick = () => dlg.close();
    dlg.addEventListener('click', ev => { if (ev.target === dlg) dlg.close(); }); // click on the backdrop
    [['planFrom', 'from'], ['planTo', 'to'], ['planBlock', 'block'], ['planGap', 'gap']].forEach(([id, prop]) => {
      $(id).onchange = () => {
        planCfg[prop] = +$(id).value;
        if (planCfg.to <= planCfg.from) planCfg.to = Math.min(planCfg.from + 60, DAY_END);
        planResult = null;
        savePlanCfg();
        renderPlanner();
      };
    });
    $('planAdd').onclick = () => {
      tasks.push({ id: uid(), title: '', hours: 2, deadline: key(addDays(new Date(), 7)), diff: 2, color: PALETTE[tasks.length % PALETTE.length].id });
      planResult = null;
      saveTasks();
      renderPlanner();
      const names = document.querySelectorAll('#planTasks .t-name');
      names[names.length - 1].focus();
    };
    $('planRun').onclick = runPlanner;
    $('planClear').onclick = clearPlan;
    updatePlanInfo();
  }

  // ---------- Cloud sync (Firebase: Google sign-in + Firestore) ----------
  // After signing in with Google, projects, lunch and the timer live in one Firestore document
  // owned by that account (calendars/{uid}); every signed-in device listens to it in real time.
  const FB_URL = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-';
  const fbConfig = window.FIREBASE_CONFIG || null; // filled in firebase-config.js
  let fb = null, user = null, docRef = null, unsub = null;
  let pushTimer = null, pendingRemote = null, justSignedIn = false, syncError = '';
  const setLocal = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };
  try { localStorage.removeItem('cd.sync'); } catch { /* storage unavailable */ } // old GitHub access token

  function markDirty() {
    setLocal('cd.updated', Date.now());
    setLocal('cd.dirty', true);
    schedulePush();
  }
  function schedulePush() {
    if (!user) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 1200);
  }

  function setSyncState(state) {
    const b = $('cloud');
    b.dataset.state = state;
    const label = { off: L().accIsOff, ok: L().accIsOk, busy: L().accIsBusy, error: `${L().accIsError}${syncError ? ': ' + syncError : ''}` }[state];
    b.title = label;
    b.setAttribute('aria-label', label);
    $('syncStatus').textContent = label;
    // Under the app name: which account the calendar belongs to.
    $('brandSub').textContent = user ? (state === 'error' ? `${user.email} · ${L().accIsError}` : user.email) : L().syncLocal;
    $('accHelp').textContent = !fbConfig ? L().accNoConfig : user ? `${L().accAs} ${user.email}` : L().accHelp;
    $('accIn').hidden = !fbConfig || !!user;
    $('accOut').hidden = !user;
  }

  async function pushNow() {
    if (!user) return;
    setSyncState('busy');
    try {
      const stamp = load('cd.updated', 0) || Date.now();
      setLocal('cd.updated', stamp);
      await fb.setDoc(docRef, { updated: stamp, json: JSON.stringify({ v: 1, events, lunch, timer, tasks, planCfg }) });
      if (load('cd.updated', 0) === stamp) setLocal('cd.dirty', false); // nothing changed meanwhile
      syncError = '';
      setSyncState('ok');
    } catch (err) {
      syncError = err.code || err.message;
      setSyncState('error');
    }
  }

  function applyRemote(remote) {
    syncQuiet = true;
    events = Array.isArray(remote.events) ? remote.events : [];
    events.forEach(toSlots);
    lunch = { ...lunch, ...(remote.lunch || {}) };
    toSlots(lunch);
    timer = { ...timer, ...(remote.timer || {}), mode: '12', half: null };
    if (Array.isArray(remote.tasks)) tasks = remote.tasks;
    if (remote.planCfg) planCfg = { ...planCfg, ...remote.planCfg };
    planResult = null;
    saveEvents(); saveLunch(); saveTimer(); saveTasks(); savePlanCfg();
    setLocal('cd.updated', remote.updated || 0);
    setLocal('cd.dirty', false);
    syncQuiet = false;
    render();
    renderTimer();
    updatePlanInfo();
  }

  // Apply a cloud copy once the editor is closed and nothing is being dragged.
  function flushRemote() {
    if (!pendingRemote) return;
    if (!pop.hidden || dragging || $('planDlg').open) { setTimeout(flushRemote, 2000); return; }
    const d = pendingRemote;
    pendingRemote = null;
    try {
      applyRemote({ ...JSON.parse(d.json), updated: d.updated });
      syncError = '';
      setSyncState('ok');
    } catch (err) {
      syncError = err.message;
      setSyncState('error');
    }
  }

  function onRemote(snap) {
    if (snap.metadata.hasPendingWrites) return; // our own write, still on its way
    const fresh = justSignedIn;
    justSignedIn = false;
    if (!snap.exists()) { pushNow(); return; } // first device: upload what is here
    const d = snap.data();
    // Right after signing in the cloud copy wins; later, unsent local edits win (last edit wins).
    if (!fresh && load('cd.dirty', false)) { schedulePush(); return; }
    if (d.updated === load('cd.updated', 0)) { syncError = ''; setSyncState('ok'); return; }
    pendingRemote = d;
    flushRemote();
  }

  async function startSync() {
    const dlg = $('syncDlg');
    $('cloud').onclick = () => { setSyncState($('cloud').dataset.state || 'off'); dlg.showModal(); };
    $('syncClose').onclick = () => dlg.close();
    $('accIn').onclick = async () => {
      if (!fb) return;
      try {
        justSignedIn = true;
        await fb.signInWithPopup(fb.$auth, new fb.GoogleAuthProvider());
        dlg.close();
      } catch (err) {
        justSignedIn = false;
        syncError = err.code || err.message;
        setSyncState('error');
      }
    };
    $('accOut').onclick = async () => { if (fb) await fb.signOut(fb.$auth); dlg.close(); };
    setSyncState('off');
    if (!fbConfig) return;
    try {
      const [app, auth, store] = await Promise.all([import(`${FB_URL}app.js`), import(`${FB_URL}auth.js`), import(`${FB_URL}firestore.js`)]);
      const instance = app.initializeApp(fbConfig);
      fb = { ...auth, ...store, $auth: auth.getAuth(instance), $db: store.getFirestore(instance) };
      fb.onAuthStateChanged(fb.$auth, u => {
        user = u;
        if (unsub) { unsub(); unsub = null; }
        syncError = '';
        if (!u) { setSyncState('off'); return; }
        docRef = fb.doc(fb.$db, 'calendars', u.uid);
        setSyncState('busy');
        unsub = fb.onSnapshot(docRef, onRemote, err => { syncError = err.code || err.message; setSyncState('error'); });
      });
    } catch (err) {
      syncError = L().accErrLoad;
      setSyncState('error');
    }
  }

  // ---------- Wiring ----------
  document.querySelectorAll('#seg button').forEach(b => { b.onclick = () => select(sel, b.dataset.view); });
  $('prev').onclick = () => shift(-1);
  $('next').onclick = () => shift(1);
  $('today').onclick = () => select(new Date());
  $('miniPrev').onclick = () => { miniMonth = new Date(miniMonth.getFullYear(), miniMonth.getMonth() - 1, 1); renderMini(); };
  $('miniNext').onclick = () => { miniMonth = new Date(miniMonth.getFullYear(), miniMonth.getMonth() + 1, 1); renderMini(); };

  applyLang();
  buildEditor();
  buildDial();
  buildPlanner();
  ensureSel();
  render();
  renderTimer();
  renderClock();
  checkReminders();
  syncQuiet = false;
  startSync();
  setInterval(() => { renderTimer(); renderClock(); }, 1000);
  setInterval(() => {
    checkReminders();
    renderHead();
    if (view !== 'month' && pop.hidden && !dragging) renderGrid();
  }, 30000);
  // Keep the whole day fitted to the panel when the window size changes.
  new ResizeObserver(() => {
    if (view !== 'month' && !dragging && Math.abs(fitHour() - H) > 0.5) { closeEditor(); renderGrid(); }
  }).observe($('body'));
  addEventListener('resize', placePop);
})();
