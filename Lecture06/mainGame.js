var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

class Player{
    constructor(position_x,position_y,radius,color){
        this.position_x=position_x;
        this.position_y=position_y;
        this.radius=radius;
        this.color=color;
    }
    draw()
    {
        context.beginPath();
        context.arc(this.position_x, this.position_y, this.radius, 0, 2*Math.PI,this.color);
        context.fillstyle = this.color;
        context.fill();
    }
   
}

class boll{
    constructor(position_x,position_y,width,height,color){
        this.position_x=position_x;
        this.position_y=position_y;
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw1()
    {
        context.beginPath();
        context.strokeRect(this.position_x, this.position_y, this.width,this.height,this.color);
        context.fillstyle = this.color;
        context.fill();
    }
}
var char_Player = new Player(100,100,20,'skyblue');
char_Player.draw();

var char_Player2 = new boll(150,10,20,20,'skyblue');
char_Player2.draw1();


canvas.onclick = function(char_Player2){
const x = char_Player2.clientX - context.canvas.offsetLeft;
const y = char_Player2.clientY - context.canvas.offsetTop;
context.fillRect(x-15, y-15, 20, 20);

}