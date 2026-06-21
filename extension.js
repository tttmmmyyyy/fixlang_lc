"use strict";
const vscode = require("vscode");
const languageclient = require("vscode-languageclient");

let client;

function activate(context) {
    try {
        const compierCommand = vscode.workspace.getConfiguration('fixLanguageClient').get('compilerCommand');;
        const serverOptions = {
            command: compierCommand,
            args: [
                "language-server"
            ]
        };
        const clientOptions = {
            documentSelector: [
                {
                    scheme: "file",
                    language: "fixlang",
                }
            ],
            // Forward the `fix.*` settings (e.g. fix.analyze.delayMs,
            // fix.analyze.onSave) to the server via
            // workspace/didChangeConfiguration, and re-send them whenever
            // the user changes them.
            synchronize: {
                configurationSection: "fix",
            },
        };
        client = new languageclient.LanguageClient("fixlang-mode", serverOptions, clientOptions);
        context.subscriptions.push(client.start());
    } catch (e) {
        vscode.window.showErrorMessage(`fixlang-mode couldn't be started: ${e.message}`);
    }
}

function deactivate() {
    if (client) return client.stop();
}

module.exports = { activate, deactivate }