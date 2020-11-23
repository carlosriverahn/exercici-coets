// Array para cohetes
let arrayRockets: Rocket[] = []

/*El codigo contiene funciones generales, que a su vez llaman
a funciones especificas para reducir las lineas de codigo ultilizado*/

// Funciones generales para la creacion de cohetes de 3 y 6 propulsores.
function createRocket(){
    let name = prompt("ingresa el nombre de tu cohete")!;
    let type = (document.getElementById("rocketCreate")as HTMLInputElement).value;
    let numberPropeller:number = 0;
    if(type == "32WESSDS"){
        numberPropeller = 3;
    }else if(type == "LDSFJA32"){
        numberPropeller = 6;
    }else{
        numberPropeller = parseInt(prompt("Ingresa el numero propulsores")!);
    }
    let rocket = arrayRockets.find(rocket => rocket.name == name);
    if(name == ""){
        alert("Debes nombrar a tu Rocket para ponerlo en la plataforma de lanzamiento!");
    }else if(rocket != undefined){
        alert("Ya existe un cohete con ese nombre.");
    }else{
    rocketInstance(name,numberPropeller);}
}
// Funciones para incrementar potencia.
function increasePower(){
    let typeRocket:number = 3;
    let powerMax1 = powerMax(3);
    increase(typeRocket,powerMax1,undefined)
}
function increasePowerx(){
    let nameRocket = (document.getElementById("accelerate")as HTMLInputElement).value;
    let rocketx:Rocket = arrayRockets.find(rocket => rocket.name == nameRocket)!;
    let typeRocket:number = rocketx.propellers.length;
    let powerMax1 = powerMax(typeRocket);
    increase(typeRocket,powerMax1,rocketx)
}
// Funciones para decrementar potencia.
function decreasePower(){
    decrease(3,undefined);
}
function decreasePowerx(){
    let nameRocket = (document.getElementById("break")as HTMLInputElement).value;
    let rocketx:Rocket = arrayRockets.find(rocket => rocket.name == nameRocket)!;
    decrease(0,rocketx) 
}
// Funciones generales para desplegar informacion.
function infoRocketX(){
    let typeRocket:number = 3;
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    infoRocket(rocket,typeRocket,0);
}

function infoRocketAll(){
    infoRocket(undefined,undefined,1)
}

// Funcion que regresa cuanto debe tener de potencia maxima cada cohete.
function powerMax(powerMax : number | Propeller []){
    if(powerMax == 3){
        powerMax= [{propeller:"pp1",power:10},
        {propeller:"pp2",power:30},
        {propeller:"pp3",power:80}];
    }else{
        powerMax= [{propeller:"pp1",power:30},
        {propeller:"pp2",power:40},
        {propeller:"pp3",power:50},
        {propeller:"pp4",power:50},
        {propeller:"pp5",power:30},
        {propeller:"pp6",power:10}];
    }
    return powerMax;
}
// Funcion con la cual se crean los cohertes, segun el numero de propulsores.
function rocketInstance(name:string, numberPropeller:number){
    let rocket = new Rocket(name);
    let i:number = 0;
    arrayRockets.push(rocket);
    let powerMax1 : Propeller [] = []
    powerMax1 = powerMax(numberPropeller!)
    rocket.propellersInfo = powerMax1;
    for(let i = 0; i < numberPropeller; i++){
        let powerMax : Propeller []=[];
        let propeller:Propeller;
        let power: number = parseInt(prompt("Ingresa la potencia del propulsor 0-150")!);
        if(power < 0 && power > 150){
            alert("La potencia debe estar entre 0 y 150")
        }else{
            propeller = {propeller:"pp"[i],power: power}
            powerMax.push(propeller);
        }
        
    }
    for(i=0; i < numberPropeller; i++){
        rocket.addPropeller({propeller:"pp"+[i],power:0});
    }
}
// Funcion que incrementa la potencia de los propulsores.
function increase(typeRocket:number | undefined, powerMax1: { power: number; }[],rocketx:Rocket | undefined){
    let i:number = 0;
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    if(rocketx != undefined){
        rocket = rocketx
    }
    if(rocket == undefined){
        alert("No hay introducido ningun cohete con esas caracteristicas")
    }else{rocket.propellers.forEach(rocket =>{
        if(  rocket.power < powerMax1[i].power){
            rocket.power += 10;}
            i++
        });
    }    
}
// Funcion que decrementa la potencia de los propulsores.
function decrease(typeRocket:number | undefined, rocketx:Rocket | undefined){
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    if(rocketx != undefined){
        rocket = rocketx;
    }
    if(rocket == undefined && typeRocket == 0){
        alert("No hay introducido ningun cohete con esas caracteristicas")
    }else{rocket.propellers.forEach(rocket =>{
        if(  rocket.power > 0){
            rocket.power -= 10;}
        });
    }  
}
// Funcion para mostrar informacion de los cohetes.
function infoRocket(rocket:Rocket | undefined, typeRocket:number | undefined, identifier:number){
    
    let text1:string  = ""
    let text2:string | void= ""
    let data:string = ""
    let powerMax1:Propeller []= []    
    if (identifier==0){
        powerMax1 = powerMax(typeRocket!);
        powerMax1.forEach((pp: { power: number; }) => {text1+= pp.power+", "});
        rocket!.propellers.forEach((pp: { power: number; }) => {text2+= pp.power+", "});
        data = `${rocket!.name} Cuenta con ${rocket!.getPropellers.length} propulsores,
        con una potencia maxima de cada uno ${text1} y la potencia actual de estos es ${text2} `
        + "<br>"    
        // console.log(data);
    }else if(identifier == 1){
        for(rocket of arrayRockets){
            powerMax1 = powerMax(rocket.propellers.length);
            powerMax1.forEach((pp: { power: number; }) => {text1+= pp.power+", "});
            rocket!.propellers.forEach((pp: { power: number; }) => {text2+= pp.power+", "});
            data += `${rocket!.name} Cuenta con ${rocket!.getPropellers.length} propulsores,con 
            una potencia maxima de cada uno ${text1} y la potencia actual de estos es ${text2} `
            + "<br>"
            text1 = "";
            text2 = "";
            powerMax1.length = 0;
        }
    }
    (document.getElementById("data")as HTMLInputElement).innerHTML = data;
}
    
