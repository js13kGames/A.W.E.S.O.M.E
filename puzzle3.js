var P3 = { };

P3.solution = "";
P3.sequence = "";
P3.getChar = "";

P3.Init = function() {
  var num = 0;
  var num2 = 0;
  
  for (i = 0; i <= 3; i++)
  {  	
    P3.solution += Math.floor(Math.random() * 10);
  }
  
  for (n = 0; n <= P3.solution.length-1; n++)
  {
    P3.getChar = P3.solution.slice(n,n+1);
	
    // sequence
    if (P3.getChar > 0 && P3.getChar < 9)
    {
      num = parseInt(P3.getChar)-1;
      num2 = num + parseInt(P3.getChar);
      P3.sequence += num+''+num2;
    }
	
    if (P3.getChar == 0)
    {
      num = parseInt(P3.getChar)+1;
      num2 = num + parseInt(P3.getChar);
      P3.sequence += num+''+num2;
    }
	
    if (P3.getChar == 9)
    {
      num = parseInt(P3.getChar)+1;
      num2 = num + parseInt(P3.getChar);
      P3.sequence += num+''+num2;
    }
  }
}

P3.Render = function() {
  ctx.strokeStyle = 'rgb(0, 100, 0)';
  ctx.strokeRect((c.width/2)-75, 80, 150, 20);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillText("Terminal 3", (c.width/2)-32, 95);
  ctx.strokeRect((c.width/2)-250, 100, 500, 200);
  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgb(0, 255, 0)';
  strSequence = parseInt(P3.sequence).toString(16); 
  ctx.fillText(strSequence.toUpperCase(), 255, 210);
  ctx.font = '14px Arial';
}

P3.Update = function() {
  if (T.GetKeyCode() == 13)
  {
    P3.ShowMsg("HINT","Hexadecimal to decimal - discover the sequence\nType hextodec to convert");
    P3.ShowMsg("HEXTODEC",P3.sequence);
    P3.ShowMsg("I GIVE UP",P3.solution);
  }
}

P3.GetCode = function() {
  return (P3.solution);
}

P3.ShowMsg = function(cmd, msg) {
  if (T.GetCode() == cmd)
  {
    alert(msg);  
  }
}
