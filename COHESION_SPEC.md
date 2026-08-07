# Cohesion Framer Template — Complete Home Page Spec
> Reference document for replicating cohesion.framer.ai exactly.
> Source: live site inspection + codebase audit. July 2026.

---

## 1. DESIGN TOKENS

### Colors
```
Background primary    #FFFFFF  (--bg)
Background alt        #F8F8F8  (--bg-alt)   ← alternating sections
Background hero       #fafafa              ← slightly off-white
Raised surface        #F5F5F3  (--raised)
Card background       #FFFFFF  (--card)

Accent orange         #F97316  (--accent)          ← primary brand
Accent hover          #EA6C0A  (--accent-hover)
Accent light          rgba(249,115,22,0.08)
Accent border         rgba(249,115,22,0.22)

Text primary          #111111  (--text)
Text dim              rgba(17,17,17,0.54)           ← body / subtitles
Text muted            rgba(17,17,17,0.34)           ← labels, tags
Text ghost            rgba(17,17,17,0.14)           ← connectors, decorative

Border default        rgba(0,0,0,0.07)   (--border)
Border hover          rgba(0,0,0,0.16)
Surface tag bg        rgba(0,0,0,0.035)

Dark sections bg      #111111                       ← CTA + Footer
Nav active pill       rgb(250,108,56)              ← exact Cohesion orange-red
Flip card front bg    #6670ff                      ← indigo/purple
Flip card glow        rgba(102,112,255,0.38)
BG drift text         rgba(17,17,17,0.06)          ← subtle watermark
```

### Shadows
```
--shadow-xs   0 1px 2px rgba(0,0,0,0.04)
--shadow-sm   0 1px 4px rgba(0,0,0,0.05), 0 4px 14px rgba(0,0,0,0.04)
--shadow      0 2px 10px rgba(0,0,0,0.07), 0 10px 30px rgba(0,0,0,0.05)
--shadow-lg   0 6px 22px rgba(0,0,0,0.10), 0 20px 60px rgba(0,0,0,0.07)

Nav pill        0px 5px 20px 0px rgba(0,0,0,0.06)
Flip card       0 32px 64px -12px rgba(102,112,255,0.52), 0 20px 20px 0 rgba(0,0,0,0.10)
CTA btn hover   0 8px 28px rgba(249,115,22,0.35)
```

### Typography
```
--font-display   Space Grotesk    weights: 400/500/600/700
                 Used: ALL text (headings, body, nav, buttons)
--font-mono      JetBrains Mono
                 Used: labels, overlines, uppercase tags, monogram
--font-serif     PT Serif         weights: 400/700, italic
                 Used: italic name "Dhanush" in hero h1 only
```

### Type Scale
```
Hero h1            clamp(26px, 3.2vw, 48px)   weight 500   Space Grotesk
Hero name (em)     same size                   weight 700   PT Serif italic
Section h2         clamp(2.2rem, 5vw, 4rem)   weight 700   Space Grotesk
CTA mega           clamp(3rem, 9vw, 9rem)     weight 700   Space Grotesk
Footer watermark   clamp(5rem, 18vw, 18rem)   weight 900   Space Grotesk
BG drift text      clamp(120px, 22vw, 380px)  weight 900   color rgba(17,17,17,0.06)
Body               0.9375rem (15px)            weight 400   line-height 1.75
Label / overline   0.625rem (10px)             uppercase 0.16em tracking
Nav links          0.875rem (14px)             weight 500
Buttons            0.9375rem                   weight 600   -0.01em
```

### Layout / Spacing
```
Container max-width   86rem
Container padding     1.25rem → 2rem (sm) → 3.5rem (lg)
.section              padding-block: 6rem (4rem mobile)
.section-sm           4rem (2.5rem mobile)
.section-lg           9rem (5.5rem mobile)
Card border-radius    20px
Button border-radius  9999px (full pill)
Flip card radius      48px
Pill nav outer        borderRadius: 24px
Pill nav per item     borderRadius: 96px
```

---

## 2. SECTION ORDER

