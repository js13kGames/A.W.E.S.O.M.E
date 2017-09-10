var Timer = { };

Timer.Init = function() {
  this.sec = Date.now();	
}

Timer.GetSec = function() {
  return (this.sec);
}

Timer.SetSec = function (setSec) {
  this.sec = setSec;
}

Timer.GetMillisecs = function(millisec) {
  if (Timer.GetSec() <= Date.now())
  {
    Timer.SetSec(Date.now()+millisec);
    
    return true;
  }	
}
