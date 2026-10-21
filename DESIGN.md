---
name: Belfa Muhammad
description: Premium websites, designed by a marketer. A charcoal work desk with printed cards on it.
colors:
  desk: "#1c1b19"
  desk-raised: "#262522"
  card: "#f2f0eb"
  ink: "#141414"
  ink-soft: "#4a4740"
  chalk: "#efece6"
  chalk-soft: "#b9b4aa"
  signal: "#ff5b1f"
  signal-ink: "#c2341c"
typography:
  display:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(3.25rem, 13.5vw, 6rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  headline:
    fontFamily: "Archivo, sans-serif"
    fontSize: "clamp(2.75rem, 10vw, 4.5rem)"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  title:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.875rem"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "-0.01em"
    fontVariation: "'wdth' 68"
  lead:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Archivo, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.25
  data-label:
    fontFamily: "Archivo, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "0.05em"
rounded:
  none: "0px"
  hole: "9999px"
spacing:
  gutter: "16px"
  gutter-wide: "32px"
  sheet: "24px"
  sheet-wide: "40px"
  section: "80px"
  section-wide: "112px"
components:
  button-primary:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.ink}"
  button-primary-on-card-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chalk}"
  button-header:
    backgroundColor: "{colors.signal}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  button-outline:
    textColor: "{colors.chalk}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  card-sheet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "{spacing.sheet}"
  project-card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "16px"
    width: "272px"
    height: "352px"
  input-field:
    backgroundColor: "rgb(255 255 255 / 0.6)"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px"
  tape:
    backgroundColor: "{colors.signal}"
    width: "96px"
    height: "24px"
---

# Design System: Belfa Muhammad

## Overview

**Creative North Star: "The Marketer's Work Desk"**

The page is a charcoal desk seen from above. Everything that carries content is a physical object lying on it: printed project cards, a single sheet of process notes, swing tags for prices, a polaroid of Belfa, a form on card stock. Each object is off-white stock in black ink, held down by a strip of orange tape, lifted off the desk by a real paper shadow, and often tilted a few degrees. Between the objects, the desk itself carries the voice: huge condensed caps in chalk, and short readable prose.

The world is quiet and dark with one loud material. Signal orange is tape, the primary action and one key word per headline; it is never a fill for panels or a decorative gradient. Density is low: one idea per section, a heading column on the left and the object on the right on wide screens, stacked on phones.

The signature is the project card that flips: front shows the project, back shows the marketing brief behind it. Motion follows one grammar, a fast start and a long soft landing, and every movement steps aside for reduced motion.

**Key Characteristics:**
- Charcoal desk with faint grain; off-white card stock in ink as the only surface for content blocks.
- One accent (signal orange), deepened to signal-ink when it has to read as text on card stock.
- One type family, Archivo: condensed heavy caps for display, normal width for everything else.
- Square corners, real soft paper shadows, slight rotation, orange tape.
- One easing curve for the whole site: cubic-bezier(0.16, 1, 0.3, 1).

## Colors

A near-black desk, warm off-white paper, black ink and a single signal orange.

### Primary
- **Signal Orange** (signal): tape strips, the primary action fill, flip marks, focus outlines, text selection, scrollbar thumb, and the one key word of the hero and contact headlines. Reads at 5.5:1 on the desk and carries ink text at 5.9:1.
- **Signal Ink** (signal-ink): signal orange deepened for use as text on card stock: process step numbers, "Flip for the brief" / "Flip back" marks, the caret and invalid-field border in the form (4.85:1 on card).

### Neutral
- **Desk Charcoal** (desk): the page ground, always under the grain texture. Also fills the punched hole of a swing tag, so the desk shows through.
- **Raised Desk** (desk-raised): a lighter desk tone held in the token set; not used visibly in the shipped page.
- **Card Stock** (card): the surface of every object on the desk: project cards, process sheet, price tags, AI panel, polaroid, form.
- **Ink** (ink): text on card stock, the cover panel inside a project card, the portrait frame fill, and text on orange buttons.
- **Soft Ink** (ink-soft): secondary text on card stock: step descriptions, captions, "from", brief data labels.
- **Chalk** (chalk): headlines and primary prose written straight on the desk.
- **Soft Chalk** (chalk-soft): secondary prose on the desk, nav links at rest, footer; at 20 to 40% opacity it draws hairlines and outline-button borders on the desk.

