"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const MatlabTerminal_1 = require("./MatlabTerminal");
function createMatlabTerminal(workspaceDirectoryPath) {
    vscode.window.showInformationMessage("Working Directory set to: " + workspaceDirectoryPath);
    return new MatlabTerminal_1.default(workspaceDirectoryPath);
}
function activate(context) {
    const workspaceFoldersPaths = vscode.workspace.workspaceFolders;
    if (workspaceFoldersPaths && workspaceFoldersPaths.length > 0) {
        const rootWorkspaceFolderPath = workspaceFoldersPaths[0];
        let matlabTerminal = createMatlabTerminal(rootWorkspaceFolderPath.uri.fsPath);
        let disposable = vscode.commands.registerCommand('extension.runMatlab', () => {
            if (!matlabTerminal) {
                matlabTerminal = createMatlabTerminal(rootWorkspaceFolderPath.uri.fsPath);
            }
            if (vscode.window.activeTextEditor) {
                const fileToRunPath = vscode.window.activeTextEditor.document;
                matlabTerminal.runFile(fileToRunPath.uri.fsPath);
            }
        });
        context.subscriptions.push(disposable);
    }
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map