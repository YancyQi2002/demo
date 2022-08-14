import { getTauriVersion } from '@tauri-apps/api/app'

const tauriVersion: string = await getTauriVersion()

export const isTauri: boolean = tauriVersion !== ''