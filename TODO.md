# Fortis Anima Enhancement TODO

## Status: 3/19 Complete

### Phase 1: Immediate Fixes (Priority 1) ✅

- [x] 1. Remove bottom nav bar (.bnav) from index.html + cleanup CSS/JS references
- [x] 2. Update tab navigation logic in script.js (remove .nb toggling)

### Phase 2: Core Feature Additions

- [x] 3. Add advanced task filtering (date ranges, categories) to script.js
- [ ] 4. Implement offline task/log queuing + sync in script.js
- [ ] 5. Cache statistics computations (streaks, goals, insights)
- [ ] 6. Enhance error handling + boundaries (try-catch, toasts)
- [ ] 7. Add habit completion rate line charts to stats panel
- [ ] 8. Extend task form: time-based scheduling, monthly recurring

### Phase 3: UI/Polish

- [ ] 9. Update CSS: Remove bnav styles, add new components (filters, date pickers)
- [ ] 10. Add micro-animations for task completion/tab switches
- [ ] 11. Enhance progress rings + heatmap interactivity (hover details)
- [ ] 12. Improve skeleton loading + progressive charts

### Phase 4: PWA/Perf

- [ ] 13. Upgrade sw.js: dynamic caching, background sync
- [ ] 14. Code splitting: Lazy load stats/charts
- [ ] 15. Add service worker improvements (precache assets)

### Phase 5: Testing/Advanced

- [ ] 16. Create tests.js with unit tests for core functions
- [ ] 17. Migrate to TypeScript (script.ts + config)
- [ ] 18. Add smart suggestions based on correlations
- [ ] 19. Final testing + completion

**Next:** Step 1 - Remove bottom navigation bar.
