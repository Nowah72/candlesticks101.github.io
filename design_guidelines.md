# Candlesticks101 Showcase Website - Design Guidelines

## Design Approach
**Reference-Based Approach** drawing inspiration from premium fintech and educational app showcases (Stripe, Robinhood, Duolingo, Linear). Focus on clean, professional aesthetic that communicates trust and expertise while highlighting the app's educational value.

## Typography System
- **Primary Font**: Inter or SF Pro Display (Google Fonts CDN)
- **Secondary Font**: Space Grotesk for headings (adds technical/trading feel)

**Hierarchy**:
- Hero Headline: 4xl to 6xl, bold weight (700-800)
- Section Headlines: 3xl to 4xl, semibold (600)
- Feature Titles: xl to 2xl, medium (500-600)
- Body Text: base to lg, regular (400)
- Small Text/Captions: sm, regular (400)

## Layout & Spacing System
**Tailwind Spacing Units**: Consistently use 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Component spacing: gap-8 or gap-12
- Card padding: p-6 or p-8
- Container: max-w-7xl with px-6

## Page Structure (6-7 Sections)

### 1. Hero Section (80vh)
- Left-aligned content (60% width) with headline, subheadline, and dual CTA buttons (Google Play + App Store with platform icons from Heroicons)
- Right-aligned: Large iPhone mockup displaying app screenshot (floating with subtle shadow)
- Buttons over any background imagery: backdrop-blur-lg with semi-transparent background

### 2. Key Features Grid (3-column desktop, 1-column mobile)
- 6 feature cards in grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Each card: Heroicon at top, feature title, 2-3 line description
- Cards with border treatment and subtle hover lift effect
- Features: 50+ Lessons, Interactive Charts, Pattern Recognition, Risk Management, Progress Tracking, Trading Psychology

### 3. App Screenshots Showcase
- Horizontal scrolling gallery or 3-column grid showing 5-6 in-app screenshots
- Each screenshot in phone frame mockup with shadow
- Caption below each: "Pattern Library", "Interactive Learning", "Progress Dashboard", etc.

### 4. What You'll Learn (2-column layout)
- Left column: Larger feature with icon
- Right column: 3 stacked cards with icons
- Topics: Candlestick Patterns, Technical Analysis, Risk Management, Trading Psychology
- Each with icon (Heroicons: ChartBarIcon, AcademicCapIcon, ShieldCheckIcon, SparklesIcon)

### 5. Why Choose Section (Centered content)
- Single column, max-w-4xl
- 4-item list with checkmarks highlighting differentiators
- Emphasized text: "Structured lessons", "Real-world examples", "Visual learning"

### 6. Community & Support (2-column split)
- Left: Contact information with email and Discord link as prominent buttons
- Right: Simple contact form or additional support info
- Include support hours/response time expectations

### 7. Footer (3-column on desktop)
- Column 1: Logo and tagline
- Column 2: Quick links (Features, Support, Privacy)
- Column 3: Download buttons + Social links
- Bottom bar: Copyright and disclaimer link

## Component Library

**Buttons**:
- Primary CTA: Large (px-8 py-4), rounded-lg, font-semibold
- Secondary: Outlined variant with border-2
- Download buttons: Include platform icons, slightly larger hit areas

**Cards**:
- Feature cards: Rounded-xl, border or subtle shadow, p-6 or p-8
- Hover state: Subtle lift (transform translate-y-1)

**Icons**: 
- Use Heroicons throughout via CDN
- Icon sizes: w-6 h-6 for inline, w-12 h-12 for feature cards

**Phone Mockups**:
- Use SVG phone frame wrapper for screenshots
- Shadow: shadow-2xl for depth
- Slight rotation (rotate-2) for visual interest in hero

## Images

### Required Images:
1. **Hero Phone Mockup** (right side, 40% section width): iPhone frame showing app's main learning interface with candlestick chart
2. **App Screenshots** (5-6 images): Screenshots showing different app screens - pattern library, lesson view, interactive chart, progress dashboard, quiz interface, dark mode view
3. **Logo**: Candlesticks101 logo in header (h-8 to h-10)
4. **App Store Badges**: Official Google Play and Apple App Store download badges

### Image Placement:
- Hero: Large phone mockup with app screenshot, floating right
- Screenshots section: Horizontal scrolling gallery or grid of 5-6 framed screenshots
- All screenshots in phone frame mockups for consistency

## Accessibility
- All interactive elements have min-height of 44px
- Form inputs with visible labels and placeholder text
- Sufficient contrast ratios for all text
- Focus states on all interactive elements with ring utility classes
- Semantic HTML structure (header, main, section, footer)

## Animations
**Minimal, purposeful animations only**:
- Scroll-triggered fade-in for sections (intersection observer)
- Subtle hover lifts on cards (transform duration-200)
- No parallax, no complex scroll animations
- Smooth scroll behavior for navigation

## Navigation
- Sticky header with logo left, nav links center/right
- Mobile: Hamburger menu with slide-in drawer
- CTA button always visible in header (Download App)
- Smooth scroll to sections on click

This design prioritizes clarity, professionalism, and effective app showcase while maintaining modern fintech aesthetic standards.