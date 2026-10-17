# Folio Development Roadmap

This document outlines the planned development of Folio.

The roadmap prioritises a reliable core application before introducing
advanced features.

## Project Goals

Folio aims to provide students with:

- A unified editor for typed notes, handwriting, and drawings.
- Academic organisation for notebooks, modules, and lectures.
- An assignment manager with calendar and table views.
- Reliable local storage and offline access.
- Cloud synchronisation between personal devices.
- A consistent experience across Windows, macOS, iPadOS, and Android tablets.

See [TECHNICAL_SPEC.md](TECHNICAL_SPEC.md) for the detailed functional and
technical requirements.

## How to Read This Roadmap

Development is organised into milestones. Each milestone contains tasks and
completion criteria.

A milestone is complete when its acceptance criteria have been met and
relevant tests have passed.

This roadmap describes the intended order of development. Priorities may
change as implementation progresses and new requirements emerge.

No fixed release dates are set at this stage.

### Status Legend

- `PLANNED` — Not yet started.
- `IN PROGRESS` — Currently being implemented.
- `COMPLETE` — Acceptance criteria have been met and verified.
- `BLOCKED` — Progress depends on an unresolved issue or decision.

---

## Milestone 1 — Project Foundation

**Goal:** Establish a maintainable development environment and repository.

### Tasks

- [ ] Initialise the React and TypeScript application using Vite.
- [ ] Configure development scripts and dependency management.
- [ ] Establish the initial source directory structure.
- [ ] Configure code formatting and linting.
- [ ] Set up automated tests with Vitest.
- [ ] Establish the initial responsive application layout.
- [ ] Add a basic continuous integration workflow.
- [ ] Document local development requirements and commands.

### Acceptance Criteria

- [ ] The application runs locally.
- [ ] The production build completes successfully.
- [ ] Automated tests can run locally and in CI.
- [ ] Code formatting and linting are configured.
- [ ] The repository has a clear and maintainable structure.

**Status:** PLANNED

---

## Milestone 2 — Core Note Editor

**Goal:** Build the first usable version of the note-taking experience.

### Tasks

- [ ] Integrate the rich-text editor.
- [ ] Define the initial structured document format.
- [ ] Support paragraphs, headings, lists, and basic formatting.
- [ ] Support code blocks and other useful academic content.
- [ ] Implement note creation, editing, and deletion.
- [ ] Create the initial notebook and note navigation interface.
- [ ] Add basic title editing and note organisation.
- [ ] Establish a shared document model that can accommodate drawing content.

### Acceptance Criteria

- [ ] Users can create and edit notes.
- [ ] Basic formatting behaves consistently.
- [ ] Notes can be navigated and organised.
- [ ] The document structure can represent future drawing blocks.
- [ ] Editor components have appropriate tests.

**Status:** PLANNED

---

## Milestone 3 — Handwriting and Drawing

**Goal:** Allow typed content and freehand drawing to coexist in one note.

### Tasks

- [ ] Implement an embedded drawing component.
- [ ] Support stylus, touch, and mouse input.
- [ ] Support basic pen, eraser, and colour controls.
- [ ] Store drawing data in a format suitable for later editing.
- [ ] Allow text and drawing content to coexist in one document.
- [ ] Preserve drawings when notes are saved and reopened.
- [ ] Investigate pressure sensitivity where supported by the device and browser.
- [ ] Establish how drawing tools interact with text selection and scrolling.

### Acceptance Criteria

- [ ] Users can draw and write within a note.
- [ ] Typed content and drawing content remain part of one logical document.
- [ ] Drawings can be saved, reopened, and edited.
- [ ] Drawing input does not routinely trigger unwanted page scrolling.
- [ ] The interface remains usable with both a mouse and touch input.

**Status:** PLANNED

---

## Milestone 4 — Local Storage and Offline Support

**Goal:** Make note editing dependable without an internet connection.

### Tasks

