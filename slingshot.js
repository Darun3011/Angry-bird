class SlingShot{

constructor(bodyA,bodyB){
    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        length: 10,
        stifness: 0.04

    } 
    this.slingShot = Matter.Constraint.create(options);
    World.add(world,this.slingShot);
    
    

}

display(){

    strokeWeight(5);

    line(this.slingShot.bodyA.position.x,this.slingShot.bodyA.position.y,this.slingShot.bodyB.position.x,this.slingShot.bodyB.position.y);

}

}