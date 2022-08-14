import { getTauriVersion } from '@tauri-apps/api/app'
import { isTauri } from '@/utils/isTauri'

let tauriVersion: string = await getTauriVersion()

if (isTauri === false) {
	tauriVersion = '当前平台版本未使用 Tauri 进行构建'
}

console.log(tauriVersion)

localStorage.setItem('tauriVersion', tauriVersion)