import * as vscode from 'vscode';

export default class MatlabTerminal {

    public terminal: vscode.Terminal;

    private hasExecutedOnce: boolean = false;

    readonly matlabCommand: string = "matlab";
    private noSplashArg: string = "-nosplash";
    private noDesktopArg: string = "-nodesktop";
    private workspaceDirectoryPath: string;

    constructor(workspaceDirectoryPath: string) {
        this.terminal = vscode.window.createTerminal("Matlab");
        this.workspaceDirectoryPath = workspaceDirectoryPath;
    }

    public runFile(absFilePath: string) {
        if (!absFilePath.includes(this.workspaceDirectoryPath)) {
            vscode.window.showInformationMessage("File not found in workspace!");
            return;
        }
        const relativeFilePath = "." + absFilePath.replace(this.workspaceDirectoryPath, "");
        if (!this.hasExecutedOnce) {
            this.terminal.sendText(`${this.matlabCommand} ${this.noSplashArg} ${this.noDesktopArg} -sd ${this.workspaceDirectoryPath} -r "run('${relativeFilePath}');"`);
            this.hasExecutedOnce = true;
        } else {
            this.terminal.sendText(`run('${relativeFilePath}')`);
        }
        this.terminal.show(true);
    }

    public getCurrentWorkspaceDirectory = () => this.workspaceDirectoryPath;
    public changeWorkspaceDirectory(dir: string) {
        this.terminal.sendText(`cd ${dir}`);
        this.workspaceDirectoryPath = dir;
    }
}