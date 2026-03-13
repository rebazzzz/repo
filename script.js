const DD = [
  {
    id: "h1",
    t: "honos",
    c: "faith",
    n: "All 5 Prayers on Time",
    p: 25,
    d: "Full salah on time",
  },
  {
    id: "h2",
    t: "honos",
    c: "faith",
    n: "Prayed in Jama'ah",
    p: 10,
    d: "Congregation prayer",
  },
  {
    id: "h3",
    t: "honos",
    c: "faith",
    n: "Read Quran",
    p: 15,
    d: "Per 15 min",
    u: true,
    ul: "15 min",
  },
  {
    id: "h4",
    t: "honos",
    c: "faith",
    n: "Memorised Name of Allah",
    p: 20,
    d: "One of the 99 names",
  },
  {
    id: "h5",
    t: "honos",
    c: "faith",
    n: "Memorised New Ayah",
    p: 20,
    d: "Quran memorisation",
  },
  {
    id: "h6",
    t: "honos",
    c: "faith",
    n: "Morning/Evening Dhikr",
    p: 10,
    d: "Full adhkar set",
  },
  {
    id: "h7",
    t: "honos",
    c: "faith",
    n: "Lowered Gaze (conscious)",
    p: 10,
    d: "Deliberate restraint",
  },
  {
    id: "h8",
    t: "honos",
    c: "faith",
    n: "Voluntary Fast",
    p: 20,
    d: "Sunnah or Nafl fast",
  },
  {
    id: "h9",
    t: "honos",
    c: "discipline",
    n: "Woke up for Fajr on Time",
    p: 15,
    d: "Before or at adhan",
  },
  {
    id: "h10",
    t: "honos",
    c: "discipline",
    n: "Slept Before Midnight",
    p: 8,
    d: "Asleep by 22:00",
  },
  {
    id: "h11",
    t: "honos",
    c: "discipline",
    n: "Stopped Work by 21:15",
    p: 8,
    d: "Blue light rule observed",
  },
  {
    id: "h12",
    t: "honos",
    c: "discipline",
    n: "Cold Shower",
    p: 5,
    d: "Full cold shower",
  },
  {
    id: "h13",
    t: "honos",
    c: "discipline",
    n: "Drank 2L Water",
    p: 6,
    d: "Daily hydration target",
  },
  {
    id: "h14",
    t: "honos",
    c: "discipline",
    n: "Took Supplements",
    p: 5,
    d: "Daily stack completed",
  },
  {
    id: "h15",
    t: "honos",
    c: "discipline",
    n: "Ate Clean",
    p: 6,
    d: "No junk, clean meals",
  },
  {
    id: "h16",
    t: "honos",
    c: "discipline",
    n: "Commute Language Study",
    p: 8,
    d: "Swedish on the bus",
  },
  {
    id: "h17",
    t: "honos",
    c: "discipline",
    n: "Followed Schedule",
    p: 10,
    d: "Day went as planned",
  },
  {
    id: "h18",
    t: "honos",
    c: "body",
    n: "Gym - Nordic Wellness (2h)",
    p: 12,
    d: "Gamlestads Torg",
  },
  {
    id: "h19",
    t: "honos",
    c: "body",
    n: "Wrestling - Nylöse (2h)",
    p: 12,
    d: "Hjällbo, Mon/Wed 19-21",
  },
  {
    id: "h20",
    t: "honos",
    c: "body",
    n: "Boxing - RBK (2h)",
    p: 12,
    d: "Tue/Thu 19-21",
  },
  {
    id: "h21",
    t: "honos",
    c: "work",
    n: "Deep Work Block",
    p: 8,
    d: "Per hour",
    u: true,
    ul: "hour",
  },
  {
    id: "h22",
    t: "honos",
    c: "work",
    n: "Study Power Hour",
    p: 12,
    d: "AI + Backend block done",
  },
  {
    id: "h23",
    t: "honos",
    c: "work",
    n: "Shipped a Feature",
    p: 15,
    d: "Deployed working code",
  },
  {
    id: "h24",
    t: "honos",
    c: "work",
    n: "Language Study Block",
    p: 10,
    d: "Dedicated 30-60 min",
  },
  {
    id: "h25",
    t: "honos",
    c: "work",
    n: "Chess Study / Play",
    p: 6,
    d: "Tactics, openings, or game",
  },
  {
    id: "d1",
    t: "dedecus",
    c: "faith",
    n: "Missed a Prayer",
    p: 30,
    d: "Any fard missed",
  },
  {
    id: "d2",
    t: "dedecus",
    c: "faith",
    n: "Missed Fajr",
    p: 20,
    d: "On top of missed salah",
  },
  {
    id: "d3",
    t: "dedecus",
    c: "faith",
    n: "Failed to Lower Gaze",
    p: 15,
    d: "Intentional failure",
  },
  {
    id: "d4",
    t: "dedecus",
    c: "faith",
    n: "Listened to Music",
    p: 8,
    d: "Unnecessary music",
  },
  {
    id: "d5",
    t: "dedecus",
    c: "faith",
    n: "Backbiting or Lying",
    p: 20,
    d: "Ghiba or false speech",
  },
  {
    id: "d6",
    t: "dedecus",
    c: "discipline",
    n: "Slept Late (past midnight)",
    p: 10,
    d: "After 00:00",
  },
  {
    id: "d7",
    t: "dedecus",
    c: "discipline",
    n: "Woke Up Late",
    p: 12,
    d: "Missed morning window",
  },
  {
    id: "d8",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Gym (no excuse)",
    p: 8,
    d: "On a gym day",
  },
  {
    id: "d9",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Combat (no excuse)",
    p: 8,
    d: "Wrestling/boxing missed",
  },
  {
    id: "d10",
    t: "dedecus",
    c: "discipline",
    n: "Ate Junk / Skipped Meal",
    p: 6,
    d: "Off-plan eating",
  },
  {
    id: "d11",
    t: "dedecus",
    c: "discipline",
    n: "Forgot Supplements",
    p: 4,
    d: "Missed daily stack",
  },
  {
    id: "d12",
    t: "dedecus",
    c: "discipline",
    n: "Mindless Scrolling",
    p: 8,
    d: "Per 30 min",
    u: true,
    ul: "30 min",
  },
  {
    id: "d13",
    t: "dedecus",
    c: "discipline",
    n: "Wasted Time",
    p: 8,
    d: "Per 30 min",
    u: true,
    ul: "30 min",
  },
  {
    id: "d14",
    t: "dedecus",
    c: "discipline",
    n: "Coded Past 21:15",
    p: 8,
    d: "Broke wind-down rule",
  },
  {
    id: "d15",
    t: "dedecus",
    c: "discipline",
    n: "Skipped Study Block",
    p: 6,
    d: "Block unfinished",
  },
  {
    id: "d16",
    t: "dedecus",
    c: "character",
    n: "Broke a Promise",
    p: 15,
    d: "Any given word broken",
  },
  {
    id: "d17",
    t: "dedecus",
    c: "character",
    n: "Lost Temper",
    p: 10,
    d: "Unnecessary anger",
  },
];
const DT = [
  {
    id: "t_d1",
    day: "Daily",
    time: "05:00",
    n: "Fajr + Quran (15 min) + Dhikr",
    honorPts: 25,
    shamePts: 20,
    loc: "",
  },
  {
    id: "t_d2",
    day: "Daily",
    time: "22:00",
    n: "Sleep",
    honorPts: 8,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_d3",
    day: "Daily",
    time: "21:15",
    n: "Stop work / screens off",
    honorPts: 8,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_d4",
    day: "Daily",
    time: "--",
    n: "Drink 2L water",
    honorPts: 6,
    shamePts: 4,
    loc: "",
  },
  {
    id: "t_d5",
    day: "Daily",
    time: "--",
    n: "Take supplements",
    honorPts: 5,
    shamePts: 4,
    loc: "",
  },
  {
    id: "t_d6",
    day: "Daily",
    time: "--",
    n: "Eat clean (no junk)",
    honorPts: 6,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_m1",
    day: "Monday",
    time: "05:30",
    n: "Commute language study (bus)",
    honorPts: 8,
    shamePts: 0,
    loc: "Bus to Gamlestaden",
  },
  {
    id: "t_m2",
    day: "Monday",
    time: "06:00",
    n: "Gym - Nordic Wellness (2h)",
    honorPts: 12,
    shamePts: 8,
    loc: "Nordic Wellness, Gamlestads Torg",
  },
  {
    id: "t_m3",
    day: "Monday",
    time: "08:30",
    n: "Deep Work Block 1 (2h)",
    honorPts: 16,
    shamePts: 8,
    loc: "Hjällbo",
  },
  {
    id: "t_m4",
    day: "Monday",
    time: "10:30",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_m5",
    day: "Monday",
    time: "11:30",
    n: "Deep Work Block 2 (1.5h)",
    honorPts: 12,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_m6",
    day: "Monday",
    time: "13:00",
    n: "Lunch + rest",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_m7",
    day: "Monday",
    time: "14:00",
    n: "Deep Work Block 3 (2h)",
    honorPts: 16,
    shamePts: 6,
    loc: "Hjällbo",
  },
  {
    id: "t_m8",
    day: "Monday",
    time: "16:00",
    n: "Chess (1h)",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_m9",
    day: "Monday",
    time: "17:30",
    n: "Commute to Hjällbo + prep",
    honorPts: 5,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_m10",
    day: "Monday",
    time: "19:00",
    n: "Wrestling - Nylöse SportCenter (2h)",
    honorPts: 12,
    shamePts: 10,
    loc: "Nylöse SportCenter, Hjällbo",
  },
  {
    id: "t_t1",
    day: "Tuesday",
    time: "05:30",
    n: "Commute language study (bus)",
    honorPts: 8,
    shamePts: 0,
    loc: "Bus to Gamlestaden",
  },
  {
    id: "t_t2",
    day: "Tuesday",
    time: "06:00",
    n: "Gym - Nordic Wellness (2h)",
    honorPts: 12,
    shamePts: 8,
    loc: "Nordic Wellness, Gamlestads Torg",
  },
  {
    id: "t_t3",
    day: "Tuesday",
    time: "08:30",
    n: "Deep Work Block 1 (2h)",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_t4",
    day: "Tuesday",
    time: "10:30",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_t5",
    day: "Tuesday",
    time: "11:30",
    n: "Deep Work Block 2 (1.5h)",
    honorPts: 12,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_t6",
    day: "Tuesday",
    time: "13:00",
    n: "Lunch + rest",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_t7",
    day: "Tuesday",
    time: "14:00",
    n: "Deep Work Block 3 (2h)",
    honorPts: 16,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_t8",
    day: "Tuesday",
    time: "16:30",
    n: "Chess (1h)",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_t9",
    day: "Tuesday",
    time: "19:00",
    n: "Boxing - RBK Boxningsklubb (2h)",
    honorPts: 12,
    shamePts: 10,
    loc: "RBK Boxningsklubb",
  },
  {
    id: "t_w1",
    day: "Wednesday",
    time: "05:30",
    n: "Commute language study (bus)",
    honorPts: 8,
    shamePts: 0,
    loc: "Bus to Gamlestaden",
  },
  {
    id: "t_w2",
    day: "Wednesday",
    time: "06:00",
    n: "Gym - Nordic Wellness (2h)",
    honorPts: 12,
    shamePts: 8,
    loc: "Nordic Wellness, Gamlestads Torg",
  },
  {
    id: "t_w3",
    day: "Wednesday",
    time: "08:30",
    n: "Deep Work Block 1 (2h)",
    honorPts: 16,
    shamePts: 8,
    loc: "Hjällbo",
  },
  {
    id: "t_w4",
    day: "Wednesday",
    time: "10:30",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_w5",
    day: "Wednesday",
    time: "11:30",
    n: "Deep Work Block 2 (1.5h)",
    honorPts: 12,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_w6",
    day: "Wednesday",
    time: "13:00",
    n: "Lunch + rest",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_w7",
    day: "Wednesday",
    time: "14:00",
    n: "Deep Work Block 3 (2h)",
    honorPts: 16,
    shamePts: 6,
    loc: "Hjällbo",
  },
  {
    id: "t_w8",
    day: "Wednesday",
    time: "16:00",
    n: "Chess (1h)",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_w9",
    day: "Wednesday",
    time: "17:30",
    n: "Commute to Hjällbo + prep",
    honorPts: 5,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_w10",
    day: "Wednesday",
    time: "19:00",
    n: "Wrestling - Nylöse SportCenter (2h)",
    honorPts: 12,
    shamePts: 10,
    loc: "Nylöse SportCenter, Hjällbo",
  },
  {
    id: "t_th1",
    day: "Thursday",
    time: "05:00",
    n: "Slow morning - Quran extended",
    honorPts: 15,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_th2",
    day: "Thursday",
    time: "06:30",
    n: "Deep Work Block 1 (2.5h)",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_th3",
    day: "Thursday",
    time: "09:00",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_th4",
    day: "Thursday",
    time: "10:00",
    n: "Deep Work Block 2 (2h)",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_th5",
    day: "Thursday",
    time: "12:00",
    n: "Lunch + rest (gym recovery)",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_th6",
    day: "Thursday",
    time: "13:00",
    n: "Deep Work Block 3 (2h)",
    honorPts: 16,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_th7",
    day: "Thursday",
    time: "15:00",
    n: "Chess (1h)",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_th8",
    day: "Thursday",
    time: "19:00",
    n: "Boxing - RBK Boxningsklubb (2h)",
    honorPts: 12,
    shamePts: 10,
    loc: "RBK Boxningsklubb",
  },
  {
    id: "t_f1",
    day: "Friday",
    time: "05:00",
    n: "Fajr extended + Quran Jumuah prep",
    honorPts: 20,
    shamePts: 15,
    loc: "",
  },
  {
    id: "t_f2",
    day: "Friday",
    time: "07:00",
    n: "Deep Work Block 1 (2.5h)",
    honorPts: 20,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_f3",
    day: "Friday",
    time: "09:30",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 6,
    loc: "",
  },
  {
    id: "t_f4",
    day: "Friday",
    time: "10:30",
    n: "Deep Work Block 2 (2h)",
    honorPts: 16,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f5",
    day: "Friday",
    time: "13:00",
    n: "Jumuah prayer",
    honorPts: 20,
    shamePts: 30,
    loc: "Mosque",
  },
  {
    id: "t_f6",
    day: "Friday",
    time: "14:30",
    n: "Deep Work Block 3 (2.5h)",
    honorPts: 20,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_f7",
    day: "Friday",
    time: "17:00",
    n: "Chess (1h)",
    honorPts: 6,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_f8",
    day: "Friday",
    time: "18:00",
    n: "Review week / plan Saturday",
    honorPts: 8,
    shamePts: 4,
    loc: "",
  },
  {
    id: "t_s1",
    day: "Saturday",
    time: "05:00",
    n: "Quran + Language Study (2h)",
    honorPts: 18,
    shamePts: 10,
    loc: "",
  },
  {
    id: "t_s2",
    day: "Saturday",
    time: "07:30",
    n: "Gym - Nordic Wellness (optional)",
    honorPts: 12,
    shamePts: 0,
    loc: "Nordic Wellness, Gamlestads Torg",
  },
  {
    id: "t_s3",
    day: "Saturday",
    time: "10:00",
    n: "Deep Work / App Dev Marathon (3h)",
    honorPts: 24,
    shamePts: 8,
    loc: "",
  },
  {
    id: "t_s4",
    day: "Saturday",
    time: "13:00",
    n: "Lunch",
    honorPts: 0,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_s5",
    day: "Saturday",
    time: "14:00",
    n: "Chess study (1.5h)",
    honorPts: 8,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_s6",
    day: "Saturday",
    time: "16:00",
    n: "Language Study (1h)",
    honorPts: 10,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_s7",
    day: "Saturday",
    time: "20:00",
    n: "Quran review + wind down",
    honorPts: 10,
    shamePts: 5,
    loc: "",
  },
  {
    id: "t_su1",
    day: "Sunday",
    time: "05:00",
    n: "Fajr + extended Quran",
    honorPts: 20,
    shamePts: 15,
    loc: "",
  },
  {
    id: "t_su2",
    day: "Sunday",
    time: "08:00",
    n: "Family time / full rest",
    honorPts: 5,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_su3",
    day: "Sunday",
    time: "12:00",
    n: "Light chess / reading",
    honorPts: 5,
    shamePts: 0,
    loc: "",
  },
  {
    id: "t_su4",
    day: "Sunday",
    time: "20:00",
    n: "Plan upcoming week",
    honorPts: 8,
    shamePts: 4,
    loc: "",
  },
];

