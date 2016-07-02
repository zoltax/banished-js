function Building(type) {

    this.buildingType = type;
    this.name = '';
    this.level = 0;

    if ( ! this instanceof Building)
        return new Building();

}

Building.prototype.setName = function (name) {
    this.name = name;
}

Building.prototype.getName = function () {
    return this.name;
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

function Buildings() {

    if ( ! this instanceof Buildings)
        return new Buildings();

    this.buildings = []

}

