function Game() {

    this.resources = null;
    this.buildings = null;

    if ( ! this instanceof Game)
        return new Game();

}


Game.prototype.setResources = function (resources) {
    this.resources = resources;
}

Game.prototype.setBulidings = function (buildings) {
    this.buildings = buildings;
}


Game.prototype.update = function () {



}