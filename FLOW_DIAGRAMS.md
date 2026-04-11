# Sticky ProjectCard Position Flow Diagram

## How Position Switching Works

```
┌─────────────────────────────────────────────────────────────────┐
│                   Container Visibility Check                     │
│              useInView(threshold: 0.2, triggerOnce: false)        │
└─────────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            NOT IN VIEW           IN VIEWPORT
                    │                   │
                    ▼                   ▼
        ┌──────────────────┐  ┌──────────────────┐
        │ position:absolute │  │  Check Card View │
        │                  │  │ useInView(0.3)    │
        │ Row continues    │  └──────────────────┘
        │ with absolute    │         │
        └──────────────────┘         │
                              ┌─────────┴─────────┐
                              │                   │
                        CARD NOT VIEW        CARD IN VIEW
                              │                   │
                              ▼                   ▼
                  ┌──────────────────┐  ┌──────────────────┐
                  │ position:absolute │  │ Check All Rows   │
                  │                  │  │   Are Loaded?    │
                  └──────────────────┘  └──────────────────┘
                                               │
                                    ┌──────────┴──────────┐
                                    │                     │
                            ALL LOADED         ROWS LOADING
                                    │                     │
                                    ▼                     ▼
                      ┌──────────────────────┐ ┌──────────────────────┐
                      │  position: absolute   │ │  position: fixed     │
                      │                      │ │                      │
                      │  Row continues as    │ │ Card becomes sticky  │
                      │  normal overlay      │ │ Centered on screen   │
                      │  stacked cards       │ │ Stays visible until  │
                      │                      │ │ all rows loaded      │
                      └──────────────────────┘ └──────────────────────┘
```

---

## Component Hierarchy

```
ProjectCardSection (Container)
│
├─ useInView() → containerInView
│  └─ Tracks if section in viewport
│
├─ allRowsLoaded State
│  └─ Updates when projects fetch completes
│
└─ ProjectCard[] (Multiple Cards Per Row)
   │
   ├─ Props Received:
   │  ├─ containerInView ✓
   │  └─ allRowsLoaded ✓
   │
   └─ useInView() → cardInView
      └─ Tracks if card in viewport
```

---

## Position Decision Tree

```
START: Render ProjectCard
│
├─ Is Hydrated? ──NO──> Render as ABSOLUTE (prevent hydration mismatch)
│  └─ YES
│
├─ containerInView? ──NO──> Render as ABSOLUTE
│  └─ YES
│
├─ cardInView? ──NO──> Render as ABSOLUTE
│  └─ YES
│
├─ allRowsLoaded? ──YES──> Render as ABSOLUTE
│  └─ NO
│
└─ Render as FIXED ✓ (All conditions met!)
```

---

## Dynamic Styling Application

### Motion.div Style Object

```javascript
{
  // Position switching
  position: 'absolute' | 'fixed'      // Dynamic
  zIndex: 110                          // Based on index
  
  // Fixed positioning (when position === 'fixed')
  top: '50%'                           // Center vertically
  left: '50%'                          // Center horizontally
  transform: 'translate(-50%, -50%)'   // Offset center
  width: '90%'                         // Responsive width
  maxWidth: '1200px'                   // Max width limit
  
  // Absolute positioning (when position === 'absolute')  
  top: 'auto'                          // Normal flow
  left: 'auto'                         // Normal flow
  transform: 'none'                    // No transform
  width: '100%'                        // Full width
  maxWidth: 'none'                     // No limit
}
```

---

## Animation Behavior

### When Position Changes

```
Frame 1: position: absolute
         y: offset value (e.g., 30, 60, 90)
         scale: 0.95
         opacity: 1

         ↓ (0.9s transition, easeOut)

Frame 2: position: fixed
         y: 0 (no offset needed, centered)
         scale: 0.95
         opacity: 1
         
         [Fixed state while rows loading...]
         
Frame 3: position: absolute
         y: offset value
         scale: 0.95
         opacity: 1
```

---

## State Management Flow

```
ProjectCardSection
│
├─ [isHydrated] ─────────────────┐
│  (Set on mount)                │
│                                 │
├─ [projects] ─────────────────┐  │
│  (Fetch from DB)              │  │
│                               │  │
├─ [allRowsLoaded] ◄───┐        │  │
│  (Auto-update)       │        ▼  ▼
│                      └─ useEffect: projectLoaded?
│
├─ [activeIndex] ────────── useScroll + smoothProgress
│
└─ [containerInView] ◄──── useInView(containerRef)
   (From useInView hook)
        │
        ▼ Pass Props
        
ProjectCard × N
│
├─ useInView() ──► cardInView
│
├─ useMemo(positionState) ──► positionType
│  (Based on all signals)
│
└─ Render with dynamic styling
```

