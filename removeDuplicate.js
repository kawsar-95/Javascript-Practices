var name =[1,2,3,5,6,8,2,3,0];
var uniqueName =[];
for(i=0; i<name.length;i++){
    var element =name[i];
    var index =uniqueName.indexOf(element);
    if(index ==-1){
        uniqueName.push(element);
    }
}
console.log(uniqueName)