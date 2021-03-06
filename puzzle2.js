var P2 = { };

P2.solution = "A1B2"; // <-- Don't look :oP

P2.Init = function() {
}

P2.Render = function() {
  ctx.strokeStyle = 'rgb(0, 100, 0)';
  ctx.strokeRect((c.width/2)-75, 80, 150, 20);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillText("Terminal 2", (c.width/2)-32, 95);
  ctx.strokeRect((c.width/2)-250, 100, 500, 200);
  
  ctx.fillStyle = 'rgb(0, 255, 0)';
  
  ctx.fillText("3  |  1  0  0  0           3 |  0  0  0  0           3 |  ?  ?  ?  ?", 140, 150);
  ctx.fillText("2  |  0  0  0  1           2 |  1  0  1  0           2 |  ?  ?  ?  ?", 140, 170);
  ctx.fillText("1  |  0  0  0  0           1 |  0  1  0  0           1 |  ?  ?  ?  ?", 140, 190);
  ctx.fillText("0  |  0  1  0  0           0 |  0  0  0  0           0 |  ?  ?  ?  ?", 140, 210);
  ctx.fillText("     --------------             --------------             --------------", 140, 220);
  ctx.fillText("      A  B  C  D                A  B  C  D               A  B  C  D", 140, 240);
  ctx.fillText("      A3:B0:D2                 A2:B1:C2                     ?", 140, 270);
}

P2.Update = function() {
  if (T.GetKeyCode() == 13)
  {
	KB.SetKeyCode(0);
	
	P2.ShowMsg("HINT","Can you see a pattern?\nUse the grid to find what you seek");
	P2.ShowMsg("I GIVE UP",P2.solution);
	
	KB.ClearBuffer();
  }
}

P2.GetCode = function() {
  return (P2.solution);
}

P2.ShowMsg = function(cmd, msg) {
  if (T.GetCode() == cmd)
  {
    alert(msg);  
  }
}