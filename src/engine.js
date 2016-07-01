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

    console.log(this.localstorage.get('name'))

    this.localstorage.set('name','filip')

    var name = this.localstorage.get('name')

    console.log(name)

}