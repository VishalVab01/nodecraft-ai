# Contributing to NodeCraft

Thanks for contributing to NodeCraft. Keeping changes focused and easy to review helps maintain a reliable collaborative workspace.

## Before You Start

- Use Node.js 20 or later.
- Install dependencies with `npm install`.
- Copy the required values into `.env.local`; never commit credentials or generated files.
- Read the project context in `context/` before changing product behavior or architecture.

## Development Workflow

1. Create a focused branch from `main`.
2. Make the smallest change that fully addresses the issue.
3. Keep server-side, client-side, and background-task responsibilities separate.
4. Run `npm run lint` and `npm run build` before opening a pull request.
5. Update the relevant context document when a change affects product scope, architecture, standards, or progress.

## Pull Requests

- Use a concise, descriptive title.
- Explain the user-facing or technical impact.
- Include verification steps.
- Avoid unrelated formatting changes and generated output.

## Reporting Problems

For bugs, include the expected behavior, actual behavior, steps to reproduce, and relevant environment details. Please do not include secrets, access tokens, or personal data in an issue.
