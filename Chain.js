class chain{
    constructor(bodyA,pointB){
var options = {
    bodyA:bodyA,
    pointB:pointB,
    length:21,
    stiffness:0.6
}
this.chain=Matter.Constraint.create(options)
this.pointB=pointB
World.add(world,this.chain)

    }
    display(){
        strokeWeight(3)
     stroke("black")
        if (this.chain.bodyA)
        {line(this.chain.bodyA.position.x+10,this.chain.bodyA.position.y-0,this.pointB.x,this.pointB.y)
    }
}
attach(body){
    this.chain.bodyA = body;
}
    yeet(){
this.chain.bodyA=null
    }
}
