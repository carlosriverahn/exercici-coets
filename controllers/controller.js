"use strict";
// Array para cohetes
let arrayRockets = [];
/*El codigo contiene funciones generales, que a su vez llaman
a funciones especificas para reducir las lineas de codigo ultilizado*/
// Funciones generales para la creacion de cohetes de 3 y 6 propulsores.
function createRocket() {
    let name = prompt("ingresa el nombre de tu cohete");
    let type = document.getElementById("rocketCreate").value;
    let numberPropeller = 0;
    if (type == "32WESSDS") {
        numberPropeller = 3;
    }
    else if (type == "LDSFJA32") {
        numberPropeller = 6;
    }
    else if (type == "Customize") {
        numberPropeller = parseInt(prompt("Ingresa el numero propulsores"));
    }
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    if (name == "" || name == null || isNaN(numberPropeller)) {
        alert("Debes nombrar a tu Rocket y asignarle propulsores, para ponerlo en la plataforma de lanzamiento!");
    }
    else if (rocket != undefined) {
        alert("Ya existe un cohete con ese nombre.");
    }
    else {
        rocketInstance(name, numberPropeller);
    }
}
// Funciones para incrementar potencia.
function increasePower() {
    let name = document.getElementById("rocketAccelerate").value;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    increase(rocket);
}
function increasePowerx() {
    let nameRocket = document.getElementById("rocketAccelerateX").value;
    let rocket = arrayRockets.find(rocket => rocket.name == nameRocket);
    increase(rocket);
}
// Funciones para decrementar potencia.
function decreasePower() {
    let name = document.getElementById("rocketBreak").value;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    decrease(rocket);
}
function decreasePowerx() {
    let name = document.getElementById("rocketBreakX").value;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    decrease(rocket);
}
// Funciones generales para desplegar informacion.
function infoRocketX() {
    let name = document.getElementById("rocketInfo").value;
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    infoRocket(rocket, 0);
}
function infoRocketAll() {
    infoRocket(undefined, 1);
}
// Funcion que regresa cuanto debe tener de potencia maxima cada cohete.
function powerMax(powerMax) {
    let powerMax1;
    if (powerMax == 3) {
        powerMax1 = [{ propeller: "pp1", power: 10 },
            { propeller: "pp2", power: 30 },
            { propeller: "pp3", power: 80 }];
    }
    else if (powerMax == 6) {
        powerMax1 = [{ propeller: "pp1", power: 30 },
            { propeller: "pp2", power: 40 },
            { propeller: "pp3", power: 50 },
            { propeller: "pp4", power: 50 },
            { propeller: "pp5", power: 30 },
            { propeller: "pp6", power: 10 }];
    }
    else {
        undefined;
    }
    return powerMax1;
}
// Funcion con la cual se crean los cohertes, segun el numero de propulsores.
function rocketInstance(name, numberPropeller) {
    let rocket = new Rocket(name);
    let i = 0;
    arrayRockets.push(rocket);
    let powerMax1 = [];
    powerMax1 = powerMax(numberPropeller);
    if (powerMax1 != undefined) {
        for (i = 0; i < numberPropeller; i++) {
            rocket.addPropeller({ propeller: "pp" + [i], power: 0 });
            rocket.addPropellerInfo(powerMax1[i]);
        }
        rocketSelection(rocket);
    }
    if (powerMax1 == undefined) {
        for (let i = 0; i < numberPropeller; i++) {
            let power = parseInt(prompt("Ingresa la potencia maxima de los propulsores, valores 0-150"));
            if (power < 0 && power > 150) {
                alert("La potencia debe estar entre 0 y 150");
            }
            else {
                rocket.addPropeller({ propeller: "pp" + [i], power: 0 });
                rocket.addPropellerInfo({ propeller: "pp" + [i], power: power });
            }
        }
        rocketSelection(rocket);
    }
}
// Funcion que incrementa la potencia de los propulsores.
function increase(rocket) {
    let i = 0;
    if (rocket == undefined) {
        alert("No hay ningun cohete seleccionado o con esas caracteristicas");
    }
    else {
        for (i = 0; i < rocket.propellers.length; i++) {
            if (rocket.propellers[i].power < rocket.propellersInfo[i].power)
                rocket.propellers[i].power += 10;
        }
    }
}
// Funcion que decrementa la potencia de los propulsores.
function decrease(rocket) {
    if (rocket == undefined) {
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
// Funcion para mostrar informacion de los cohetes.
function infoRocket(rocket, identifier) {
    let text1 = "";
    let text2 = "";
    let data = "";
    if (identifier == 0) {
        rocket.propellersInfo.forEach((pp) => { text1 += pp.power + ", "; });
        rocket.propellers.forEach((pp) => { text2 += pp.power + ", "; });
        data = `${rocket.name} Cuenta con ${rocket.getPropellers.length} propulsores,
        con una potencia maxima de cada uno ${text1} y la potencia actual de estos es ${text2} `
            + "<br>";
        // console.log(data);
    }
    else if (identifier == 1) {
        for (rocket of arrayRockets) {
            rocket.propellersInfo.forEach((pp) => { text1 += pp.power + ", "; });
            rocket.propellers.forEach((pp) => { text2 += pp.power + ", "; });
            data += `${rocket.name} Cuenta con ${rocket.getPropellers.length} propulsores,con 
            una potencia maxima de cada uno ${text1} y la potencia actual de estos es ${text2} `
                + "<br>";
            text1 = "";
            text2 = "";
        }
    }
    document.getElementById("data").innerHTML = data;
}
let rocketSelection1 = document.querySelectorAll(".rocketSelection");
function rocketSelection(rocket) {
    let rocketSelection = document.querySelectorAll(".rocketSelection");
    let i = 0;
    rocketSelection.forEach(box => {
        let option = document.createElement("option");
        option.appendChild(document.createTextNode(rocket.name));
        box.appendChild(option);
        console.log(box.textContent);
    });
}
