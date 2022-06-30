class WindowManager{
    constructor(){
        this.wins = new Set()
    }
    setMainWindow(win){
        this.mainWin = win
    }
    addWindows(win){
        this.wins.add(win)
    }
    getWindows(){
        return this.wins
    }
}

export default WindowManager