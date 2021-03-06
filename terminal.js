var T = { };

T.keycode = 0;

T.Init = function() {  
  this.code = "";
  this.textWidth = 0;
  
  this.isBlink = false;
  
  gui = new Image(640, 480);
  gui.src = 'gui.png';
  
  KB.Init();
}

T.Render = function() {
  // Clear screen
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.drawImage(gui, 0, 0);
	
  ctx.font = '14px Arial';
  ctx.fillStyle = 'rgb(255, 255, 255)';
	
  // Display deactivation code
  ctx.fillText(this.code, 50, 430);
	
  // Blinking cursor
  if (this.isBlink)
  {
    ctx.fillStyle = 'rgb(1, 255, 1)';
    ctx.fillRect(52+this.textWidth, 415, 12, 20);
  }
}

T.Update = function() {
  this.code = KB.GetKeyboardBuffer(40);
  T.keycode = KB.GetKeyCode();
  
  this.textWidth = ctx.measureText(this.code).width;
  
  if (KB.BlinkingCursor()){this.isBlink=!this.isBlink;}
}

T.GetCode = function() {
  return (this.code);
}

T.GetKeyCode = function() {
  return (T.keycode); 
}

T.ResetKeyCode = function() {
  T.keycode = 0;
}
