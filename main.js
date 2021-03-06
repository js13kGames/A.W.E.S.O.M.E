var Main = { };

Main.getPrompt = "";
Main.deactivateCode = "";
Main.nextGame = 1;
Main.currentGameCode = "";
Main.sec = 0;
Main.showMsg = false;
Main.hackAttempt = false;
Main.n = 0;
Main.lastCmd = "";

Main.Init = function() {
  Intro.Init();
  T.Init();
  
  P1.Init();
  P2.Init();
  P3.Init();
  P4.Init();
  
  Main.deactivateCode = P1.GetCode();
  Main.deactivateCode += P2.GetCode();
  Main.deactivateCode += P3.GetCode();
  Main.deactivateCode += P4.GetCode();
  
  EndGame.Init();
  
  // save level
  var getLevel = localStorage.getItem("level");

  if (getLevel == null)
  {
    localStorage.setItem("level", 1);
  }
  else
  {
    Main.nextGame = parseInt(localStorage.getItem("level")); 
  }
}

Main.Render = function() {
  T.Render();
  
  if (Intro.StartGame() == false)
  {  
    Intro.Render();
  }
  else
  { 
    // Start game
    switch(Main.nextGame)
    {
      case 1: 	
        P1.Render();
      break;
	  
      case 2:
        P2.Render();
      break;
	  
      case 3:
        P3.Render();
      break;
	  
      case 4:
        P4.Render();
      break;
	  
      case 5:
        EndGame.Render();
      break;
	  
      default:
        ctx.fillStyle = 'rgb(255, 0, 0)';
	ctx.font = '18px Verdana';
	ctx.fillText("Congratulations!", (c.width/2)-80, 180);
        ctx.fillText("You have successfully prevented global conflict", (c.width/2)-210, 210);
	ctx.fillText("All is not LOST!", (c.width/2)-75, 240);
	ctx.fillText("JS13KGAMES 2017", (c.width/2)-90, 270);
	ctx.font = '14px Arial';
      break;
    }
	
    if (Main.showMsg == true)
    {
      ctx.font = '36px Arial';
      ctx.fillStyle = 'rgb(255,0,0)';
      ctx.fillText("HACKER DETECTED", (c.width/2)-170, 350);
      ctx.font = '14px Arial';
    }
  }
}

Main.Update = function() {
  if (Intro.StartGame() == false)
  { 
    Intro.Update();
  }
  else
  {
    // Start game
    T.Update();
	
    switch(Main.nextGame)
    { 
      case 1:
        P1.Update();
	Main.currentGameCode = P1.GetCode()
      break;	
	  
      case 2:
        P2.Update();
	Main.currentGameCode = P2.GetCode();
      break;
	  
      case 3:
        P3.Update();
	Main.currentGameCode = P3.GetCode();
      break;
	  
      case 4:
        P4.Update();
	Main.currentGameCode = P4.GetCode();
      break;
	  
      case 5:
        EndGame.Update();
	Main.currentGameCode = EndGame.GetCode();
      break;
     }
	
     if (T.GetKeyCode() == 13)
     {
       KB.SetKeyCode(0);
	  
       Main.lastCmd = Main.getPrompt;
       Main.getPrompt = T.GetCode();
	  
       if (Main.getPrompt == Main.currentGameCode)
       {
         Main.nextGame++;
       }
       else
       {
         Main.hackAttempt = true;
       }
	  
       if (Main.getPrompt == "RESET")
       {
         localStorage.removeItem("level");
         Main.nextGame = 1;
       }
	  
       if (Main.getPrompt == "SAVE")
       {
         localStorage.setItem("level", Main.nextGame);
       }
	  
       if (Main.getPrompt == "NEXT" && Main.nextGame < 6)
       {
         Main.nextGame++;
       }
	  
       if (Main.getPrompt == "PREV" && Main.nextGame > 1)
       {
         Main.nextGame--;
       }
	  
       if (Main.getPrompt == "HELP")
       {
         alert("Use the following commands:\n\nHELP - Show this list\nRESET - Reset to level 1\nSAVE - Save progress\nHEXTODEC - Convert hexadecimal to decimal\nNEXT - Hack to next level\nPREV - Hack to previous level\nHINT - Explain how to solve\nI GIVE UP - Show me the answer");  
       }
	  
       KB.ClearBuffer();
     }
	
     if (Main.hackAttempt == true)
     {
      // Hacking attempt detected
      if ((Main.sec <= Date.now()) && (Main.n <= 5))
      {
        Main.sec = Date.now()+150;
        Main.showMsg = !Main.showMsg;
	if (Main.n < 5){Main.n++;}else{Main.n=0;Main.hackAttempt=false;};
       }
     }
   }
}

Main.Run = function() {
  this.Render();
  this.Update(); 
}
