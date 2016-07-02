function Board() {

    this.x = 10;
    this.y = 10;

    this.player = null;

    if ( ! this instanceof Board )
        return new Board();

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


Board.prototype.drawCity = function () {


    var city  = _.template('<table class="table table-bordered"><tbody><%= text %></tbody></table>');
    var field = _.template('<td><%= text %></td>');

    var b = '';

    for ( var i = 0 ; i < this.y; i++ ) {
        b += '<tr>';
        for ( var j = 0; j < this.x; j++ ) {
            b += field({text: i + ':' + j});
        }
        b += '</tr>';

    }

    $("#city").html(city({text: b}));

}

