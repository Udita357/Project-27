class Rope{
    constructor(body1,body2,offsetX,offsetY)
    {   
        this.x = offsetX;
        this.y = offsetY;
        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.x,y:this.y},
            length:300
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }

    display()
    {
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
        
        strokeWeight(4);
        stroke("white")
        
        var anchor1X=pointA.x;
        var anchor1Y=pointA.y;

        var anchor2X=pointB.x+this.x;
        var anchor2Y=pointB.y+this.y;

        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
    }
}