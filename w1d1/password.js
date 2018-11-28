var password = process.argv.slice(2);
var word = password[0];

function obfuscate(password){
  var b = "";
  for (var x = 0; x < password.length; x++){
    if (word.charAt(x) === "a"){
      b+= "4";
    }else if (word.charAt(x) === "e"){
      b+="3";
    } else if (word.charAt(x) === "o"){
      b+="0";
    } else if(word.charAt(x) === "l"){
      b+="1";
    }
    else{
      b+= word.charAt(x);
    }

  }
  return b;
}
console.log(obfuscate(word));