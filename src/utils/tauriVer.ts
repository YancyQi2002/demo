import { isTauri } from '@/utils/isTauri'
import { getTauriVersion } from '@tauri-apps/api/app'

let tauriVersion: string = await getTauriVersion()

if (isTauri === false) {
	tauriVersion = '当前平台版本未使用 Tauri 进行构建'
}

console.log(tauriVersion)

localStorage.setItem('tauriVersion', tauriVersion)