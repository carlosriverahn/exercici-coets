"use strict";
// Array para cohetes
let arrayRockets = [];
function createRocket1() {
    let name = prompt("Ingresa el nombre de tu cohete");
    let numberPropeller = 3;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    if (name == "") {
        alert("Debes nombrar a tu Rocket para ponerlo en la plataforma de lanzamiento!");
    }
    else if (rocket != undefined) {
        alert("Ya existe un cohete con ese nombre.");
    }
    else {
        rocketInstance(name, numberPropeller);
    }
}
function createRocket2() {
    let name = prompt("Ingresa el nombre de tu cohete");
    let numberPropeller = 6;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    if (name == "") {
        alert("Debes nombrar a tu Rocket para ponerlo en la plataforma de lanzamiento!");
    }
    else if (rocket != undefined) {
        alert("Ya existe un cohete con ese nombre.");
    }
    else {
        rocketInstance(name, numberPropeller);
    }
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
    decrease(3, undefined);
}
function decreasePower2() {
    decrease(6, undefined);
}
function decreasePowerx() {
    let nameRocket = document.getElementById("break").value;
    let rocketx = arrayRockets.find(rocket => rocket.name == nameRocket);
    decrease(0, rocketx);
}
function infoRocket1() {
    let typeRocket = 3;
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    infoRocket(rocket, typeRocket, 0);
}
function infoRocket2() {
    let typeRocket = 6;
    let rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket);
    infoRocket(rocket, typeRocket, 0);
}
function infoRocketAll() {
    infoRocket(undefined, undefined, 1);
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
    if (rocketx != undefined) {
        rocket = rocketx;
    }
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
    if (rocketx != undefined) {
        rocket = rocketx;
    }
    if (rocket == undefined && typeRocket == 0) {
        alert("No hay introducido ningun cohete con esas caracteristicas");
    }
    else {
        rocket.propellers.forEach(rocket => {
            if (rocket.power > 0) {
                rocket.power -= 10;
            }
        });
    }
}
function infoRocket(rocket, typeRocket, identifier) {
    let text1 = "";
    let text2 = "";
    let data = "";
    let powerMax1 = [];
    if (identifier == 0) {
        powerMax1 = powerMax(typeRocket);
        powerMax1.forEach((pp) => { text1 += pp.power + ", "; });
        rocket.propellers.forEach((pp) => { text2 += pp.power + ", "; });
        data = `${rocket.name} Cuenta con ${rocket.getPropellers.length} propulsores,
                            con una potencia maxima de cada uno ${text1}
                            y la potencia actual de estos es ${text2} ` + "<br>";
        // console.log(data);
    }
    else if (identifier == 1) {
        for (rocket of arrayRockets) {
            powerMax1 = powerMax(rocket.propellers.length);
            powerMax1.forEach((pp) => { text1 += pp.power + ", "; });
            rocket.propellers.forEach((pp) => { text2 += pp.power + ", "; });
            data += `${rocket.name} Cuenta con ${rocket.getPropellers.length} propulsores,
            con una potencia maxima de cada uno ${text1}
            y la potencia actual de estos es ${text2} ` + "<br>";
            text1 = "";
            text2 = "";
            powerMax1.length = 0;
        }
    }
    document.getElementById("data").innerHTML = data;
}
