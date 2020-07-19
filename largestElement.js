var marks = [22,33,44,55,66,77,88,99];
var max = marks[0];
for(i=0; i<marks.length;i++){
    var element = marks[i];
    if (element > max){
    max =element;
}
}
console.log("highest value is :",max);