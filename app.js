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
      projects: "Today's tasks", hours24: '24 hours', start: 'START', stop: 'STOP',
      startTimer: 'Start timer', stopTimer: 'Stop timer',
      lunch: 'Lunch', everyDay: 'Every day', color: 'Project color',
      titlePh: 'Project name', addToDial: 'Task done', planRecorded: 'Recorded as done:', addTime: 'Add time', removeTime: 'Remove this time',
      add: 'Add Event', save: 'Save', del: 'Delete', cancel: 'Cancel', dup: 'Duplicate', total: 'Hours',
      more: n => `${n} more`,
      badTime: 'Check the time', badTimeBody: 'The end must be later than the start.',
      notifNone: 'Notifications unavailable', notifNoneBody: 'This browser does not support system notifications.',
      notifOff: 'Notifications off', notifBlocked: 'Notifications blocked', notifBlockedBody: 'Allow notifications for this site in your browser settings.',
      notifOn: 'Notifications on', notifOnBody: m => `I will remind you ${m} min before each event.`,
      inMin: m => `In ${m} min`, startsNow: 'Starting now', bell: 'Event notifications',
      appName: 'Account',
      planner: 'Planner', planEmpty: 'Plan your projects', planCount: n => (n === 1 ? '1 project' : n + ' projects'),
      planHelp: 'Days: the planner works on the project every working day between the start and the deadline: Easy 1 h a day, Medium 2 h, Hard 3 h. Hours: a short task at an exact time.',
      planOver: 'The deadline has passed',
      planStart: 'Start', planDate: 'Date', planDur: 'Duration', planMode: 'Planning mode', modeDays: 'Days', modeHours: 'Hours',
      planLunch: 'Lunch break', planFixed: 'Scheduled', planPast: 'This time has already passed',
      planWork: 'Working time', planFrom: 'From', planTo: 'To', planBlock: 'Focus block', planGap: 'Break', noBreak: 'No break', h: 'h', min: ' min',
      planProjectsTitle: 'Projects', planName: 'Project', planHours: 'Hours', planDeadline: 'Deadline', planDiff: 'Difficulty', diff: ['Easy', 'Medium', 'Hard'],
      planAddTask: 'Add project', removeTask: 'Remove project', planClear: 'Clear plan', planRun: 'Save', planSaved: 'Plan saved',
      planStats: 'Statistics', stWorked: 'Worked', stAhead: 'Still planned', stCount: 'Projects', stAvg: 'Per working day',
      stVs: (d, m) => `${d} vs ${T.en.months[m]}`, stByDay: 'Hours by day', stMonth: 'Projects this month', stAll: 'All projects',
      stActivity: 'Activity', stWeeks: 'last 26 weeks', stEmpty: 'Nothing in the calendar for this month yet.', stNoData: 'Projects from the calendar will be collected here.',
      stDone: 'done', stPlanned: 'planned', stInPlan: 'In plan · deadline', stFinished: 'Finished', stUntil: 'Until', stOf: 'of',
      stBest: 'Busiest day', stStreak: 'Working days in a row', stWeekday: 'Strongest weekday', stLess: 'Less', stMore: 'More',
      stDaysLeft: n => (n === 0 ? 'today' : n === 1 ? '1 day left' : n + ' days left'), stDays: n => (n === 1 ? '1 day' : n + ' days'),
      planSchedule: 'Working hours', planUsual: 'Usual hours', planBreaks: 'Focus and breaks', planReset: 'Back to the usual hours',
      planNoTasks: 'No projects yet. Add the first one.', planNone: 'Add a project with a name and dates first.',
      planNeed: 'To do', planFree: 'free before the last deadline', planDone: 'done', planLeft: 'left',
      planFits: 'Fits', planEnds: 'finishes', planAllDone: 'Nothing left to plan',
      planShort: h => 'Not enough time: ' + h + ' will not fit before the deadline',
      planMade: (b, d) => 'Planned ' + b + (b === 1 ? ' block' : ' blocks') + ' over ' + d + (d === 1 ? ' day' : ' days'), syncLocal: 'This device only',
      accTitle: 'Account', accIn: 'Sign in with Google', accOut: 'Sign out', accAs: 'Signed in as', close: 'Close',
      accHelp: 'Sign in with your Google account to keep the calendar in the cloud and open it on any device.',
      accNoConfig: 'Cloud sign-in is not set up yet.', accErrLoad: 'could not load the cloud library',
      accIsOff: 'Not signed in', accIsOk: 'Synced', accIsBusy: 'Syncing…', accIsError: 'Sync failed',
      accShare: 'View access', accShareHelp: 'People with these Google emails can open your calendar by the link. They can only look.',
      accMailPh: 'name@gmail.com', accAdd: 'Add', accCopy: 'Copy link', accCopied: 'Link copied', accRemove: 'Remove access',
      accNone: 'Nobody has access yet.', accBadMail: 'Enter a full email address', accHas: 'This email is already in the list',
      accOwn: 'This is your own email', accSaved: 'Access saved', accGone: 'Access removed',
      invSending: 'Sending the invitation…', invSent: m => 'Invitation sent to ' + m, invFailed: 'Access saved, but the invitation was not sent',
      pOnline: 'Online now', pOffline: 'Offline', pNever: 'Has not opened it yet', pSeen: when => 'Last visit: ' + when,
      menuLang: 'Language', menu: 'Menu', menuNotif: 'Notifications', menuAccess: 'Add a person', on: 'On', off: 'Off',
      accInvite: 'Send the invitation', invSubject: 'Access to my work calendar',
      invBody: (link, mail, name) => `Hello!\n\nI have given you view access to my work calendar.\n\nOpen it here: ${link}\nSign in with this Google account: ${mail}\n\n${name}`,
      viewOnly: 'View only', gateTitle: 'Shared calendar', gateSignIn: 'Sign in with the Google account that was given access.',
      gateLoading: 'Opening the calendar…', gateDenied: m => 'No access for ' + m + '. Ask the owner to add this email.',
      gateError: 'Could not open the calendar. Try again later.', gateOther: 'Use another account',
    },
    uk: {
      months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
      monthsGen: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
      days: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота', 'Неділя'],
      daysShort: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Нд'],
      longDate: d => `${d.getDate()} ${T.uk.monthsGen[d.getMonth()]} ${d.getFullYear()}`,
      dayDate: d => `${T.uk.days[dow(d)]}, ${d.getDate()} ${T.uk.monthsGen[d.getMonth()]}`,
      month: 'Місяць', week: 'Тиждень', day: 'День', today: 'Сьогодні',
      projects: 'Задачі на день', hours24: '24 години', start: 'СТАРТ', stop: 'СТОП',
      startTimer: 'Запустити таймер', stopTimer: 'Зупинити таймер',
      lunch: 'Обід', everyDay: 'Щодня', color: 'Колір проєкту',
      titlePh: 'Назва проєкту', addToDial: 'Задачу виконано', planRecorded: 'Записано як виконане:', addTime: 'Додати час', removeTime: 'Прибрати цей час',
      add: 'Додати подію', save: 'Зберегти', del: 'Видалити', cancel: 'Скасувати', dup: 'Дублювати', total: 'Годин',
      more: n => `ще ${n}`,
      badTime: 'Перевірте час', badTimeBody: 'Кінець має бути пізніше за початок.',
      notifNone: 'Сповіщення недоступні', notifNoneBody: 'Цей браузер не підтримує системні сповіщення.',
      notifOff: 'Сповіщення вимкнено', notifBlocked: 'Сповіщення заблоковано', notifBlockedBody: 'Дозвольте сповіщення для цього сайту в налаштуваннях браузера.',
      notifOn: 'Сповіщення увімкнено', notifOnBody: m => `Нагадаю за ${m} хв до початку кожної події.`,
      inMin: m => `Через ${m} хв`, startsNow: 'Починається зараз', bell: 'Сповіщення про події',
      appName: 'Акаунт',
      planner: 'Планувальник', planEmpty: 'Розпланувати проєкти',
      planCount: n => n + (n % 10 === 1 && n % 100 !== 11 ? ' проєкт' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? ' проєкти' : ' проєктів'),
      planHelp: 'Дні: планувальник ставить роботу над проєктом на кожен робочий день між початком і дедлайном: Легко 1 год на день, Середньо 2, Важко 3. Години: коротке завдання на точний час.',
      planOver: 'Дедлайн уже минув',
      planStart: 'Початок', planDate: 'Дата', planDur: 'Тривалість', planMode: 'Режим планування', modeDays: 'Дні', modeHours: 'Години',
      planLunch: 'Обідня перерва', planFixed: 'Заплановано', planPast: 'Цей час уже минув',
      planWork: 'Робочий час', planFrom: 'З', planTo: 'До', planBlock: 'Блок роботи', planGap: 'Перерва', noBreak: 'Без перерви', h: ' год', min: ' хв',
      planProjectsTitle: 'Проєкти', planName: 'Проєкт', planHours: 'Години', planDeadline: 'Дедлайн', planDiff: 'Складність', diff: ['Легко', 'Середньо', 'Важко'],
      planAddTask: 'Додати проєкт', removeTask: 'Прибрати проєкт', planClear: 'Очистити план', planRun: 'Зберегти', planSaved: 'План збережено',
      planStats: 'Статистика', stWorked: 'Відпрацьовано', stAhead: 'Ще заплановано', stCount: 'Проєктів', stAvg: 'За робочий день',
      stVs: (d, m) => `${d} проти ${T.uk.monthsGen[m]}`, stByDay: 'Години по днях', stMonth: 'Проєкти за місяць', stAll: 'Усі проєкти',
      stActivity: 'Активність', stWeeks: 'останні 26 тижнів', stEmpty: 'За цей місяць у календарі ще нічого немає.', stNoData: 'Тут збиратимуться проєкти з календаря.',
      stDone: 'зроблено', stPlanned: 'заплановано', stInPlan: 'У плані · дедлайн', stFinished: 'Завершено', stUntil: 'До', stOf: 'з',
      stBest: 'Найзавантаженіший день', stStreak: 'Робочих днів поспіль', stWeekday: 'Найсильніший день тижня', stLess: 'Менше', stMore: 'Більше',
      stDaysLeft: n => (n === 0 ? 'сьогодні' : 'ще ' + T.uk.stDays(n)),
      stDays: n => n + (n % 10 === 1 && n % 100 !== 11 ? ' день' : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? ' дні' : ' днів'),
      planSchedule: 'Робочі години', planUsual: 'Звичайний графік', planBreaks: 'Блоки й перерви', planReset: 'Повернути звичайний графік',
      planNoTasks: 'Проєктів ще немає. Додайте перший.', planNone: 'Спершу додайте проєкт з назвою й датами.',
      planNeed: 'Залишилось', planFree: 'вільно до останнього дедлайну', planDone: 'зроблено', planLeft: 'залишилось',
      planFits: 'Вміщається', planEnds: 'завершення', planAllDone: 'Більше нічого планувати',
      planShort: h => 'Не вистачає часу: ' + h + ' не вміщається до дедлайну',
      planMade: (b, d) => 'Заплановано блоків: ' + b + ', днів: ' + d, syncLocal: 'Лише цей пристрій',
      accTitle: 'Акаунт', accIn: 'Увійти через Google', accOut: 'Вийти', accAs: 'Ви ввійшли як', close: 'Закрити',
      accHelp: 'Увійдіть через Google-акаунт, щоб календар зберігався в хмарі й відкривався на будь-якому пристрої.',
      accShare: 'Доступ для перегляду', accShareHelp: 'Люди з цими Google-поштами можуть відкрити ваш календар за посиланням. Лише перегляд.',
      accMailPh: 'name@gmail.com', accAdd: 'Додати', accCopy: 'Скопіювати посилання', accCopied: 'Посилання скопійовано', accRemove: 'Забрати доступ',
      accNone: 'Доступу ще ні в кого немає.', accBadMail: 'Введіть повну адресу пошти', accHas: 'Ця пошта вже є у списку',
      accOwn: 'Це ваша власна пошта', accSaved: 'Доступ збережено', accGone: 'Доступ забрано',
      invSending: 'Надсилаю запрошення…', invSent: m => 'Запрошення надіслано на ' + m, invFailed: 'Доступ збережено, але запрошення не надіслано',
      pOnline: 'Зараз онлайн', pOffline: 'Офлайн', pNever: 'Ще не відкривали', pSeen: when => 'Останній візит: ' + when,
      menuLang: 'Мова', menu: 'Меню', menuNotif: 'Сповіщення', menuAccess: 'Додати людину', on: 'Увімк.', off: 'Вимк.',
      accInvite: 'Надіслати запрошення', invSubject: 'Доступ до мого робочого календаря',
      invBody: (link, mail, name) => `Вітаю!\n\nЯ надав вам доступ на перегляд мого робочого календаря.\n\nВідкрити: ${link}\nУвійдіть через цей Google-акаунт: ${mail}\n\n${name}`,
      viewOnly: 'Лише перегляд', gateTitle: 'Спільний календар', gateSignIn: 'Увійдіть через Google-акаунт, якому надали доступ.',
      gateLoading: 'Відкриваю календар…', gateDenied: m => 'Немає доступу для ' + m + '. Попросіть власника додати цю пошту.',
      gateError: 'Не вдалося відкрити календар. Спробуйте пізніше.', gateOther: 'Інший акаунт',
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
    { id: 'neutral', soft: '#e9eaee', arc: '#9a9da4' }, // lunch, rest: drawn hatched and kept off the circle
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

  // Shared link (?u=<owner id>): the calendar of another account, for viewing only. Nothing of
  // it is kept in this browser, and nothing here is ever sent back.
  const GUEST = (() => { const u = new URLSearchParams(location.search).get('u'); return u && /^[A-Za-z0-9]{6,128}$/.test(u) ? u : null; })();
  const GUEST_KEYS = ['cd.view', 'cd.lang']; // the only things a viewer's browser remembers
  if (GUEST) document.body.classList.add('guest');

  const load = (k, fallback) => {
    if (GUEST && !GUEST_KEYS.includes(k)) return fallback;
    try { const v = JSON.parse(localStorage.getItem(k)); return v ?? fallback; } catch { return fallback; }
  };
  const SYNCED_KEYS = ['cd.events', 'cd.lunch', 'cd.timer3', 'cd.tasks', 'cd.planCfg'];
  let syncQuiet = true; // true while starting up or applying cloud data: those saves are not local edits
  const save = (k, v) => {
    if (GUEST && !GUEST_KEYS.includes(k)) return;
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
  let lunch = { on: false, title: '', color: 'yellow', onDial: false, slots: [{ start: 720, end: 780 }], ...load('cd.lunch', {}) };
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
  if (!lunch.v) { lunch.color = 'neutral'; lunch.v = 2; } // lunch is a neutral break, not a project colour
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
  // The lunch break is a per-account setting (Planner -> Working time), shown on working days only.
  const projectsOn = (k, withLunch = true) => events.filter(e => e.date === k).concat(lunch.on && withLunch && dayPlan(k).on ? [lunchOn(k)] : [])
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
    if (GUEST) document.querySelectorAll('[data-i18n="planner"]').forEach(n => { n.textContent = L().planStats; }); // a viewer gets the statistics only
  }
  document.querySelectorAll('#lang button').forEach(b => {
    b.onclick = () => {
      lang = b.dataset.lang;
      save('cd.lang', lang);
      closeEditor();
      applyLang();
      render();
      renderTimer();
      renderHead();
      updatePlanInfo();
      setSyncState($('cloud').dataset.state || 'off'); // also redraws the access list and the people
    };
  });

  // ---------- Sidebar: header + mini calendar ----------
  function renderHead() {
    const now = new Date();
    $('bell').classList.toggle('on', notifOn());
    $('bellState').textContent = notifOn() ? L().on : L().off;
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
        projectsOn(k, false).filter(e => e.color !== 'neutral').slice(0, 3).forEach(e => { const i = el('i'); i.style.background = colorOf(e).arc; dots.append(i); });
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
    ensureDialSel(key(sel));
    render();
    renderTimer();
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
  const DAY_START = 480, DAY_END = 1440; // times a project may use: 8:00 to midnight
  // The visible scale is flexible: it follows the working schedule (Planner -> Working time)
  // and stretches only as far as needed to show projects that lie outside it.
  let VS = DAY_START, VE = DAY_END;
  function viewRange(days) {
    const open = days.map(d => dayPlan(key(d))).filter(dp => dp.on); // hours set for the days on screen
    let s = open.length ? Math.min(...open.map(dp => dp.from)) : planCfg.from;
    let e = open.length ? Math.max(...open.map(dp => dp.to)) : planCfg.to;
    days.forEach(d => blocksOn(key(d)).forEach(b => {
      s = Math.min(s, Math.floor(b.start / 60) * 60);
      e = Math.max(e, Math.ceil(b.end / 60) * 60);
    }));
    VS = s;
    VE = Math.max(e, s + 60);
  }
  const fitHour = () => Math.max(18, ($('body').clientHeight - GRID_PAD * 2) / ((VE - VS) / 60));
  const yOf = min => (min - VS) / 60 * H;
  const blockHeight = (s, e) => Math.max((e - Math.max(s, VS)) / 60 * H, 16);

  // Scale labels use the 24-hour clock: 13:00 follows 12:00.
  const fmt12 = m => hm(m);
  // Fill a block or swatch with a project colour; the neutral one (lunch, rest) is hatched.
  const paint = (node, c) => { node.style.background = c.soft; node.classList.toggle('neutral', c.id === 'neutral'); };

  function renderGrid() {
    const body = $('body');
    const days = view === 'day' ? [sel] : Array.from({ length: 7 }, (_, i) => addDays(weekStart(sel), i));
    viewRange(days);
    H = fitHour();
    const grid = el('div', 'grid');
    grid.style.setProperty('--cols', days.length);
    grid.style.setProperty('--hour', `${H}px`);
    grid.style.height = `${H * (VE - VS) / 60}px`;

    const hours = el('div', 'hours');
    const step = H < 20 ? 2 : 1;
    const now = new Date(), todayK = key(now);
    const nowMin = now.getHours() * 60 + now.getMinutes();
    const showNow = nowMin >= VS && nowMin <= VE && days.some(d => key(d) === todayK);
    for (let h = VS / 60; h <= VE / 60; h += step) {
      if (showNow && Math.abs(h * 60 - nowMin) / 60 * H < 13) continue; // the "now" label takes this place
      const s = el('span', '', fmt12(h * 60));
      s.style.top = `${yOf(h * 60)}px`;
      hours.append(s);
    }
    if (showNow) {
      const label = el('span', 'nowlabel', fmt12(nowMin));
      label.style.top = `${yOf(nowMin)}px`;
      hours.append(label);
    }
    grid.append(hours);

    days.forEach(d => {
      const k = key(d);
      const col = el('div', 'col');
      col.dataset.date = k;
      if (k === todayK) col.classList.add('is-today');
      layout(blocksOn(k)).forEach(({ blk, c, n }) => {
        const e = blk.e;
        const b = el('button', 'ev');
        b.type = 'button';
        const h = blockHeight(blk.start, blk.end);
        b.classList.toggle('short', h < 48);
        b.dataset.key = trackKey(e);
        b.classList.toggle('active', k === key(sel) && trackKey(e) === dialSel(k));
        b.classList.toggle('done', !!e.onDial);
        paint(b, colorOf(e));
        b.style.top = `${yOf(Math.max(blk.start, VS))}px`;
        b.style.height = `${h}px`;
        b.style.left = `${c / n * 100}%`;
        b.style.width = `${100 / n}%`;
        // Grips: visible handles on the top and bottom edges for stretching the block.
        b.append(el('strong', '', e.title), el('span', '', `${hm(blk.start)} - ${hm(blk.end)}`), el('i', 'grip g-top'), el('i', 'grip g-bottom'));
        b.title = `${e.title}\n${e.slots.map(s => `${hm(s.start)} – ${hm(s.end)}`).join('\n')}`;
        b.onpointerdown = ev => {
          const g = ev.target.classList;
          startDrag(ev, blk, b, g.contains('grip') ? (g.contains('g-top') ? 'top' : 'bottom') : 'move');
        };
        b.onclick = ev => {
          ev.stopPropagation();
          if (justActed()) return;
          if (GUEST) { pickOnDial(e); return; }
          openEditor({ ...e, slots: e.slots.map(s => ({ ...s })) }, b, null, { x: ev.clientX, y: ev.clientY });
        };
        col.append(b);
      });
      // Short pauses between blocks are drawn as rest: the same hatching, no text or time.
      let lastEnd = null;
      blocksOn(k).forEach(blk => {
        if (lastEnd !== null && blk.start > lastEnd && blk.start - lastEnd <= 30) {
          const rest = el('div', 'rest neutral');
          rest.style.top = `${yOf(lastEnd)}px`;
          rest.style.height = `${(blk.start - lastEnd) / 60 * H}px`;
          col.append(rest);
        }
        lastEnd = lastEnd === null ? blk.end : Math.max(lastEnd, blk.end);
      });
      col.onclick = ev => {
        if (GUEST || ev.target !== col || justActed()) return;
        const start = clamp(VS + Math.floor(ev.offsetY / H * 2) * 30, VS, VE - 60);
        openEditor({ date: k, slots: [{ start, end: start + 60 }] }, null, col, { x: ev.clientX, y: ev.clientY });
      };
      grid.append(col);
    });
    if (showNow) { // current time: a dot and a thin line across the whole grid
      const line = el('div', 'nowline');
      line.style.top = `${yOf(nowMin)}px`;
      grid.append(line);
    }

    body.replaceChildren(grid);
  }

  // A planner block changed by hand becomes part of the plan: an exact-time task takes the new
  // time, a flexible project keeps this block where it is (pinned) on the next planning run.
  // `before` is the block as it was before the editor changed it: a new name or colour belongs to
  // the whole project, so the plan and the project's other blocks take it too.
  function manualEdit(e, before) {
    const t = tasks.find(x => x.id === e.plan);
    if (!t) return;
    if (before && (before.title !== e.title || before.color !== e.color)) {
      t.title = e.title; t.color = e.color;
      events.forEach(x => { if (x.plan === t.id) { x.title = e.title; x.color = e.color; } });
    }
    if (isFixed(t)) {
      const slots = e.slots.map(s => ({ ...s })).sort((a, b) => a.start - b.start);
      t.date = e.date; t.from = slots[0].start; t.to = slots[0].end;
      if (slots.length > 1) t.more = slots.slice(1); else delete t.more; // extra time ranges added in the calendar
    } else e.pin = true;
    saveTasks();
  }

  // After a block was stretched or moved, the other projects of that day make room instead of
  // standing side by side: later ones slide down, earlier ones slide up (lunch is stepped over).
  function settleDay(k, anchor) {
    const items = [];
    events.forEach(e => { if (e.date === k) e.slots.forEach(s => { if (s !== anchor) items.push({ e, s }); }); });
    const walls = lunch.on && dayPlan(k).on ? lunch.slots : [];
    const moved = new Set();
    const place = (it, start) => {
      const len = it.s.end - it.s.start;
      if (start !== it.s.start) moved.add(it.e);
      it.s.start = start; it.s.end = start + len;
    };
    // A block the anchor landed inside goes after it when most of that block lies below the anchor's start.
    const after = it => it.s.start >= anchor.start || (it.s.end > anchor.start && anchor.start - it.s.start < it.s.end - anchor.start);
    let edge = anchor.end;
    items.filter(after).sort((a, b) => a.s.start - b.s.start).forEach(it => {
      const len = it.s.end - it.s.start;
      let start = Math.max(it.s.start, edge);
      if (start !== it.s.start) walls.forEach(w => { if (start < w.end && start + len > w.start) start = w.end; });
      place(it, Math.min(start, Math.max(DAY_END - len, it.s.start))); // never past midnight
      edge = Math.max(edge, it.s.end);
    });
    edge = anchor.start;
    items.filter(it => !after(it)).sort((a, b) => b.s.end - a.s.end).forEach(it => {
      const len = it.s.end - it.s.start;
      let end = Math.min(it.s.end, edge);
      if (end !== it.s.end) walls.forEach(w => { if (end - len < w.end && end > w.start) end = w.start; });
      place(it, Math.max(end, Math.min(DAY_START + len, it.s.end)) - len); // never before the day starts
      edge = Math.min(edge, it.s.start);
    });
    moved.forEach(e => {
      e.slots.sort((a, b) => a.start - b.start);
      const t = e.plan && tasks.find(x => x.id === e.plan);
      if (t && isFixed(t)) manualEdit(e); // an exact-time task follows its block
    });
  }

  // Drag the middle of a block to move it, a grip on its top/bottom edge to stretch it (15-min steps).
  function startDrag(ev, blk, b, mode) {
    if (ev.button !== 0 || GUEST) return;
    const e = blk.e;
    const st = { start: blk.start, end: blk.end, date: e.date, moved: false };
    const x0 = ev.clientX, y0 = ev.clientY;
    b.setPointerCapture(ev.pointerId);
    if (mode !== 'move') b.classList.add(`resize-${mode}`); // shows the edge being pulled

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
      else if (mode === 'bottom') st.end = clamp(blk.end + dmin, blk.start + 15, DAY_END);
      else {
        const len = blk.end - blk.start;
        st.start = clamp(blk.start + dmin, DAY_START, DAY_END - len);
        st.end = st.start + len;
        if (!e.daily) {
          const col = document.elementsFromPoint(m.clientX, m.clientY).find(n => n.classList.contains('col'));
          if (col && col !== b.parentNode) { col.append(b); st.date = col.dataset.date; }
        }
      }
      const h = Math.max((st.end - st.start) / 60 * H, 16);
      b.classList.toggle('short', h < 48);
      b.style.top = `${yOf(st.start)}px`;
      b.style.height = `${h}px`;
      b.querySelector('span').textContent = `${hm(st.start)} - ${hm(st.end)}`;
    };
    const up = () => {
      b.removeEventListener('pointermove', move);
      b.removeEventListener('pointerup', up);
      b.removeEventListener('pointercancel', up);
      b.classList.remove('resize-top', 'resize-bottom');
      if (!st.moved) return;
      dragging = false;
      dragEndedAt = Date.now();
      if (e.id === LUNCH) {
        lunch.slots[blk.i] = { start: st.start, end: st.end };
        saveLunch();
      } else {
        const real = events.find(x => x.id === e.id);
        if (real) {
          const slot = real.slots[blk.i] = { start: st.start, end: st.end };
          real.date = st.date; // moving one block to another day moves the whole project
          settleDay(real.date, slot);
          real.slots.sort((a, b) => a.start - b.start);
          if (real.plan) manualEdit(real);
          saveEvents();
        }
      }
      planResult = null;
      render();
      renderTimer();
      updatePlanInfo();
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
        paint(chip, colorOf(e));
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
      paint(b, c);
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
    paint($('fColor'), COLOR[id]);
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
    if (draft.id && draft.id !== LUNCH) pickOnDial(draft); // the clicked project becomes the one on the dial
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
      lunch = { on: lunch.on, v: 2, slots, onDial, color: draft.color, title: title === L().lunch ? '' : title };
      saveLunch();
      closeEditor();
      render();
    } else {
      let e = { id: draft.id || uid(), title, date: $('fDate').value, slots, onDial, color: draft.color, ...(draft.plan ? { plan: draft.plan, pin: !!draft.pin } : draft.proj ? { proj: draft.proj } : {}) };
      if (!e.date) return;
      if (!e.plan) {
        // Extra hours entered as a separate block: named like an exact-time task of the plan and
        // on its day, they join that task as one more time range instead of living beside it.
        const t = tasks.find(x => isFixed(x) && x.date === e.date && x.title.trim().toLowerCase() === title.toLowerCase());
        const own = t && events.find(x => x.plan === t.id && x.id !== e.id);
        if (own) {
          events = events.filter(x => x.id !== e.id);
          own.slots.push(...e.slots);
          e = own;
        }
      }
      const before = events.find(x => x.id === e.id);
      events = events.filter(x => x.id !== e.id).concat(e);
      e.slots.slice().forEach(slot => settleDay(e.date, slot)); // neighbours make room
      e.slots.sort((a, b) => a.start - b.start);
      if (e.plan) manualEdit(e, before); // what was changed by hand goes into the plan as well
      planResult = null;
      saveEvents();
      if (e.date === key(new Date())) { timer.sel = trackKey(e); saveTimer(); } else otherSel = { day: e.date, id: trackKey(e) };
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
      // An exact-time task is this one block: deleted in the calendar, it leaves the plan as well
      // (otherwise the next Save would put it back). A flexible project keeps its other blocks.
      const t = draft.plan && tasks.find(x => x.id === draft.plan);
      if (t && isFixed(t)) { tasks = tasks.filter(x => x !== t); planResult = null; saveTasks(); updatePlanInfo(); }
      if (!draft.plan || (t && isFixed(t))) { // a flexible planner project keeps its tracked time: its other blocks may remain
        const id = draft.plan || draft.id;
        if (timer.run && timer.run.id === id) timer.run = null;
        timer.sessions = timer.sessions.filter(s => s.id !== id);
      }
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
    delete copy.plan; delete copy.pin; // a copy is a manual project, the planner will not move it
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

  // ---------- Day dial + timer ----------
  // The dial shows the day selected in the calendar as a gauge: a 270-degree arc from the first
  // working hour of that day (bottom-left) to the last one (bottom-right). Every project of the
  // day owns one ring; lines sit where the time is: blocks ticked "Task done", plus (today only)
  // the Start/Stop sessions. Tracked time belongs to the project (`plan` id for planner projects),
  // so it survives rebuilding the plan.
  let timer = { day: key(new Date()), sessions: [], run: null, sel: null, ...load('cd.timer3', {}) };
  delete timer.mode; delete timer.half;
  function saveTimer() { save('cd.timer3', timer); }
  const trackKey = e => e.plan || e.proj || e.id;
  { // sessions saved by older versions were keyed by the block id
    const toKey = id => { const e = events.find(x => x.id === id); return e ? trackKey(e) : id; };
    timer.sessions.forEach(s => { s.id = toKey(s.id); });
    if (timer.run) timer.run.id = toKey(timer.run.id);
    if (timer.sel) timer.sel = toKey(timer.sel);
  }
  let otherSel = { day: '', id: null }; // project shown in the centre when the selected day is not today
  const dialSel = k => (k === key(new Date()) ? timer.sel : otherSel.day === k ? otherSel.id : null);

  const R_OUT = 108, R_IN = 72, R_STEP = 12;
  const ARC0 = Math.PI * 0.75, ARC = Math.PI * 1.5; // screen angles, clockwise
  const arcPoint = (r, a) => `${(150 + r * Math.cos(a)).toFixed(1)} ${(150 + r * Math.sin(a)).toFixed(1)}`;
  const NS = 'http://www.w3.org/2000/svg';
  const svgEl = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([a, v]) => n.setAttribute(a, v));
    parent.append(n);
    return n;
  };
  let ringLayer = null, tickLayer = null, arcLayer = null, ringCount = -1, tickMarkup = '', arcMarkup = '';

  // Projects of a day for the dial: one entry per project (lunch and rest are not projects).
  function dialProjects(k) {
    const map = new Map();
    projectsOn(k).forEach(e => {
      if (e.color === 'neutral') return;
      const id = trackKey(e);
      const p = map.get(id) || { id, title: e.title, color: e.color, slots: [], planned: [] };
      p.slots.push(...e.slots);
      if (e.onDial) p.planned.push(...e.slots);
      map.set(id, p);
    });
    return [...map.values()];
  }

  // Segments of a project in minutes from midnight; live tracking exists for today only.
  function segmentsOf(p, isToday) {
    const segs = p.planned.map(s => ({ a: s.start, b: s.end, planned: true }));
    if (!isToday) return segs;
    const mid = fromKey(timer.day).getTime(), toMin = ts => (ts - mid) / 60000;
    timer.sessions.forEach(s => { if (s.id === p.id) segs.push({ a: toMin(s.a), b: toMin(s.b) }); });
    if (timer.run && timer.run.id === p.id) segs.push({ a: toMin(timer.run.t0), b: toMin(Date.now()), live: true });
    return segs;
  }
  const dialTotal = (p, isToday) => segmentsOf(p, isToday).reduce((sum, s) => sum + (s.b - s.a), 0) * 60000;

  function rollover() {
    const k = key(new Date());
    if (timer.day === k) return;
    timer = { ...timer, day: k, sessions: [], run: null, sel: null }; // a new day starts with a clean dial
    const quiet = syncQuiet;
    syncQuiet = true; // the daily reset is not an edit to send to the cloud
    saveTimer();
    syncQuiet = quiet;
  }

  // Which project the centre of the dial shows for day k (kept if still valid, otherwise picked).
  function ensureDialSel(k) {
    const list = dialProjects(k), cur = dialSel(k);
    if (list.some(p => p.id === cur)) return cur;
    let pick = list[0];
    if (k === key(new Date())) {
      const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
      pick = list.find(p => p.slots.some(s => s.start <= nowMin && nowMin < s.end)) || list[0];
      timer.sel = pick ? pick.id : null;
    } else otherSel = { day: k, id: pick ? pick.id : null };
    return pick ? pick.id : null;
  }

  // A clicked block becomes the project in the centre of the dial for its day.
  function pickOnDial(e) {
    if (e.color === 'neutral') return;
    const id = trackKey(e);
    if (e.date === key(new Date())) { timer.sel = id; saveTimer(); } else otherSel = { day: e.date, id };
    renderTimer();
    document.querySelectorAll('.ev.active').forEach(n => n.classList.remove('active'));
    if (e.date === key(sel)) document.querySelectorAll(`.col[data-date="${e.date}"] .ev`).forEach(n => n.classList.toggle('active', n.dataset.key === id));
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
    tickLayer = svgEl('g', {}, svg);
    arcLayer = svgEl('g', {}, svg);

    $('dialBtn').onclick = () => {
      if (GUEST) return; // a viewer only watches
      rollover();
      if (key(sel) !== timer.day) return; // the timer runs for today only
      const id = ensureDialSel(timer.day);
      if (!id) return; // nothing scheduled today
      const wasRunning = timer.run && timer.run.id === id;
      stopRun();
      if (wasRunning) chime([783.99, 659.25, 523.25]);
      else {
        timer.run = { id, t0: Date.now() };
        chime([523.25, 659.25, 783.99]);
      }
      saveTimer();
      renderTimer();
    };
  }

  function fmt(ms) { const m = Math.floor(ms / 60000); return `${Math.floor(m / 60)}:${pad(m % 60)}`; }

  function renderTimer() {
    rollover();
    const todayK = timer.day, k = key(sel), isToday = k === todayK;
    const list = dialProjects(k);
    const selId = ensureDialSel(k);
    if (timer.run && !dialProjects(todayK).some(p => p.id === timer.run.id)) timer.run = null; // its project is gone

    // Range of the gauge: the working hours set for this day, stretched to hold blocks outside them.
    const dp = dayPlan(k);
    let from = dp.on ? dp.from : planCfg.from, to = dp.on ? dp.to : planCfg.to;
    blocksOn(k).forEach(b => { from = Math.min(from, Math.floor(b.start / 60) * 60); to = Math.max(to, Math.ceil(b.end / 60) * 60); });
    const span = Math.max(to - from, 60);
    const angle = m => ARC0 + (m - from) / span * ARC;

    $('dialTitle').textContent = isToday ? L().projects : shortDate(k);
    $('dialHalf').textContent = `${L().total} ${fmt(list.reduce((sum, p) => sum + dialTotal(p, isToday), 0))}`;

    // Hour labels along the arc: whole hours only, thinned out for long days.
    const every = span <= 600 ? 60 : span <= 960 ? 120 : 180;
    let marks = '';
    for (let m = from; m <= from + span; m += every) {
      if (m !== from + span && from + span - m < every * 0.6) continue; // too close to the end label
      const a = angle(m), c = Math.cos(a), r = R_OUT + 12;
      marks += `<text class="tick" x="${(150 + r * c).toFixed(1)}" y="${(150 + r * Math.sin(a) + 4).toFixed(1)}" text-anchor="${c < -0.3 ? 'end' : c > 0.3 ? 'start' : 'middle'}">${Math.floor(m / 60)}</text>`;
    }
    if ((span % every) !== 0) { // the end of the day always gets its label
      const a = angle(from + span), c = Math.cos(a), r = R_OUT + 12;
      marks += `<text class="tick" x="${(150 + r * c).toFixed(1)}" y="${(150 + r * Math.sin(a) + 4).toFixed(1)}" text-anchor="start">${Math.floor((from + span) / 60)}</text>`;
    }
    if (marks !== tickMarkup) { tickMarkup = marks; tickLayer.innerHTML = marks; }

    const step = list.length > 1 ? Math.min(R_STEP, (R_OUT - R_IN) / (list.length - 1)) : 0;
    const radius = i => R_OUT - i * step;
    const rings = Math.max(list.length, 1); // an empty day still shows the gauge
    if (ringCount !== rings) {
      ringCount = rings;
      ringLayer.replaceChildren();
      for (let i = 0; i < rings; i++) svgEl('path', { class: 'ring', d: `M${arcPoint(radius(i), ARC0)} A${radius(i)} ${radius(i)} 0 1 1 ${arcPoint(radius(i), ARC0 + ARC)}` }, ringLayer);
    }

    let markup = '';
    const now = new Date(), nowMin = now.getHours() * 60 + now.getMinutes();
    list.forEach((p, i) => {
      const r = radius(i), c = (COLOR[p.color] || PALETTE[0]).arc;
      segmentsOf(p, isToday).forEach(s => {
        const a = clamp(s.a, from, from + span), b = clamp(s.b, from, from + span); // only the part inside the day
        if (b < a || (b === a && !s.live)) return;
        const a1 = angle(a), a2 = angle(b);
        markup += `<path class="arc" d="M${arcPoint(r, a1)} A${r} ${r} 0 ${a2 - a1 > Math.PI ? 1 : 0} 1 ${arcPoint(r, a2)}" stroke="${c}" style="filter:drop-shadow(0 0 4px ${c})"/>`;
        // White dot: only on the selected project, and only until that piece of work is finished.
        if (p.id === selId && (s.live || (s.planned && (k > todayK || (isToday && s.b > nowMin))))) {
          markup += `<circle class="${s.live ? 'live' : ''}" cx="${arcPoint(r, a2).replace(' ', '" cy="')}" r="3.5" fill="#fff"/>`;
        }
      });
    });
    if (markup !== arcMarkup) { arcMarkup = markup; arcLayer.innerHTML = markup; }

    const p = list.find(x => x.id === selId) || { id: null, title: '—', slots: [], planned: [] };
    const t = dialTotal(p, isToday), on = isToday && !!timer.run && timer.run.id === p.id;
    $('dialTime').innerHTML = `${fmt(t)}<small>:${pad(Math.floor(t / 1000) % 60)}</small>`;
    const btn = $('dialBtn'), tone = p.id ? (COLOR[p.color] || PALETTE[0]).soft : '';
    if (btn.dataset.tone !== tone) { // the button takes the colour of the selected project
      btn.dataset.tone = tone;
      btn.style.background = tone;
      btn.classList.remove('swap');
      void btn.offsetWidth; // restart the colour-change animation
      btn.classList.add('swap');
    }
    btn.title = p.id ? p.title : '';
    const icon = !isToday || GUEST ? '' : on ? 'stop' : 'play';
    if ($('dialState').dataset.icon !== icon) {
      $('dialState').dataset.icon = icon;
      $('dialState').innerHTML = icon === 'play' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>'
        : icon === 'stop' ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2.5"/></svg>' : '';
    }
    btn.classList.toggle('run', on);
    btn.classList.toggle('idle', !isToday || !!GUEST);
    $('dialBtn').setAttribute('aria-label', isToday ? `${on ? L().stopTimer : L().startTimer}: ${p.title}` : p.title);
  }

  // ---------- Clock: the local time of wherever the person is ----------
  const clockFmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
  const renderClock = () => { $('clock').textContent = clockFmt.format(new Date()); };

  // ---------- Planner ----------
  // The user lists projects; the planner turns them into calendar blocks.
  //   mode "days"  - flexible: N hours spread between a start date and a deadline, inside the
  //                  free working time. Nearest deadline first, at most two focus blocks of one
  //                  project per day while the deadlines allow it, harder work earlier in the day.
  //   mode "hours" - a short task at an exact time: one day, from-to. Flexible work goes around it.
  // Planner blocks are ordinary projects tagged with `plan: <task id>`. Blocks that have already
  // started stay in the calendar and count as done hours; everything later is re-planned.
  let tasks = load('cd.tasks', []) || [];
  let planCfg = { days: [1, 1, 1, 1, 1, 0, 0], from: 600, to: 1080, block: 120, gap: 15, ...load('cd.planCfg', {}) };
  // The default week is fixed: Monday to Friday, 10:00-18:00. Any day can get its own hours.
  planCfg.days = [1, 1, 1, 1, 1, 0, 0]; planCfg.from = 600; planCfg.to = 1080;
  if (!planCfg.byDate || typeof planCfg.byDate !== 'object') planCfg.byDate = {};
  { // exceptions for days long gone are dropped
    const old = key(addDays(new Date(), -21));
    Object.keys(planCfg.byDate).forEach(k => { if (k < old) delete planCfg.byDate[k]; });
  }
  // Working hours of a date: its own hours if they were set for that day, otherwise the usual ones.
  function usualDay(k) { return { on: !!planCfg.days[dow(fromKey(k))], from: planCfg.from, to: planCfg.to }; }
  function dayPlan(k) { return planCfg.byDate[k] || usualDay(k); }
  let planResult = null; // outcome of the last run: { byTask: { id: {...} }, blocks, days }
  const saveTasks = () => save('cd.tasks', tasks);
  const savePlanCfg = () => save('cd.planCfg', planCfg);
  const nowMinutes = () => { const n = new Date(); return n.getHours() * 60 + n.getMinutes(); };
  const fmtH = min => `${+(min / 60).toFixed(2)}${L().h}`;
  const isFixed = t => t.mode === 'hours';
  const endDate = t => (isFixed(t) ? t.date : t.deadline);
  // Time ranges of an exact-time task: from-to is the first one, further ones are kept in `more`.
  const fixedSlots = t => [{ start: t.from, end: t.to }, ...(t.more || [])].filter(s => s.end > s.start).map(s => ({ ...s })).sort((a, b) => a.start - b.start);
  const slotsTotal = slots => slots.reduce((sum, s) => sum + s.end - s.start, 0);
  const validTasks = () => tasks.filter(t => t.title.trim() && (isFixed(t) ? t.date && t.to > t.from : t.start && t.deadline));
  // Flexible projects need no hour estimate: the load follows from the difficulty,
  // as minutes of work per working day between the start date and the deadline.
  const RATE = [0, 60, 120, 180]; // easy, medium, hard
  const workdays = (fromK, toK) => {
    let n = 0;
    for (let d = fromKey(fromK), i = 0; key(d) <= toK && i < 800; d = addDays(d, 1), i++) n += dayPlan(key(d)).on ? 1 : 0;
    return n;
  };
  const autoTotal = t => workdays(t.start, t.deadline) * RATE[t.diff];
  const todayCounts = () => { const dp = dayPlan(key(new Date())); return dp.on && nowMinutes() < dp.to; }; // today's working time is not over yet
  function autoLeft(t) { // what is still ahead, from today on
    const todayK = key(new Date()), now = nowMinutes();
    let from = t.start > todayK ? t.start : todayK, doneToday = 0;
    if (from === todayK) {
      if (!todayCounts()) from = key(addDays(new Date(), 1));
      else doneToday = events.reduce((sum, e) => sum + (e.plan === t.id && e.date === todayK ? e.slots.reduce((a, x) => a + (x.start < now ? x.end - x.start : 0), 0) : 0), 0);
    }
    return Math.max(0, workdays(from, t.deadline) * RATE[t.diff] - doneToday);
  }

  // What stays in the calendar when the plan is rebuilt: manual projects, planner blocks that have
  // already started, and planner blocks the user edited by hand (pinned). `pinned` = their minutes still ahead.
  function splitPlanned(keepPinned = true) {
    const today = key(new Date()), now = nowMinutes();
    const kept = [], pinned = {};
    const total = slots => slots.reduce((sum, s) => sum + s.end - s.start, 0);
    events.forEach(e => {
      if (!e.plan || !tasks.some(t => t.id === e.plan)) { kept.push(e); return; } // not (or no longer) the planner's
      if (e.pin && keepPinned) {
        kept.push(e);
        pinned[e.plan] = (pinned[e.plan] || 0) + total(e.date > today ? e.slots : e.date === today ? e.slots.filter(s => s.start >= now) : []);
        return;
      }
      const slots = e.date > today ? [] : e.date === today ? e.slots.filter(s => s.start < now) : e.slots;
      if (slots.length) kept.push({ ...e, slots });
    });
    return { kept, pinned };
  }

  // Free working intervals of a day: working hours minus lunch and fixed projects (with a break around those).
  function freeIntervals(k, fixed) {
    const dp = dayPlan(k);
    if (!dp.on) return [];
    let from = Math.max(dp.from, DAY_START);
    const to = Math.min(dp.to, DAY_END);
    if (k === key(new Date())) from = Math.max(from, Math.ceil((nowMinutes() + 1) / 15) * 15);
    let free = from < to ? [[from, to]] : [];
    const cut = (a, b) => {
      free = free.flatMap(([x, y]) => (b <= x || a >= y ? [[x, y]] : [[x, Math.min(a, y)], [Math.max(b, x), y]].filter(([p, q]) => q > p)));
    };
    if (lunch.on) lunch.slots.forEach(s => cut(s.start, s.end));
    fixed.forEach(e => { if (e.date === k) e.slots.forEach(s => cut(s.start - planCfg.gap, s.end + planCfg.gap)); });
    return free.filter(([x, y]) => y - x >= 30);
  }

  function schedule(even) {
    const { kept, pinned } = splitPlanned();
    const today = fromKey(key(new Date())), todayK = key(today), now = nowMinutes();
    const out = [], info = {};

    // Exact-time tasks first: they are placed as given and everything else goes around them.
    // A time that has already passed is still written to the calendar, ticked as done.
    let keep = kept;
    validTasks().filter(isFixed).forEach(t => {
      const old = events.find(e => e.plan === t.id);
      keep = keep.filter(e => e.plan !== t.id); // the task itself says where its block is
      const past = t.date < todayK || (t.date === todayK && t.from < now);
      info[t.id] = { fixed: true, past };
      out.push({ id: old ? old.id : uid(), title: t.title.trim(), date: t.date, color: t.color, onDial: old ? !!old.onDial : past, plan: t.id, slots: fixedSlots(t) });
    });
    const busy = keep.concat(out);

    const byDeadline = (a, b) => a.t.deadline.localeCompare(b.t.deadline) || b.t.diff - a.t.diff;
    const list = validTasks().filter(t => !isFixed(t)).map(t => {
      const rem = Math.max(0, autoLeft(t) - (pinned[t.id] || 0)); // hand-placed blocks already cover part of it
      return { t, rem, late: 0, last: null, nothing: rem === 0, over: t.deadline < todayK, quota: 0, placed: 0 };
    }).sort(byDeadline);
    const lastDeadline = list.reduce((m, x) => (x.t.deadline > m ? x.t.deadline : m), todayK);
    const horizon = addDays(fromKey(lastDeadline), 21);

    for (let d = today, n = 0; d <= horizon && n < 180 && list.some(x => x.rem > 0); d = addDays(d, 1), n++) {
      const k = key(d), free = freeIntervals(k, busy);
      // Every working day adds the project's daily portion; what a busy day could not take is caught up later.
      if (dayPlan(k).on && (k !== todayK || todayCounts())) list.forEach(c => { if ((c.t.start || '') <= k) c.quota += RATE[c.t.diff]; });
      let capacity = free.reduce((sum, [x, y]) => sum + y - x, 0);
      if (!capacity) continue;

      // 1. Choose today's focus blocks: nearest deadline first, limited per project, not before its start date.
      //    Projects whose deadline has already passed must not starve the ones that can still make it.
      const chunks = [];
      const cap = c => (even && k <= c.t.deadline ? c.quota - c.placed : Infinity);
      const open = c => c.rem > 0 && cap(c) >= 15 && (c.t.start || '') <= k;
      for (;;) {
        const pause = chunks.length ? planCfg.gap : 0, room = capacity - pause;
        if (room < 15) break;
        const x = list.find(c => open(c) && c.t.deadline >= k) || list.find(open);
        if (!x) break;
        let len = Math.min(planCfg.block, x.rem, room, cap(x));
        const tail = x.rem - len;
        if (tail > 0 && tail < 30 && tail <= pause) len += tail; // skip the break rather than leave a 15-minute stub
        chunks.push({ x, len });
        x.rem -= len;
        capacity -= len + pause;
        x.placed += len;
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
        c.x.placed -= left;
      });
      slotsOf.forEach((slots, x) => {
        out.push({ id: uid(), title: x.t.title.trim(), date: k, color: x.t.color, onDial: false, plan: x.t.id, slots });
        if (k > x.t.deadline) x.late += slots.reduce((sum, s) => sum + s.end - s.start, 0);
        x.last = k;
      });
    }
    list.forEach(x => { info[x.t.id] = { rem: x.rem, late: x.late, last: x.last, nothing: x.nothing, over: x.over }; });
    return { kept: keep, out, info, score: list.reduce((sum, x) => sum + x.late + x.rem, 0) };
  }

  function runPlanner() {
    if (!validTasks().length) { toast(L().planner, L().planNone); return; }
    let r = schedule(true); // an even daily portion of every project...
    if (r.score > 0) { const tight = schedule(false); if (tight.score < r.score) r = tight; } // ...unless that cannot meet the deadlines
    events = r.kept.concat(r.out);
    saveEvents();
    planResult = {
      byTask: r.info,
      blocks: r.out.reduce((sum, e) => sum + e.slots.length, 0),
      days: new Set(r.out.map(e => e.date)).size,
    };
    render();
    renderTimer();
    checkReminders();
    updatePlanInfo();
    toast(L().planSaved, L().planMade(planResult.blocks, planResult.days));
    // The sheet closes when everything fits; it stays open to show what does not.
    if (!Object.values(r.info).some(x => !x.fixed && x.rem + x.late > 0)) $('planDlg').close();
    else { planTab = 'projects'; renderPlanner(); }
  }

  function clearPlan() {
    events = splitPlanned(false).kept;
    saveEvents();
    planResult = null;
    render();
    renderTimer();
    updatePlanInfo();
  }

  const shortDate = k => { const d = fromKey(k); return `${L().daysShort[dow(d)]}, ${L().dayDate(d).split(', ')[1]}`; };

  // Notes under each project, the summary line and the sidebar card.
  function updatePlanInfo() {
    tasks.forEach(normalizeTask);
    const list = validTasks();
    const todayK = key(new Date()), now = nowMinutes();
    const left = t => (isFixed(t) ? slotsTotal(fixedSlots(t).filter(s => t.date > todayK || (t.date === todayK && s.start >= now))) : autoLeft(t));
    document.querySelectorAll('#planTasks .task-note').forEach(note => {
      const t = tasks.find(x => x.id === note.dataset.id), r = planResult && planResult.byTask[note.dataset.id];
      note.className = 'task-note';
      note.textContent = '';
      if (!t) return;
      if (!r) {
        if (!isFixed(t) && t.deadline < todayK) { note.textContent = L().planOver; note.classList.add('bad'); }
      } else if (r.fixed) {
        note.textContent = `${r.past ? L().planRecorded : L().planFixed} ${shortDate(t.date)} · ${fixedSlots(t).map(s => `${hm(s.start)} – ${clock(s.end)}`).join(', ')}`;
        note.classList.add('ok');
      } else if (r.nothing) { note.textContent = r.over ? L().planOver : L().planAllDone; if (r.over) note.classList.add('bad'); }
      else if (r.rem + r.late > 0) { note.textContent = L().planShort(fmtH(r.rem + r.late)); note.classList.add('bad'); }
      else { note.textContent = `${L().planFits} · ${L().planEnds} ${shortDate(r.last)}`; note.classList.add('ok'); }
    });
    const need = list.reduce((sum, t) => sum + left(t), 0);
    $('planSub').textContent = list.length ? `${L().planCount(list.length)} · ${fmtH(need)}` : L().planEmpty;
  }

  const field = (label, control, cls) => {
    const wrap = el('label', `fld ${cls || ''}`);
    wrap.append(el('span', '', label), control);
    return wrap;
  };
  const segmented = (cls, labels, active, onPick) => {
    const seg = el('div', `seg3 ${cls}`);
    seg.setAttribute('role', 'group');
    labels.forEach((label, i) => {
      const b = el('button', i === active ? 'on' : '', label);
      b.type = 'button';
      b.onclick = () => { [...seg.children].forEach((c, j) => c.classList.toggle('on', j === i)); onPick(i); };
      seg.append(b);
    });
    return seg;
  };

  function taskRow(t) {
    const row = el('div', 'task');
    const edited = () => { planResult = null; saveTasks(); updatePlanInfo(); };
    const sw = el('button', 'swatch t-sw');
    sw.type = 'button';
    sw.title = L().color;
    sw.setAttribute('aria-label', L().color);
    paint(sw, colorOf(t));
    // The same colour row as in the project popover, opened by the swatch.
    const colors = el('div', 'colors task-colors');
    colors.hidden = true;
    PALETTE.forEach(c => {
      const b = el('button', c.id === t.color ? 'on' : '');
      b.type = 'button';
      b.setAttribute('aria-label', c.id);
      paint(b, c);
      b.onclick = () => {
        t.color = c.id;
        paint(sw, c);
        [...colors.children].forEach(x => x.classList.toggle('on', x === b));
        colors.hidden = true;
        edited();
      };
      colors.append(b);
    });
    sw.onclick = () => { colors.hidden = !colors.hidden; };
    const name = el('input', 't-name');
    name.type = 'text'; name.maxLength = 80; name.value = t.title; name.placeholder = L().titlePh;
    name.setAttribute('aria-label', L().planName);
    name.oninput = () => { t.title = name.value; edited(); };

    const fields = el('div', 'task-fields');
    const dateInput = (prop, onSet) => {
      const i = el('input');
      i.type = 'date';
      i.value = t[prop] || '';
      i.oninput = () => { t[prop] = i.value; if (onSet) onSet(); edited(); };
      return i;
    };
    const buildFields = () => {
      fields.className = `task-fields ${isFixed(t) ? 'by-hours' : 'by-days'}`;
      if (isFixed(t)) {
        // Short task at an exact time: date + from/to, the duration follows.
        // Further time ranges of the same day (added here or in the calendar) follow as extra rows.
        const dur = el('output', 'dur');
        const sync = () => { dur.textContent = fmtH(slotsTotal(fixedSlots(t))); edited(); };
        const range = (s, a, b) => { // s: an object with the two minute values named a and b
          const from = el('select'), to = el('select');
          from.innerHTML = START_OPTS; to.innerHTML = END_OPTS;
          from.value = s[a]; to.value = s[b];
          from.setAttribute('aria-label', L().planFrom);
          to.setAttribute('aria-label', L().planTo);
          from.onchange = () => { s[a] = +from.value; if (s[b] <= s[a]) { s[b] = Math.min(s[a] + 60, DAY_END); to.value = s[b]; } sync(); };
          to.onchange = () => { s[b] = +to.value; if (s[b] <= s[a]) { s[a] = Math.max(s[b] - 60, DAY_START); from.value = s[a]; } sync(); };
          return [from, to];
        };
        const [from, to] = range(t, 'from', 'to');
        const extra = (t.more || []).map(s => {
          const row = el('div', 'more-row'), rm = el('button', 'rm');
          rm.type = 'button';
          rm.title = L().removeTime;
          rm.setAttribute('aria-label', L().removeTime);
          rm.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';
          rm.onclick = () => { t.more = t.more.filter(x => x !== s); if (!t.more.length) delete t.more; buildFields(); edited(); };
          row.append(el('span'), ...range(s, 'start', 'end'), rm);
          return row;
        });
        const add = el('button', 'more-add', `+ ${L().addTime}`);
        add.type = 'button';
        add.onclick = () => {
          const last = Math.max(...fixedSlots(t).map(s => s.end)), start = clamp(last + 60, DAY_START, DAY_END - 60);
          t.more = (t.more || []).concat({ start, end: Math.min(start + 60, DAY_END) });
          buildFields();
          edited();
        };
        dur.textContent = fmtH(slotsTotal(fixedSlots(t)));
        fields.replaceChildren(field(L().planDate, dateInput('date')), field(L().planFrom, from), field(L().planTo, to), field(L().planDur, dur), ...extra, add);
      } else {
        // Flexible project: hours spread between the start date and the deadline.
        // The hours are not typed in: they follow from the dates and the difficulty.
        let start, deadline;
        const total = el('output', 'dur', fmtH(autoTotal(t)));
        const recount = () => { total.textContent = fmtH(autoTotal(t)); };
        start = dateInput('start', () => { if (t.deadline < t.start) { t.deadline = t.start; deadline.value = t.deadline; } recount(); });
        deadline = dateInput('deadline', () => { if (t.start > t.deadline) { t.start = t.deadline; start.value = t.start; } recount(); });
        const diff = segmented('', L().diff, t.diff - 1, i => { t.diff = i + 1; recount(); edited(); });
        fields.replaceChildren(field(L().planStart, start), field(L().planDeadline, deadline), field(L().planDiff, diff, 'wide'), field(L().planHours, total));
      }
    };
    const mode = segmented('t-mode', [L().modeDays, L().modeHours], isFixed(t) ? 1 : 0, i => {
      t.mode = i ? 'hours' : 'days';
      buildFields();
      edited();
    });
    mode.setAttribute('aria-label', L().planMode);

    const rm = el('button', 'rm t-rm');
    rm.type = 'button';
    rm.title = L().removeTask;
    rm.setAttribute('aria-label', L().removeTask);
    rm.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M10 11v6M14 11v6M6 7l1 12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-12M9 7V4h6v3"/></svg>';
    rm.onclick = () => {
      // Removing a project from the plan never removes anything from the calendar: its blocks
      // stay there as ordinary entries (`proj` keeps their tracked time and shared dial ring).
      events.forEach(e => { if (e.plan === t.id) { e.proj = e.plan; delete e.plan; delete e.pin; } });
      saveEvents();
      tasks = tasks.filter(x => x !== t);
      planResult = null;
      saveTasks();
      render();
      renderTimer();
      renderPlanner();
    };
    const note = el('div', 'task-note');
    note.dataset.id = t.id;
    buildFields();
    row.append(sw, name, mode, rm, colors, fields, note);
    return row;
  }

  // Older saved projects have no mode / start date / exact time yet.
  function normalizeTask(t) {
    const todayK = key(new Date());
    const nextHour = clamp(Math.ceil((nowMinutes() + 1) / 60) * 60, DAY_START, DAY_END - 60);
    if (t.mode !== 'hours') t.mode = 'days';
    if (!t.start) t.start = todayK;
    if (!t.deadline) t.deadline = key(addDays(new Date(), 7));
    if (!(t.hours > 0)) t.hours = 2;
    if (!t.diff) t.diff = 2;
    if (!t.date) t.date = todayK;
    if (!(t.from >= DAY_START)) t.from = nextHour;
    if (!(t.to > t.from)) t.to = Math.min(t.from + 60, DAY_END);
    if (t.more) {
      t.more = Array.isArray(t.more) ? t.more.filter(s => s && s.start >= DAY_START && s.end > s.start && s.end <= DAY_END) : [];
      if (!t.more.length) delete t.more;
    }
    return t;
  }

  // Planner sheet: two tabs. "Projects" lists what to plan; "Schedule" holds the working hours:
  // the week picked in the sheet day by day, the usual hours behind it, and focus/break settings.
  let planTab = 'projects', planWeek = weekStart(new Date());
  const hourly = (a, b) => Array.from({ length: (b - a) / 60 + 1 }, (_, i) => a + i * 60);
  const clock = v => (v === 1440 ? '24:00' : hm(v));
  const fillSelect = (s, values, label, value) => {
    s.innerHTML = values.map(v => `<option value="${v}">${label(v)}</option>`).join('');
    s.value = value;
  };
  // Everything that depends on the working hours: calendar scale, dial, lunch, plan notes.
  const scheduleChanged = () => { planResult = null; savePlanCfg(); render(); renderTimer(); renderPlanner(); };

  // Hours of one specific date. Setting them back to the usual hours removes the exception.
  function setDay(k, patch) {
    const next = { ...dayPlan(k), ...patch };
    if (next.to <= next.from) { if ('from' in patch) next.to = Math.min(next.from + 60, DAY_END); else next.from = Math.max(next.to - 60, DAY_START); }
    const usual = usualDay(k);
    if (next.on === usual.on && next.from === usual.from && next.to === usual.to) delete planCfg.byDate[k];
    else planCfg.byDate[k] = { on: next.on, from: next.from, to: next.to };
    scheduleChanged();
  }

  function renderPlanWeek() {
    const first = L().dayDate(planWeek).split(', ')[1], last = L().dayDate(addDays(planWeek, 6)).split(', ')[1];
    $('planWeekLabel').textContent = `${first} – ${last}`;
    const todayK = key(new Date());
    $('planWeek').replaceChildren(...Array.from({ length: 7 }, (_, i) => {
      const d = addDays(planWeek, i), k = key(d), dp = dayPlan(k), custom = !!planCfg.byDate[k];
      const row = el('div', `day-row${custom ? ' custom' : ''}${k === todayK ? ' today' : ''}`);
      const chip = el('button', `day-chip${dp.on ? ' on' : ''}`);
      chip.type = 'button';
      chip.setAttribute('aria-pressed', dp.on);
      chip.append(el('span', '', L().daysShort[i]), el('b', '', d.getDate()));
      chip.onclick = () => setDay(k, { on: !dp.on });
      const from = el('select'), to = el('select');
      from.setAttribute('aria-label', L().planFrom);
      to.setAttribute('aria-label', L().planTo);
      fillSelect(from, hourly(DAY_START, DAY_END - 60), hm, dp.from);
      fillSelect(to, hourly(DAY_START + 60, DAY_END), clock, dp.to);
      from.disabled = to.disabled = !dp.on;
      from.onchange = () => setDay(k, { from: +from.value });
      to.onchange = () => setDay(k, { to: +to.value });
      row.append(chip, from, el('span', 'dash', '–'), to);
      return row;
    }));
  }

  function renderPlanner() {
    $('planDlg').dataset.tab = planTab;
    document.querySelectorAll('#planTabs button').forEach(b => b.classList.toggle('on', b.dataset.tab === planTab));
    renderPlanWeek();
    const half = (a, b) => Array.from({ length: (b - a) / 30 + 1 }, (_, i) => a + i * 30);
    fillSelect($('planBlock'), [60, 90, 120, 180, 240], fmtH, planCfg.block);
    fillSelect($('planGap'), [0, 10, 15, 30], v => (v ? `${v}${L().min}` : L().noBreak), planCfg.gap);
    fillSelect($('planLunchFrom'), half(DAY_START, DAY_END - 30), hm, lunch.slots[0].start);
    fillSelect($('planLunchTo'), half(DAY_START + 30, DAY_END), clock, lunch.slots[0].end);
    $('planLunch').setAttribute('aria-pressed', !!lunch.on);
    $('planLunchFrom').disabled = $('planLunchTo').disabled = !lunch.on;
    tasks.forEach(normalizeTask);
    $('planTasks').replaceChildren(...(tasks.length ? tasks.map(taskRow) : [el('p', 'plan-empty', L().planNoTasks)]));
    updatePlanInfo();
    if (planTab === 'stats') renderStats();
  }

  // Blocks that got extra time ranges in the calendar before the plan learned to follow them:
  // an exact-time task still matching the first range of its block takes over the other ranges,
  // so the next Save does not drop them.
  function adoptExtraTimes() {
    let changed = false;
    tasks.forEach(t => {
      if (!isFixed(t) || t.more) return;
      const e = events.find(x => x.plan === t.id);
      if (!e || e.date !== t.date || e.slots.length < 2) return;
      const slots = e.slots.map(s => ({ ...s })).sort((a, b) => a.start - b.start);
      if (slots[0].start !== t.from || slots[0].end !== t.to) return;
      t.more = slots.slice(1);
      changed = true;
    });
    if (changed) saveTasks();
  }

  function buildPlanner() {
    const dlg = $('planDlg');
    $('planCard').onclick = () => { if (GUEST) planTab = 'stats'; planWeek = weekStart(sel); statMonth = new Date(sel.getFullYear(), sel.getMonth(), 1); adoptExtraTimes(); renderPlanner(); dlg.showModal(); };
    // Statistics: month arrows, and one tooltip shared by the chart columns, project rows and activity cells.
    const pane = $('planStats'), tip = el('div', 'st-tip');
    tip.hidden = true;
    pane.append(tip);
    pane.addEventListener('click', ev => {
      const b = ev.target.closest('[data-step]');
      if (!b) return;
      statMonth = new Date(statMonth.getFullYear(), statMonth.getMonth() + +b.dataset.step, 1);
      renderStats();
    });
    pane.addEventListener('pointerover', ev => {
      const t = ev.target.closest('[data-tip]');
      if (!t) { tip.hidden = true; return; }
      tip.innerHTML = t.dataset.tip;
      tip.hidden = false;
      const box = pane.getBoundingClientRect(), r = t.getBoundingClientRect();
      tip.style.left = `${clamp(r.left + r.width / 2 - box.left - tip.offsetWidth / 2, 0, Math.max(0, box.width - tip.offsetWidth))}px`;
      tip.style.top = `${r.top - box.top - tip.offsetHeight - 8}px`;
    });
    pane.addEventListener('pointerleave', () => { tip.hidden = true; });
    $('planClose').onclick = () => dlg.close();
    dlg.addEventListener('click', ev => { if (ev.target === dlg) dlg.close(); }); // click on the backdrop
    document.querySelectorAll('#planTabs button').forEach(b => { b.onclick = () => { planTab = b.dataset.tab; renderPlanner(); }; });
    $('planWeekPrev').onclick = () => { planWeek = addDays(planWeek, -7); renderPlanWeek(); };
    $('planWeekNext').onclick = () => { planWeek = addDays(planWeek, 7); renderPlanWeek(); };
    [['planBlock', 'block'], ['planGap', 'gap']].forEach(([id, prop]) => {
      $(id).onchange = () => { planCfg[prop] = +$(id).value; scheduleChanged(); };
    });
    // Lunch break: shown in the calendar on working days and kept free by the planner.
    const lunchChanged = () => { planResult = null; saveLunch(); render(); renderTimer(); renderPlanner(); };
    $('planLunch').onclick = () => { lunch.on = !lunch.on; lunchChanged(); };
    $('planLunchFrom').onchange = $('planLunchTo').onchange = ev => {
      let start = +$('planLunchFrom').value, end = +$('planLunchTo').value;
      if (end <= start) { if (ev.target.id === 'planLunchFrom') end = Math.min(start + 60, DAY_END); else start = Math.max(end - 60, DAY_START); }
      lunch.slots = [{ start, end }];
      lunchChanged();
    };
    $('planAdd').onclick = () => {
      // Newest first; it gets the first project colour that is not taken yet.
      const hues = PALETTE.filter(c => c.id !== 'neutral');
      const free = hues.find(c => !tasks.some(t => t.color === c.id)) || hues[tasks.length % hues.length];
      tasks.unshift(normalizeTask({ id: uid(), title: '', color: free.id }));
      planResult = null;
      planTab = 'projects';
      saveTasks();
      renderPlanner();
      $('planDlg').querySelector('.plan-body').scrollTop = 0;
      document.querySelector('#planTasks .t-name').focus();
    };
    $('planRun').onclick = runPlanner;
    $('planClear').onclick = clearPlan;
    updatePlanInfo();
  }

  // ---------- Statistics (third tab of the planner sheet) ----------
  // Everything is counted from the calendar. A block is "done" once its time has passed or it is
  // ticked "Task done"; what is still ahead is "planned". Lunch and rest (neutral) are not work.
  // Blocks are grouped into projects by name, so hand-made and planned blocks of one project add up.
  let statMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dm = k => L().dayDate(fromKey(k)).split(', ')[1]; // "Nov 13" / "13 листопада"

  function statData() {
    const todayK = key(new Date()), now = nowMinutes();
    const projects = new Map();
    events.forEach(e => {
      const title = (e.title || '').trim();
      if (e.color === 'neutral' || !title) return;
      const id = title.toLowerCase();
      let p = projects.get(id);
      if (!p) projects.set(id, p = { id, title, color: e.color, done: 0, plan: 0, first: e.date, last: e.date, days: new Map() });
      if (e.date >= p.last) { p.last = e.date; p.color = e.color; p.title = title; } // the latest block names and colours the project
      if (e.date < p.first) p.first = e.date;
      let done = 0, plan = 0;
      e.slots.forEach(s => {
        const len = s.end - s.start;
        const d = e.onDial || e.date < todayK ? len : e.date > todayK ? 0 : clamp(now - s.start, 0, len);
        done += d; plan += len - d;
      });
      p.done += done; p.plan += plan;
      const day = p.days.get(e.date) || { done: 0, plan: 0 };
      day.done += done; day.plan += plan;
      p.days.set(e.date, day);
    });
    tasks.forEach(t => { const p = projects.get(t.title.trim().toLowerCase()); if (p) { p.task = t; p.color = t.color; } });
    return [...projects.values()];
  }

  function renderStats() {
    const pane = $('planStats'), tip = pane.querySelector('.st-tip');
    const all = statData();
    const todayK = key(new Date());
    const y = statMonth.getFullYear(), m = statMonth.getMonth(), n = new Date(y, m + 1, 0).getDate();
    const pre = `${y}-${pad(m + 1)}-`;
    const unit = L().h.trim();
    const num = min => String(+(min / 60).toFixed(1)).replace('.', lang === 'uk' ? ',' : '.');
    const hrs = min => `${num(min)} ${unit}`;
    const tone = p => COLOR[p.color] || PALETTE[0];
    const sumIn = (p, test) => { let done = 0, plan = 0; p.days.forEach((v, k) => { if (test(k)) { done += v.done; plan += v.plan; } }); return { done, plan }; };
    const arrow = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="PATH"/></svg>';

    // ----- the chosen month -----
    const list = all.map(p => ({ p, ...sumIn(p, k => k.startsWith(pre)) })).filter(x => x.done + x.plan > 0)
      .sort((a, b) => b.done + b.plan - a.done - a.plan || a.p.title.localeCompare(b.p.title));
    const done = list.reduce((s, x) => s + x.done, 0), ahead = list.reduce((s, x) => s + x.plan, 0);
    const cols = Array.from({ length: n }, (_, i) => {
      const k = pre + pad(i + 1);
      const parts = list.map(x => ({ x, v: x.p.days.get(k) })).filter(q => q.v && q.v.done + q.v.plan > 0);
      return { k, i, parts, done: parts.reduce((s, q) => s + q.v.done, 0), total: parts.reduce((s, q) => s + q.v.done + q.v.plan, 0) };
    });
    const worked = cols.filter(c => c.done > 0).length;
    // Compared with the previous month over the same days, so a month in progress is not judged against a whole one.
    const pm = new Date(y, m - 1, 1), ppre = `${pm.getFullYear()}-${pad(pm.getMonth() + 1)}-`;
    const upTo = todayK.startsWith(pre) ? todayK.slice(8) : '31';
    const prev = all.reduce((s, p) => s + sumIn(p, k => k.startsWith(ppre) && k.slice(8) <= upTo).done, 0);
    const delta = done - prev;
    const vs = prev > 0 && Math.abs(delta) >= 6 ? `<em>${L().stVs(`${delta > 0 ? '▲' : '▼'} ${hrs(Math.abs(delta))}`, pm.getMonth())}</em>` : '';
    const tile = (cls, label, value, small, extra) => `<div class="st-tile ${cls}"><span>${label}</span><b>${value}${small ? `<small>${small}</small>` : ''}</b>${extra || ''}</div>`;

    let html = `<div class="st-head"><h4>${L().months[m]} ${y}</h4><div class="week-nav">
      <button type="button" data-step="-1" aria-label="${L().month} −1">${arrow.replace('PATH', 'm15 5-7 7 7 7')}</button>
      <button type="button" data-step="1" aria-label="${L().month} +1">${arrow.replace('PATH', 'm9 5 7 7-7 7')}</button></div></div>
      <div class="st-tiles">${tile('accent', L().stWorked, num(done), unit, vs)}${tile('', L().stAhead, num(ahead), unit)}${tile('', L().stCount, list.length)}${tile('', L().stAvg, worked ? num(done / worked) : '0', unit, worked ? `<em>${L().stDays(worked)}</em>` : '')}</div>`;

    if (!list.length) html += `<p class="st-empty">${L().stEmpty}</p>`;
    else {
      // Hours by day: one stacked column per day, a project keeps its colour; done is saturated, planned is pale.
      const CH = 140, top = Math.ceil(Math.max(120, ...cols.map(c => c.total)) / 120) * 120;
      const column = c => {
        const seg = (min, bg) => (min > 0 ? `<i style="height:${Math.max(4, min / top * CH).toFixed(1)}px;background-color:${bg}"></i>` : '');
        const segs = c.parts.map(q => seg(q.v.done, tone(q.x.p).arc) + seg(q.v.plan, tone(q.x.p).soft)).join('');
        const rows = c.parts.map(q => `<span><i style="background:${tone(q.x.p).arc}"></i>${esc(q.x.p.title)}<em>${hrs(q.v.done + q.v.plan)}</em></span>`).join('');
        const text = `<b>${esc(shortDate(c.k))}${c.total ? ` · ${hrs(c.total)}` : ''}</b>${rows}`;
        const cls = `${c.k === todayK ? ' now' : ''}${dayPlan(c.k).on ? '' : ' off'}${c.i === 0 || (c.i + 1) % 5 === 0 ? ' k5' : ''}`;
        return `<div class="st-col${cls}" data-tip="${esc(text)}"><div class="st-stack">${segs}</div><span>${c.i + 1}</span></div>`;
      };
      html += `<div class="st-sec"><div class="st-h"><h4>${L().stByDay}</h4><span class="st-lg"><i></i>${L().stDone}<i class="p"></i>${L().stPlanned}</span></div>
        <div class="st-chart"><div class="st-y"><span>${top / 60}</span><span>${top / 120}</span><span>0</span></div><div class="st-cols">${cols.map(column).join('')}</div></div></div>`;
    }

    // ----- all projects ever saved in the calendar -----
    if (!all.length) html += `<p class="st-empty">${L().stNoData}</p>`;
    else {
      // ----- activity: done hours of every day over the last 26 weeks, one hue from light to dark -----
      const dayDone = new Map();
      all.forEach(p => p.days.forEach((v, k) => { if (v.done > 0) dayDone.set(k, (dayDone.get(k) || 0) + v.done); }));
      const WEEKS = 26, first = addDays(weekStart(new Date()), -(WEEKS - 1) * 7);
      let peak = 0;
      for (let i = 0; i < WEEKS * 7; i++) peak = Math.max(peak, dayDone.get(key(addDays(first, i))) || 0);
      let cells = '', lastMonth = -1, lastLabel = -9;
      for (let w = 0; w < WEEKS; w++) {
        const mon = addDays(first, w * 7);
        if (mon.getMonth() !== lastMonth && w - lastLabel > 2 && w < WEEKS - 1) {
          if (lastMonth !== -1 || mon.getDate() <= 7) { cells += `<span class="st-mo" style="grid-column:${w + 2} / span 3;grid-row:1">${L().months[mon.getMonth()].slice(0, 3)}</span>`; lastLabel = w; }
        }
        lastMonth = mon.getMonth();
        for (let d = 0; d < 7; d++) {
          const k = key(addDays(mon, d)), v = dayDone.get(k) || 0;
          const level = v && peak ? Math.min(4, Math.ceil(v / peak * 4)) : 0;
          cells += `<i class="l${level}${k > todayK ? ' fut' : ''}${k === todayK ? ' now' : ''}" style="grid-column:${w + 2};grid-row:${d + 2}" data-tip="${esc(`<b>${esc(shortDate(k))}</b><span>${v ? hrs(v) : '—'}</span>`)}"></i>`;
        }
      }
      [0, 2, 4].forEach(d => { cells += `<span class="st-wd" style="grid-column:1;grid-row:${d + 2}">${L().daysShort[d]}</span>`; });

      // A few facts drawn from the same days.
      let best = null, streak = 0;
      const byDow = Array.from({ length: 7 }, () => ({ sum: 0, n: 0 }));
      dayDone.forEach((v, k) => {
        if (!best || v > best.v) best = { k, v };
        const x = byDow[dow(fromKey(k))];
        x.sum += v; x.n++;
      });
      for (let d = new Date(), i = 0; i < 400; d = addDays(d, -1), i++) {
        const k = key(d);
        if (dayDone.get(k) > 0) streak++;
        else if (i > 0 && dayPlan(k).on) break; // days off do not break the run; today may not have started yet
      }
      const top = byDow.map((x, i) => ({ i, avg: x.n ? x.sum / x.n : 0 })).sort((a, b) => b.avg - a.avg)[0];
      const fact = (label, value, note) => `<div class="st-fact"><span>${label}</span><b>${value}</b><small>${note}</small></div>`;
      html += `<div class="st-sec"><div class="st-h"><h4>${L().stActivity}</h4><small>${L().stWeeks}</small></div><div class="st-heat">${cells}</div>
        <div class="st-scale">${L().stLess}<i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i>${L().stMore}</div>
        <div class="st-facts">${fact(L().stBest, best ? esc(shortDate(best.k)) : '—', best ? hrs(best.v) : '')}${fact(L().stStreak, streak, '')}${fact(L().stWeekday, top.avg ? L().days[top.i] : '—', top.avg ? `≈ ${hrs(top.avg)}` : '')}</div></div>`;
    }

    pane.innerHTML = html;
    if (tip) { tip.hidden = true; pane.append(tip); }
  }

  // ---------- Cloud sync (Firebase: Google sign-in + Firestore) ----------
  // After signing in with Google, projects, lunch and the timer live in one Firestore document
  // owned by that account (calendars/{uid}); every signed-in device listens to it in real time.
  const FB_URL = 'https://www.gstatic.com/firebasejs/10.12.2/firebase-';
  const fbConfig = window.FIREBASE_CONFIG || null; // filled in firebase-config.js
  let fb = null, user = null, docRef = null, unsub = null;
  let pushTimer = null, pendingRemote = null, justSignedIn = false, syncError = '';
  let viewers = [], guestOwner = ''; // emails allowed to view this calendar; whose calendar a viewer looks at
  const setLocal = (k, v) => { if (GUEST) return; try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* storage unavailable */ } };
  try { localStorage.removeItem('cd.sync'); } catch { /* storage unavailable */ } // old GitHub access token

  function markDirty() {
    setLocal('cd.updated', Date.now());
    setLocal('cd.dirty', true);
    schedulePush();
  }
  function schedulePush() {
    if (!user || GUEST) return;
    clearTimeout(pushTimer);
    pushTimer = setTimeout(pushNow, 1200);
  }

  function setSyncState(state) {
    const b = $('cloud');
    b.dataset.state = state;
    const label = { off: L().accIsOff, ok: L().accIsOk, busy: L().accIsBusy, error: `${L().accIsError}${syncError ? ': ' + syncError : ''}` }[state];
    b.title = label;
    b.setAttribute('aria-label', label);
    $('syncStatus').textContent = $('menuStatus').textContent = label;
    $('menuBtn').dataset.state = state;
    $('menuBtn').title = L().menu;
    $('menuBtn').setAttribute('aria-label', L().menu);
    $('mAccess').hidden = $('mLink').hidden = !user || !!GUEST;
    $('mIn').hidden = !fbConfig || !!user;
    $('mOut').hidden = !user;
    // Under the app name: which account the calendar belongs to.
    $('brandSub').textContent = GUEST ? (guestOwner ? `${guestOwner} · ${L().viewOnly}` : L().viewOnly)
      : user ? (state === 'error' ? `${user.email} · ${L().accIsError}` : user.email) : L().syncLocal;
    $('accHelp').textContent = !fbConfig ? L().accNoConfig : user ? `${L().accAs} ${user.email}${GUEST ? ' · ' + L().viewOnly : ''}` : GUEST ? L().gateSignIn : L().accHelp;
    $('accIn').hidden = !fbConfig || !!user;
    $('accOut').hidden = !user;
    renderAccess();
  }

  // ----- People in the header menu: who was invited, when they last opened the calendar -----
  // A viewer's browser leaves a mark (calendars/{owner}/visits/{viewer}) once a minute while the
  // shared calendar is on screen; a fresh mark means the person is looking at it right now.
  const ONLINE_MS = 150000;
  let visits = new Map(), unsubVisits = null, sharedOpen = false; // email -> { id, seen }
  function beat() {
    if (!sharedOpen || !user || !GUEST || user.uid === GUEST || document.hidden) return;
    fb.setDoc(fb.doc(fb.$db, 'calendars', GUEST, 'visits', user.uid), { email: (user.email || '').toLowerCase(), seen: fb.serverTimestamp() }).catch(() => { /* access was taken away */ });
  }
  function seenText(ms) {
    const d = new Date(ms), time = `${pad(d.getHours())}:${pad(d.getMinutes())}`;
    return L().pSeen(key(d) === key(new Date()) ? time : `${shortDate(key(d))}, ${time}`);
  }
  function renderPeople() {
    const box = $('menuPeople');
    box.hidden = !user || !!GUEST || !viewers.length;
    if (box.hidden) return;
    box.replaceChildren(...viewers.map(mail => {
      const v = visits.get(mail), online = !!v && Date.now() - v.seen < ONLINE_MS;
      const row = el('div', `person${online ? ' online' : ''}`);
      const text = el('div', 'person-text');
      text.append(el('b', '', mail), el('small', '', online ? L().pOnline : v && v.seen ? seenText(v.seen) : L().pNever));
      text.title = mail;
      const rm = el('button', 'person-rm');
      rm.type = 'button';
      rm.title = L().accRemove;
      rm.setAttribute('aria-label', `${L().accRemove}: ${mail}`);
      rm.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 7h15M10 7V5.2A1.2 1.2 0 0 1 11.2 4h1.6A1.2 1.2 0 0 1 14 5.2V7M6.5 7l.8 11.2A2 2 0 0 0 9.300 20h5.400a2 2 0 0 0 2-1.800L17.500 7M10.200 11v5M13.800 11v5"/></svg>';
      rm.onclick = async () => {
        if (await setViewers(viewers.filter(x => x !== mail), L().accGone)) {
          toast(L().accGone, mail);
          if (v) fb.deleteDoc(fb.doc(fb.$db, 'calendars', user.uid, 'visits', v.id)).catch(() => { /* nothing to clean */ });
        }
      };
      const dot = el('i', 'person-dot');
      dot.title = online ? L().pOnline : L().pOffline;
      row.append(dot, text, rm);
      return row;
    }));
  }

  // ----- View access: the owner lists Google emails; those people open the calendar by a link -----
  const shareLink = () => `${location.origin}${location.pathname}?u=${user.uid}`;
  const accMsg = text => { $('accMsg').textContent = text; };
  function renderAccess() {
    renderPeople();
    $('accessCount').textContent = viewers.length || '';
    const box = $('access');
    box.hidden = !user || !!GUEST;
    if (box.hidden) return;
    $('accLink').value = shareLink();
    $('accList').replaceChildren(...(viewers.length ? viewers.map(mail => {
      const row = el('div', 'acc-row');
      const rm = el('button', 'acc-rm');
      rm.type = 'button';
      rm.title = L().accRemove;
      rm.setAttribute('aria-label', `${L().accRemove}: ${mail}`);
      rm.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m6 6 12 12M18 6 6 18"/></svg>';
      rm.onclick = () => setViewers(viewers.filter(v => v !== mail), L().accGone);
      const inv = el('button', 'acc-rm acc-inv');
      inv.type = 'button';
      inv.title = L().accInvite;
      inv.setAttribute('aria-label', `${L().accInvite}: ${mail}`);
      inv.innerHTML = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5.5" width="18" height="13" rx="3"/><path d="m4 8 8 5.5L20 8"/></svg>';
      inv.onclick = () => invite(mail);
      row.append(el('span', '', mail), inv, rm);
      return row;
    }) : [el('p', 'acc-none', L().accNone)]));
  }
  async function setViewers(list, done) {
    const before = viewers;
    viewers = list;
    renderAccess();
    try {
      await fb.setDoc(docRef, { viewers: list, owner: user.displayName || user.email }, { merge: true });
      accMsg(done);
      return true;
    } catch (err) {
      viewers = before;
      renderAccess();
      accMsg(`${L().accIsError}: ${err.code || err.message}`);
      return false;
    }
  }
  function addViewer() {
    const mail = $('accMail').value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail)) { accMsg(L().accBadMail); return; }
    if (mail === (user.email || '').toLowerCase()) { accMsg(L().accOwn); return; }
    if (viewers.includes(mail)) { accMsg(L().accHas); return; }
    $('accMail').value = '';
    if (window.INVITE_URL) setViewers([...viewers, mail], L().accSaved).then(saved => { if (saved) invite(mail); }); // access first, then the letter
    else {
      invite(mail); // opened right in the click, so the browser does not block the new tab
      setViewers([...viewers, mail], L().accSaved);
    }
  }
  // The invitation is a ready letter in the owner's Gmail (the account they are signed in with):
  // recipient, subject and text are filled in, one press on Send is left.
  // With the sending script set up (INVITE_URL) the letter goes out by itself.
  async function invite(mail) {
    const url = window.INVITE_URL;
    if (url) {
      accMsg(L().invSending);
      try {
        const res = await fetch(url, { method: 'POST', body: JSON.stringify({ token: await user.getIdToken(), to: mail, lang }) });
        const out = await res.json();
        if (!out.ok) throw new Error(out.error);
        accMsg(L().invSent(mail));
      } catch (err) { accMsg(`${L().invFailed}${err && err.message ? ': ' + err.message : ''}`); }
      return;
    }
    const q = new URLSearchParams({ view: 'cm', fs: '1', authuser: user.email, to: mail, su: L().invSubject, body: L().invBody(shareLink(), mail, user.displayName || user.email) });
    window.open(`https://mail.google.com/mail/?${q}`, '_blank', 'noopener');
  }

  // ----- Viewer side: the screen shown until the shared calendar may be opened -----
  function gate(state) {
    const g = $('gate');
    g.hidden = state === 'ok';
    if (g.hidden) return;
    $('gateTitle').textContent = L().gateTitle;
    $('gateText').textContent = { signin: L().gateSignIn, loading: L().gateLoading, denied: L().gateDenied(user ? user.email : ''), error: L().gateError }[state];
    $('gateIn').textContent = L().accIn;
    $('gateOut').textContent = L().gateOther;
    $('gateIn').hidden = state !== 'signin';
    $('gateOut').hidden = state !== 'denied';
  }
  function onShared(snap) {
    if (!snap.exists()) { gate('denied'); return; }
    try {
      const d = snap.data();
      guestOwner = d.owner || '';
      applyRemote({ ...JSON.parse(d.json), updated: d.updated });
      if ($('planDlg').open) renderPlanner();
      syncError = '';
      setSyncState('ok');
      gate('ok');
      if (!sharedOpen) { sharedOpen = true; beat(); } // the first mark of this visit
    } catch (err) { gate('error'); }
  }

  async function pushNow() {
    if (!user || GUEST) return;
    setSyncState('busy');
    try {
      const stamp = load('cd.updated', 0) || Date.now();
      setLocal('cd.updated', stamp);
      await fb.setDoc(docRef, { updated: stamp, json: JSON.stringify({ v: 1, events, lunch, timer, tasks, planCfg }) }, { merge: true }); // merge keeps the access list
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
    if (!lunch.v) { lunch.color = 'neutral'; lunch.v = 2; }
    timer = { ...timer, ...(remote.timer || {}), mode: '12', half: null };
    if (Array.isArray(remote.tasks)) tasks = remote.tasks;
    if (remote.planCfg) planCfg = { ...planCfg, ...remote.planCfg };
    if (!planCfg.byDate || typeof planCfg.byDate !== 'object') planCfg.byDate = {};
    planCfg.days = [1, 1, 1, 1, 1, 0, 0]; planCfg.from = 600; planCfg.to = 1080; // the fixed default week
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
    if (snap.exists()) { const list = snap.data().viewers; viewers = Array.isArray(list) ? list : []; renderAccess(); }
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
    // Menu under the arrow in the header: notifications, access, sign in / out.
    const menu = $('accMenu'), menuBtn = $('menuBtn');
    const showMenu = on => { menu.hidden = !on; menuBtn.setAttribute('aria-expanded', on); };
    menuBtn.onclick = () => showMenu(menu.hidden);
    document.addEventListener('pointerdown', ev => { if (!menu.hidden && !menu.contains(ev.target) && !menuBtn.contains(ev.target)) showMenu(false); });
    document.addEventListener('keydown', ev => { if (ev.key === 'Escape') showMenu(false); });
    menu.addEventListener('click', ev => { const b = ev.target.closest('.mi'); if (b && b.id !== 'bell') showMenu(false); });
    $('mAccess').onclick = () => { setSyncState($('cloud').dataset.state || 'off'); dlg.showModal(); $('accMail').focus(); };
    $('mLink').onclick = async () => {
      try { await navigator.clipboard.writeText(shareLink()); toast(L().accCopied); } catch { setSyncState($('cloud').dataset.state || 'off'); dlg.showModal(); $('accLink').focus(); }
    };
    $('syncClose').onclick = () => dlg.close();
    $('accIn').onclick = $('gateIn').onclick = $('mIn').onclick = async () => {
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
    $('accOut').onclick = $('gateOut').onclick = $('mOut').onclick = async () => { if (fb) await fb.signOut(fb.$auth); dlg.close(); };
    $('accAdd').onclick = addViewer;
    $('accMail').onkeydown = ev => { if (ev.key === 'Enter') { ev.preventDefault(); addViewer(); } };
    $('accMail').oninput = () => accMsg('');
    $('accLink').onfocus = () => $('accLink').select();
    $('accCopy').onclick = async () => {
      try { await navigator.clipboard.writeText(shareLink()); } catch { $('accLink').select(); document.execCommand('copy'); }
      accMsg(L().accCopied);
    };
    setSyncState('off');
    if (GUEST) {
      gate(fbConfig ? 'loading' : 'error');
      setInterval(beat, 60000);
      document.addEventListener('visibilitychange', beat);
    }
    if (!fbConfig) return;
    try {
      const [app, auth, store] = await Promise.all([import(`${FB_URL}app.js`), import(`${FB_URL}auth.js`), import(`${FB_URL}firestore.js`)]);
      const instance = app.initializeApp(fbConfig);
      fb = { ...auth, ...store, $auth: auth.getAuth(instance), $db: store.getFirestore(instance) };
      fb.onAuthStateChanged(fb.$auth, u => {
        user = u;
        if (unsub) { unsub(); unsub = null; }
        syncError = '';
        if (unsubVisits) { unsubVisits(); unsubVisits = null; }
        visits = new Map();
        sharedOpen = false;
        viewers = [];
        accMsg('');
        if (GUEST) { // someone else's calendar: read it, never write
          setSyncState(u ? 'busy' : 'off');
          gate(u ? 'loading' : 'signin');
          if (u) unsub = fb.onSnapshot(fb.doc(fb.$db, 'calendars', GUEST), onShared, err => gate(err.code === 'permission-denied' ? 'denied' : 'error'));
          return;
        }
        if (!u) { setSyncState('off'); return; }
        docRef = fb.doc(fb.$db, 'calendars', u.uid);
        unsubVisits = fb.onSnapshot(fb.collection(fb.$db, 'calendars', u.uid, 'visits'), snap => {
          visits = new Map();
          snap.forEach(d => { const v = d.data(); if (v.email) visits.set(v.email, { id: d.id, seen: v.seen && v.seen.toMillis ? v.seen.toMillis() : 0 }); });
          renderPeople();
        }, () => { /* visit marks are optional: the calendar works without them */ });
        setSyncState('busy');
        unsub = fb.onSnapshot(docRef, onRemote, err => { syncError = err.code || err.message; setSyncState('error'); });
      });
    } catch (err) {
      syncError = L().accErrLoad;
      setSyncState('error');
      if (GUEST) gate('error');
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
  ensureDialSel(key(sel));
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
    renderPeople(); // online marks go stale by themselves
    if (view !== 'month' && pop.hidden && !dragging) renderGrid();
  }, 30000);
  // Keep the whole day fitted to the panel when the window size changes.
  new ResizeObserver(() => {
    if (view !== 'month' && !dragging && Math.abs(fitHour() - H) > 0.5) { closeEditor(); renderGrid(); }
  }).observe($('body'));
  addEventListener('resize', placePop);
})();