- [ ] Implement persistent local storage with IndexedDB.
- [ ] Introduce a storage abstraction independent of the editor interface.
- [ ] Save notes and drawing data locally.
- [ ] Add reliable automatic saving.
- [ ] Handle save failures and unsaved changes.
- [ ] Configure service-worker caching for the application shell.
- [ ] Add appropriate offline and connection-status indicators.
- [ ] Ensure existing content remains accessible without a connection.
- [ ] Test storage persistence and recovery.

### Acceptance Criteria

- [ ] Notes survive page reloads and application restarts.
- [ ] Existing notes remain accessible offline.
- [ ] Users can create and edit notes without internet access.
- [ ] Temporary connectivity loss does not interrupt local editing.
- [ ] Unsaved work is not silently discarded.
- [ ] Offline behaviour is tested in supported browsers.

**Status:** PLANNED

---

## Milestone 5 — Student Organisation

**Goal:** Make academic notes easy to organise and retrieve.

### Tasks

- [ ] Implement notebooks and folders.
- [ ] Support organising notes by academic year and module.
- [ ] Add lecture and topic organisation.
- [ ] Add favourites and recently opened notes.
- [ ] Implement note search.
- [ ] Add tags where appropriate.
- [ ] Support moving notes between notebooks or folders.
- [ ] Ensure organisational changes persist locally.

### Acceptance Criteria

- [ ] Students can organise notes around their academic structure.
- [ ] Notes can be found through search and navigation.
- [ ] Moving or renaming notes does not lose their content.
- [ ] Organisational changes remain available offline.

**Status:** PLANNED

---

## Milestone 6 — Assignment and Deadline Tracking

**Goal:** Provide a student-focused assignment manager with calendar and table views.

### Tasks

- [ ] Define the assignment data model.
- [ ] Implement assignment creation, editing, and deletion.
- [ ] Support assignment titles, descriptions, modules, and due dates.
- [ ] Add progress statuses such as Not Started, In Progress, and Completed.
- [ ] Add assignment priorities.
- [ ] Implement a calendar view.
- [ ] Implement a sortable and filterable table view.
- [ ] Allow switching between calendar and table views.
- [ ] Add filters for modules, statuses, priorities, and due dates.
- [ ] Highlight approaching and overdue deadlines.
- [ ] Save assignment changes locally.
- [ ] Test date handling, including time zones where relevant.

### Acceptance Criteria

- [ ] Students can create and manage assignments.
- [ ] Assignments appear correctly in both calendar and table views.
- [ ] Changes made in one view are reflected in the other.
- [ ] Sorting and filtering return the expected results.
- [ ] Due dates and overdue states are calculated consistently.
- [ ] Assignment data remains accessible offline.

**Status:** PLANNED

---

## Milestone 7 — Accounts and Cloud Infrastructure

**Goal:** Establish the foundation for secure cross-device synchronisation.

### Tasks

- [ ] Configure the hosted backend.
- [ ] Implement user authentication.
- [ ] Define cloud database schemas and migrations.
- [ ] Configure database access policies.
- [ ] Separate user data appropriately.
- [ ] Establish authenticated communication between Folio and the backend.
- [ ] Define how local records map to cloud records.
- [ ] Plan deletion handling and data recovery.
- [ ] Document configuration and secret-management requirements.

### Acceptance Criteria

- [ ] Users can authenticate through the configured service.
- [ ] Database access policies restrict users to authorised data.
- [ ] Database migrations can be applied reproducibly.
- [ ] Private information and credentials are not exposed in the client.
- [ ] Backend access and error handling have appropriate tests.

**Status:** PLANNED

---

## Milestone 8 — Cloud Synchronisation

**Goal:** Synchronise notes and assignments reliably between a student's devices.

### Tasks

- [ ] Implement a queue for locally changed records.
- [ ] Upload pending changes when connectivity returns.
- [ ] Retrieve changes made on other devices.
- [ ] Handle failed requests and retry operations safely.
- [ ] Prevent duplicate processing of repeated operations.
- [ ] Track revisions or versions of synchronised records.
- [ ] Detect conflicting edits.
- [ ] Preserve conflicting changes and provide a safe recovery process.
- [ ] Handle deletions consistently across devices.
- [ ] Apply synchronisation to notes, drawings, and assignments.
- [ ] Test repeated disconnection and reconnection.
- [ ] Document synchronisation guarantees and limitations.

