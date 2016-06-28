//--------------------//

var aardvark = true;
var potato = 0;

function isAardvarkInScope(){
  var potato = 1;
  return aardvark;
}

function isPotatoStillZero(){
  var llama = true;
  return potato;
}

function isLlamaInScope(){
  return llama;
}

//--------------------//













/////////////
// ANSWERS //
/////////////

/*
    isAardvarkInScope();  //=> true
    isPotatoStillZero();  //=> 0
    isLlamaInScope();     //=> Uncaught ReferenceError: llama is not defined
*/
