"use strict";
class Rocket {
    // propellersInfo:Propeller [] = new Array();
    constructor(name) {
        this.propellers = new Array();
        this.name = name;
    }
    get getPropellers() {
        return this.propellers;
    }
    addPropeller(propellers) {
        this.propellers.push(propellers);
        // this.propellersInfo.push(propellers);
    }
    propellerInfo() {
    }
}
