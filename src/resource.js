function Resource() {

    this.wood   = 0;
    this.stone  = 0;
    this.food   = 0;
    this.gold   = 0;

    if ( ! this instanceof Resource)
        return new Resource();
}


Resource.prototype.getFood = function () {
    return this.food;
}

Resource.prototype.getStone = function () {
    return this.stone;
}

Resource.prototype.getWood = function () {
    return this.wood;
}

Resource.prototype.getGold = function () {
    return this.gold;
}
