# Folio — Technical Specification

> **Project:** Folio  
> **Document:** Technical Specification  
> **Status:** Proposed  
> **Version:** 1.0  
> **Licence:** MIT

## 1. Overview

Folio is an open-source, student-focused note-taking and study management application designed to bring academic notes, handwriting, drawings, assignments and deadlines together in one workspace.

The application will use a shared codebase to support Windows, macOS, iPadOS and Android tablets.

Folio will follow an **offline-first architecture**. Core editing and organisation features must work without an active internet connection, with changes synchronised to a hosted cloud service when connectivity returns.

This document defines the functional requirements, architectural direction, data models, storage strategy, synchronisation behaviour, security requirements and testing criteria for the initial application.

### 1.1 Core objectives

Folio must:

- Combine typed text, handwriting and drawing within the same note.
- Provide an optional freeform canvas for diagrams and spatial notes.
- Allow students to organise academic material by modules and topics.
- Provide an assignment manager with calendar and table views.
- Preserve user changes locally when offline.
- Synchronise notes and assignments across a student's devices.
- Detect conflicting edits without silently losing user data.
- Provide a responsive experience across the four target platforms.
- Remain free and open source under the MIT Licence.

### 1.2 Scope

The initial development focus is the note editor, local storage, offline functionality, assignment management and reliable synchronisation.

PDF annotation, real-time collaboration, handwriting recognition and other advanced features are outside the initial scope.

---

## 2. Target Users and Platforms

### 2.1 Intended users

Folio is designed for students who need to manage lecture notes, handwritten content, coursework and assignment deadlines.

The application should accommodate different academic disciplines, including computer science, mathematics, engineering, sciences and humanities.

### 2.2 Supported platform targets

| Platform | Intended experience |
|---|---|
| Windows | Desktop browser and installable web application where supported |
| macOS | Desktop browser and installable web application where supported |
| iPadOS | Touch-friendly interface, stylus input and Home Screen installation where supported |
| Android tablets | Touch-friendly interface, stylus input and web application installation where supported |

### 2.3 Platform requirements

- The main application should use a shared codebase.
- Layouts must adapt to desktop, tablet and touch input.
- Keyboard, mouse, touch and stylus interactions must be supported where applicable.
- Local storage must be persistent and independent of cloud availability.
- Platform-specific limitations must be documented.
- Compatibility must be verified on real devices before a platform is described as fully supported.

Folio will initially be developed as a Progressive Web App (PWA). Separate native applications are not required for the initial release.

---

## 3. Functional Requirements

Requirements are assigned identifiers so they can be referenced in issues, tests and future development discussions.

### 3.1 Note management

**FR-NOTE-001 — Create notes**

Users must be able to create new notes.

**FR-NOTE-002 — Edit notes**

Users must be able to edit existing notes and their titles.

**FR-NOTE-003 — Delete notes**

Users must be able to delete notes. Deletion must be handled consistently by local storage and the synchronisation system.

**FR-NOTE-004 — Automatic saving**

Changes must be saved locally without requiring the user to press a save button.

**FR-NOTE-005 — Persistence**

Saved notes must remain available after the application is reloaded or restarted.

**FR-NOTE-006 — Note navigation**

Users must be able to navigate between their notes and notebooks.

**FR-NOTE-007 — Search**

Users must be able to search note titles and, where indexing supports it, note content.

**FR-NOTE-008 — Recovery**

The application must not silently discard unsaved work when a save operation fails or the device loses connectivity.

### 3.2 Rich-text editing

**FR-EDIT-001 — Structured content**

The editor must support paragraphs, headings, lists, links, tables and code blocks.

**FR-EDIT-002 — Formatting**

Users must be able to apply and remove supported text formatting.

**FR-EDIT-003 — Mixed content**

Typed text and drawing content must coexist within one logical document.

**FR-EDIT-004 — Keyboard support**

Common editing operations must be usable with a physical keyboard where applicable.

**FR-EDIT-005 — Document integrity**

Editing text must not accidentally remove unrelated drawing data or other content.

### 3.3 Handwriting and drawing

**FR-DRAW-001 — Freehand input**

Users must be able to draw using a mouse, finger or stylus, depending on device capabilities.

**FR-DRAW-002 — Embedded drawings**

Drawings must be insertable into notes alongside typed text.

