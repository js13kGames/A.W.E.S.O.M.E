var P1 = { };

P1.code = "";
P1.problemNumber = [];
P1.problemLetter =[];
P1.solution = "";

P1.Letters = ['65','66','67','68','69','70']; // A-F
P1.Numbers = ['48','49','50','51','52','53','54','55','56','57']; // 0-9
						
P1.Init = function() {
  P1.solution = "";
  
  for (i=0;i<=1;i++)
  {
    var getNumber = Math.floor(Math.random() * P1.Numbers.length);
    var getLetter = Math.floor(Math.random() * P1.Letters.length);
	
    var numCode = parseInt(P1.ShowChar(P1.Numbers[getNumber]));
    var letterCode = parseInt(P1.Letters[getLetter]);

    if (numCode > 0 && numCode < 9)
    {
      var num1 = numCode - 1;
      var num2 = numCode + 1;

      P1.problemNumber[i] = num1+''+num2;
      P1.solution += numCode;
    }
	
    // Special case
    if (numCode == 0)
    {
      var num1 = numCode + 1;
      var num2 = num1 + 2;
 
      P1.problemNumber[i] = num1+''+num2;
      P1.solution += num2 - 1;
    }
	
    // Special case
    if (numCode == 9)
    {
      var num1 = numCode - 1;
      var num2 = num1 - 2;

      P1.problemNumber[i] = num2+''+num1;
      P1.solution += num2 + 1;	   
    }
	
    // Get letters
    if (letterCode > 65 && letterCode < 70)
    {
      var num1 = letterCode - 1;
      var num2 = letterCode + 1;

      P1.problemLetter[i] = P1.ShowChar(num1)+''+P1.ShowChar(num2);
      P1.solution += P1.ShowChar(letterCode);
    }
  
    // Special case
    if (letterCode == 65)
    {
      var num1 = letterCode + 1;
      var num2 = num1 + 2;
      var num3 = num2-1;
	   
      P1.problemLetter[i] = P1.ShowChar(num1)+''+P1.ShowChar(num2);
      P1.solution += P1.ShowChar(num3);
    }
	
    if (letterCode == 70)
    {
      var num1 = letterCode - 1;
      var num2 = num1 - 2;
      var num3 = num2+1;
	  
      P1.problemLetter[i] = P1.ShowChar(num2)+''+P1.ShowChar(num1);
      P1.solution += P1.ShowChar(num3); 	  
    }
  }
}

P1.Render = function() {
  ctx.strokeStyle = 'rgb(0, 100, 0)';
  ctx.strokeRect((c.width/2)-75, 80, 150, 20);
  ctx.fillStyle = 'rgb(255, 255, 255)';
  ctx.fillText("Terminal 1", (c.width/2)-32, 95);
  ctx.strokeRect((c.width/2)-250, 100, 500, 200);
  
  ctx.font = '36px Arial';
  ctx.fillStyle = 'rgb(0, 255, 0)';
  ctx.fillText('0x'+P1.problemNumber[0]+'   '+'0x'+P1.problemLetter[0]+'   '+'0x'+P1.problemNumber[1]+'   '+'0x'+P1.problemLetter[1],110,210);
  ctx.font = '14px Arial';
}

P1.Update = function() {
  if (T.GetKeyCode() == 13)
  {
    KB.SetKeyCode(0);

    P1.ShowMsg("HINT","Look between the numbers and letters, what can you see?");
    P1.ShowMsg("I GIVE UP",P1.solution);
	
    KB.ClearBuffer();
  }
}

P1.GetCode = function() {
 return (P1.solution);
}

P1.ShowChar = function(code) {
  return (String.fromCharCode(code))
}

P1.ShowMsg = function(cmd, msg) {
  if (T.GetCode() == cmd)
  {
    alert(msg);  
  }
}