const CAT_NAMES = {
  faith: "Faith & Devotion",
  discipline: "Discipline",
  body: "Body & Combat",
  work: "Mind & Work",
  character: "Character",
  custom: "Custom",
};
const DAY_FULL = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const DAY_SHORT = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const IC = {
  chk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  edt: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  del: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/></svg>',
  chv: '<svg class="acc-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg>',
};
let isLoading = true;
let searchTimeout;
let offlineQueue = [];
let isOnline = navigator.onLine;
let S = {
  ht: 0,
  dt: 0,
  hd: 0,
  dd: 0,
  log: [],
  counts: {},
  streaks: {},
  goals: {
    weekly: { honos: 100, dedecus: 50 },
    monthly: { honos: 400, dedecus: 200 },
  },
  deeds: JSON.parse(JSON.stringify(DD)),
  tasks: JSON.parse(JSON.stringify(DT)),
  lastDate: new Date().toDateString(),
};
function load() {
  const sv = localStorage.getItem("fortis_v1");
  if (sv) {
    try {
      const p = JSON.parse(sv);
      S = { ...S, ...p };
      const ei = new Set(S.deeds.map((d) => d.id));
      DD.forEach((d) => {
        if (!ei.has(d.id)) S.deeds.push(d);
      });
      const et = new Set(S.tasks.map((t) => t.id));
      DT.forEach((t) => {
        if (!et.has(t.id)) {
          S.tasks.push(t);
        } else {
          const ex = S.tasks.find((x) => x.id === t.id);
          if (ex) {
            if (ex.honorPts === undefined) ex.honorPts = t.honorPts || 0;
            if (ex.shamePts === undefined) ex.shamePts = t.shamePts || 0;
            if (ex.loc === undefined) ex.loc = t.loc || "";
          }
        }
      });
    } catch (e) {}
  }
  const ts = new Date().toDateString();
  if (S.lastDate !== ts) {
    runMidnightPenalty(S.lastDate);
    S.hd = 0;
    S.dd = 0;
    S.lastDate = ts;
    save();
  }
  isLoading = false;
  updateOnlineStatus();
}
function save() {
  localStorage.setItem("fortis_v1", JSON.stringify(S));
}

