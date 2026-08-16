---
version: "1.0.0"
name: "Ramond Holdings System"
description: "A visual language designed for trust, longevity, and high-capital asset management."
colors:
  background: "#050505"
  surface: "#080808"
  surface-alt: "#0a0a0a"
  surface-card: "#1c1917"
  primary: "#f97316"
  text-primary: "#f5f5f4"
  text-secondary: "#a8a29e"
  text-muted: "#57534e"
  border: "rgba(255, 255, 255, 0.05)"
  accent-orange: "#ea580c"
typography:
  display-2xl:
    fontFamily: "Cinzel"
    fontSize: "128px"
    fontWeight: 400
    lineHeight: "0.9"
  display-xl:
    fontFamily: "Cinzel"
    fontSize: "72px"
    fontWeight: 400
    lineHeight: "0.9"
  heading-lg:
    fontFamily: "Cinzel"
    fontSize: "48px"
    fontWeight: 500
    lineHeight: "1.1"
  body-base:
    fontFamily: "Inter"
    fontSize: "16px"
    fontWeight: 300
    lineHeight: "1.6"
  label-mono:
    fontFamily: "monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: "1"
spacing:
  xs: "4px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "96px"
  section: "128px"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
  lg: "8px"
  full: "999px"
components:
  navigation:
    style: "minimal-overlay"
    blendMode: "difference"
  cards:
    variant: "investment-venture"
    border: "1px solid rgba(255, 255, 255, 0.05)"
    padding: "32px"
  buttons:
    variant: "icon-circle"
    size: "40px"
    hover: "bg-white text-black"
motion:
  duration: "500ms"
  curve: "cubic-bezier(0.4, 0, 0.2, 1)"
---

## Overview
The Ramond Holdings design system focuses on 'Spatial Integrity'. It utilizes deep blacks, stone-derived grays, and high-energy orange accents to communicate a blend of heritage and modern velocity.

## Colors
- **Deep Core**: The system is built on `#050505` to simulate physical gallery spaces.
- **Asset Accents**: Orange (`#f97316`) is used sparingly for status indicators and high-priority labeling.
- **Muted Tones**: Grayscale values are pulled from the 'Stone' palette to ensure a warm, natural feel rather than cold digital gray.

## Typography
- **Cinzel**: Used for branding and all display headings to evoke classical architectural inscriptions.
- **Inter**: Used for all functional data, body prose, and UI controls to ensure maximum readability.
- **Monospace**: Reserved for technical specs (valuations, dates, coordinates).

## Spacing
- Utilizes a generous 8px grid system with heavy emphasis on 'Section Spacing' (128px+) to create an elite, unhurried user experience.

## Layout
- **Sticky Split-Scroll**: High-density content (Portfolio) uses a sticky sidebar (1/3) paired with a vertical scrolling feed (2/3).
- **Snap Horizontal**: Galleries and venture cards use overflow-x snap-scrolling to prioritize mobile-first touch exploration.

## Elevation & Depth
- Depth is created through atmospheric blurs (blur-150px) rather than drop shadows.
- Gradients are used from black to transparent to anchor text over imagery.

## Shapes
- Predominantly sharp corners (0px) to reflect structural geometry.
- Subtle rounding (8px) is permitted only on 'Bento' style container cards.

## Components
- **Marquee**: A non-stop ticker for global market presence.
- **Investment Cards**: Borders expand on hover with inner-padding transitions.
- **Reveal Overlays**: Content is hidden beneath a grayscale filter, revealing on hover with a Y-axis translation.
- **Stat Bento**: A 4-column grid for quantitative performance metrics.

## Motion
- **Scale Hover**: Images should scale from 110% to 100% on hover for an 'entry' feel.
- **Difference Navigation**: Nav bars use `mix-blend-difference` to remain legible across varied background image brightness.

## Do's and Don'ts
- **Do**: Use high-contrast serif/sans-serif pairings.
- **Do**: Use grayscale filters as a default state for property photography.
- **Don't**: Use vibrant colors outside of the orange accent.
- **Don't**: Overcrowd the layout; white space (black space) is a luxury signal.

## Accessibility
- Maintain a minimum of 4.5:1 contrast for all functional text.
- Ensure navigation difference-blending works across all asset categories.
- Use ARIA labels for icon-only circular buttons.