import Clipboard from 'clipboard'
import { Snackbar } from '@varlet/ui'
import '@varlet/ui/es/snackbar/style/index.js'
import { breakpointsTailwind } from '@vueuse/core'
import { writeText, readText } from '@tauri-apps/api/clipboard'

const sm = useBreakpoints(breakpointsTailwind).smaller('sm')

const clipboardSuccess = () => {
  sm.value
    ? Snackbar.success('Copy successfully.')
    : ElMessage({
        message: 'Copy successfully.',
        type: 'success',
        duration: 1500
      })
}

const clipboardError = () => {
  sm.value
    ? Snackbar.error('Copy failed.')
    : ElMessage({
        message: 'Copy failed.',
        type: 'error'
      })
}

export const handleClipboard = (text: string, event: MouseEvent) => {
  const clipboard = new Clipboard(event.target as Element, {
    text: () => text
  })
  clipboard.on('success', (e) => {
    console.info('Action:', e.action)
    console.info('Text:', e.text)
    console.info('Trigger:', e.trigger)
    clipboardSuccess()
    clipboard.destroy()
  })
  clipboard.on('error', (e) => {
    console.error('Action:', e.action)
    console.error('Trigger:', e.trigger)
    clipboardError()
    clipboard.destroy()
  })
}

export const handleClipboardTauri = async (text: string, event: MouseEvent) => {
  await writeText(text)
  const clipboardText = await readText()
  console.log(clipboardText)
  if (clipboardText === text) {
    clipboardSuccess()
  } else {
    clipboardError()
  }
}