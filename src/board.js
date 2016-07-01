function Board() {

    if ( ! this instanceof Board )
        return new Board();

}

Board.prototype.draw = function () {

    // $("#game")

}

Board.prototype.nameBox = function (name) {
    var nameBox = _.template('<p class="name_box"> Player name: <b><%=  name %></b></p>');
    $("#name").html(nameBox({name: name}))
}