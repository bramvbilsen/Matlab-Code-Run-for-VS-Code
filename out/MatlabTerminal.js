"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class MatlabTerminal {
    constructor(workspaceDirectoryPath) {
        this.hasExecutedOnce = false;
        this.matlabCommand = "matlab";
        this.noSplashArg = "-nosplash";
        this.noDesktopArg = "-nodesktop";
        this.getCurrentWorkspaceDirectory = () => this.workspaceDirectoryPath;
        this.terminal = vscode.window.createTerminal("Matlab");
        this.workspaceDirectoryPath = workspaceDirectoryPath;
    }
    runFile(absFilePath) {
        if (!absFilePath.includes(this.workspaceDirectoryPath)) {
            vscode.window.showInformationMessage("File not found in workspace!");
            return;
        }
        if (!absFilePath.endsWith(".m")) {
            vscode.window.showInformationMessage("Trying to run a non-Matlab file!");
            return;
        }
        const relativeFilePath = "." + absFilePath.replace(this.workspaceDirectoryPath, "");
        if (!this.hasExecutedOnce) {
            this.terminal.sendText(`${this.matlabCommand} ${this.noSplashArg} ${this.noDesktopArg} -sd ${this.workspaceDirectoryPath} -r "run('${relativeFilePath}');"`);
            this.hasExecutedOnce = true;
        }
        else {
            this.terminal.sendText(`run('${relativeFilePath}')`);
        }
        this.terminal.show(true);
    }
    changeWorkspaceDirectory(dir) {
        this.terminal.sendText(`cd ${dir}`);
        this.workspaceDirectoryPath = dir;
    }
}
exports.default = MatlabTerminal;
//# sourceMappingURL=MatlabTerminal.js.map