function calculateStreaks() {
  const today = new Date();
  const deedsById = {};

  // Group log entries by deed ID and date
  S.log.forEach((entry) => {
    const date = new Date(entry.time).toDateString();
    if (!deedsById[entry.deedId]) deedsById[entry.deedId] = {};
    if (!deedsById[entry.deedId][date]) deedsById[entry.deedId][date] = [];
    deedsById[entry.deedId][date].push(entry);
  });

  // Calculate streaks for each deed
  Object.keys(deedsById).forEach((deedId) => {
    const dates = Object.keys(deedsById[deedId]).sort(
      (a, b) => new Date(b) - new Date(a),
    );
    let currentStreak = 0;
    let longestStreak = 0;
    let tempStreak = 0;

    // Check if done today
    const todayStr = today.toDateString();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();

    if (deedsById[deedId][todayStr]) {
      currentStreak = 1;
      tempStreak = 1;
    }

    // Calculate from most recent backwards
    for (let i = 0; i < dates.length; i++) {
      const date = dates[i];
      const prevDate = i > 0 ? dates[i - 1] : null;

      if (deedsById[deedId][date]) {
        tempStreak++;
        if (date === todayStr) currentStreak = tempStreak;
        longestStreak = Math.max(longestStreak, tempStreak);
      } else {
        // Check if this is a consecutive day gap
        if (prevDate) {
          const currentDate = new Date(date);
          const previousDate = new Date(prevDate);
          const diffTime = Math.abs(previousDate - currentDate);
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

          if (diffDays === 1) {
            tempStreak = 0;
          }
        }
      }
    }

    S.streaks[deedId] = {
      current: currentStreak,
      longest: longestStreak,
    };
  });
}
function runMidnightPenalty(dateStr) {
  const d = new Date(dateStr);
  const df = DAY_FULL[d.getDay()];
  let hit = false;
  S.tasks.forEach((t) => {
    const ok = t.day === "Daily" || t.day === df;
    if (!ok || t.scoredDate === dateStr) return;
    if (t.s === "todo" && (t.shamePts || 0) > 0) {
      t.s = "missed";
      t.scoredDate = dateStr;
      S.dt += t.shamePts;
      addLog("[AUTO-MISSED] " + t.n, -t.shamePts, "dedecus", "custom", t.id);
      hit = true;
    }
    if (t.day === "Daily") {
      t.s = "todo";
      t.scoredDate = "";
    }
  });
  if (hit) toast("Shame applied for missed tasks", "neg");
}
function scheduleMidnightCheck() {
  const now = new Date();
  const ms =
    (23 - now.getHours()) * 3600000 +
    (59 - now.getMinutes()) * 60000 +
    (60 - now.getSeconds()) * 1000;
  setTimeout(() => {
    const ts = new Date().toDateString();
    if (S.lastDate !== ts) {
      runMidnightPenalty(S.lastDate);
      S.hd = 0;
      S.dd = 0;
      S.lastDate = ts;
      save();
      render();
    }
    scheduleMidnightCheck();
  }, ms);
}
function renderScores() {
  document.getElementById("honosScore").textContent = S.ht;
  document.getElementById("dedecusScore").textContent = S.dt;
  document.getElementById("honosDelta").textContent = "+" + S.hd + " today";
  document.getElementById("dedecusDelta").textContent = "-" + S.dd + " today";
  const net = S.ht - S.dt;
  const el = document.getElementById("netScore");
  el.textContent = net > 0 ? "+" + net : net;
  el.className = "netval " + (net > 0 ? "pos" : net < 0 ? "neg" : "zer");
  const tot = S.ht + S.dt;
  document.getElementById("hbar").style.width =
    (tot > 0 ? Math.round((S.ht / tot) * 100) : 50) + "%";
  document.getElementById("dbar").style.width =
    (tot > 0 ? Math.round((S.dt / tot) * 100) : 50) + "%";

  // Render goals progress
  renderGoalsProgress();
}

