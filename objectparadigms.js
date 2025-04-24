class barbie{
    constructor(eyes){

        this.eyes=eyes;

    }

    run(){
        console.log(this.eyes+""+"is a cute toy");
        
    }
}

class barbieToy extends barbie{
    constructor(eyes) {
        super(eyes);
      }

      
}

let a = new barbieToy("carlinbarbie");
a.run();