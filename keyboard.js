var KB = { };

KB.getkey = 0;
KB.getLastKey = 0;
KB.buffer = "";
KB.AcceptedKey = ['65','66','67','68','69','70','71','72','73',
                  '74','75','76','77','78','79','80','81','82',
	              '83','84','85','86','87','88','89','90','48',
			 	  '49','50','51','52','53','54','55','56','57',
			 	  '8','13','32','61']; // Keys - A-Z, 0-9, Delete(8), Enter(13), Space(32), Equals(=)
						
KB.Init = function() { 			
  c.addEventListener('keydown', function(e){KB.getkey = e.keyCode;});
  
  Timer.Init();
}

KB.GetKeyCode = function() {
  return (KB.getLastkey);
}

KB.SetKeyCode = function(keyvalue) {
  KB.getLastkey = keyvalue;	
}

KB.GetKeyboardBuffer = function(textLen) {
  if (KB.getkey != 0)
  {
    KB.AcceptedKey.forEach(function(elem) {
    
	var getCharCode = KB.getkey;
	var bufferLength = KB.buffer.length;
	var textWidth = ctx.measureText(KB.buffer).width;
	
	if (elem == getCharCode)
	{
	  if ((textWidth < 520) && (elem != 8) && (elem != 13))
	  {
	    KB.buffer += String.fromCharCode(getCharCode);
	  }
	  
	  if ((bufferLength > 0) && (elem == 8))
	  {
	    KB.buffer = KB.buffer.slice(0, -1);	  
	  }
	}
	
   });
   
   KB.getLastkey = KB.getkey;
   KB.getkey = 0; 
  }
  
  return (KB.buffer);
}

KB.ClearBuffer = function() {
  KB.buffer = "";	
}

KB.BlinkingCursor = function() {
 if (Timer.GetMillisecs(500))
 {
   return true;
 }
}