---

## CSS Cascade & Specificity

```
Generic CSS
   ↓
.project-card {
  position: absolute;
  height: 500px;
  ...
}
   ↓ Specificity: 0,1,0
   
Scoped CSS
   ↓
.project-card[style*="position: fixed"] {
  position: fixed !important;
  box-shadow: 10px 10px 30px rgba(0,0,0,0.6);
  z-index: 100 !important;
}
   ↓ Specificity: 0,2,0 + !important = Wins
   
Inline Styles (Highest Priority)
   ↓
style={{
  position: positionState.positionType,
  ...
}}
```

---

## Responsive Breakpoints

```
Desktop (≥ 1200px)
├─ Fixed Width: 90%
├─ Max Width: 1200px
└─ Height: 500px

Tablet (768px - 1199px)
├─ Fixed Width: 95%
├─ Max Width: 100%
└─ Height: 450px

Mobile (< 768px)
├─ Fixed Width: 98%
├─ Max Width: 100%
├─ Height: 400px
└─ Layout: Stacked (flex-direction: column)
```

---

## Hydration-Safe Rendering

```
Phase 1: SSR (Server-Side Rendering)
├─ isHydrated = false (initial state)
├─ Render as: position: absolute
└─ User sees: Loading state + absolute cards

         ↓ (Browser receives HTML)

Phase 2: Hydration
├─ React mounts component
├─ useEffect runs: setIsHydrated(true)
└─ Triggers re-render

         ↓

Phase 3: Client Rendering
├─ isHydrated = true (from useEffect)
├─ Full logic runs: intersection observers, state checks
├─ Render as: position: fixed OR absolute (based on rules)
└─ User sees: Smooth positioning change

📌 No Hydration Mismatch!
```

---

## Performance Optimizations

```
1. useMemo(positionState)
   └─ Prevents recalculation on every render
   └─ Only updates when dependencies change
   
2. will-change: transform, opacity, position
   └─ Hints to browser GPU optimization
   └─ Smooth 60fps animations

3. useInView(threshold: 0.3)
   └─ Only 30% of card needs to be visible
   └─ Reduces unnecessary position changes

4. useInView(threshold: 0.2)
   └─ Container detection at 20% visibility
   └─ Early activation of fixed state

5. Motion.div with spring physics
   └─ Natural easing: easeOut
   └─ Duration: 0.9s per transition
```

---

## Expected User Experience

```
Scenario: User scrolls through projects

1. Before container in view
   └─ All cards: position: absolute (stacked)

2. Container enters viewport
   └─ Active cards: position: fixed (if rows loading)
   └─ User sees card jump to center (smooth animation)

3. While rows loading
   └─ Cards remain fixed
   └─ User scrolls, card stays centered
   └─ Other cards fade/scale behind it

4. All rows loaded
   └─ Cards return to absolute
   └─ User sees smooth transition back to stacking

5. Beyond container view
   └─ All cards: position: absolute
```

---

## Debugging Guide

```
Check 1: Is card fixed?
└─ Open DevTools
└─ Inspect card element
└─ Look for: style="position: fixed"

Check 2: Why not fixed?
├─ containerInView = false?
│  └─ Scroll section into view
├─ cardInView = false?
│  └─ Scroll card into view
├─ allRowsLoaded = true?
│  └─ Wait for data to load
└─ isHydrated = false?
   └─ Wait for mount

Check 3: Position flickering?
└─ Check: isHydrated state logging
└─ Check: useInView callback logging
└─ Check: Browser console for errors

Check 4: CSS not applying?
└─ Check: CSS selector specificity
└─ Check: !important flags
└─ Check: Media query breakpoints
```

---

## Summary

✅ **Smart Positioning**: Automatically switches between absolute ↔ fixed
✅ **Row-Based**: Each row manages independently
✅ **SSR Safe**: Proper hydration handling
✅ **Type Safe**: Full TypeScript with no `any` types
✅ **Performance**: memoized calculations + GPU hints
✅ **Responsive**: All breakpoints covered
✅ **No Conflicts**: Scoped CSS + inline styles
✅ **Smooth**: Framer Motion with easing

