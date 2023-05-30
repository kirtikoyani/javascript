class BankAccount{
    name='kirti';
    #pin ='12345';

    getName(){
        return this.name;
    }
    getPin(){
        return this.pin;
    }
    #getIFSC(){
        return '78403294';
    }
    getSpecialDetails(){
        return{
            pin:this.#pin,
            name:this.name,
            ifsc:this.#getIFSC()
        }
    }
}
const details = new BankAccount();
console.log(details.getSpecialDetails());
console.table(details.getSpecialDetails());