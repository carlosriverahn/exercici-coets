
class Rocket{
    name:string;
    propellers:Propeller [] = new Array();
    // propellersInfo:Propeller [] = new Array();

    public constructor(name:string){
        this.name=name;
    }

    public get getPropellers(){
        return this.propellers;
    }

    addPropeller(propellers:Propeller){
        this.propellers.push(propellers);
    }
    
     propellerInfo(){
    
    }
}