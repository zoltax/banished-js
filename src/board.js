function Board() {

    this.x = 10;
    this.y = 10;

    this.initializeBuildings(this.x, this.y)
    this.buildEventHandling();

    var b = new Building('Sawmill');


    this.buildings[4][0] = b;

    this.player = null;

    if ( ! this instanceof Board )
        return new Board();

}


Board.prototype.setPlayer = function (player) {
    this.player = player;
}

Board.prototype.setResource = function (resource) {
    this.resource = resource;
}

Board.prototype.initializeBuildings = function (x, y) {
    this.buildings = []

    for(var i=0; i<x; i++) {
        this.buildings[i] = new Array(y);
    }
}

Board.prototype.draw = function () {

    this.drawNameBox(this.player.getName())
    this.drawResources();
    this.drawCity();
}

Board.prototype.drawNameBox = function (name) {

    var nameBox = _.template('<p class="name_box"> Player name: <b><%=  name %></b></p>');
    $("#name").html(nameBox({name: name}))

}

Board.prototype.drawResources = function () {
    var resourcesBox = _.template('<p><b>Wood:</b> <%= wood %> <b>Stone:</b> <%= stone %> <b>Food:</b> <%= food %> <b>Gold:</b> <%= gold %></p>')
    $("#resource").html(resourcesBox(
        {
            wood: this.resource.getWood(),
            stone: this.resource.getStone(),
            food: this.resource.getFood(),
            gold: this.resource.getGold(),
        }
    ))
}

Board.prototype.buildEventHandling = function () {

    var self = this;

    $( document ).ready(function() {
        $(".build_link").click(function (event) {

            console.log(event.target);

            self.addBuilding(1,2);
        });
    });

}

Board.prototype.addBuilding = function () {
    console.log('adding building')
}

Board.prototype.drawCity = function () {

    var city  = _.template('<table class="table table-bordered"><tbody><%= text %></tbody></table>');
    var field = _.template('<td class="field"><%= text %></td>');
    var build_link = _.template('<a href="#" class="build_link" >Build</a>');

    var b = '';

    // beauty of the javascript :D
    for ( var i = 0 ; i < this.x; i++ ) {
        b += '<tr>';
        for ( var j = 0; j < this.y; j++ ) {
            var t = build_link();
            if ( this.buildings[j][i]) {
                t = this.buildings[j][i].getType();
            }
            b += field({text: t});
        }
        b += '</tr>';

    }

    $("#city").html(city({text: b}));

}

