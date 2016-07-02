function Building() {

    if ( ! this instanceof Building)
        return new Building();

}

function Buildings() {

    if ( ! this instanceof Buildings)
        return new Buildings();

    this.buildings = []

}