### Acceptance Criteria

- [ ] Changes made online reach other connected devices.
- [ ] Local changes remain available while offline.
- [ ] Pending changes synchronise after reconnection.
- [ ] Failed synchronisation can be retried safely.
- [ ] Conflicting edits are detected rather than silently overwritten.
- [ ] Synchronisation failures do not silently discard local work.
- [ ] Automated tests cover important failure and recovery scenarios.

**Status:** PLANNED

---

## Milestone 9 — Cross-Platform Compatibility

**Goal:** Provide a reliable experience on desktop computers and tablets.

### Target Platforms

- Windows
- macOS
- iPadOS
- Android tablets

### Tasks

- [ ] Refine responsive layouts for desktop and tablet screens.
- [ ] Test the application in relevant desktop browsers.
- [ ] Test the application on a real iPad.
- [ ] Test the application on a real Android tablet.
- [ ] Verify installation behaviour on supported platforms.
- [ ] Test keyboard shortcuts and text selection.
- [ ] Test touch gestures and stylus input.
- [ ] Verify offline storage and application-shell caching.
- [ ] Verify synchronisation across different device types.
- [ ] Document known platform limitations.

### Acceptance Criteria

- [ ] Core note and assignment workflows function on each tested platform.
- [ ] The application is usable with touch, keyboard, and mouse input as appropriate.
- [ ] Offline behaviour has been verified on supported browsers.
- [ ] Cross-device synchronisation has been tested.
- [ ] Platform-specific limitations are documented accurately.

**Status:** PLANNED

---

## Milestone 10 — Testing, Beta, and Initial Release

**Goal:** Prepare Folio for testing by students and an initial public release.

### Tasks

- [ ] Review functional and technical requirements.
- [ ] Expand automated coverage for critical workflows.
- [ ] Run regression testing.
- [ ] Check keyboard accessibility and basic accessibility requirements.
- [ ] Test data recovery and synchronisation failure scenarios.
- [ ] Gather feedback from student testers.
- [ ] Resolve high-priority usability and reliability issues.
- [ ] Complete installation and development documentation.
- [ ] Review the security policy and data-handling practices.
- [ ] Prepare release notes and versioning conventions.
- [ ] Publish the initial release when the acceptance criteria are met.

### Acceptance Criteria

- [ ] Critical note-taking and assignment workflows are stable.
- [ ] Local storage and offline access work as specified.
- [ ] Cross-device synchronisation meets its documented guarantees.
- [ ] No known critical issue prevents intended everyday use.
- [ ] Installation, limitations, and supported platforms are documented.
- [ ] Release notes accurately describe the delivered functionality.

**Status:** PLANNED

---

## Future Features

The following features are outside the initial core release and will be evaluated after the foundations are reliable.

- [ ] PDF import and annotation.
- [ ] Mathematical equation tools.
- [ ] Handwriting recognition and handwritten-text search.
- [ ] Audio recordings linked to notes.
- [ ] Flashcards and revision tools.
- [ ] Version history and recovery.
- [ ] Collaborative notes and shared study spaces.
- [ ] Optional self-hosting.
- [ ] Further assignment planning and workload insights.

These items are exploratory. Their priority and implementation details will be decided as the project develops.

---

## Roadmap Maintenance

This roadmap is a living document.

Milestones may be reordered, refined, split, or expanded as technical challenges and student feedback become clearer.

When updating the roadmap:

- Mark tasks complete only after verifying the implementation.
- Add discovered work to the appropriate milestone.
- Document major changes in direction where necessary.
- Keep detailed requirements in `TECHNICAL_SPEC.md`.
- Record significant architectural choices under `DECISIONS/`.
- Avoid assigning release dates until estimates are reasonably reliable.

The goal is not simply to complete a checklist. It is to build Folio into a dependable and useful tool for students.