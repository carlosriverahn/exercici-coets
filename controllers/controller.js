"use strict";
let arrayRockets = [];
// let i:number = 0;
function createRocket1() {
    let name = prompt("Ingresa el nombre de tu cohete");
    let numberPropeller = 3;
    rocketInstance(name, numberPropeller);
}
function createRocket2() {
    let name = prompt("Ingresa el nombre de tu cohete");
    let numberPropeller = 6;
    rocketInstance(name, numberPropeller);
}
function increasePower1() {
    let typeRocket = 3;
    let powerMax1 = powerMax(3);
    increase(typeRocket, powerMax1, undefined);
}
function increasePower2() {
    let typeRocket = 6;
    let powerMax1 = powerMax(6);
    increase(typeRocket, powerMax1, undefined);
}
function increasePowerx() {
    let nameRocket = document.getElementById("accelerate").value;
    let rocketx = arrayRockets.find(rocket => rocket.name == nameRocket);
    let typeRocket = rocketx.propellers.length;
    let powerMax1 = powerMax(typeRocket);
    increase(typeRocket, powerMax1, rocketx);
}
function decreasePower1() {
    decrease(3);
}
function decreasePower2() {
    decrease(6);
}
function decreasePowerx() {
    let nameRocket = document.getElementById("break").value;
    let rocketx = arrayRockets.find(rocket => rocket.name == nameRocket);
    decrease(0, rocketx);
}
function infoRocket1() {
    let typeRocket = 3;
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    let powerMax1 = powerMax(typeRocket);
    infoRocket(rocket, powerMax1);
}
function infoRocket2() {
    let typeRocket = 6;
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    let powerMax1 = powerMax(typeRocket);
    infoRocket(rocket, powerMax1);
}
function infoRocketAll() {
    let data = "";
    arrayRockets.forEach(rocket => rocket.name += data);
    console.log(data);
    document.getElementById("data").innerText = data;
}
function powerMax(powerMax) {
    if (powerMax == 3) {
        powerMax = [{ propeller: "pp1", power: 10 },
            { propeller: "pp2", power: 30 },
            { propeller: "pp3", power: 80 }];
    }
    else {
        powerMax = [{ propeller: "pp1", power: 30 },
            { propeller: "pp2", power: 40 },
            { propeller: "pp3", power: 50 },
            { propeller: "pp4", power: 50 },
            { propeller: "pp5", power: 30 },
            { propeller: "pp6", power: 10 }];
    }
    return powerMax;
}
function rocketInstance(name, numberPropeller) {
    let rocket = new Rocket(name);
    let i = 0;
    arrayRockets.push(rocket);
    for (i = 0; i < numberPropeller; i++) {
        rocket.addPropeller({ propeller: "pp" + [i], power: 0 });
    }
}
function increase(typeRocket, powerMax1, rocketx) {
    let i = 0;
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    if (rocket == undefined) {
        alert("No hay introducido ningun cohete con esas caracteristicas");
    }
    else {
        rocket.propellers.forEach(rocket => {
            if (rocket.power < powerMax1[i].power) {
                rocket.power += 10;
            }
            i++;
        });
    }
}
function decrease(typeRocket, rocketx) {
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    if (rocket == undefined && typeRocket == 0) {
        alert("No hay introducido ningun cohete con esas caracteristicas");
    }
    else if (rocketx != undefined) {
        rocket = rocketx;
    }
    else {
        rocket.propellers.forEach(rocket => {
            if (rocket.power > 0) {
                rocket.power -= 10;
            }
        });
    }
}
function infoRocket(rocket, powerMax1) {
    let text1 = "";
    powerMax1.forEach((pp) => { text1 += pp.power + ", "; });
    let text2 = "";
    rocket.propellers.forEach((pp) => { text2 += pp.power + ", "; });
    let data = `${rocket.name} Cuenta con ${rocket.getPropellers.length} propulsores,
                        con una potencia maxima de cada uno ${text1}
                        y la potencia actual de estos es ${text2}`;
    console.log(data);
    document.getElementById("data").innerText = data;
}
