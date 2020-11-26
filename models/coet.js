"use strict";
class Rocket {
    constructor(name) {
        this.propellers = new Array();
        this.propellersInfo = new Array();
        this.name = name;
    }
    get getPropellers() {
        return this.propellers;
    }
    addPropeller(propellers) {
        this.propellers.push(propellers);
    }
    addPropellerInfo(propellers) {
        this.propellersInfo.push(propellers);
    }
}
