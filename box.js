class box {
    constructor(x, y, width, height) {
      var options={
      "restitution":0.4,
      'friction':0.2
    }
      this.Visibility =255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle=this.body.angle
      push()
      translate(pos.x,pos.y)
      rectMode(CENTER);
      rotate(angle);
      rect(0,0,this.width, this.height);
      pop();
    }
    else
    World.remove(world,this.body);
    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility)
    pop();
    }
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  };
  