### Named Rules
**The One Signal Rule.** Orange is the only accent. It appears as tape, the primary action, focus, and one key word per display headline at most; never as a panel fill, gradient, or second-tier highlight.

**The Deepen-On-Paper Rule.** When signal orange becomes text on card stock it switches to signal-ink. Bright signal is for the desk and for fills.

**The Ink On Paper, Chalk On Desk Rule.** Card stock carries ink and soft ink; the desk carries chalk and soft chalk. Text never crosses grounds with the wrong pair.

## Typography

**Display Font:** Archivo at 68% width, weight 850, uppercase (variable width axis loaded from Google Fonts)
**Body Font:** Archivo at normal width (with sans-serif)

**Character:** One family doing two jobs. Condensed heavy caps feel like a stamped poster headline; the normal-width cut stays plain and easy for non-native readers.

### Hierarchy
- **Display** (850, 68% width, clamp(3.25rem, 13.5vw, 6rem) on phones, clamp(4rem, 6.8vw, 6rem) on wide screens, line-height 0.92): the hero headline only. Contact uses a slightly smaller clamp(3rem, 11vw, 5.5rem).
- **Headline** (850, 68% width, clamp(2.75rem, 10vw, 4.5rem), 0.92): section headings on the desk.
- **Title** (850, 68% width, 1.875rem to 2.25rem, 0.92): display caps used small on card stock: step names, "The brief", project goal on the card cover (2.1rem), prices at 4.5rem.
- **Lead** (400, 1.125rem, 1.625): the paragraph under each heading, 34 to 38ch wide; About prose up to 60ch.
- **Body** (400, 1rem, 1.625): step text (56ch max), list items, terms.
- **Label** (600, 0.875rem): buttons, form labels, flip marks, card-cover status lines, nav (500).
- **Data Label** (600, 0.75rem, 0.05em tracking, uppercase): only the term labels of the brief on a card's back (Where, Goal, For, Action, Scope).

### Named Rules
**The Condensed-Caps Rule.** Display type is always uppercase Archivo at 68% width, weight 850, line-height 0.92, letter-spacing -0.01em, word-spacing 0.1em, balanced wrap. It is never set at normal width and never used for running text.

**The One Key Word Rule.** A display headline may color its final key word signal orange; the rest stays chalk. Shipped on the hero ("MARKETER.") and contact ("BUSINESS.") only.

## Layout

Mobile-first single column; from 1024px a 12-column grid inside a 1280px container with 16px gutters on phones and 32px from 640px. Sections stack with 80px vertical padding, 112px from 1024px. Wide sections split into a heading column (4 or 5 columns) and an object column (7 or 8 columns); the process heading stays sticky at 96px from the top while the sheet scrolls. Card-stock sheets pad 24px, 40px from 640px. Every interactive target is at least 44px tall (48px for the main buttons).

The project desk is 400px tall on phones (cards stacked in a loose pile, a "Next card" control below) and 544px on wide screens, where three cards scatter across the width and can be dragged; card scale follows desk width (0.75 to 1).

## Elevation & Depth

Depth is physical, not interface chrome. Objects on the desk cast a two-part paper shadow: a tight contact shadow plus a long soft drop. Nothing on the desk floats without it, and nothing on card stock (fields, lists) carries a shadow of its own. A lifted (dragged) card deepens its shadow. The desk grain is the only texture.

