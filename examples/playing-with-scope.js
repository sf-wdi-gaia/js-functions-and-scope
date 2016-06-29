//--------------------//

var aardvark = true;
var potato = 0;
var sauce = "ketchup";

function isAardvarkInScope(){
  var potato = 1;
  return aardvark;
}

function isPotatoStillZero(){
  var llama = true;
  return potato;
}

function isLlamaInScope(){
  sauce = "mustard";
  return llama;
}

function isSauceStillKetchup(){
  return sauce;
}

// Each function above may or may not affect the output of the next function.
// When we run the above functions in the order they're written, what will the output be?
//
// isAardvarkInScope();   //=> ?
// isPotatoStillZero();   //=> ?
// isLlamaInScope();      //=> ?
// isSauceStillKetchup(); //=> ?

//--------------------//



























/////////////
// ANSWERS //
/////////////

/*
    isAardvarkInScope();    //=> true
    isPotatoStillZero();    //=> 0
    isLlamaInScope();       //=> Uncaught ReferenceError: llama is not defined
    isSauceStillKetchup();  //=> "mustard"
*/
