// Write your solution here!
const drivers=["Milo","Otis","Garfield"];

function destructivelyAppendDriver(name){
  drivers.push(name);
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
}

function desctructivelyRemoveLastDriver(){
  drivers.pop();
}

function desctructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  [...drivers,name];
}

