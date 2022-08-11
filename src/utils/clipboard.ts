import Clipboard from 'clipboard'

const clipboardSuccess = () => {
  ElMessage({
    message: 'Copy successfully.',
    type: 'success',
    duration: 1500
  })
}

const clipboardError = () => {
  ElMessage({
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