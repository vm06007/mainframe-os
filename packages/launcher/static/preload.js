const { ipcRenderer } = require('electron')

const generateId = () =>
  Math.random()
    .toString(36)
    .slice(2)

const requestChannel = 'ipc-sandbox-request-channel'
const responseChannel = 'ipc-sandbox-response-channel'

const callMain = (channel, data) =>
  new Promise((resolve, reject) => {
    const request = {
      id: generateId(),
      data,
    }
    const listener = (event, msg) => {
      if (msg.id === request.id) {
        if (msg.error || !msg.result) {
          reject(msg.error)
        } else {
          resolve(msg.result)
        }
        ipcRenderer.removeListener(responseChannel, listener)
      }
    }
    ipcRenderer.on(responseChannel, listener)
    ipcRenderer.send(requestChannel, request)
  })

const ipc = { callMain }

window.ipc = ipc