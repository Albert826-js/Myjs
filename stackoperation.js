 
class stacks {
    constructor() {
        this.a =[];

        console.log(this.a);
        

        
    }

push(b){
    this.a.push("albert","carlin")
    console.log(this.a);
    

}

pop(){
    this.a.unshift("latha");
    console.log(this.a);

    
}

peekw(){
    this.a.peek();
    console.log(this.a);
    
}

}


let stock=new stacks();
console.log(stock);

stock.push(8);
stock.pop();
 
 
