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


Engine.prototype.initBoard = function () {
    this.board = new Board();
}

Engine.prototype.init = function () {
    this.initLocalStorage();
    this.initBoard();
    console.log("init");

    this.board.nameBox('Filip');
}