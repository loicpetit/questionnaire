export function isDebug(): boolean {
    return process.env.ELECTRON_DEBUG ? process.env.ELECTRON_DEBUG.trim() === "true" : false;
}