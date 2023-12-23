class Customer{
    custNames: string[];
    custAge: number;

    constructor(cusAge: number){
        this.custAge =cusAge;
    }

    public get getCustAge(){
        return this.custAge;
    }

    public set setCustAge(age: number)
    {
        this.custAge=age;
    }
}

let virat= new Customer(10);
console.log(virat.getCustAge);