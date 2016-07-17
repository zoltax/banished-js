function Point(x,y) {
    this.x = x;
    this.y = y;
}

function Board() {

    this.x = 10;
    this.y = 10;

    this.player = null;

    if ( ! this instanceof Board )
        return new Board();

}

Board.prototype.getX = function () {
    return this.x;
};

Board.prototype.getY = function () {
    return this.y;
};

Board.prototype.setPlayer = function (player) {
    this.player = player;
};

Board.prototype.setResources = function (resources) {
    this.resources = resources;
};

Board.prototype.setBuildings = function (buildings) {
    this.buildings = buildings;
};


Board.prototype.draw = function () {

    this.drawNameBox(this.player.getName());
    this.drawResources();
    this.drawCity();
    this.buildings.buildEventHandling();
};

Board.prototype.drawNameBox = function (name) {

    var nameBox = _.template('<p class="name_box"> Player name: <b><%=  name %></b></p>');
    $("#name").html(nameBox({name: name}))

};

Board.prototype.drawResources = function () {
    var resourcesBox = _.template('' +
        '<p>' +
            '<b>Wood: </b>  <%= wood  %> ' +
            '<b>Stone: </b> <%= stone %> ' +
            '<b>Food: </b>  <%= food  %> ' +
            '<b>Gold: </b>  <%= gold  %> ' +
        '</p>');

    $("#resource").html(resourcesBox(
        {
            wood:   parseInt(this.resources.getWood()),
            stone:  parseInt(this.resources.getStone()),
            food:   parseInt(this.resources.getFood()),
            gold:   parseInt(this.resources.getGold())
        }
    ))
};


Board.prototype.drawCity = function () {

    var city  = _.template('<table class="table table-bordered"><tbody><%= text %></tbody></table>');
    var field = _.template('<td class="field"><img src="/assets/<%= src %>" width="32px" height="32px" /><%= text %></td>');
    // var build_link = _.template('<a href="#" class="build_link" x="<%=x%>" y="<%=y%>">Build</a>');
    var build_link = _.template('<a href="#modal" class="build_link" x="<%=x%>" y="<%=y%>">Build</a>');

    var b = '';

    var buildings = this.buildings.getBuildingsMap();


    // beauty of the javascript :D
    for ( var i = 0 ; i < this.x; i++ ) {
        b += '<tr>';
        for ( var j = 0; j < this.y; j++ ) {

            var t = build_link(
                {
                    x:j,
                    y:i
                }
            );

            var img = '';

            if ( buildings[j][i]) {
                t = buildings[j][i].getType();
                img = buildings[j][i].getIcon();
            }
            b += field(
                {
                    src: img,
                    text: t
                }
            );
        }
        b += '</tr>';

    }

    $("#city").html(city({text: b}));

};

