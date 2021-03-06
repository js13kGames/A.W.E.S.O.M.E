var EndGame = { };

EndGame.solution = "";
EndGame.sec = 0;
EndGame.n = 21;

EndGame.Init = function () {
  EndGame.solution = Main.deactivateCode;
  EndGame.n = 21;
}

EndGame.Render = function() {
  if (EndGame.n > 0)
  {
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgb(0,255,0)';
    ctx.fillText("Congratulations on cracking the Hydra encryption algorithm", (c.width/2)-240, 150);
    ctx.font = '36px Arial';
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillText(EndGame.n, 300, 230);
    ctx.font = '18px Arial';
    ctx.fillStyle = 'rgb(0,255,0)';
    ctx.fillText("Only your typing speed can save us now", (c.width/2)-170, 300);
    ctx.font = '14px Arial';
    ctx.fillText(EndGame.solution, 250, 350);
  }
  else
  {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.font = '36px Arial';
    ctx.fillStyle = 'rgb(255,0,0)';
    ctx.fillText("All is LOST!", (c.width/2)-100, 230);
    ctx.fillText("JS13KGAMES 2017", (c.width/2)-170, 280);
  }
}

EndGame.Update = function() {
  if ((EndGame.sec <= Date.now()) && (EndGame.n > 0))
  {
    EndGame.sec = Date.now()+1000;
    if (EndGame.n > 0){EndGame.n--;}else{EndGame.n=0;};
  }
}

EndGame.GetCode = function() {
  return (EndGame.solution);
}
