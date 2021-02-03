class Bob {
    constructor ( x , y ,r ){
        var options = { isStatic : false,
            restitution: 0.3 ,
            friction : 0.5,
            density : 1.2     
        }
        this.body = Bodies.circle ( x , y , 100 , options);
        this.radius = 100;
        World.add (world , this.body)
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("pink");
        ellipse(0, 0, 100);
        pop();
      }
}