import { getTauriVersion } from '@tauri-apps/api/app'

let tauriVersion = $ref('')
const getTauriInfo = async (): Promise<void> => {
	tauriVersion = await getTauriVersion()
}

getTauriInfo()

export const isTauri: boolean = tauriVersion !== ''