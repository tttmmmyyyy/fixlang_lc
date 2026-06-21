# Change Log

## [0.4.0] - 2026-06-21

- Add `fix.analyze.delayMs` and `fix.analyze.onSave` settings to configure the language server's analysis (diagnostics): the on-type debounce delay (0 disables on-type analysis) and whether saving also triggers analysis. The `fix.*` settings are forwarded to the server via `workspace/didChangeConfiguration`.

## [0.3.0] - 2026-06-20

- Bundle a language configuration (bracket matching/colorization, comment toggling, and auto-closing/surrounding pairs) so the extension works standalone without a separate Fix syntax-highlighting extension. Syntax coloring is provided by the language server through semantic tokens.

## [0.2.0] - 2024-12-12

- Add `fixLanguageClient.compilerCommand` setting to specify the Fix compiler command.

## [0.1.0] - 2024-09-09

- Initial release.