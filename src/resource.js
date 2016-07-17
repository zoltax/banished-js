function Resource(type, value) {
    this.type   = type;
    this.value  = value;

    if ( ! this instanceof Resource)
        return new Resource();

}


function Resources(wood, food, gold, stone) {

    this.wood   = wood;
    this.stone  = stone;
    this.food   = food;
    this.gold   = gold;

    if ( ! this instanceof Resources)
        return new Resources();

    this.getFood = function () {
        return this.food;
    }

    this.setFood = function (food) {
        this.food = food;
    }

    this.getGold = function () {
        return this.gold;
    }

    this.setGold = function (gold) {
        this.gold = gold;
    }

    this.getWood = function () {
        return this.wood;
    }

    this.setWood = function (wood) {
        this.wood = wood;
    }

    this.getStone = function () {
        return this.stone;
    }

    this.setStone = function (strone) {
        this.stone = stone;
    }

}

