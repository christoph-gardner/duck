//**************************
//***PROPERTIES OF APPS****
//*************************
// I am here!!!!! again
/////////////////////////////
var listScreens = ["screen4","screen3","screen2","screen1"];
var mySpecialValue = "hello";
var myOtherValue = "good-bye";
/////////////////////////

function doMenu(event){
  var tId = event.targetId;
  setScreen(tId.replace("btn_",""));
}

function drawMenu(screen){
  for(var i=0; i< listScreens.length; i++){
    var btnId = "btn_" + listScreens[i];
    button(btnId,listScreens[i]);
    // set parent for the btnId to the screen
    setParent(btnId, screen);
    onEvent(
      btnId,
      "click",
      doMenu
    );
  }
}

function learnscreen1(){
  drawMenu("screen1");
  setScreen("screen1");
}

function learnscreen2(){
  drawMenu("screen2");
}
function learnscreen3(){
  drawMenu("screen3");
}
function learnscreen4(){
  drawMenu("screen4");
}

//**************************
//*DO SECTION OF CODE*******
//**************************

function do_screen1(){
  setScreen("screen1");
}
function do_learn2(){
  setScreen("screen2");
}
function do_learn3(){
  setScreen("screen3");
}
function do_learn4(){
  setScreen("screen4");
}

//**************************
//*START OF APP*******
//**************************

learnscreen4();
learnscreen3();
learnscreen2();
learnscreen1();
