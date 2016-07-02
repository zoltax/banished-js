function Engine() {

    this.fps = 1;

    if (! this instanceof Engine)
        return new Engine();

}

Engine.prototype.initLocalStorage = function () {
    var ls = new LocalStorageWrapper();
    if ( ls.init() ) {
        this.localstorage = ls;
    }
}

Engine.prototype.initPlayer = function () {
    this.player = new Player();
}

Engine.prototype.initBoard = function () {
    this.board = new Board();
    this.board.setPlayer(this.player);
    this.board.setResources(this.resources);
}

Engine.prototype.initResources = function () {
    this.resources = new Resources();
}

Engine.prototype.initPlayerName = function () {

    if ( this.localstorage.get(name) ) {
        this.player.setName(this.localstorage.get(name))
    } else {
        this.localstorage.set(name,window.prompt("What's your name?"))
    }

    this.player.setName(this.localstorage.get(name))


}

Engine.prototype.init = function () {
    this.initLocalStorage();
    this.initPlayer();
    this.initResources();
    this.initBoard();
    this.initPlayerName();

    this.board.draw();
}


Engine.prototype.run = function () {
    // console.log("run");
    // window.setInterval(1000)
    // this.run();

    self = this;

    setInterval(function () {
        //console.log("ok");
        self.board.draw();
    },1000)


}