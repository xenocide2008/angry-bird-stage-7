class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage=loadImage("sprites/smoke.png")
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    if(this.body.position.x>200 && this.body.velocity.x>2)
    this.trajectory.push([this.body.position.x,this.body.position.y])
    for(var i=0;i<this.trajectory.length;i++)
    {
      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1],10,10)
    }
  }
}
