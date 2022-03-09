
export class Registration {
    ign: string;
    constructor(name: string){
        this.ign = name
        console.log('started registration for: ' + name);
    }

    async startRegistration(){
        return this.ign
    }
}