```
1. Navigation       fixed, z-50
2. Hero             #fafafa bg
3. DesignPrinciples #F8F8F8 bg
4. MarqueeStrip     #ffffff bg
5. SelectedWork     #ffffff bg
6. Process          #ffffff bg
7. Testimonials     #F8F8F8 bg
8. CTA              #111111 bg (dark)
9. Footer           #111111 bg (dark)
```

---

## 3. NAVIGATION

```
Fixed, inset-x-0, top-0, z-50, paddingTop: 16px, height: 64px

Left:
  DN monogram — 32×32px, borderRadius 10px, bg #111, white text, font-mono 11px
  "Dhanush N." — 14px weight 600 Space Grotesk, color #111

Center (hidden on mobile, lg:flex):
  Pill container: bg #fff, borderRadius 24px,
                  boxShadow 0px 5px 20px 0px rgba(0,0,0,0.06)
                  height 48px, padding 4px, gap 2px
  Each link: height 40px, padding 0 18px, fontSize 14px, weight 500
    Active:   bg rgb(250,108,56), color #fff, borderRadius 96px
    Inactive: bg transparent, color #4d4d4d

Right:
  Resume pill: bg #111, color #fff, height 40px, padding 0 18px,
               borderRadius 96px, fontSize 14px weight 600
               ArrowUpRight size 13px, hover opacity 0.8
  Mobile toggle: 40×40px circle, border rgba(0,0,0,0.1), bg #fff

Entry animation: y -12→0, opacity 0→1, 500ms ease [0.21,0.47,0.32,0.98]

Mobile menu: slides below nav at top: 80px (64px header + 16px paddingTop)
  bg white/96 backdrop-blur-xl
  Each row: numbered 01–04, 2xl bold Space Grotesk
  Active: color rgb(250,108,56)
```

---

## 4. HERO SECTION