**FR-DRAW-003 — Editing**

Users must be able to add further strokes to saved drawings.

**FR-DRAW-004 — Persistence**

Drawing data must survive saving, reloading and synchronisation.

**FR-DRAW-005 — Drawing tools**

The initial drawing tools should include a pen, eraser and selectable stroke colour. Additional tools can be added later.

**FR-DRAW-006 — Touch interaction**

Drawing interactions must be designed to reduce accidental scrolling and unwanted gestures.

**FR-DRAW-007 — Pressure sensitivity**

Pressure-sensitive input may be supported where the browser, device and input hardware expose the necessary capabilities.

**FR-DRAW-008 — Optional canvas**

The document editor should allow for a separate freeform canvas experience for diagrams and spatial notes.

The embedded drawing system and optional canvas should reuse compatible drawing representations where practical.

### 3.4 Student organisation

**FR-ORG-001 — Notebooks**

Users must be able to create and manage notebooks.

**FR-ORG-002 — Academic modules**

Users must be able to organise academic material by module or subject.

**FR-ORG-003 — Topics**

Users should be able to organise notes by lecture, topic or other user-defined grouping.

**FR-ORG-004 — Moving content**

Users must be able to move notes between supported notebooks and folders without losing content.

**FR-ORG-005 — Favourites**

Users should be able to mark notes as favourites.

**FR-ORG-006 — Recent notes**

The interface should provide access to recently opened notes.

**FR-ORG-007 — Offline organisation**

Changes to notebooks and note organisation must be available offline and synchronised later.

### 3.5 Assignment tracking

Folio must include an assignment manager integrated into the same student workspace as notes.

#### Assignment records

**FR-ASG-001 — Create assignments**

Users must be able to create assignments.

**FR-ASG-002 — Edit assignments**

Users must be able to update an assignment's details, status, priority and due date.

**FR-ASG-003 — Delete assignments**

Users must be able to delete assignments, with deletions handled consistently across devices.

**FR-ASG-004 — Assignment information**

Each assignment must support:

- Title.
- Description.
- Associated module or subject.
- Due date.
- Optional submission time.
- Progress status.
- Priority.
- Creation and modification timestamps.

**FR-ASG-005 — Progress statuses**

The initial statuses must include:

- Not Started.
- In Progress.
- Completed.

**FR-ASG-006 — Priority levels**

The initial priority levels should include Low, Medium and High.

**FR-ASG-007 — Due dates**

Assignments must be displayed according to their due dates.

Overdue assignments must be identifiable when their deadlines have passed and their statuses are not Completed.

#### Calendar view

**FR-ASG-008 — Calendar display**

Users must be able to view assignments in a calendar.

**FR-ASG-009 — Calendar navigation**

Users must be able to navigate between dates and calendar periods.

**FR-ASG-010 — Assignment selection**

Selecting an assignment in the calendar must allow the user to inspect or edit its details.

**FR-ASG-011 — Deadline visibility**

Upcoming and overdue assignments must be visually distinguishable.

The initial calendar should support a practical month view. Week and day views may be added where useful.

#### Table view

**FR-ASG-012 — Table display**

Users must be able to view assignments in a structured table.

**FR-ASG-013 — Sorting**

Users must be able to sort assignments by supported fields, including due date, module, priority and status.

**FR-ASG-014 — Filtering**

Users must be able to filter assignments by module, status, priority and due date.

**FR-ASG-015 — View switching**

Users must be able to switch between calendar and table views without creating duplicate assignment records.

Both views must use the same underlying assignment data.

#### Offline assignment management

**FR-ASG-016 — Local persistence**

Assignments must be stored locally and remain available offline.

**FR-ASG-017 — Offline editing**

Users must be able to create, edit and delete assignments without an internet connection.

**FR-ASG-018 — Synchronisation**

Assignment changes must be included in the synchronisation system.

### 3.6 Import and export

The following are planned for a later release:

- Export notes to PDF and Markdown.
- Import and annotate lecture slides or PDF documents.
- Insert external images and screenshots.
- Provide additional backup and data portability options.

PDF annotation is explicitly outside the initial MVP scope.

---

## 4. Technology Stack

The following is the proposed stack for the initial implementation. Decisions may be revised if implementation or testing exposes limitations.

