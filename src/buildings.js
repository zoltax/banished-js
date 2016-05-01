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


    var buildings = [];

    var add = function(name)
    {
        building = new Building()
        building.setName("House")
        buildings.push(building)
    }

    return {

        'buildings' : buildings,
        'add' : function(name) {add(name)}

    }
}