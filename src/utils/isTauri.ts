import { getTauriVersion } from '@tauri-apps/api/app'

let tauriVersion: string = await getTauriVersion()

export const isTauri: boolean = tauriVersion !== ''