| Component | Technology | Responsibility |
|---|---|---|
| Frontend | React | User interface |
| Language | TypeScript | Application logic and type safety |
| Build tooling | Vite | Development and production builds |
| Distribution | Progressive Web App | Browser access and installation |
| Rich-text editor | Tiptap / ProseMirror | Structured document editing |
| Drawing | SVG or canvas-based layer | Handwriting and diagrams |
| Local database | IndexedDB | Persistent local data |
| Local database library | Dexie | IndexedDB access and schema management |
| Authentication | Supabase Auth | User identity and sessions |
| Cloud database | PostgreSQL via Supabase | Remote data storage |
| Testing | Vitest | Unit and component tests |
| Browser testing | Playwright | End-to-end and browser workflow tests |
| Version control | Git and GitHub | Source code and collaboration |

Dependencies should be selected and introduced deliberately. The architecture should not require every proposed library to be adopted before the first working editor can be tested.

---

## 5. Application Architecture

Folio should be organised into independently testable components.

### 5.1 Major components

**Application interface**

Responsible for navigation, responsive layouts, settings and general interaction.

**Note editor**

Responsible for rich-text editing, document structure and embedded drawing blocks.

**Drawing system**

Responsible for capturing strokes, rendering drawings and applying drawing tools.

**Assignment manager**

Responsible for assignment records, calendar and table views, filtering and sorting.

**Local storage layer**

Responsible for persistent device storage and retrieval of notes, drawings, assignments and organisational metadata.

**Synchronisation engine**

Responsible for tracking pending changes, communicating with the cloud service, handling retries and identifying conflicts.

**Cloud service**

Responsible for authentication, authorised access to remote records and durable cloud storage.

### 5.2 Separation of responsibilities

The editor must not depend directly on cloud connectivity.

The assignment interface must not depend directly on network requests to display saved records.

Application components should use defined interfaces to communicate with local storage and synchronisation services.

This separation should allow editor and assignment functionality to be tested independently from the cloud backend.

---

## 6. Document and Data Models

Data models must be documented and versioned so they can evolve without accidentally invalidating existing user data.

The following models describe the initial design direction. Exact implementation types may vary.

### 6.1 Note

A note should contain:

| Field | Purpose |
|---|---|
| `id` | Stable unique identifier |
| `title` | Note title |
| `notebookId` | Associated notebook, if applicable |
| `moduleId` | Associated academic module, if applicable |
| `content` | Structured document representation |
| `createdAt` | Creation timestamp |
| `updatedAt` | Most recent modification timestamp |
| `schemaVersion` | Version of the document format |
| `revision` | Version or revision identifier used for synchronisation |
| `deletedAt` | Optional deletion timestamp for synchronisation |

### 6.2 Document content

The document content should use a structured format compatible with the selected editor.

A simplified example:

```json
{
  "type": "doc",
  "content": [
    {
      "type": "heading",
      "attrs": {
        "level": 1
      },
      "content": [
        {
          "type": "text",
          "text": "Lecture Notes"
        }
      ]
    },
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "An explanation of the topic."
        }
      ]
    },
    {
      "type": "drawing",
      "attrs": {
        "drawingId": "example-drawing-id"
      }
    }
  ]
}
```

This is illustrative JSON rather than a final editor schema.

The exact drawing representation must be established during editor implementation.

### 6.3 Drawing data

Drawing records should have stable identifiers and a representation suitable for storing individual strokes and their properties.

Potential properties include:

- Drawing identifier.
- Associated note identifier.
- Stroke coordinates.
- Stroke colour.
- Stroke width.
- Pressure data, when supported.
- Drawing format version.

The implementation must decide whether drawings are stored directly inside the document or referenced as separate records. That choice must preserve reliable editing and synchronisation.

### 6.4 Notebook and module

A notebook should support:

- A stable identifier.
- A title.
- Optional organisational metadata.
- Creation and modification timestamps.

An academic module should support:

- A stable identifier.
- A module name.
- Optional module code and academic period.
- Creation and modification timestamps.

The application must not require university-specific integrations for basic module organisation.

### 6.5 Assignment

Each assignment should support:

| Field | Purpose |
|---|---|
| `id` | Stable unique identifier |
| `title` | Assignment title |
| `description` | Optional details |
| `moduleId` | Associated module, if applicable |
| `dueDate` | Required deadline date |
| `dueTime` | Optional submission time |
| `status` | Not Started, In Progress or Completed |
| `priority` | Low, Medium or High |
| `createdAt` | Creation timestamp |
| `updatedAt` | Most recent modification timestamp |
| `revision` | Version or revision identifier |
| `deletedAt` | Optional deletion timestamp |

The implementation must handle date-only deadlines consistently and avoid accidental date shifts caused by timezone conversions.

If a submission time is specified, the application must define which timezone is used to interpret and display it.

### 6.6 Identifiers and data integrity

Stable identifiers must be generated locally so records can be created while offline.

Creating an assignment or note must not require a round trip to the server to obtain its identity.

Relationships between notes, drawings, notebooks, modules and assignments must remain valid during synchronisation and recovery.

### 6.7 Schema evolution

Stored documents and database records must include sufficient version information to support future migrations.

Migrations should be tested against existing data formats before being applied to user content.

The application must not silently discard content it cannot safely migrate.

---

## 7. Local Storage and Offline Behaviour

Offline functionality is a core architectural requirement, not an optional enhancement.

### 7.1 Local persistence

IndexedDB, accessed through Dexie, is the proposed local storage system.

It should store the records needed for normal application use, including:

- Notes and document content.
- Drawing data.
- Notebooks and organisational metadata.
- Modules.
- Assignments.
- Pending synchronisation operations.
- Revision metadata and conflict records where required.

### 7.2 Saving workflow

The expected workflow is:

1. The user changes a note or assignment.
2. Folio validates the change locally.
3. The change is written to local storage.
4. The interface reflects the saved state.
5. A synchronisation operation is queued when cloud sync is applicable.
6. The synchronisation engine processes pending operations when connectivity and authentication allow.

The interface must not report a change as safely saved if the local persistence operation has failed.

### 7.3 Offline application access

The PWA must cache the application resources required to reopen the interface when offline.

The implementation must distinguish between cached application resources and user data stored in IndexedDB. Cached files alone are not a substitute for persistent storage of notes.

Offline access normally assumes the application has already been loaded or installed and its required resources have been cached.

The application must explain when a feature requires connectivity rather than appearing to save changes that cannot be persisted.

### 7.4 Storage limitations

Browser storage can be subject to quotas, eviction and platform-specific restrictions.

Folio must handle storage failures visibly and avoid relying on unlimited local storage.

Users should be informed when they need to reconnect, free storage space or take another recovery action.

A future backup and export mechanism should reduce dependence on a single browser profile or device.

---

## 8. Cloud Storage and Authentication

Supabase Auth and PostgreSQL are the proposed hosted services.

### 8.1 Authentication

Authentication must establish which user's cloud records are being accessed.

Core local editing should not require an active network connection once the application is available offline.

Access to cloud synchronisation requires a valid authenticated session and appropriate server-side authorisation.

The exact first-run and local-only account experience must be confirmed before implementation.

### 8.2 Data ownership

Each student's cloud records must be associated with their authorised account or tenant.

Database access policies must prevent one student from reading or modifying another student's private records.

Client-side filtering alone is not a sufficient security boundary.

### 8.3 Database design

The cloud data model should support, at minimum:

- Notes.
- Drawings or their associated document data.
- Notebooks and modules.
- Assignments.
- Revision and synchronisation metadata.
- Deletion state where required for synchronisation.

The final database schema and migrations must be documented as implementation begins.

### 8.4 Network failures

The application must handle:

- Unavailable cloud services.
- Expired authentication sessions.
- Network timeouts.
- Permission errors.
- Failed uploads and downloads.
- Temporary connectivity loss.

A cloud failure must not cause locally saved changes to be automatically discarded.

---

## 9. Synchronisation Design

Synchronisation is a high-risk component because incorrect behaviour can cause permanent loss of student work.

### 9.1 Objectives

The synchronisation engine must:

- Upload locally changed records.
- Retrieve remote changes.
- Retry recoverable failures.
- Prevent duplicate processing from creating inconsistent records.
- Track changes and record revisions.
- Handle deleted records consistently.
- Detect conflicting modifications.
- Preserve local work during network failures.

### 9.2 Synchronisation queue

Pending operations must be stored locally so they survive application restarts.

The implementation should track enough information to determine:

- Which record changed.
- Which operation is pending.
- When the operation was created.
- Which revision it was based on.
- Whether the last attempt succeeded.
- Whether retrying is safe.

The design must avoid repeatedly applying non-idempotent operations in a way that creates duplicate or inconsistent records.

### 9.3 Revision checks

The initial synchronisation strategy should use record revisions or equivalent conditional updates to detect concurrent changes.

When an upload is based on an outdated revision, the system must not silently overwrite the newer remote version.

The exact revision mechanism must be established during implementation and tested against realistic offline scenarios.

### 9.4 Conflict handling

A conflict may occur when the same record is independently edited on two devices while those devices are offline.

The initial strategy must prioritise preserving both versions or otherwise retaining all conflicting content for safe reconciliation.

The application must not use an unconditional last-write-wins rule that silently destroys edits.

The user experience for reviewing and resolving conflicts should be designed before synchronisation is considered complete.

### 9.5 Deletions

Deleting a record on one device must eventually be reflected on the other devices without allowing an old offline copy to silently recreate deleted content.

A deletion marker or equivalent mechanism may be required until all relevant devices have reconciled the change.

The implementation must define how deletions interact with conflicts and recovery.

### 9.6 Synchronisation scope

The same synchronisation principles apply to:

- Notes.
- Embedded drawing data.
- Notebooks and organisational changes.
- Academic modules.
- Assignments and their due dates, statuses and priorities.

### 9.7 Synchronisation status

The interface should communicate meaningful states, such as:

- Saved locally.
- Waiting to sync.
- Synchronising.
- Synced.
- Sync needs attention.

Status indicators must reflect actual storage and synchronisation results.

A record must not be marked as synced before the server confirms that the change was accepted.

### 9.8 Initial release limitations

Real-time collaborative editing is outside the initial scope.

The primary goal is reliable synchronisation between a student's own devices, including devices that have been offline for extended periods.

---

## 10. Security and Privacy Requirements

### 10.1 General security

Folio must use secure communication for cloud services and implement appropriate authentication and authorisation.

The application must not expose privileged backend credentials in client-side code.

### 10.2 Data isolation

Users must only be able to access cloud data they are authorised to access.

Database access policies must be tested independently of the application interface.

### 10.3 Input and document safety

The application must handle untrusted input safely.

Imported content and user-created links must not be allowed to execute arbitrary code.

### 10.4 Secret management

Secrets and credentials must not be committed to source control.

Environment configuration and local development instructions must distinguish public client configuration from privileged server-side secrets.

### 10.5 Privacy-conscious operation

Logs and error reports should avoid exposing private note content, credentials and other sensitive information unnecessarily.

Any future analytics or telemetry must be evaluated for privacy impact.

### 10.6 Recovery and user control

The design should support practical recovery from failed synchronisation and accidental deletion.

Backup, version history and advanced recovery features may evolve after the MVP, but the initial synchronisation implementation must not silently discard conflicting edits.

---

## 11. Performance and Usability

Folio must remain practical for everyday study.

### 11.1 Responsiveness

The interface must adapt to desktop and tablet screen sizes without requiring a separate application codebase.

### 11.2 Editing

Ordinary text editing, navigation and assignment management should not depend on avoidable network latency.

### 11.3 Large documents

The editor and drawing implementation should be designed so that larger notes remain manageable.

Performance should be measured using realistic documents rather than relying exclusively on small demonstration notes.

### 11.4 Accessibility

The interface should consider:

- Keyboard navigation.
- Visible focus states.
- Accessible names for interactive controls.
- Sufficient text and interface contrast.
- Readable typography.
- Touch targets appropriate for tablet use.
- Clear error and synchronisation messages.

### 11.5 Input handling

The application must account for differences between mouse, touch, keyboard and stylus interactions.

Stylus behaviour and palm rejection depend partly on platform and browser capabilities and must be verified on real hardware.

---

## 12. Error Handling

The application must handle recoverable errors without destroying existing user data.

Important failure scenarios include:

- Local database unavailable or full.
- Failure to persist an edit.
- Application reload during editing.
- Network disconnection during a sync operation.
- Cloud service unavailable.
- Authentication expired.
- Revision conflict during an upload.
- Incompatible stored document version.
- Invalid or missing assignment data.

Errors should provide an understandable indication of what happened and, where possible, what the user can do next.