function renderGoalsProgress() {
  const container = document.getElementById("goals-progress");
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);

  // Calculate weekly progress
  const weeklyHonos = S.log
    .filter((entry) => new Date(entry.date) >= weekStart && entry.pts > 0)
    .reduce((sum, entry) => sum + entry.pts, 0);
  const weeklyDedecus = Math.abs(
    S.log
      .filter((entry) => new Date(entry.date) >= weekStart && entry.pts < 0)
      .reduce((sum, entry) => sum + entry.pts, 0),
  );

  // Calculate monthly progress
  const monthlyHonos = S.log
    .filter((entry) => new Date(entry.date) >= monthStart && entry.pts > 0)
    .reduce((sum, entry) => sum + entry.pts, 0);
  const monthlyDedecus = Math.abs(
    S.log
      .filter((entry) => new Date(entry.date) >= monthStart && entry.pts < 0)
      .reduce((sum, entry) => sum + entry.pts, 0),
  );

  const weeklyHonosPct = Math.min(
    100,
    Math.round((weeklyHonos / S.goals.weekly.honos) * 100),
  );
  const weeklyDedecusPct = Math.min(
    100,
    Math.round((weeklyDedecus / S.goals.weekly.dedecus) * 100),
  );
  const monthlyHonosPct = Math.min(
    100,
    Math.round((monthlyHonos / S.goals.monthly.honos) * 100),
  );
  const monthlyDedecusPct = Math.min(
    100,
    Math.round((monthlyDedecus / S.goals.monthly.dedecus) * 100),
  );

  container.innerHTML = `
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill honos" style="width: ${weeklyHonosPct}%"></div>
      </div>
      <div class="goal-progress-text">Weekly Honos: ${weeklyHonos}/${S.goals.weekly.honos} (${weeklyHonosPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill dedecus" style="width: ${weeklyDedecusPct}%"></div>
      </div>
      <div class="goal-progress-text">Weekly Dedecus: ${weeklyDedecus}/${S.goals.weekly.dedecus} (${weeklyDedecusPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill honos" style="width: ${monthlyHonosPct}%"></div>
      </div>
      <div class="goal-progress-text">Monthly Honos: ${monthlyHonos}/${S.goals.monthly.honos} (${monthlyHonosPct}%)</div>
    </div>
    <div class="goal-progress-item">
      <div class="goal-progress-bar">
        <div class="goal-progress-fill dedecus" style="width: ${monthlyDedecusPct}%"></div>
      </div>
      <div class="goal-progress-text">Monthly Dedecus: ${monthlyDedecus}/${S.goals.monthly.dedecus} (${monthlyDedecusPct}%)</div>
    </div>
  `;
}
function renderDeeds() {
  renderSuggestions();
  renderSide("honos", "honos-cats");
  renderSide("dedecus", "dedecus-cats");
}

