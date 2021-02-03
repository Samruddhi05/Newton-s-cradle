class Rope {
    constructor (bodyA,pointB){
        var options = {
            bodyA : bodyA, pointB : pointB , stiffness : 0.3, length : 400
        }
        this.pointB = pointB
        this.sling = Constraint.create (options);
        World.add (world,this.sling);
    }
     display(){

        if(this.sling.bodyA){
            var pA = this.sling.bodyA.position
            var pB = this.pointB
           push ();
           strokeWeight(4)
           line (pA.x,pA.y-50 , pB.x,pB.y);
           pop();
        }
        
     }
    
}