```
Background: #fafafa, min-h-screen, paddingTop: 64px

─── BACKGROUND LAYER ──────────────────────────────────────────
Drift text: "UI UX · PRODUCT DESIGNER"
  Font:     Space Grotesk weight 900
  Size:     clamp(120px, 22vw, 380px)
  Color:    rgba(17,17,17,0.06)   ← subtle watermark, NOT solid #111
  Spacing:  letterSpacing -0.04em, lineHeight 0.88
  Overflow: hidden on container
  Animation: x: [0, -40, 0] over 28s, easeInOut, infinite

─── SHAPE LAYER (1100×700px container) ────────────────────────
Container: width 1100px, height 700px
           left 50%, top 50%, transform translate(-50%, -46%)

6 shapes (3-layer: parallax y → entry scale → CSS float):
  Position              File                    Size  Float   Parallax
  top:0 left:60         orange-pyramid.png      260px float-b fast(-160)
  top:0 right:60        orange-star.png         245px float-spin fast(-160)
  mid left:0 center-v   purple-torus.png        240px float-a mid(-90)
  mid right:0 center-v  lime-green-object.png   220px float-c mid(-90)
  bottom:0 left:60      turquoise-cube.png      230px float-d down(+70)
  bottom:0 right:60     yellow-cylinder.png     230px float-e slow(-45)

Shape entry: scale 0.55→1, opacity 0→1
             duration 1.1s, ease [0.16,1,0.3,1]
             delays: 0.18 / 0.24 / 0.32 / 0.36 / 0.44 / 0.40

─── CENTER CONTENT (z-10) ─────────────────────────────────────
Layout: flex col, items-center, text-center
minHeight: calc(100vh - 64px), paddingBlock: 5rem

Reveal animation (all elements):
  initial: opacity 0, y 22, filter blur(8px)
  animate: opacity 1, y 0,  filter blur(0px)
  duration 0.85s, ease [0.21,0.47,0.32,0.98]
  Delays: h1→0.10s, tag→0.18s, card→0.26s, stats→0.34s, CTA→0.42s

H1: "Hi, I'm Dhanush!"
  "Hi, I'm" + "!" — Space Grotesk weight 500, clamp(26px,3.2vw,48px), #000
  "Dhanush"        — PT Serif italic weight 700, same size, #000
  marginBottom: 14px, letterSpacing -0.02em, lineHeight 1.1

ROLLING TAG:
  Container: bg #fff, borderRadius 24px, 220×32px, overflow hidden
             boxShadow 0 2px 12px rgba(0,0,0,0.08)
  Items: "Product Designer" / "UX / UI Expert" / "Frontend Developer" / "Design Systems"
  Cycle: every 2200ms
  Animation: AnimatePresence mode "popLayout"
             enter y "100%"→0 opacity 0→1
             exit  y 0→"-100%" opacity 1→0
             duration 0.38s, ease [0.32,0.72,0,1]
  marginBottom: 32px

FLIP CARD: 280×280px, perspective 900px
  Trigger: onMouseEnter/Leave
  Framer: rotateY 0→180, duration 0.65s, ease [0.23,1,0.32,1]
         transformStyle preserve-3d

  Front: bg #6670ff, borderRadius 48px, overflow hidden
         boxShadow 0 32px 64px -12px rgba(102,112,255,0.52) + 0 20px 20px 0 rgba(0,0,0,0.10)
         backfaceVisibility hidden
         Image: /dhanush_image.jpeg, fill, objectPosition "48% 12%"

  Back: bg #fff, borderRadius 48px, transform rotateY(180deg)
        boxShadow 0 32px 64px -12px rgba(0,0,0,0.14) + 0 20px 20px 0 rgba(0,0,0,0.06)
        backfaceVisibility hidden
        Content: CircularBadge

  CircularBadge:
    SVG 190×190, path r=68 at 95,95
    Text: "★ SCROLL DOWN AND KNOW ME BETTER ★ SCROLL DOWN ★"
          fontSize 10.5, JetBrains Mono, fill #111, letterSpacing 0.14em
    Rotation: 360° / 18s linear infinite
    Center button: 52×52px circle, border 1.5px solid rgba(17,17,17,0.22)
                   bg #fff, boxShadow 0 2px 8px rgba(0,0,0,0.08)
                   ArrowDown size 20px color #111

  Glow shadow: position absolute, bottom -24px, left "8%", right "8%"
               height 40px, bg rgba(102,112,255,0.38)
               filter blur(22px), borderRadius 50%, zIndex -1

  marginBottom: 40px

STATS ROW: flex, gap 12px, marginBottom 28px
  Overlapping avatars (relative 84×36px):
    3 circles 32×32px, border "2px solid #fafafa"
    Positions left: 0 / 28 / 56px
    Colors: #4895EF (FT) / #F97316 (HT) / #52B788 (IM)
    Text: 7px weight 700 JetBrains Mono white 2-letter initials
  Stat text: "12 Products Shipped", 14px weight 500 #4d4d4d

CTA BUTTON:
  Outer: position relative, inline-flex, bg rgba(102,112,255,0.10)
         backdropFilter blur(6px), borderRadius 96px, padding 6px, overflow hidden
  Inner (Link /contact): bg #fff, borderRadius 48px, height 72px, padding 0 52px
                          fontSize 22px, weight 700, color #000, letterSpacing -0.02em
  Arrow circle: position absolute, right 6px, 72×72px, bg #000, borderRadius 48px
                starts x:84 (hidden), springs to x:0 on hover
                stiffness 340, damping 30, mass 0.8
                ArrowRight 26px white — rotates 180°→0° on hover (same spring)
```

---

## 5. ANIMATIONS MASTER LIST

### Hero load stagger
```
All: opacity 0→1, y 22→0, filter blur(8px)→blur(0px)
Duration 0.85s, ease [0.21,0.47,0.32,0.98]
h1: 0.10s  | Rolling tag: 0.18s | Flip card: 0.26s
Stats: 0.34s | CTA: 0.42s | Shapes entry: 0.18–0.44s
```

