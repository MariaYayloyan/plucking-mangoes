class Stone {
    constructor(x,y,radius)  {
        var options={
            isStatic: false,
        }
        this.image = loadImage("stone.png")

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius
        

        World.add(world,this.body);
    }
    display()  {
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
        

    }

}