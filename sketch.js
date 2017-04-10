var img;

function preload(){
    img = loadImage("budi.png");
}

function setup(){
    createCanvas(600, 400);
    background(0);
}

function draw(){
    if(mouseIsPressed){
        paint(mouseX, mouseY)
    }
    
    rowOfSquares();
    rowOfCircles();
    rowOfBudis();
}

function rowOfSquares(){
    fill(100, 255, 0);
    for(var i = 0; i < 5; i++){
        rect((i+1)*100, 300, (i+1)*5, (i+1)*5) 
    }
}

function paint(x,y){
    fill(100, 0, 255);
    noStroke();
    ellipse(x, y, 50, 50);
}

function rowOfCircles(){
    var size = [15, 40, 35, 62];
    fill(255, 0, 100);
    for(var i = 0; i < 4; i++){
        ellipse((i+1)*100, 200,size[i], size[i]);
    }
}

function rowOfBudis(){
    var size = [25, 46, 85, 72];
    for(var i = 0; i < 4; i++){
        image(  img,(i+1)*100, 50,size[i], size[i]);
    }
}

