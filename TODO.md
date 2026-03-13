# Fortis Anima PWA - Full Phase 2-5 Implementation (19 Steps)

## Phase 1: Core Features ✅
- [x] Scores, deeds, tasks, log, config, stats, themes
- [x] IndexedDB + localStorage hybrid  
- [x] PWA manifest/service worker basics

## Phase 2: Offline-First + Cached Stats **(5/19 complete)**

### Step 4: Offline Task/Log Queuing + Sync ✅
- [x] queueDB setup + queueAction()
- [x] Mutation hooks (adj/cycleTask/addTask/save)
- [x] processQueue() + retry logic (max 3)
- [x] UI: queueBadge + retrySync button
- [x] Offline/online status handling

### Step 5: Cache Statistics Computations **NEXT**
- [ ] statsDB aggregates (honos/dt daily/weekly/monthly)
- [ ] computeStats() → cache on mutations
- [ ] renderStats() from cache + background sync
- [ ] Loading states + cached indicator
- [ ] Offline stats tests

### Step 6: Enhanced Error Handling
- [ ] Try-catch on DB/mutations
- [ ] Toast error notifications
- [ ] Input validation + boundaries

### Step 7: Habit Completion Rate Line Charts
- [ ] Chart.js line chart in stats panel
- [ ] 7/30-day toggle views

### Step 8: Extended Task Form
- [ ] Time-based scheduling (datetime-local)
- [ ] Monthly recurring tasks

## Phase 3: UI/Polish **(0/4)**

### Step 9: CSS Updates 
- [ ] Remove bnav styles
- [ ] Filter/date picker components

### Step 10: Micro-animations
- [ ] Task completion + tab switch animations

### Step 11: Interactive Charts
- [ ] Progress rings + heatmap hovers

### Step 12: Enhanced Loading
- [ ] Progressive charts + better skeletons

## Phase 4: PWA/Performance **(0/3)**

### Step 13: sw.js Upgrades
- [ ] Dynamic caching + background sync

### Step 14: Code Splitting
- [ ] Lazy load stats/charts

### Step 15: Service Worker Improvements
- [ ] Precache assets + cache-first

## Phase 5: Testing/Advanced **(0/4)**

### Step 16: Unit Tests
- [ ] tests.js with core function tests

### Step 17: TypeScript Migration
- [ ] script.ts + type definitions

### Step 18: Smart Suggestions
- [ ] Habit correlations + predictions

### Step 19: Final Testing ✅
- [ ] Full flows + Lighthouse ≥90

**Progress: Step 4/19 ✅ | Next: Step 5 (Cached Stats)**

See [TODO-steps.md](TODO-steps.md) for detailed sub-steps and current progress.

