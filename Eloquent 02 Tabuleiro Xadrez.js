var x = 8;
var y = "";

for(var a = 0; a < x; a++) {
    for(var b = 0; b < x; b++){
        if((b + a) % 2 == 0){
           y += " ";
        }
        else{
           y += "#";
    }
        }
        y += '\n';
}

console.log(y);

