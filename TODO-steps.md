# Fortis Anima PWA - Full Implementation Tracker (19 Steps)

## Current Status
- **Phase 2 Step 4 ✅ Complete** (Offline queuing + sync)
- **Next: Phase 2 Step 5** (Cache statistics computations)

## Phase 2: Core Features (5/5 remaining after 4)

### Step 5: Cache Statistics Computations [IN PROGRESS]
- [ ] 5.1 Enhance statsDB: Add daily/weekly/monthly aggregates (honos/dt, streaks, goals)
- [ ] 5.2 computeStats(): Calculate → cache aggregates on mutations + background
- [ ] 5.3 renderStats(): Read from cache (instant), show 'cached' indicator  
- [ ] 5.4 UI: Loading states + offline stats indicator
- [ ] 5.5 Tests: Offline stats render, online background sync
- [ ] 5.6 Update TODO.md: Mark 5 ✅

### Step 6: Enhanced Error Handling [PENDING]
- [ ] 6.1 Wrap all DB/mutations in try-catch
- [ ] 6.2 Add toast notifications for errors
- [ ] 6.3 Input validation + boundaries
- [ ] 6.4 Network error handling in processQueue()

### Step 7: Habit Completion Rate Line Charts [PENDING]
- [ ] 7.1 Add Chart.js line chart to stats panel (daily honos/dt trends)
- [ ] 7.2 7-day/30-day views toggle
- [ ] 7.3 Mobile responsive sizing

### Step 8: Extend Task Form [PENDING]
- [ ] 8.1 Add time picker (datetime-local)
- [ ] 8.2 Monthly recurring select (daily/weekly/monthly)
- [ ] 8.3 Update task schema + midnight logic

## Phase 3: UI/Polish (0/4)

### Step 9: CSS Updates [PENDING]
- [ ] 9.1 Remove bnav styles 
- [ ] 9.2 Add filter/date picker components
- [ ] 9.3 New animations/transitions

### Step 10: Micro-animations [PENDING]
- [ ] 10.1 Task completion scale + confetti
- [ ] 10.2 Tab switch fade/slide

### Step 11: Interactive Charts [PENDING]
- [ ] 11.1 Progress rings hover details
- [ ] 11.2 Heatmap hover tooltips

### Step 12: Enhanced Loading [PENDING]
- [ ] 12.1 Progressive charts (skeleton → data)
- [ ] 12.2 Better skeleton states

## Phase 4: PWA/Perf (0/3)

### Step 13: Upgrade sw.js [PENDING]
- [ ] 13.1 Dynamic caching for JS chunks
- [ ] 13.2 Background sync API

### Step 14: Code Splitting [PENDING]
- [ ] 14.1 Dynamic import stats/charts
- [ ] 14.2 Lazy load heavy components

### Step 15: SW Improvements [PENDING]
- [ ] 15.1 Precache all assets
- [ ] 15.2 Cache-first strategy

## Phase 5: Testing/Advanced (0/4)

### Step 16: Unit Tests [PENDING]
- [ ] 16.1 Create tests.js
- [ ] 16.2 Test core functions (queue, stats, mutations)

### Step 17: TypeScript Migration [PENDING]
- [ ] 17.1 Rename script.js → script.ts
- [ ] 17.2 Add type definitions

### Step 18: Smart Suggestions [PENDING]
- [ ] 18.1 Log correlations analysis
- [ ] 18.2 ML-style habit predictions

### Step 19: Final Testing [PENDING]
- [ ] 19.1 Full offline/online flows
- [ ] 19.2 PWA Lighthouse audit ≥90
- [ ] 19.3 attempt_completion

**Progress: 4/19 complete. Currently on Step 5.1**

