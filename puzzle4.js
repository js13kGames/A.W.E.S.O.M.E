var P4 = { };

P4.solution = "";
P4.numbers = ['0','1','2','3','4','5','6','7','8','9'];
P4.sec = 0;
P4.showCookie = false;
P4.posX = 0;
P4.posY = 0;
P4.skull = 0;
P4.playSound = true;

P4.Init = function() {
  P4.skull = new Image();
  P4.skull.src = 'virus.png';  
  
  for (i = 0; i <= 3; i++)
  {  	
    P4.solution += P4.GetRandom(P4.numbers.length);
  }
  
  document.cookie = "js13kgames="+P4.solution;  
}

P4.Render = function() {
  ctx.strokeStyle = 'rgb(0, 100, 0)';
  ctx.strokeRect((c.width/2)-75, 80, 150, 20);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillText("Terminal 4", (c.width/2)-32, 95);
  ctx.strokeRect((c.width/2)-250, 100, 500, 200);
  ctx.font = '36px Arial';
  ctx.fillStyle = 'rgb('+1+P4.GetRandom(255)+',0,0)';
  ctx.fillText("VIRUS DETECTED", (c.width/2)-150, 200);
  
  ctx.font = '14px Arial';
  ctx.fillStyle = 'rgb(0, 255, 0)';
  ctx.fillText("GTNW detected you! They have deployed a virus", 160, 340);
  
  if (P4.showCookie == true)
  {
    ctx.fillText("GIVE ME COOKIE", P4.posX, P4.posY);
  }
  else
  {
    ctx.drawImage(P4.skull, P4.posX, P4.posY);
  }
  
  ctx.font = '14px Arial';
}

P4.Update = function() {
  // If user deletes cookies, create another one
  document.cookie = "js13kgames="+P4.solution;    
  
  if (P4.sec <= Date.now())
  {
    P4.sec = Date.now()+500;
    P4.showCookie = !P4.showCookie;
	
    P4.posX = 90+P4.GetRandom(330);
    P4.posY = 120+P4.GetRandom(150);
  }
  
  if (T.GetKeyCode() == 13)
  {
    P4.ShowMsg("HINT","Where can you find a cookie?");
    P4.ShowMsg("COOKIE","Sorry! Not that simple!");
    P4.ShowMsg("I GIVE UP","Type javascript:alert(document.cookie) in browser");
	
    KB.ClearBuffer();
  }
}

P4.GetRandom = function(num) {
  return (Math.floor(Math.random()*num));	
}

P4.GetCode = function() {
  return (P4.solution);
}

P4.ShowMsg = function(cmd, msg) {
  if (T.GetCode() == cmd)
  {
    alert(msg);  
  }
}
