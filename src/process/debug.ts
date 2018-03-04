import { BrowserWindow } from "electron";

export function isDebug(): boolean {
    return process.env.ELECTRON_DEBUG ? process.env.ELECTRON_DEBUG.trim() === 'true' : false;
}

/**
 * Open the dev tools in the window
 */
export function openDevTools(window: BrowserWindow): void {
    if (window && window.webContents) {
        window.webContents.openDevTools();
    }
}