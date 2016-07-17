var BUILDING_DB = {
    'sawmill': {
        'type': 'sawmill',
        'icon': 'axe.png',
        // should be resource Object :)
        'cost': {
            'wood' : 10
        },
        'revenue': {
            'wood': 3600*3,
            'food': 0,
            'gold': 0,
            'stone':0,
        }

    },
    'house': {
        'type': 'house',
        'icon' : 'house.png',
        'cost' : {
            'gold': 10
        },
        'revenue' : {
            'wood': 0,
            'food': 0,
            'gold': 3600,
            'stone':0,
        }
    },
    'windmill': {
        'type': 'windmill',
        'icon': 'windmill.png',
        'cost':  {
            'gold': 50,
            'wood': 100,
        },
        'revenue': {
            'wood': 0,
            'food': 7200,
            'gold': 0,
            'stone':0,
        }
    }
}


function Building() {

    this.buildingType = null;
    this.name = '';
    this.level = 0;
    this.revenue = 0;
    this.icon = null;

    if ( ! this instanceof Building)
        return new Building();

    this.fromDb = function (item) {
        b = new Building();

        b.buildingType = item.type;
        b.name = item.type;

        revenue = new Resources(item.revenue.wood,item.revenue.food, item.revenue.gold,item.revenue.stone);

        b.revenue = revenue
        b.level = 0;
        b.icon = item.icon;
        return b;
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

    var buildingClass = new Building();

    this.buildings[4][0] = buildingClass.fromDb(this.db.sawmill);
    this.buildings[4][1] = buildingClass.fromDb(this.db.house);
    this.buildings[4][2] = buildingClass.fromDb(this.db.windmill)

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