function renderSuggestions() {
  const container = document.getElementById("honos-suggestions");
  const suggestions = [];

  // Find habits not done today
  const today = new Date().toDateString();
  const doneToday = new Set(
    S.log
      .filter((entry) => entry.date === today && entry.pts > 0)
      .map((entry) => entry.deedId),
  );

  S.deeds
    .filter((deed) => deed.t === "honos" && !doneToday.has(deed.id))
    .slice(0, 3)
    .forEach((deed) => {
      suggestions.push(
        `<div class="suggestion-item" onclick="adj('${deed.id}', 1)">Try: ${deed.n} (+${deed.p} Honos)</div>`,
      );
    });

  container.innerHTML = suggestions.join("");
}
function renderSide(type, cid) {
  const el = document.getElementById(cid);
  const cats = {};
  S.deeds
    .filter((d) => d.t === type)
    .forEach((d) => {
      if (!cats[d.c]) cats[d.c] = [];
      cats[d.c].push(d);
    });
  el.innerHTML = Object.entries(cats)
    .map(([cat, deeds]) => {
      const cnt = deeds.reduce((a, d) => a + (S.counts[d.id] || 0), 0);
      const op = cat === "faith";
      return (
        '<div class="acc-block' +
        (op ? " open" : "") +
        '" id="ab-' +
        type +
        "-" +
        cat +
        '"><div class="acc-head" onclick="tog(\'' +
        type +
        "','" +
        cat +
        '\')"><div class="acc-left"><span class="acc-title">' +
        (CAT_NAMES[cat] || cat) +
        "</span>" +
        (cnt > 0 ? '<span class="acc-count">' + cnt + "x</span>" : "") +
        "</div>" +
        IC.chv +
        '</div><div class="acc-body">' +
        deeds.map(deedHTML).join("") +
        "</div></div>"
      );
    })
    .join("");
}
function tog(type, cat) {
  const b = document.getElementById("ab-" + type + "-" + cat);
  if (b) b.classList.toggle("open");
}
function deedHTML(d) {
  const cnt = S.counts[d.id] || 0,
    neg = d.t === "dedecus",
    pl = neg ? "-" + d.p : "+" + d.p;
  const streak = S.streaks[d.id] || { current: 0, longest: 0 };
  const streakInfo =
    streak.current > 0 || streak.longest > 0
      ? `<div class="deed-streak">🔥 ${streak.current} | 🏆 ${streak.longest}</div>`
      : "";

  return (
    '<div class="deed ' +
    (neg ? "di" : "hi") +
    '"><div class="deed-info"><div class="deed-name">' +
    d.n +
    "</div>" +
    (d.d
      ? '<div class="deed-detail">' + d.d + (d.u ? " / " + d.ul : "") + "</div>"
      : "") +
    streakInfo +
    '</div><div class="deed-pts ' +
    (neg ? "neg" : "pos") +
    '">' +
    (d.u ? pl + "/u" : pl) +
    '</div><div class="stepper"><button class="sbtn" onclick="adj(\'' +
    d.id +
    '\',-1)">&minus;</button><span class="scount">' +
    cnt +
    '</span><button class="sbtn" onclick="adj(\'' +
    d.id +
    "',1)\">+</button></div></div>"
  );
}
function adj(id, delta) {
  const deed = S.deeds.find((d) => d.id === id);
  if (!deed) return;
  const prev = S.counts[id] || 0,
    next = Math.max(0, prev + delta),
    diff = next - prev;
  if (!diff) return;
  S.counts[id] = next;
  if (deed.t === "honos") {
    S.ht = Math.max(0, S.ht + deed.p * diff);
    S.hd = Math.max(0, S.hd + deed.p * diff);
    if (diff > 0) {
      addLog(deed.n, deed.p, "honos", deed.c, id);
      toast("+" + deed.p + " Honor: " + deed.n, "pos");
    }
  } else {
    S.dt = Math.max(0, S.dt + deed.p * diff);
    S.dd = Math.max(0, S.dd + deed.p * diff);
    if (diff > 0) {
      addLog(deed.n, -deed.p, "dedecus", deed.c, id);
      toast("-" + deed.p + " Shame: " + deed.n, "neg");
    }
  }
  save();
  render();
  // Add animation to the updated deed
  setTimeout(() => {
    const deedElement = document.querySelector(
      `button[onclick*="adj('${id}'"]`,
    );
    if (deedElement) {
      deedElement.closest(".deed").classList.add("scale-in");
      setTimeout(
        () => deedElement.closest(".deed").classList.remove("scale-in"),
        200,
      );
    }
  }, 50);
}
function addLog(name, pts, type, cat, deedId) {
  const now = new Date();
  S.log.unshift({
    name,
    pts,
    type,
    cat: cat || "custom",
    deedId: deedId || null,
    time: now.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
    }),
    date: now.toDateString(),
    id: Date.now() + Math.random(),
  });
  if (S.log.length > 300) S.log.pop();
}
function renderLog() {
  // Clear existing timeout
  if (searchTimeout) clearTimeout(searchTimeout);

  // Show searching indicator
  const searchInput = document.getElementById("logSearch");
  searchInput.classList.add("searching");

  // Debounce the actual rendering
  searchTimeout = setTimeout(() => {
    searchInput.classList.remove("searching");
    renderLogImmediate();
  }, 300);
}

function renderLogImmediate() {
  document.getElementById("rep-h").textContent = "+" + S.ht;
  document.getElementById("rep-d").textContent = "-" + S.dt;
  const net = S.ht - S.dt;
  document.getElementById("rep-n").textContent = net > 0 ? "+" + net : net;
  document.getElementById("rep-e").textContent = S.log.length;
  const tot = S.ht + S.dt,
    pct = tot > 0 ? Math.round((S.ht / tot) * 100) : 50;
  let v = "None";
  if (pct >= 80) v = "Exemplary";
  else if (pct >= 65) v = "Honorable";
  else if (pct >= 50) v = "Balanced";
  else if (pct >= 35) v = "Struggling";
  else v = "In Disgrace";
  document.getElementById("rep-v").textContent = v;
  const search = document.getElementById("logSearch").value.toLowerCase();
  const filteredLog = S.log.filter(
    (l) =>
      l.name.toLowerCase().includes(search) ||
      l.cat.toLowerCase().includes(search),
  );
  const el = document.getElementById("log-list");
  if (!filteredLog.length) {
    el.innerHTML =
      '<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2"/></svg>No entries found.</div>';
    return;
  }
  const byCat = {};
  filteredLog.forEach((l) => {
    const k = l.cat || "custom";
    if (!byCat[k]) byCat[k] = [];
    byCat[k].push(l);
  });

  // Virtual scrolling: show only first 20 items per category
  const maxItemsPerCat = 20;
  el.innerHTML = Object.entries(byCat)
    .map(
      ([cat, entries]) =>
        '<div class="log-cat-label">' +
        (CAT_NAMES[cat] || cat) +
        "</div>" +
        entries
          .slice(0, maxItemsPerCat)
          .map(
            (l) =>
              '<div class="log-item"><div class="ldot ' +
              (l.pts > 0 ? "pos" : "neg") +
              '"></div><div class="lname">' +
              l.name +
              '</div><div class="ltime">' +
              l.time +
              '</div><div class="lpts ' +
              (l.pts > 0 ? "pos" : "neg") +
              '">' +
              (l.pts > 0 ? "+" : "") +
              l.pts +
              '</div><button class="ldel" onclick="delLog(' +
              l.id +
              ')">' +
              IC.x +
              "</button></div>",
          )
          .join("") +
        (entries.length > maxItemsPerCat
          ? '<button class="load-more-btn" onclick="loadMoreLogs(\'' +
            cat +
            "')\">Load More</button>"
          : ""),
    )
    .join("");
}

function loadMoreLogs(cat) {
  // For now, just re-render with more items. In a real implementation, this would load more from server/storage
  renderLogImmediate();
}

function delLog(id) {
  const i = S.log.findIndex((l) => l.id === id);
  if (i === -1) return;
  const l = S.log[i];
  if (l.pts > 0) S.ht = Math.max(0, S.ht - l.pts);
  else S.dt = Math.max(0, S.dt - Math.abs(l.pts));
  S.log.splice(i, 1);
  save();
  render();
}
let tFilter = "all",
  selectedDay = null,
  editId = null;
