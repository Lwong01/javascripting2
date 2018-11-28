function countLetters(str){
  var noSpace = str.split(" ").join("");

  var output = {};

  for (var i=0; i < noSpace.length; i++){
    var Letter = noSpace[i];

    if (output[Letter] === undefined){
    output[Letter] = 1;

  }else {
    output[Letter] += 1;
  }
}
  return output;
}
console.log(countLetters("Lighthouse in the house"));
