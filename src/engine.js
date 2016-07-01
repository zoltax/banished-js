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

Engine.prototype.init = function () {
    this.initLocalStorage();
    console.log("init");
}