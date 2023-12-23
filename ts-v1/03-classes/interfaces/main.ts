import {gender} from "./commons";


class main implements gender{
    count: number=12;
    getCount(): string {
        throw new Error("Method Yet to implement.. still work in progress");
    }
    
    
    getNames(): void{
        console.log(this.count);
    }

}

const m= new main();
m.getNames();
