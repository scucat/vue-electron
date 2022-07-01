import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import { app, BrowserWindow, ipcMain, Tray, Menu, screen } from 'electron'
class WindowManager{
    constructor(){
        this.wins = new Set()
    }
    setMainWindow(win){
        this.mainWin = win
    }
    addWindow(win){
        this.wins.add(win)
    }
    getWindow(){
        return this.wins
    }
    createWindow(op){
        let win = new BrowserWindow({
          height: op.h?op.h:450,
          width: op.w?op.w:360,
          resizable: false,
          frame: false,
          transparent: true,
          //icon: iconPath,
          show: false,
          //parent: this.mainWin,
          webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
          }
        })
        win.webContents.openDevTools({mode:'detach'})
        win.removeMenu()
      
        const size = screen.getPrimaryDisplay().workAreaSize
        const { height, width } = win.getBounds()
        win.setBounds({
          x: op.x?op.x:size.width-width,
          y: op.y?op.y:size.height=height,
          height,
          width 
        })
      
        //win.setAlwaysOnTop(true)

      
        if (process.env.WEBPACK_DEV_SERVER_URL) {
          win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + `/second.html#${op.path}`)
        } else {
          createProtocol('app')
          win.loadURL(`file://${__dirname}/second.html#${op.path}`)
        }
      
        // if (process.env.WEBPACK_DEV_SERVER_URL) {
        //     win.loadURL(process.env.WEBPACK_DEV_SERVER_URL + '/second.html')
        //   } else {
        //     createProtocol('app')
        //     win.loadURL(`file://${__dirname}/second.html`)
        //   }
        win.show()
        win.on('closed', () => { win = null })
        this.addWindow(win)
    }
    openWindow(op){
        console.log('openWindow',op)
        this.createWindow(op)
    }
    deleteWindow(op){

    }
    closeWindow(op){

    }
    handleMsg(op){

    }
}

export default WindowManager