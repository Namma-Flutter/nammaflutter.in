# nammaflutter.in

Official website for **Namma Flutter** — Chennai's largest Flutter developer community.

Built with [Jaspr](https://jaspr.site), a Dart web framework with server-side rendering and client-side hydration. Pure Dart, no Flutter SDK dependency, ships as a lightweight JS bundle.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero, section previews, CTA |
| `/about` | Founding story, mission, stats |
| `/apps` | Open-source Flutter apps built by the community |
| `/programs` | Recurring programs — meetups, hackathons, workshops |
| `/events` | Past and upcoming events |
| `/team` | Founders and core team |
| `/store` | NammaStore (coming soon) |
| `/contact` | Socials, email, join CTA |

---

## Tech stack

| | |
|---|---|
| Framework | [Jaspr](https://jaspr.site) `^0.23` — SSR + hydration |
| Language | Dart `3.11.5` |
| Routing | [jaspr_router](https://pub.dev/packages/jaspr_router) |
| HTTP server | [shelf](https://pub.dev/packages/shelf) + [shelf_router](https://pub.dev/packages/shelf_router) |
| Styling | CSS-in-Dart via Jaspr's `Styles` API |

---

## Getting started

### Prerequisites

- Dart `3.11.5` on PATH
- Jaspr CLI: `dart pub global activate jaspr_cli`

### Install dependencies

```bash
dart pub get
```

### Run dev server

```bash
jaspr serve
# → http://localhost:8080
```

Hot reload is enabled by default. Edit any `.dart` file in `lib/` and the page refreshes automatically.

### Production build

```bash
jaspr build
# Output: build/jaspr/
```

Serve `build/jaspr/` with any static-compatible server (Vercel, Netlify, Fly.io, etc.).

---

## Project structure

```
lib/
├── main.server.dart          # Server entrypoint (shelf + SSR)
├── main.client.dart          # Client entrypoint (hydration)
├── app.dart                  # Root App component — Router, Header, Footer
│
├── constants/
│   └── theme.dart            # Design tokens + global CSS
│
├── components/               # Shared UI components
│   ├── header.dart           # Sticky nav (server-rendered)
│   ├── footer.dart           # Site footer (server-rendered)
│   ├── section.dart          # Section wrapper with container
│   ├── card.dart             # NammaCard — title, description, tags
│   ├── button.dart           # Button.primary / .secondary / .ghost
│   ├── hero.dart             # Landing hero section
│   ├── cta_band.dart         # Full-width CTA strip
│   └── section_preview.dart  # Icon + title + link card (Home page)
│
├── data/                     # Content as const Dart lists
│   ├── apps.dart             # NammaApps
│   ├── programs.dart         # Community programs
│   ├── events.dart           # Past + upcoming events
│   ├── team.dart             # Founders + core team
│   └── socials.dart          # Community URLs (GitHub, Discord, etc.)
│
└── pages/                    # @client page components
    ├── home.dart
    ├── about.dart
    ├── apps.dart
    ├── programs.dart
    ├── store.dart
    ├── events.dart
    ├── team.dart
    └── contact.dart
```

---

## Updating content

All content is stored as `const` Dart lists in `lib/data/`. No CMS, no API — just edit the file and restart the dev server.

- **Add an app** → `lib/data/apps.dart`
- **Add an event** → `lib/data/events.dart`
- **Add a team member** → `lib/data/team.dart`
- **Update social links** → `lib/data/socials.dart`

Items marked `// TODO: confirm` in the data files need a verified URL before launch.

---

## Contributing

1. Fork the repo and create a feature branch.
2. Run `dart analyze lib/` — no errors expected.
3. Run `dart format --line-length 120 lib/` before committing.
4. Open a pull request against `master`.

---

## Community

| Platform | Link |
|---|---|
| GitHub | [github.com/Namma-Flutter](https://github.com/Namma-Flutter) |
| Discord | Join via the link in `lib/data/socials.dart` |
| Twitter / X | @NammaFlutter |
