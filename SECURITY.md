# Security Policy

## Our Commitment

Folio is designed to store students' notes, drawings, assignments and academic information.

Security and privacy must be considered throughout development, particularly in local storage, authentication, cloud synchronisation and access to user data.

We welcome responsible reports that help identify and resolve security weaknesses.

## Supported Versions

Folio is currently in early development and does not yet have a stable public release.

Until official releases and support windows are established, security fixes will generally target the latest development version.

| Version | Security support |
|---|---|
| Unreleased development version | Best-effort security fixes |
| Published stable releases | Support policy to be announced |

## Reporting a Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Public reports may expose weaknesses before they can be fixed.

Instead:

1. Open the Folio repository on GitHub.
2. Visit the **Security** tab.
3. Look for the option to report a vulnerability through GitHub's private vulnerability reporting feature, if it is enabled.
4. If private reporting is unavailable, contact the repository owner privately using an appropriate contact method listed on their GitHub profile.

Do not share passwords, access tokens, private student notes or other sensitive information in a report unless strictly necessary. Redact sensitive data wherever possible.

## What to Include

Please include as much of the following information as you can safely provide:

- A clear description of the potential vulnerability.
- The affected component or area of the application.
- The platform, browser or application version involved.
- Steps to reproduce the behaviour.
- The potential impact on confidentiality, integrity or availability.
- Screenshots, logs or a minimal proof of concept where appropriate.

Do not access, modify, download or disclose another person's private data as part of testing.

## Examples of Security Issues

Issues that may warrant a security report include:

- Access to another student's notes or assignments.
- Authentication or authorisation bypasses.
- Exposure of credentials, tokens or private data.
- Insecure handling of local or cloud-stored information.
- Synchronisation behaviour that exposes private content.
- Vulnerabilities in dependencies used by Folio.
- Cross-site scripting or other injection vulnerabilities.
- Unintended exposure of sensitive information through logs or error messages.

This list is illustrative rather than exhaustive.

## What Happens Next?

The maintainers will review a report, assess its impact and determine appropriate remediation.

Where possible, the process will include:

1. Acknowledging the report.
2. Confirming and assessing the vulnerability.
3. Developing and testing a fix.
4. Releasing the fix or documenting mitigation steps.
5. Publishing an appropriate security advisory when disclosure is suitable.

Response times cannot be guaranteed while the project is maintained by a small development team.

Please allow a reasonable opportunity for a fix before publicly disclosing a vulnerability.

## Security Expectations for Contributions

Contributors should:

- Never commit credentials or secrets.
- Use appropriate input validation and access controls.
- Avoid exposing private data in logs or test fixtures.
- Consider authentication and authorisation when changing cloud functionality.
- Test failure scenarios where practical.
- Report suspected vulnerabilities responsibly.

## Scope and Limitations

Folio is under development, and its security controls will evolve as the application architecture takes shape.

This policy does not guarantee that Folio is free from vulnerabilities or that every report will receive a particular response time.

Security concerns are taken seriously and will be addressed according to their potential impact and available resources.

Novjot Sidhu