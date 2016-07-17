function Game() {

    /**
     * @type Resources {null}
     */
    this.resources = new Resources(0,0,0,0);
    this.buildings = null;

    if ( ! this instanceof Game)
        return new Game();

    this.setBoard = function (board) {
        this.board = board; 
    }
    
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

        self.resources.wood += building.getRevenue().wood / 3600;
        self.resources.food = self.resources.food + (building.getRevenue().food / 3600);
        self.resources.gold = self.resources.gold +  (building.getRevenue().gold / 3600);
        self.resources.stone = self.resources.stone + (building.getRevenue().stone / 3600);

    })


    this.board.setResources(self.resources);

}