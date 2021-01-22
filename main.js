canvas = document.getElementById('myCanvas'); 
ctx = canvas.getContext("2d"); 
background_image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRskBxlG8fOGMpLxKSxuATRo99__4oLNYRsYg&usqp=CAU"; 

car1_width = 150; car1_height = 90; 
car1_image = "https://w7.pngwing.com/pngs/676/74/png-transparent-car-laferrari-auto-racing-truck-top-view-purple-violet-cartoon.png"; 
car1_x = 10; 
car1_y = 10;

car2_width = 150; car2_height = 90; 
car2_image = "https://w7.pngwing.com/pngs/676/74/png-transparent-car-laferrari-auto-racing-truck-top-view-purple-violet-cartoon.png"; 
car2_x = 10; 
car2_y = 110;

function add()
{
    bg_imgTag=new Image();
    bg_imgTag.onload= uploadBg;
    bg_imgTag.src=background_image

    car1_imgTag=new Image();
    car1_imgTag.onload=uploadCar1
    car1_imgTag.src=car1_image

    car2_imgTag=new Image();
    car2_imgTag.onload=uploadCar2
    car2_imgTag.src=car2_image
}

function uploadBg()
{
    ctx.drawImage(bg_imgTag,0,0,canvas.width, canvas.height)
}
function uploadCar1()
{
    ctx.drawImage(car1_imgTag,car1_x, car1_y, car1_width, car1_height)
}
function uploadCar2()
{
    ctx.drawImage(car2_imgTag,car2_x, car2_y, car2_width, car2_height)
}