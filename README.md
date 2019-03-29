# Matlab Code Run Extension for VS Code

Run Matlab code straight from VS Code!  

***This plugin is currently under development and has not yet been tested extensively. If there are any issues, feel free to open an issue in the Github repo!***

*Currently only tested on Mac OS, but it will probably also work on Linux. Due to how Matlab runs on Windows, I am uncertain whether this would also work on Windows systems. Feedback on this would be great!*

## How To Use

Open the command palette (under "View" or with shortcut ctr+shift+p) and find the "Run Matlab File" command.

## Features

Running code straight from VS Code without having to open the full Matlab GUI. Non graphical output will be displayed in the built-in VS Code terminal. Graphs will be openend in a separate window. Debugging is not available and that'll probably not change in the foreseeable future as the current implementation does not allow for this.

## Requirements

**Currently, matlab has to be added to your system's PATH. Otherwise, the extension will not know where Matlab is installed on your system.**

## Known Issues

- No extensive testing has been done. This list will probably grow...

## Release Notes

### 1.0.0

Initial Release
