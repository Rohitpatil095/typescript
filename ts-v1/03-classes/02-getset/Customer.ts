class Customer{
    custNames: string[];
    custAge: number;

    constructor(cusAge: number){
        this.custAge =cusAge;
    }

    public get getCustAge(){
        return this.custAge;
    }
}

let virat= new Customer(10);
console.log(virat.getCustAge);