//Topic 1.1 
//Object orientation revisted
//part one

//create variable
var flying_saucer;


function setup()
{
    createCanvas(800,600);
    noStroke();

}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw bean
    if(flying_saucer.bean_on == true)
    {
        flying_saucer.bean();
    }

    //draw the flying saucerr
    fill(175,238,238);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width/2,flying_saucer.height*2,PI,TWO_PI)
    fill(150);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height,PI,TWO_PI);
    fill(50);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height/2,0,PI);

    //draw hover 
    flying_saucer.hover();


    
    //add lights to the flying saucerr
    fill(255);
    
    var inc = flying_saucer.width/(10 - 1);

    for(var i = 0; i < 10; i++)
    {
        //add fill
        fill(flying_saucer.brightnesses[i]);
        ellipse(flying_saucer.x - flying_saucer.width/2 + inc * i, flying_saucer.y, 5);
        
        flying_saucer.brightnesses[i] += 1;
        flying_saucer.brightnesses[i] = flying_saucer.brightnesses[i]%255;
    }
} 

function keyPressed(){
    flying_saucer.bean_on = true;
}

function keyReleased(){
    flying_saucer.bean_on = false; 
}

//defined var values
function FlyingSaucer(){
    this.x = 200;
    this.y = 100;
    this.width = 250;
    this.height = 75;
    this.window_width = 0.5;
    this.window_height = 1.2;
    this.base_height = 0.45;
    this.num_lights =20;
    this.brightnesses = [];
    this.bean_on = false;

    //bean
    this.bean = function()
    {
        fill(255,255,100,150);

        if(random() > 0.1)
        {

            beginShape();
            vertex(this.x - this.y + this.base_height * 0.5);
            vertex(this.x + 25, this.y + this.height * this.base_height * 0.5);
            vertex(this.x + 70, height - 100);
            vertex(this.x - 70, height - 100);
            endShape(CLOSE);
        }
    },

    //hover function
    this.hover = function()
    {
        //console.log("hover");
        this.x += random(-2,2);
        this.y += random(-1,1);
    }

    this.draw = function(){

    }

    //for loop for the brigtnesses
    for (var i = 0; i < this.num_lights; i++){
        this.brightnesses.push((i * 5)%255);
    }

}