A recoverable failure should not automatically become permanent data loss.

---

## 13. Testing Requirements

Testing must cover individual components and complete user workflows.

### 13.1 Unit tests

Unit tests should cover:

- Document transformations.
- Drawing data serialisation.
- Assignment status and priority handling.
- Date and overdue calculations.
- Sorting and filtering.
- Local storage operations.
- Synchronisation state transitions.
- Revision checks and conflict detection.

### 13.2 Integration tests

Integration tests should cover:

- Saving and reopening notes.
- Persistence of drawing content.
- Assignment creation and editing.
- Calendar and table consistency.
- Local changes queued for synchronisation.
- Server changes downloaded to a device.
- Failure and retry behaviour.
- Deletions and conflicting edits.

### 13.3 End-to-end tests

End-to-end tests should cover representative student workflows, including:

1. Create a note, add text and drawing content, and reopen it.
2. Create an assignment and view it in both calendar and table modes.
3. Edit a note and assignment while offline.
4. Reconnect and verify that pending changes synchronise.
5. Edit the same note independently on two devices and verify conflict detection.
6. Confirm that one account cannot access another account's private cloud records.

### 13.4 Platform testing

The application must be tested in relevant browsers on Windows and macOS and on real iPadOS and Android tablet devices before claiming full support.

Automated browser tests alone are insufficient to verify stylus handling, palm rejection, installation behaviour and every aspect of offline storage.

### 13.5 Failure testing

Tests should include:

- Interrupted network requests.
- Repeated requests.
- Application restarts during pending synchronisation.
- Failed local writes.
- Simultaneous offline edits.
- Deletions while another device remains offline.
- Expired authentication sessions.

---

## 14. MVP Acceptance Criteria

The MVP is considered ready for a public student beta only when the agreed core workflows have been implemented and verified.

### Notes

- Users can create, edit and organise notes.
- Rich text and drawing content coexist in a logical document.
- Saved notes survive application restarts.
- Notes remain accessible offline after the application has been made available on the device.

### Assignments

- Users can create, edit and delete assignments.
- Assignments contain modules, due dates, priorities and progress statuses.
- Calendar and table views show the same underlying records.
- Sorting, filtering and deadline presentation behave consistently.
- Assignment data remains accessible and editable offline.

### Synchronisation

- Local changes are queued when cloud synchronisation is unavailable.
- Pending changes sync after connectivity and authentication are restored.
- Failed operations can be retried safely.
- Conflicting edits are detected.
- Conflicting user content is not silently discarded.
- Notes and assignments can be synchronised between a student's devices.

### Security

- Cloud records are restricted to authorised users.
- Privileged credentials are not exposed in the client.
- Database access controls have been tested.

### Cross-platform experience

- Core workflows have been verified on Windows, macOS, iPadOS and Android tablets.
- Responsive interaction is usable with the input methods appropriate to each device.
- Known limitations are documented.

The release must not be described as meeting these criteria until the relevant implementations and tests have been completed.

---

## 15. Out of Scope for the Initial MVP

The following are deliberately excluded from the initial release:

- PDF annotation and lecture-slide markup.
- Real-time collaborative editing.
- Handwriting recognition and OCR.
- AI-generated revision materials.
- Audio transcription.
- Native applications maintained separately for every platform.
- Advanced sharing and classroom collaboration.
- Optional self-hosting.

These features may be considered after the core editor, offline storage, assignment manager and synchronisation are reliable.

---

## 16. Related Documentation

| Document | Purpose |
|---|---|
| [README](../README.md) | Project overview and main features |
| [Development Roadmap](ROADMAP.md) | Milestones and implementation tasks |
| [Architecture Decision Records](DECISIONS/) | Rationale for important technical choices |
| [Contributing Guide](../CONTRIBUTING.md) | Contribution workflow and development expectations |
| [Security Policy](../SECURITY.md) | Responsible vulnerability reporting |

---

## 17. Specification Maintenance

This document is a living technical specification.

It should be updated when requirements change, implementation reveals new constraints, or important architectural decisions are made.

Changes should remain consistent with the README, roadmap and relevant architecture decision records.

The specification defines the intended behaviour of Folio; it must not be treated as evidence that a feature has already been implemented.

Implementation status should be tracked separately through the development roadmap and relevant issues.