### Shadow Vocabulary
- **Paper rest** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.35), 0 18px 30px -8px rgb(0 0 0 / 0.55)`): project cards lying on the desk.
- **Paper sheet** (`box-shadow: 0 2px 3px rgb(0 0 0 / 0.35), 0 24px 40px -12px rgb(0 0 0 / 0.55)`): larger stock: process sheet, price tags, AI panel, polaroid, form.
- **Paper lifted** (`box-shadow: 0 4px 6px rgb(0 0 0 / 0.3), 0 34px 50px -10px rgb(0 0 0 / 0.6)`): a project card while it is being dragged.

### Named Rules
**The Real Paper Rule.** Shadows are soft and diffuse, always a contact layer plus a blurred drop. No hard offset shadows, no glow, no glass.

## Shapes

Square corners everywhere (0px): cards, sheets, buttons, fields, tape. The only round form is the punched hole of a swing tag (16px circle filled with desk, a thin ink ring), because a real tag has one. Objects tilt between about -7 and +4 degrees; tape strips are 96 by 24px at 90% opacity, rotated 2 to 3 degrees, overlapping the top edge by 12px. Hairlines are 1px at 15% ink on paper, 20 to 25% soft chalk on the desk; list bullets are short 12px dashes at 40% ink.

## Components

### Buttons
Flat orange blocks; confident and plain.
- **Shape:** square (0px).
- **Primary:** signal fill, ink label in Label weight, 48px tall, 24px side padding; the header version is 44px tall with 16px padding. Trailing arrow icon on the form submit.
- **Hover / Focus:** on the desk the fill turns chalk; on card stock it turns ink with chalk text. Focus is a 3px signal outline offset 3px, site-wide.
- **Outline (desk):** 1px soft-chalk border at 40%, chalk label; hover turns border and text signal. Used for "Next card".
- **Text link:** chalk text with a soft-chalk underline at 50%; hover turns text and underline signal. Leading or trailing 15 to 18px Lucide icons.

### Cards / Containers
- **Corner Style:** square.
- **Background:** card stock, ink text.
- **Shadow Strategy:** paper rest or paper sheet (see Elevation).
- **Border:** none; held by a tape strip or, for price tags, a punched hole.
- **Internal Padding:** 24px, 40px on wider screens; project cards 16 to 20px.

### Inputs / Fields
- **Style:** 1px ink border at 25% on white at 60% over card stock, square, 12px padding, 16px text, signal-ink caret, label above in Label weight.
- **Focus:** border goes full ink plus the 3px signal outline offset 1px.
- **Error:** invalid fields take a signal-ink border; the message sits below in 14px medium red text. Select uses a custom chevron.

### Navigation
Name left in 18px semibold chalk; on 768px and up, four section links in 14px medium soft chalk turning chalk on hover; the orange "Start a project" button always visible at the right. No mobile menu: on phones only the name and the button remain.

### Project Card (signature)
A 272 by 352px piece of card stock with tape at the top. Front: an ink cover panel holding three short soft-chalk status lines (including the honest "Concept project / In progress" marking) and the project goal in display caps, then a signal-ink "Flip for the brief" mark. Back: "The brief" in display caps over a term list (Where, Goal, For, Action, Scope) in data labels and body text, and a "Flip back" mark. Flips in 3D by tap, click or Enter (500ms, the house ease); with reduced motion the faces swap instantly. Cards drop onto the desk once on load, staggered 160ms, and can be dragged on wide screens, with a "Tidy the desk" reset.

### Swing Tag
Price cards hang from a punched hole and settle with a small spring sway when scrolled into view; prices are display caps at 4.5rem beside a soft-ink "from".

### Process Sheet
One sheet of card stock with numbered steps separated by hairlines; the signal-ink numbers land like a rubber stamp (spring scale and rotate) and stay visible before and after.

## Do's and Don'ts

### Do:
- **Do** put every content block that is not a heading or lead paragraph on card stock with a paper shadow and a tape strip or punched hole.
- **Do** use cubic-bezier(0.16, 1, 0.3, 1) for transitions and honor prefers-reduced-motion by removing rotation, drops and smooth scroll.
- **Do** switch signal to signal-ink when orange text sits on card stock.
- **Do** tilt objects a few degrees (within about -7 to +4) so the desk feels handled, not gridded.
- **Do** keep tap targets at 44px or more and focus visible as the 3px signal outline.

### Don't:
- **Don't** use gradients, glass or blur panels, or icon tiles.
- **Don't** round corners on cards, buttons, fields or tape; the punched hole is the only circle.
- **Don't** use hard offset shadows; paper shadows are soft.
- **Don't** add a second accent color or use orange as a panel background.
- **Don't** set running text in the condensed display cut, or display headings at normal width.
- **Don't** introduce a second typeface.
