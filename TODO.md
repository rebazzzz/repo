# Fortis Anima PWA - Phase 2 Implementation Plan & Progress

## Phase 1: Core Features ✅
- [x] Scores, deeds, tasks, log, config, stats, themes
- [x] IndexedDB + localStorage hybrid
- [x] PWA manifest/service worker basics

## Phase 2: Offline-First + Cached Stats (Current: 5/19 complete)

### Step 4: Offline Queuing + Sync ✅ **(7/7 complete)**

- [x] 4.1 IndexedDB queueDB setup (id, type, data, timestamp, synced)
- [x] 4.2 queueAction(type, data) → store unsynced mutations
- [x] 4.3 Hook mutations: addLog/cycleTask/adj/addTask/save → queue if offline
- [x] 4.4 updateOnlineStatus() → processQueue() + retry logic (max 3)
- [x] 4.5 UI: #queueBadge count + #retrySync button
- [x] 4.6 Tests: offline queue→IDB, online sync→clear
- [x] 4.7 Mark ✅ complete

### Step 5: Cached Stats (Next)
- [ ] statsDB: IndexedDB for log aggregation (honos/dt daily/weekly/monthly)
- [ ] computeStats() → cache aggregates, update on mutations
- [ ] renderStats() from cache (fast), sync background
- [ ] UI loading states + "cached" indicator
- [ ] Tests: offline stats work, online syncs

### Later Steps (6-19)
6. Push notifications (PWA)
7. Data sync (Firebase?)
8-19. Advanced charts, goals, streaks, export...

**Next Action:** Implement 4.2 queueAction() + hooks in script.js

