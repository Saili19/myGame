class Form{
    constructor(){

this.title = createElement("h1","bunny runner");
this.input = createInput("name");
this.button = createButton("start");
this.greeting = createElement("h4");

    }

    

    display(){
        this.title.position(displayWidth/2-50,displayHeight/4);
        this.input.position(displayWidth/2,displayHeight/4+100);
        this.button.position(displayWidth/2,displayHeight/4+150);

        this.button.mousePressed(()=>{
           // this.button.hide();
           // this.title.hide();
           // this.input.hide();
           console.log("saili");

           var player = input.value()
           this.greeting.html("hey"+player);
           this.greeting.position(displayWidth/2-50,displayHeight/2);
        })
    }
}