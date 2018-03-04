# Visual code

## How to debug

### The renderer process

The renderer process is accessible with the dev tools in the electrong app.  
Start the application with the npm debug script to automatically open the dev tools in the windows.

### The main process

There is two solutions.

Start the application with the npm debug script and attach the debug port 5858. However with that method you can't set a breakpoint while the application is bootstraping.

VS Code configuration (launch.json)  
*That configuration attach the debug process onced the electron app is launched in debug*
```json
{
    "type": "node",
    "request": "attach",
    "name": "Attach Main Process",
    "port": 5858,
    "sourceMaps": true,
    "outFiles": ["${workspaceRoot}/target/**/*.js"]
}
```


The other choice is to debug node and launch directly electron with its bin. Howerever we can't use an npm script to launch.

VS Code task (tasks.json)  
*Used as a prelaunch task in the VS Code configuration*
```json
{
    "label": "build",
    "type": "npm",
    "script": "build",
    "problemMatcher": []
}
```

VS Code configuration (launch.json)  
*That configuration directly launch the electrong app*  
*Call the npm build script before launch and setup the environments variables to debug*
```json
{
    "type": "node",
    "request": "launch",
    "name": "Debug",
    "cwd": "${workspaceRoot}",
    "preLaunchTask": "build",
    "env": {
        "ELECTRON_DEBUG": "true"
    },
    "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron",
    "windows": {
        "runtimeExecutable": "${workspaceRoot}/node_modules/.bin/electron.cmd"
    },
    "args" : ["."],
    "sourceMaps": true,
    "outFiles": ["${workspaceRoot}/target/**/*.js"]
}
```

---
[Back to summary](../README.md)