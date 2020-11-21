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
    // public get getPropellersInfo(){
    //     return this.propellersInfo;
    // }
    // public set setPropellers(propellers : Propeller[]) {
    //     this.propellers = propellers;
    // }
    addPropeller(propellers) {
        this.propellers.push(propellers);
        // this.propellersInfo.push(propellers);
    }
    propellerInfo() {
    }
    propellerInfoAll() {
    }
}
