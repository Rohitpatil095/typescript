import {gender} from "./commons";
import { enlighten } from "./coupler";

class humans extends enlighten {
    enlightenProcedure(): string {
        // throw new Error("they are their own creators...");
        return `they are their own creators...  `;  //and it will take ${enlighten.getYugs()} yugs to enlighten them`;
    }
    
}

class main implements gender{
    human = new humans();
    count: number=12;
    
    getDirection(): void{
        console.log(this.human.enlightenProcedure());
    }
    getCount(): string {
        throw new Error("Method Yet to implement.. still work in progress");
    }
    
    getNames(): void{
        console.log(this.count);
    }

}

const m= new main();
m.getNames();
m.getDirection();
