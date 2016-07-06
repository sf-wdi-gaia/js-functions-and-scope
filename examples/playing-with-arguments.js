//--------------------//

function greetPerson(name){
  return "Hello " + name;
}


// Given the following inputs, what will the output be (and why)?
//
// greetPerson("Aardvark");     //=> ?
// greetPerson("Llama");        //=> ?
// greetPerson(undefined);      //=> ?
// greetPerson();               //=> ?
// greetPerson(1000, 900);      //=> ?
// greetPerson(greetPerson(greetPerson("World!"))); //=> ?

//--------------------//


























/////////////
// ANSWERS //
/////////////

/*

    greetPerson("Aardvark");    //=> "Hello Aardvark"
    greetPerson("Llama")        //=> "Hello Llama"
    greetPerson(undefined)      //=> "Hello undefined"
    greetPerson();              //=> "Hello undefined"
    greetPerson(1000, 900)      //=> "Hello 1000"
    greetPerson(greetPerson(greetPerson("World!"))); //=> "Hello Hello Hello World!"
*/
