<p align="center">
  <img src="assets/folio-logo.svg" alt="Folio" width="320" />
</p>

<p align="center">
  An open-source student workspace for notes, assignments and deadlines.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-In%20Development-6366F1?style=flat-square" alt="In development" />
</p>

<p align="center">
  <em>Your school notes, your way.</em>
</p>

---

## About Folio

Folio is an open-source note-taking and study management application
designed specifically for students.

The goal is to bring typed notes, handwriting, drawings, assignment
tracking and academic organisation together in one workspace.

Folio is being designed to work offline, with cloud synchronisation
keeping your work up to date across devices when you're back online.

## Key Features

- **Unified notes:** Combine rich text, handwriting, sketches and diagrams.
- **Assignment tracking:** Manage coursework, due dates, priorities and progress.
- **Calendar and table views:** Visualise upcoming deadlines or manage assignments in a structured table.
- **Student organisation:** Organise notes and assignments by modules and topics.
- **Offline-first:** Create and edit saved work without an internet connection.
- **Cloud synchronisation:** Keep your notes and assignments synchronised across devices.
- **Cross-platform:** Target Windows, macOS, iPadOS and Android tablets.
- **Open source:** Built with transparency and community contributions in mind.

*These are planned capabilities. Folio is currently in development
and is not yet ready for everyday use.

## Platforms

Folio is planned as a cross-platform application using a shared
codebase and an installable web application approach.

| Platform | Planned support |
|---|---|
| Windows | Desktop and browser |
| macOS | Desktop and browser |
| iPadOS | Tablet and stylus |
| Android tablets | Tablet and stylus |

Platform support and feature compatibility will be verified through
testing on real devices.

## Technology Stack

| Technology | Purpose |
|---|---|
| React + TypeScript | Application interface and logic |
| Vite | Build tooling |
| Tiptap / ProseMirror | Rich-text editor |
| SVG or Canvas | Handwriting and drawing |
| IndexedDB + Dexie | Local storage |
| Supabase + PostgreSQL | Authentication and cloud data |
| Vitest + Playwright | Testing |

These are the current architectural choices and may evolve during
development.

## Development Status

Folio is in the planning and early development stage.

The initial priorities are:

- [ ] Establish the application foundation.
- [ ] Build the core note editor.
- [ ] Integrate handwriting and drawing.
- [ ] Implement reliable local storage and offline access.
- [ ] Develop cloud synchronisation and conflict handling.
- [ ] Build the assignment manager with calendar and table views.
- [ ] Test across supported platforms.

See the [development roadmap](docs/ROADMAP.md) for planned milestones.

## Documentation

| Document | Purpose |
|---|---|
| [Technical Specification](docs/TECHNICAL_SPEC.md) | Functional requirements and technical design |
| [Development Roadmap](docs/ROADMAP.md) | Milestones and implementation plan |
| [Architecture Decisions](docs/DECISIONS/) | Important design decisions and rationale |
| [Contributing Guide](CONTRIBUTING.md) | How to contribute to Folio |
| [Security Policy](SECURITY.md) | How to report security vulnerabilities |

## Contributing

Contributions, feedback and ideas from students and developers
will be welcome.

Please read the [contributing guide](CONTRIBUTING.md) before
submitting significant changes. Do not include credentials,
private notes or other sensitive information in public issues.

## License

Folio is licensed under the [MIT License](LICENSE).

You may use, modify and distribute the software in accordance
with the terms of the licence.

---

<p align="center">
  <strong>Folio — Your notes, your way.</strong>
</p>