### CSS Float keyframes
```
float-up   (float-a/c/e): translateY(0→-18px) rotate(0→2deg)   5/4.5/5.5s
float-down (float-b/d):   translateY(0→+16px)  rotate(0→-2deg)  6/7s
float-spin:               translateY(0→-12px)  rotate(0→180deg) 8s
All: ease-in-out, infinite. Applied on innermost div (NOT Framer motion elements)
```

### Scroll parallax (useScroll target=sectionRef offset ["start start","end start"])
```
pFast: scrollY 0→1 maps y 0→-160px  (top shapes)
pMid:  scrollY 0→1 maps y 0→-90px   (mid shapes)
pSlow: scrollY 0→1 maps y 0→-45px   (bottom-right)
pDown: scrollY 0→1 maps y 0→+70px   (bottom-left)
```

### Background drift text
```
animate={{ x: [0, -40, 0] }}, duration 28s, easeInOut, infinite
Disabled when prefers-reduced-motion
```

### Marquee
```
translateX 0→-50%, 38s linear infinite
Hover: animation-play-state paused
Separator: rgba(249,115,22,0.5) dot
```

### Pulse dot (availability)
```
0%/100%: opacity 1, boxShadow 0 0 0 0 rgba(249,115,22,0.45)
50%:     opacity 0.75, boxShadow 0 0 0 6px rgba(249,115,22,0)
2.2s ease-in-out infinite
```

### Hover states
```
.card:hover         translateY(-4px), shadow→--shadow-lg
Project card        whileHover y:-5
CTA email arrow     bg→#f97316, scale 1.1
.btn-primary:hover  bg #EA6C0A, scale 1.04, shadow 0 8px 28px rgba(249,115,22,0.35)
Nav Resume:hover    opacity 0.8
```

---

## 6. 3-LAYER SHAPE ARCHITECTURE

```
Avoids transform conflicts between Framer Motion and CSS @keyframes:

Layer 1 (outermost) <motion.div>   → scroll parallax y via useTransform
Layer 2 (middle)    <motion.div>   → entry opacity + scale on mount ONLY
Layer 3 (inner)     <div class>    → CSS @keyframes float animation

NEVER mix Framer y-transform with CSS transform on the same element.
```

---

## 7. SHAPES MAP

```
File                    ID fragment              Shape
orange-pyramid.png      0f09LEy6qZK1Y9gL9T6A    Orange 3D pyramid
orange-star.png         YnQwe4Efg37DiOr8IRYE    Orange 5-point puffed star
purple-torus.png        2YMs3TUoFSk6OAJu3tqu    Purple torus/ring (donut)
lime-green-object.png   LUkmo3gFVQOfp5kvltA0    Lime green organic blob
turquoise-cube.png      tLJlDufDxfRWX3e1UyLW    Translucent teal cube
yellow-cylinder.png     5PoEhJTKleU3AaFM5T9a    Yellow flat disc/cylinder
```

---

## 8. KEY FILES

```
g:\port\app\globals.css                          Light design tokens, keyframes
g:\port\app\layout.tsx                           Space Grotesk + JetBrains Mono + PT Serif
g:\port\app\page.tsx                             Section order (no GradientMesh/CursorBlob)
g:\port\lib\site.ts                              siteConfig

g:\port\components\sections\Navigation.tsx       White pill nav + mobile menu
g:\port\components\sections\Hero.tsx             Full Cohesion hero
g:\port\components\sections\DesignPrinciples.tsx Numbered service rows (bg-alt)
g:\port\components\sections\MarqueeStrip.tsx     38s left-scrolling tool ticker
g:\port\components\sections\SelectedWork.tsx     Project card grid
g:\port\components\sections\Process.tsx          5-step horizontal process
g:\port\components\sections\Testimonials.tsx     Featured + 2-col quotes
g:\port\components\sections\CTA.tsx              Dark mega-type section
g:\port\components\sections\Footer.tsx           4-col grid + "DHANUSH" watermark

g:\port\public\shapes\                           6 3D PNG shape files
g:\port\public\dhanush_image.jpeg                Hero photo (flip card front)
```
