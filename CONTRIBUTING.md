# Contributing to Folio

Thank you for your interest in contributing to Folio!

Contributions from students, developers, designers, testers and documentation writers are welcome.

## Project Status

Folio is currently in the planning and early development stage. Some features, workflows and development conventions may change as the project evolves.

Before making substantial changes, check the existing documentation and open issues to understand the current direction.

## Ways to Contribute

You can help by:

- Reporting bugs and usability problems.
- Suggesting features that improve student workflows.
- Improving documentation and examples.
- Testing Folio on different devices and browsers.
- Improving accessibility and responsive design.
- Contributing code, automated tests and performance improvements.

## Before You Start

For significant changes, open an issue first to discuss the proposed solution.

This is especially important for changes involving the editor, document format, local storage, synchronisation or database schema.

For small documentation fixes and straightforward bug fixes, a pull request can be submitted directly.

Please avoid duplicating existing issues or working on a large feature before its approach has been discussed.

## Development Guidelines

### Code Quality

- Follow the existing project structure and coding conventions.
- Use TypeScript types rather than relying on `any` without a good reason.
- Keep components and modules focused on a clear responsibility.
- Prefer readable, maintainable code over unnecessary complexity.
- Avoid introducing dependencies when existing tools can solve the problem.
- Keep changes focused and avoid unrelated refactoring.

### Testing

Add or update tests when changing functionality.

Where relevant, verify:

- Note creation, editing and persistence.
- Assignment creation, updating and deletion.
- Offline access and recovery after reconnecting.
- Synchronisation and conflicting changes.
- Keyboard, touch and stylus interactions.
- Responsive behaviour across supported platforms.

Run the checks available in the project before submitting a pull request. Do not claim that tests passed unless you have run them.

If a test cannot be run, explain why in your pull request.

### Offline-First Requirements

Changes to notes, assignments or storage must not accidentally make core functionality dependent on an internet connection.

When modifying synchronisation, consider failed requests, duplicate operations, conflicting edits and recovery after connectivity returns.

Never silently discard a student's work.

### Security and Privacy

- Never commit API keys, passwords, access tokens or other secrets.
- Do not include private student notes or personal information in test fixtures.
- Validate untrusted input appropriately.
- Respect the application's authentication and data-access boundaries.
- Report security vulnerabilities privately rather than through public issues.

## Branching and Commits

Use descriptive branch names where practical:

- `feature/assignment-calendar`
- `fix/offline-save`
- `docs/contributing-guide`
- `test/sync-conflicts`

Write clear commit messages describing the change. A consistent format is encouraged:

- `feat: add assignment table view`
- `fix: preserve edits when offline`
- `docs: update development roadmap`
- `test: cover sync conflicts`

These examples are conventions, not a requirement to rewrite existing history.

## Pull Requests

Before submitting a pull request:

1. Make sure the changes have a clear purpose.
2. Check that the relevant tests pass.
3. Update documentation where necessary.
4. Keep the pull request focused and reasonably sized.
5. Explain any limitations or decisions that reviewers should know about.

Complete the pull request template and link any related issue when applicable.

Pull requests may be reviewed, requested for changes or declined if they conflict with the project's direction or introduce unacceptable risks.

## Documentation Contributions

Documentation should be accurate, easy to follow and consistent with the current implementation.

Distinguish between planned features and implemented functionality. Do not describe proposed functionality as available before it has been built and verified.

Keep the README concise. Detailed requirements, architectural reasoning and implementation plans belong in the relevant files under `docs/`.

## Questions

For general questions, feature discussions and troubleshooting, use the appropriate GitHub issue template or discussion area if one is available.

Be respectful, provide enough context to understand the question, and avoid sharing private information.

## Licence

By submitting a contribution, you agree that it will be distributed under the project's MIT License, subject to its terms.

You retain ownership of your contributions. Please ensure you have the right to submit any code, assets or other material you contribute.

## Thank You

Every useful contribution helps make Folio better for students.

Whether you report a bug, improve a sentence in the documentation or implement a major feature, your time and effort are appreciated.

Novjot Sidhu