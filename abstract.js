 class abstract{
    constructor(phoneinside,insidecamera){
        this.phoneinside=phoneinside;
        this.insidecamera=insidecamera;

    }

    method(phoneoutside){
        this.phoneoutside=this.phoneinside;
        console.log(this.phoneoutside +"using outside to change the inside parts");

    }
 


 method2(outsidecamera){
    this.outsidecamera=this.insidecamera;
    console.log(this.outsidecamera);
    if (this.outsidecamera!=this.insidecamera) {
        console.log("the run is failed");

        if (this.outsidecamera===this.insidecamera) {
            console.log("this both are equal");
            
        }
        
        
    } else {
        
        console.log("this is equal");
        
    }

 }


}

 


 mynew =new abstract("changeinsideparts","data");
 mynew.method();
 mynew.method2();    


  