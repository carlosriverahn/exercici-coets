let arrayRockets: Rocket[] = []
// let i:number = 0;
function createRocket1(){
    let name:string = prompt("Ingresa el nombre de tu cohete")!;
    let numberPropeller:number = 3;
    rocketInstance(name,numberPropeller);
}
function createRocket2(){
    let name:string = prompt("Ingresa el nombre de tu cohete")!;
    let numberPropeller:number = 6;
    rocketInstance(name,numberPropeller);
}

function increasePower1(){
    let typeRocket:number = 3;
    let powerMax1 = powerMax(3);
    increase(typeRocket,powerMax1,undefined)
}
function increasePower2(){
    let typeRocket:number = 6;
    let powerMax1 = powerMax(6);
    increase(typeRocket,powerMax1,undefined)
}
function increasePowerx(){
    let nameRocket = (document.getElementById("accelerate")as HTMLInputElement).value;
    let rocketx:Rocket = arrayRockets.find(rocket => rocket.name == nameRocket)!;
    let typeRocket:number = rocketx.propellers.length;
    let powerMax1 = powerMax(typeRocket);
    increase(typeRocket,powerMax1,rocketx)
}
function decreasePower1(){
    decrease(3);
}
function decreasePower2(){
    decrease(6);
}
function decreasePowerx(){
    let nameRocket = (document.getElementById("break")as HTMLInputElement).value;
    let rocketx:Rocket = arrayRockets.find(rocket => rocket.name == nameRocket)!;
    decrease(0,rocketx) 
}
function infoRocket1(){
    let typeRocket:number = 3;
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    infoRocket(rocket,typeRocket,0);
}

function infoRocket2(){
    let typeRocket:number = 6;
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    infoRocket(rocket,typeRocket,0);
}

function infoRocketAll(){
    infoRocket(undefined,undefined,1)
}

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

function rocketInstance(name:string, numberPropeller:number){
    let rocket = new Rocket(name);
    let i:number = 0;
    arrayRockets.push(rocket);
    for(i=0; i < numberPropeller; i++){
        rocket.addPropeller({propeller:"pp"+[i],power:0});
    }
}
function increase(typeRocket:number, powerMax1: { power: number; }[],rocketx:Rocket | undefined){
    let i:number = 0;
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    if(rocket == undefined){
        alert("No hay introducido ningun cohete con esas caracteristicas")
    }else{rocket.propellers.forEach(rocket =>{
        if(  rocket.power < powerMax1[i].power){
            rocket.power += 10;}
            i++
        });
    }    
}
function decrease(typeRocket:number, rocketx?:Rocket | undefined){
    let rocket:Rocket = arrayRockets.find(rocket => rocket.propellers.length == typeRocket)!;
    if(rocket == undefined && typeRocket == 0){
        alert("No hay introducido ningun cohete con esas caracteristicas")
    }else if(rocketx != undefined){
        rocket = rocketx;
    }else{rocket.propellers.forEach(rocket =>{
        if(  rocket.power > 0){
            rocket.power -= 10;}
        });
    }  
}
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
                            con una potencia maxima de cada uno ${text1}
                            y la potencia actual de estos es ${text2} `+ "<br>"    
        // console.log(data);
    }else if(identifier == 1){
        for(rocket of arrayRockets){
            powerMax1 = powerMax(rocket.propellers.length);
            powerMax1.forEach((pp: { power: number; }) => {text1+= pp.power+", "});
            rocket!.propellers.forEach((pp: { power: number; }) => {text2+= pp.power+", "});
            data += `${rocket!.name} Cuenta con ${rocket!.getPropellers.length} propulsores,
            con una potencia maxima de cada uno ${text1}
            y la potencia actual de estos es ${text2} `+ "<br>"
            text1 = "";
            text2 = "";
            powerMax1.length = 0;
        }
    }
    (document.getElementById("data")as HTMLInputElement).innerHTML = data;
}
    
