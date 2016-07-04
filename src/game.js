function Game() {

    /**
     * @type Resources {null}
     */
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
    var self = this;
    var buildings = this.buildings.getBuildings();

    buildings.forEach(function (building) {

        if ( building.getType() == 'Sawmill') {
            self.resources.setWood(self.resources.getWood() + ( building.getRevenue() ) / 3600)
        }
    })

}