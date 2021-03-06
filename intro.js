var Intro = { };

Intro.mx = 0;
Intro.my = 0;

Intro.startGame = false;

Intro.Init = function() {
  this.introText = [];
  
  this.introText[0] = "The hacking group A.W.E.S.O.M.E (Anti Warfare Exemplary Security Offensive"; 
  this.introText[1] = "against Mean Enemies) have discovered a plot to destroy the world by the Global";
  this.introText[2] = "ThermoNuclear War group (GTNW), unfortunately they have done all they can to";
  this.introText[3] = "solve the deactivation code to avert global conflict.";
  this.introText[4] = "";
  this.introText[5] = "They have hacked into the GTNW network but there are four levels of security";
  this.introText[6] = "using the advanced Hydra encryption algorithm. Use your elite problem solving";
  this.introText[7] = "skills to uncover the deactivation code.";
  this.introText[8] = "";
  this.introText[9] = "Humanity is counting on you!";
  
  c.addEventListener('mousedown', function(e) {
	  Intro.mx = e.clientX - c.getBoundingClientRect().left;
      Intro.my = e.clientY - c.getBoundingClientRect().top;
  });	  
}

Intro.Render = function() {
  ctx.font = '14px Arial';
  ctx.fillStyle = 'rgb(0, 255, 0)';
  
  ctx.fillText(this.introText[0], 60, 110);
  ctx.fillText(this.introText[1], 60, 130);
  ctx.fillText(this.introText[2], 60, 150);
  ctx.fillText(this.introText[3], 60, 170);
  ctx.fillText(this.introText[4], 60, 190);
  ctx.fillText(this.introText[5], 60, 210);
  ctx.fillText(this.introText[6], 60, 230);
  ctx.fillText(this.introText[7], 60, 250);
  ctx.fillText(this.introText[8], 60, 270);
  ctx.fillText(this.introText[9], 60, 290);
  
  ctx.strokeStyle = 'rgb(0, 100, 0)';
  ctx.strokeRect((c.width/2)-45, 320, 90, 30);
  ctx.fillText("CONNECT", (c.width/2)-33, 340);
}

Intro.StartGame = function() {
  return (Intro.startGame);	
}

Intro.Update = function() {
  // Make sure mouse pointer is within the boundary of the connect button
  if (Intro.mx >= 274 && Intro.mx <= 364 && Intro.my >= 321 && Intro.my <= 350)
  {
    Intro.startGame = true;	  
  }
}