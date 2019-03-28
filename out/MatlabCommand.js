"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
class MatlabTerminal {
    constructor(workspaceDirectoryPath) {
        this.matlabCommand = "matlab";
        this.noSplashArg = "-nosplash";
        this.noDesktopArg = "-nodesktop";
        this.getCurrentWorkspaceDirectory = () => this.workspaceDirectoryPath;
        this.terminal = vscode.window.createTerminal("Matlab");
        this.workspaceDirectoryPath = workspaceDirectoryPath;
    }
    init() {
        this.terminal.sendText(`${this.matlabCommand} ${this.noSplashArg} ${this.noDesktopArg} -sd ${this.workspaceDirectoryPath}`);
        this.terminal.show(true);
    }
    runFile(absFilePath) {
        if (!absFilePath.includes(this.workspaceDirectoryPath)) {
            vscode.window.showInformationMessage("File not found in workspace!");
            return;
        }
        const relativeFilePath = "." + absFilePath.replace(this.workspaceDirectoryPath, "");
        this.terminal.sendText(`run(${relativeFilePath})`);
    }
    changeWorkspaceDirectory(dir) {
        this.terminal.sendText(`cd ${dir}`);
        this.workspaceDirectoryPath = dir;
    }
}
//# sourceMappingURL=MatlabCommand.js.map