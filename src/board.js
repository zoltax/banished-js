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

Board.prototype.initializeBuildings = function (x, y) {
    this.buildings = []

    for(var i=0; i<x; i++) {
        this.buildings[i] = new Array(y);
    }
}

Board.prototype.setPlayer = function (player) {
    this.player = player;
}

Board.prototype.draw = function () {

    this.nameBox(this.player.getName())
    this.drawCity();
}

Board.prototype.nameBox = function (name) {

    var nameBox = _.template('<p class="name_box"> Player name: <b><%=  name %></b></p>');
    $("#name").html(nameBox({name: name}))

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

