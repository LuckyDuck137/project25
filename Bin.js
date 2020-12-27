class Bin{
    constructor(x, y, width, height) {
            var options = {
                visible: false,
                'restitution':0,
                'friction':0,
                'density':0.5,
                
            }
           this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            this.image= loadImage("images/dustbingreen.png")
            World.add(world, this.body);
          }
        
    
          display(){
            var pos =this.body.position;
            var angle =this.body.angle;
            push ();
            translate(pos.x,pos.y);
            fill("white");
            //rect(0,0,this.width,this.height);
            imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
           
          }
        }