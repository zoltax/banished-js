var BUILDING_DB = {
    'sawmill': {
        'type': 'sawmill',
        'icon': 'axe.png',
        // should be resource Object :)
        'cost': {
            'wood' : 10
        },
        'revenue': 3600,

    },
    'house': {
        'type': 'house',
        'icon' : 'house.png',
        'cost' : {
            'gold': 10
        },
        'revenue' : 0,
    }
}


function Building(type) {

    this.buildingType = type;
    this.name = '';
    this.level = 0;
    this.revenue = 0;
    this.icon = null;

    if ( ! this instanceof Building)
        return new Building();

    this.fromDb = function (item) {
        this.buildingType = item.type;
        this.name = item.type;
        this.revenue = item.revenue;
        this.level = 0;
        this.icon = item.icon;
        return this;
    }

    this.setIcon = function (icon) {
        this.icon = icon;
    }

    this.getIcon = function () {
        return this.icon;
    }

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

    this.db = BUILDING_DB;

    this.buildings = [];

    for(var i=0; i<x; i++) {
        this.buildings[i] = new Array(y);
    }

    var buildingClass = new Building('a');
    var c = new Building('a');

    var b = buildingClass.fromDb(this.db.sawmill)
    var c = c.fromDb(this.db.house)



    console.log(b);

    this.buildings[4][0] = b;
    this.buildings[4][1] = c;

    console.log(this.buildings);

    this.buildEventHandling();

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

