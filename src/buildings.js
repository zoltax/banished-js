function Building(type) {

    this.buildingType = type;
    this.name = '';
    this.level = 0;
    this.revenue = 0;

    if ( ! this instanceof Building)
        return new Building();

}

Building.prototype.getType = function () {
    return this.buildingType;
}

Building.prototype.setRevenue = function (revenue) {
    this.revenue = revenue;
}

Building.prototype.getRevenue = function () {
    return this.revenue;
}

Building.prototype.getLetter = function () {
    return this.buildingType[0];
}

Building.prototype.getLevel = function () {
    return this.level;
}

Building.prototype.levelUp = function () {
    this.level = this.level + 1;
}

Building.prototype.levelDown = function () {
    if ( this.level > 1 ) {
        this.level = this.level -1;
    }
}

function Buildings(x, y) {

    if ( ! this instanceof Buildings)
        return new Buildings();

    this.buildings = []

    for(var i=0; i<x; i++) {
        this.buildings[i] = new Array(y);
    }

    var b = new Building('Sawmill');
    b.setRevenue(3800)

    this.buildings[4][0] = b;
}

Buildings.prototype.getBuildingsMap = function () {
    return this.buildings;
}

Buildings.prototype.getBuildings = function () {
    var buildings = [];

    this.buildings.forEach(function(row) {
        row.forEach(function (column) {
            if ( column ) {
                buildings.push(column);
            }
        })
    })

    return buildings;
}

Buildings.prototype.buildEventHandling = function () {

    var self = this;

    $( document ).ready(function() {
        $(".build_link").click(function (event) {

            console.log(event.target);

            self.addBuilding(1,2);
        });
    });

}

