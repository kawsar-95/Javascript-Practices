var status ="The godfather exists in bangladesh.";
var count =0;
for(var i=0; i< status.length;i++){
    var char =status[i];
    if(char==" " && status[i-1] !=" "){
        count++;
    }
}
count++;


// Reverse String

function reverseString(str){
    var reverse ="";
    for(var i=0;i<str.length;i++){
        var char =str[i];
        reverse =char;

    }
    return reverse;
}
var status =" Hello from the side.";
var hello = reverseString(status);
console.log(hello);