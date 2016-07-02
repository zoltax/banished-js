function Engine() {

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
    this.board.setResource(this.resource);
}

Engine.prototype.initResource = function () {
    this.resource = new Resource();
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
    this.initResource();
    this.initBoard();
    this.initPlayerName();

    this.board.draw();
}