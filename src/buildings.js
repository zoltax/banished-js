var BUILDING_DB = {
    'sawmill': {
        'icon': 'axe.png',
        // should be resource Object :)
        'cost': {
            'wood' : 10
        },

    },
    'house': {
        'icon' : 'house.png',
        'cost' : {
            'gold': 10
        }
    }
}


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

    this.buildEventHandling();

    this.db = BUILDING_DB;

    console.log(this.db.sawmill)
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

Buildings.prototype.addBuilding = function (x,y) {
    var b = new Building('Sawmill');
    b.setRevenue(3800)
    this.buildings[x][y]
}

Buildings.prototype.buildEventHandling = function () {

    var self = this;

    $( document ).ready(function() {
        $(".build_link").click(function (event) {

            var target = event.target;
            var x = $(target).attr('x');
            var y = $(target).attr('y');

            engine.board.clicked_x = x;
            engine.board.clicked_y = y;

            self.addBuilding(x,y);

        });
    });

}

