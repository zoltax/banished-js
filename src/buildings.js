function Building() {

    var name = null;

    var setName = function(_name) {
        name  = _name;
    }

    return {
        'setName': function (_name){ setName(_name)}
    }

}


function Buildings() {


    this.buildings = [];

    this.add = function(name)
    {
        this.building = new Building()
        this.building.setName("House")
        this.buildings.push(building)
    }

    return {

        //'buildings' : buildings,
        //'add' : function(name) {add(name)}

    }
}