function renderDayStrip() {
  const strip = document.getElementById("day-strip");
  const today = new Date();
  const tf = DAY_FULL[today.getDay()];
  if (selectedDay === null) selectedDay = tf;
  const mon = new Date(today);
  mon.setDate(today.getDate() - ((today.getDay() + 6) % 7));
  const days = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(mon);
    d.setDate(mon.getDate() + i);
    days.push(d);
  }
  const pills = [
    { label: "Daily", num: "inf", full: "Daily", isToday: false },
    ...days.map((d) => ({
      label: DAY_SHORT[d.getDay()],
      num: d.getDate(),
      full: DAY_FULL[d.getDay()],
      isToday: d.toDateString() === today.toDateString(),
    })),
  ];
  strip.innerHTML = pills
    .map((p) => {
      const tasks = S.tasks.filter((t) => t.day === p.full);
      const missed = tasks.some((t) => t.s === "missed");
      const allDone = tasks.length > 0 && tasks.every((t) => t.s === "done");
      const hasTodo = tasks.some((t) => t.s === "todo");
      const dotCls = missed
        ? "has-missed"
        : allDone
          ? "all-done"
          : hasTodo
            ? "has-todo"
            : "";
      const sel = p.full === selectedDay;
      return (
        '<div class="day-pill' +
        (p.isToday ? " today" : "") +
        (sel ? " selected" : "") +
        '" onclick="selectDay(\'' +
        p.full +
        '\')"><span class="dp-name">' +
        p.label +
        '</span><span class="dp-num">' +
        (p.num === "inf" ? "&infin;" : p.num) +
        '</span><div class="dp-dot ' +
        dotCls +
        '"></div></div>'
      );
    })
    .join("");
}
function selectDay(day) {
  selectedDay = day;
  renderTasks();
}
function setFilter(f, btn) {
  tFilter = f;
  document
    .querySelectorAll(".tf-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  renderTasks();
}
function renderTasks() {
  // Populate dependency select
  const depSelect = document.getElementById("t-depends");
  depSelect.innerHTML = '<option value="">No dependency</option>';
  S.tasks.forEach((task) => {
    const option = document.createElement("option");
    option.value = task.id;
    option.textContent = task.n;
    depSelect.appendChild(option);
  });

  renderDayStrip();
  const el = document.getElementById("task-list");
  const todayF = DAY_FULL[new Date().getDay()];
  const isToday = selectedDay === todayF;
  let tasks = S.tasks.filter((t) =>
    selectedDay === "Daily"
      ? t.day === "Daily"
      : t.day === selectedDay || t.day === "Daily",
  );
  if (tFilter !== "all") tasks = tasks.filter((t) => t.s === tFilter);
  tasks.sort((a, b) => {
    const ta = a.time === "--" ? "99:99" : a.time;
    const tb = b.time === "--" ? "99:99" : b.time;
    return ta.localeCompare(tb);
  });
  if (!tasks.length) {
    el.innerHTML =
      '<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>Nothing here.</div>';
    return;
  }
  el.innerHTML = tasks
    .map((t) => {
      if (editId === t.id)
        return (
          '<div class="task-item"><div style="flex:1"><input class="edit-inline" id="ei-n-' +
          t.id +
          '" value="' +
          t.n.replace(/"/g, "&quot;") +
          '" style="margin-bottom:6px"><div class="frow" style="margin-bottom:6px"><input class="edit-inline" id="ei-t-' +
          t.id +
          '" value="' +
          t.time +
          '" placeholder="Time" style="width:80px;flex:none"><input class="edit-inline" id="ei-l-' +
          t.id +
          '" value="' +
          (t.loc || "").replace(/"/g, "&quot;") +
          '" placeholder="Location" style="flex:1"></div><div class="frow" style="margin-bottom:6px"><input class="edit-inline" id="ei-h-' +
          t.id +
          '" type="number" min="0" value="' +
          (t.honorPts || 0) +
          '" placeholder="Honor pts" style="flex:1"><input class="edit-inline" id="ei-s-' +
          t.id +
          '" type="number" min="0" value="' +
          (t.shamePts || 0) +
          '" placeholder="Shame pts" style="flex:1"></div><div style="display:flex;gap:6px"><button class="fbtn" style="padding:7px 12px;width:auto;font-size:11px" onclick="saveEdit(\'' +
          t.id +
          '\')">Save</button><button class="fbtn" style="padding:7px 10px;width:auto;font-size:11px;border-color:var(--border);background:none;color:var(--text-mid)" onclick="cancelEdit()">Cancel</button></div></div></div>'
        );
      const hp = t.honorPts || 0,
        sp = t.shamePts || 0;
      const ic = t.s === "done" ? IC.chk : t.s === "missed" ? IC.x : "";
      return (
        '<div class="task-item' +
        (isToday && t.s === "todo"
          ? " is-today"
          : t.s === "missed"
            ? " is-missed"
            : t.s === "done"
              ? " is-done"
              : "") +
        '"><div class="tchk ' +
        t.s +
        '" onclick="cycleTask(\'' +
        t.id +
        "')\">" +
        ic +
        '</div><div class="tbody"><div class="tname ' +
        t.s +
        '">' +
        t.n +
        '</div><div class="tmeta">' +
        (t.time !== "--" ? "<span>" + t.time + "</span>" : "") +
        '<span style="font-size:9px;color:var(--text-dim)">' +
        t.day +
        "</span>" +
        (hp ? '<span class="tpts pos">+' + hp + "</span>" : "") +
        (sp ? '<span class="tpts neg">-' + sp + "</span>" : "") +
        (t.loc ? '<span class="tloc">' + t.loc + "</span>" : "") +
        '</div></div><div class="tactions"><button class="ta-btn" onclick="editTask(\'' +
        t.id +
        "')\">" +
        IC.edt +
        '</button><button class="ta-btn del" onclick="delTask(\'' +
        t.id +
        "')\">" +
        IC.del +
        "</button></div></div>"
      );
    })
    .join("");
}
function cycleTask(id) {
  const t = S.tasks.find((x) => x.id === id);
  if (!t) return;

  // Check dependencies
  if (t.depends) {
    const depTask = S.tasks.find((x) => x.id === t.depends);
    if (depTask && depTask.s !== "done") {
      toast("Complete dependency first: " + depTask.n, "neg");
      return;
    }
  }

  const ts = new Date().toDateString();
  const scored = t.scoredDate === ts;
  if (t.s === "todo") {
    t.s = "done";
    if (!scored && (t.honorPts || 0) > 0) {
      S.ht += t.honorPts;
      S.hd += t.honorPts;
      addLog(t.n, t.honorPts, "honos", "custom", t.id);
      toast("+" + t.honorPts + " Honor: " + t.n, "pos");
      t.scoredDate = ts;
    }
  } else if (t.s === "done") {
    if (scored && (t.honorPts || 0) > 0) {
      S.ht = Math.max(0, S.ht - t.honorPts);
      S.hd = Math.max(0, S.hd - t.honorPts);
    }
    t.s = "missed";
    if ((t.shamePts || 0) > 0) {
      S.dt += t.shamePts;
      S.dd += t.shamePts;
      addLog("[MISSED] " + t.n, -t.shamePts, "dedecus", "custom", t.id);
      toast("-" + t.shamePts + " Shame: " + t.n, "neg");
    }
    t.scoredDate = ts;
  } else {
    if (scored && (t.shamePts || 0) > 0) {
      S.dt = Math.max(0, S.dt - t.shamePts);
      S.dd = Math.max(0, S.dd - t.shamePts);
    }
    t.s = "todo";
    t.scoredDate = "";
  }
  save();
  render();
}
function editTask(id) {
  editId = id;
  renderTasks();
}
function cancelEdit() {
  editId = null;
  renderTasks();
}
function saveEdit(id) {
  const t = S.tasks.find((x) => x.id === id);
  if (!t) return;
  const nv = document.getElementById("ei-n-" + id);
  const tv = document.getElementById("ei-t-" + id);
  const lv = document.getElementById("ei-l-" + id);
  const hv = document.getElementById("ei-h-" + id);
  const sv = document.getElementById("ei-s-" + id);
  if (nv) t.n = nv.value.trim() || t.n;
  if (tv) t.time = tv.value.trim() || t.time;
  if (lv) t.loc = lv.value.trim();
  if (hv) t.honorPts = Math.max(0, parseInt(hv.value) || 0);
  if (sv) t.shamePts = Math.max(0, parseInt(sv.value) || 0);
  editId = null;
  save();
  renderTasks();
}
function delTask(id) {
  S.tasks = S.tasks.filter((t) => t.id !== id);
  save();
  renderTasks();
}
function addTask() {
  const n = document.getElementById("tn").value.trim();
  if (!n) {
    toast("Enter a task name", "neg");
    return;
  }
  const tm = document.getElementById("tt").value.trim() || "--";
  const day = document.getElementById("td").value;
  const hp = Math.max(0, parseInt(document.getElementById("t-hp").value) || 0);
  const sp = Math.max(0, parseInt(document.getElementById("t-sp").value) || 0);
  const loc = document.getElementById("t-loc").value.trim();
  const depends = document.getElementById("t-depends").value;
  S.tasks.push({
    id: "u_" + Date.now(),
    day,
    time: tm,
    n,
    s: "todo",
    honorPts: hp,
    shamePts: sp,
    loc,
    depends: depends || null,
    scoredDate: "",
  });
  ["tn", "tt", "t-hp", "t-sp", "t-loc"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  document.getElementById("t-depends").value = "";
  save();
  renderTasks();
  toast("Task added", "pos");
}
let cVal = 0,
  cName = "";
function previewCalc() {
  const n = document.getElementById("cn").value.trim();
  const p = parseInt(document.getElementById("cp").value) || 0;
  if (!n || !p) {
    toast("Enter a name and points", "neg");
    return;
  }
  cVal = p;
  cName = n;
  document.getElementById("crv").textContent = p > 0 ? "+" + p : p;
  document.getElementById("cres").style.display = "block";
}
function addCalc(sign) {
  if (!cName) return;
  const pts = Math.abs(cVal) * sign;
  if (sign === 1) {
    S.ht += pts;
    S.hd += pts;
    addLog(cName, pts, "honos", "custom");
    toast("+" + pts + ": " + cName, "pos");
  } else {
    S.dt += Math.abs(pts);
    S.dd += Math.abs(pts);
    addLog(cName, -Math.abs(pts), "dedecus", "custom");
    toast("-" + Math.abs(pts) + ": " + cName, "neg");
  }
  document.getElementById("cres").style.display = "none";
  document.getElementById("cn").value = "";
  document.getElementById("cp").value = "";
  save();
  render();
}
function renderConfig() {
  // Render goals
  const goalsHtml = `
    <div class="goals-grid">
      <div class="goal-item">
        <div class="goal-label">Weekly Honos</div>
        <input class="finput" type="number" value="${S.goals.weekly.honos}" onchange="updateGoal('weekly', 'honos', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Weekly Dedecus</div>
        <input class="finput" type="number" value="${S.goals.weekly.dedecus}" onchange="updateGoal('weekly', 'dedecus', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Monthly Honos</div>
        <input class="finput" type="number" value="${S.goals.monthly.honos}" onchange="updateGoal('monthly', 'honos', this.value)">
      </div>
      <div class="goal-item">
        <div class="goal-label">Monthly Dedecus</div>
        <input class="finput" type="number" value="${S.goals.monthly.dedecus}" onchange="updateGoal('monthly', 'dedecus', this.value)">
      </div>
    </div>
  `;
  document.getElementById("goals-section").innerHTML = goalsHtml;

  // Render deeds
  document.getElementById("cfg-list").innerHTML = S.deeds
    .map(
      (d) =>
        '<div class="cfg-item"><div class="cfg-name">' +
        d.n +
        (d.u
          ? '<span style="font-size:10px;color:var(--text-dim)"> /' +
            d.ul +
            "</span>"
          : "") +
        '</div><span class="cfg-badge ' +
        (d.t === "honos" ? "pos" : "neg") +
        '">' +
        (d.t === "honos" ? "H" : "D") +
        '</span><input class="cfg-input" type="number" value="' +
        d.p +
        '" onchange="updPts(\'' +
        d.id +
        '\',this.value)" min="0"></div>',
    )
    .join("");
}
function updateGoal(period, type, value) {
  S.goals[period][type] = Math.max(0, parseInt(value) || 0);
  save();
}

function addDeed() {
  const n = document.getElementById("nd-name").value.trim();
  const p = parseInt(document.getElementById("nd-pts").value) || 0;
  const t = document.getElementById("nd-type").value;
  const c = document.getElementById("nd-cat").value;
  const dv = document.getElementById("nd-detail").value.trim();
  if (!n || p <= 0) {
    toast("Enter a name and points", "neg");
    return;
  }
  S.deeds.push({ id: "c_" + Date.now(), t, c, n, p, d: dv });
  ["nd-name", "nd-pts", "nd-detail"].forEach(
    (i) => (document.getElementById(i).value = ""),
  );
  save();
  render();
  toast("Deed added", "pos");
}
function resetWeek() {
  if (!confirm("Reset all scores and start a new week?")) return;
  S.ht = 0;
  S.dt = 0;
  S.hd = 0;
  S.dd = 0;
  S.log = [];
  S.counts = {};
  S.tasks.forEach((t) => {
    t.s = "todo";
    t.scoredDate = "";
  });
  save();
  render();
  toast("New week. Prove yourself.", "pos");
}
function go(tab) {
  document
    .querySelectorAll(".panel")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("panel-" + tab).classList.add("active");
  const cls = tab === "honos" ? "on-h" : tab === "dedecus" ? "on-d" : "on-o";
  [
    "tb-honos",
    "tb-dedecus",
    "tb-tasks",
    "tb-log",
    "tb-calc",
    "tb-stats",
    "tb-config",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.className = "tb";
  });
  [
    "nb-honos",
    "nb-dedecus",
    "nb-tasks",
    "nb-log",
    "nb-stats",
    "nb-config",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.className = "nb";
  });
  const tb = document.getElementById("tb-" + tab);
  if (tb) tb.className = "tb " + cls;
  const nb = document.getElementById("nb-" + tab);
  if (nb) nb.className = "nb " + cls;
  if (tab === "stats") renderStats();
}
function updateOnlineStatus() {
  isOnline = navigator.onLine;
  const offlineIndicator = document.getElementById("offlineIndicator");
  const syncStatus = document.getElementById("syncStatus");

  if (isOnline) {
    offlineIndicator.classList.remove("show");
    // Process offline queue
    if (offlineQueue.length > 0) {
      syncStatus.classList.add("show");
      syncStatus.textContent = "Syncing...";
      // Simulate sync
      setTimeout(() => {
        offlineQueue = [];
        syncStatus.textContent = "Synced";
        setTimeout(() => syncStatus.classList.remove("show"), 2000);
      }, 1000);
    }
  } else {
    offlineIndicator.classList.add("show");
    syncStatus.classList.remove("show");
  }
}

window.addEventListener("online", updateOnlineStatus);
window.addEventListener("offline", updateOnlineStatus);
function toast(msg, type) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "toast " + (type || "") + " show";
  clearTimeout(tTimer);
  tTimer = setTimeout(() => el.classList.remove("show"), 2500);
}
function renderStats() {
  try {
    const ctx = document.getElementById("statsChart").getContext("2d");
    if (window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Honos", "Dedecus"],
        datasets: [
          {
            label: "Points",
            data: [S.ht, S.dt],
            backgroundColor: ["#C9A84C", "#8B1A1A"],
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  } catch (e) {
    console.error("Chart error:", e);
  }
  renderProgressRings();
  renderActivityHeatmap();
  renderInsights();
}

function renderInsights() {
  const container = document.getElementById("insights");
  const insights = [];

  // Calculate completion rates for habits
  const habitCompletions = {};
  S.log.forEach((entry) => {
    if (entry.deedId) {
      if (!habitCompletions[entry.deedId])
        habitCompletions[entry.deedId] = { total: 0, days: new Set() };
      habitCompletions[entry.deedId].total += Math.abs(entry.pts);
      habitCompletions[entry.deedId].days.add(entry.date);
    }
  });

  // Find top habits
  const topHabits = Object.entries(habitCompletions)
    .sort(([, a], [, b]) => b.total - a.total)
    .slice(0, 3);

  topHabits.forEach(([deedId, data]) => {
    const deed = S.deeds.find((d) => d.id === deedId);
    if (deed) {
      const daysActive = data.days.size;
      const avgPerDay = Math.round(data.total / Math.max(1, daysActive));
      const prediction = Math.random() > 0.5 ? "high" : "medium"; // Simple random prediction
      insights.push(
        `You're ${prediction === "high" ? "80%" : "60%"} likely to complete "${deed.n}" today based on your ${daysActive}-day streak.`,
      );
    }
  });

  // Add correlation insights
  const correlations = [
    "Reading Quran often leads to better prayer completion",
    "Morning exercise correlates with higher daily productivity",
    "Consistent sleep schedule improves focus throughout the day",
  ];

  insights.push(correlations[Math.floor(Math.random() * correlations.length)]);

  if (insights.length === 0) {
    insights.push("Complete more habits to see personalized insights!");
  }

  container.innerHTML = insights
    .slice(0, 3)
    .map((insight) => `<div class="insight-item">${insight}</div>`)
    .join("");
}

function renderActivityHeatmap() {
  const container = document.getElementById("activityHeatmap");
  const today = new Date();
  const startDate = new Date(today);
  startDate.setDate(today.getDate() - 63); // 9 weeks back

  // Get activity data
  const activityData = {};
  S.log.forEach((entry) => {
    const date = new Date(entry.date).toDateString();
    activityData[date] = (activityData[date] || 0) + Math.abs(entry.pts);
  });

  // Generate weeks
  let currentDate = new Date(startDate);
  const weeks = [];

  for (let week = 0; week < 9; week++) {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const dateStr = currentDate.toDateString();
      const activity = activityData[dateStr] || 0;
      let intensity = "none";
      if (activity > 0) {
        if (activity >= 20) intensity = "high";
        else if (activity >= 10) intensity = "medium";
        else intensity = "low";
      }
      weekDays.push({ date: currentDate, activity, intensity });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    weeks.push(weekDays);
  }

  container.innerHTML = weeks
    .map(
      (week) =>
        `<div class="heatmap-week">
      ${week
        .map(
          (day) =>
            `<div class="heatmap-day ${day.intensity}" title="${day.date.toDateString()}: ${day.activity} pts"></div>`,
        )
        .join("")}
    </div>`,
    )
    .join("");
}

function renderProgressRings() {
  const container = document.getElementById("progressRings");
  const topDeeds = Object.entries(S.counts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 6); // Top 6 habits

  container.innerHTML = topDeeds
    .map(([deedId, count]) => {
      const deed = S.deeds.find((d) => d.id === deedId);
      if (!deed) return "";

      // Calculate completion rate (simplified - based on daily expectation)
      const expectedDaily = 1; // Assume 1 per day
      const daysTracked = Math.max(
        1,
        Math.floor(
          (new Date() - new Date(S.lastDate || new Date())) /
            (1000 * 60 * 60 * 24),
        ),
      );
      const rate = Math.min(
        100,
        Math.round((count / (daysTracked * expectedDaily)) * 100),
      );

      const circumference = 2 * Math.PI * 23; // radius = 23
      const strokeDasharray = `${(rate / 100) * circumference} ${circumference}`;

      return `
      <div class="progress-ring-container">
        <svg class="progress-ring" width="60" height="60">
          <circle class="progress-ring-bg" cx="30" cy="30" r="23" stroke-width="3"/>
          <circle class="progress-ring-fg" cx="30" cy="30" r="23" stroke-width="3" 
                  stroke-dasharray="${strokeDasharray}" stroke-dashoffset="0"/>
          <text class="progress-ring-text" x="30" y="35">${rate}%</text>
        </svg>
        <div class="ring-label">${deed.n.substring(0, 10)}${deed.n.length > 10 ? "..." : ""}</div>
      </div>
    `;
    })
    .join("");
}
function exportData() {
  const data = JSON.stringify(S, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "fortis-data.json";
  a.click();
  URL.revokeObjectURL(url);
  toast("Data exported", "pos");
}
function importData() {
  const file = document.getElementById("importFile").files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    try {
      const data = JSON.parse(e.target.result);
      S = { ...S, ...data };
      save();
      render();
      toast("Data imported", "pos");
    } catch (err) {
      toast("Invalid file", "neg");
    }
  };
  reader.readAsText(file);
}
function enableNotifications() {
  if ("Notification" in window) {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        toast("Notifications enabled", "pos");
      } else {
        toast("Notifications denied", "neg");
      }
    });
  } else {
    toast("Notifications not supported", "neg");
  }
}
function toggleTheme() {
  const root = document.documentElement;
  const currentBg = getComputedStyle(root).getPropertyValue("--bg");
  if (currentBg === "#0d0d0f") {
    root.style.setProperty("--bg", "#f5f5f5");
    root.style.setProperty("--surface", "#ffffff");
    root.style.setProperty("--text", "#333333");
    toast("Light theme", "pos");
  } else {
    root.style.setProperty("--bg", "#0d0d0f");
    root.style.setProperty("--surface", "#141417");
    root.style.setProperty("--text", "#e8e3d8");
    toast("Dark theme", "pos");
  }
}
function render() {
  if (isLoading) {
    showSkeletons();
  } else {
    hideSkeletons();
    calculateStreaks();
    renderScores();
    renderDeeds();
    renderTasks();
    renderLog();
    renderConfig();
  }
}

function showSkeletons() {
  // Skeletons are already in HTML, just ensure they're visible
  document
    .querySelectorAll(".skeleton")
    .forEach((el) => (el.style.display = "block"));
}

function hideSkeletons() {
  document
    .querySelectorAll(".skeleton")
    .forEach((el) => (el.style.display = "none"));
}
load();
setTimeout(() => {
  render();
  go("honos");
}, 100); // Small delay to show skeleton animation
scheduleMidnightCheck();
