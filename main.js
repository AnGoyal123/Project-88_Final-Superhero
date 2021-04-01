var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;
var player_y = 10;

var block_image_hieght = 30;
var block_image_width = 30;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        player_object = Img;

        player_object.scaleToHeight(140);
        player_object.scaleToWidth(150);

        player_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(player_object);

    })
}

function new_Image(get_Image){
    fabric.Image.fromURL(get_Image , function(Img){
        block_image_object = Img;

        block_image_object.scaleToHeight(block_image_hieght);
        block_image_object.scaleToWidth(block_image_width);

        block_image_object.set({
            top:player_y,
            left:player_x
        })
        canvas.add(block_image_object);
        
    })
}


window.addEventListener("keydown",my_keydown)

function my_keydown(e){
    KeyPressed = e.keyCode
    console.log(KeyPressed)

    if(e.shiftKey == true && KeyPressed == '80'){
        console.log("shift and p pressed together")
        block_image_hieght = block_image_hieght + 10;
        block_image_width = block_image_width + 10;
        console.log(block_image_width);
        console.log(block_image_hieght);
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_hieght").innerHTML = block_image_hieght;
    }

    if(e.shiftKey == true && KeyPressed == '77'){
        console.log("shift and m pressed together")
        block_image_hieght = block_image_hieght - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_hieght").innerHTML = block_image_hieght;
    }
}


if(KeyPressed == '38'){
    up();
    console.log("up");
}
if(KeyPressed == '40'){
    down();
    console.log("down");
}
if(KeyPressed == '37'){
    left();
    console.log("left");
}
if(KeyPressed == '39'){
    right();
    console.log("right");
}




if(KeyPressed == '70'){
    new_Image("ironman_face.png");
    console.log("F");
}
if(KeyPressed == '66'){
    new_Image("spiderman_body.png");
    console.log("B");
}
if(KeyPressed == '76'){
    new_Image("hulk_legs.png");
    console.log("L");
}
if(KeyPressed == '82'){
    new_Image("thor_right_hand.png");
    console.log("R");
}
if(KeyPressed == '72'){
    new_Image("captain_america_left_hand.png");
    console.log("H");
}


function up(){
    if(player_y >=0){
        player_y = player_y - block_image_hieght;
        console.log("Block image hieght =" + block_image_hieght);
        console.log("X =" + player_x + ", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){
    if(player_y <=500){
        player_y = player_y + block_image_hieght;
        console.log("Block image hieght =" + block_image_hieght);
        console.log("X =" + player_x + ", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >=0){
        player_x = player_x - block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("X =" + player_x + ", Y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <=850){
        player_x = player_x + block_image_width;
        console.log("Block image width =" + block_image_width);
        console.log("X =" + player_x + ", Y = "+player_y);
        canvas.remove(player_object);   
        player_update();
    }
}