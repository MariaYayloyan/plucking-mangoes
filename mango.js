class Mango  {
    constructor(x,y,radius)  {
        var options={
            restitution:0.04,
            isStatic: true,
            friction: 0.5,
            density: 1.2
        }
        this.image = loadImage("mango.png")

        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;


        World.add(world,this.body);
    }
    display()  {
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
       


    }


}