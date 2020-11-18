class Tree  {
    constructor(x,y,width,height)  {
        var options={
            isStatic: true,
        }
        this.image = loadImage("tree.png");

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height

        
    }
    display()  {
        
        imageMode(CENTER)
        image(this.image,this.body.position.x,this.body.position.y,500,700)
                
    }

}