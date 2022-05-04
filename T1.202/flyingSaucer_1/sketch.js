//Topic 1.1 
//Object orientation revisted
//part one

//create variable
var flying_saucer;

function setup()
{
    createCanvas(800,600);
    noStroke();

    //defined var values
    flying_saucer = {
        x: 400,
        y: 150,
        width:250,
        height: 75,
        window_width: 0.5,
        window_height: 1.2,
        base_height: 0.45,
        num_lights: 20,
        brightnesses: []
    }

    //for loop for the brigtnesses
    for (var i = 0; i < flying_saucer.num_lights; i++){
        flying_saucer.brightnesses.push((i * 5)%255);
    }
}

function draw()
{
    background(50,0,80);
    
    //draw the ground
    fill(0,50,0);
    rect(0,height - 100, width, 100);
    
    //draw the flying saucerr
    fill(175,238,238);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width/2,flying_saucer.height*2,PI,TWO_PI)
    fill(150);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height,PI,TWO_PI);
    fill(50);
    arc(flying_saucer.x,flying_saucer.y,flying_saucer.width,flying_saucer.height/2,0,PI);

    //adding hover 
    flying_saucer.x += random(-2,2);
    flying_saucer.y += random(-1,1);
    
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