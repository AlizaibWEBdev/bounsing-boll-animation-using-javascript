let div = document.getElementById("div");
let x = 0;
let y = -1;
let movespeed = 5;
let can_I_moveToX = true;
let can_I_moveToY = true;

function animate(){ 
    if (x < 1400 && can_I_moveToX == true) {
        x = x+movespeed;

    }
    else{
        can_I_moveToX = false;
    } 
    if (y < 599 && can_I_moveToY == true) {
        
        y = y+ movespeed;
    }else{
        can_I_moveToY =false;
    }
    if (can_I_moveToY == false) {
        y = y-movespeed
    }
    if (y <1) {
        can_I_moveToY = true
    }
    
   if (can_I_moveToX == false) {
      x=x-movespeed
   }
   if (x < 1) {
       can_I_moveToX = true
    
   }   
    console.log(x);
    div.style.top = `${y}px`;
    div.style.left = `${x}px`;
    window.requestAnimationFrame(animate);
}
animate();