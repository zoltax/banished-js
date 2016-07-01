
function Player() {
    if ( ! this instanceof Player)
        return new Player();
}


Player.prototype.setName = function (name) {
    this.name = name;
}

Player.prototype.getName = function () {
    return this.name;
}