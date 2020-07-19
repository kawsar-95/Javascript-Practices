var businessMan = 450;
var minister = 650;
var secretary =550;

var max = Math.max(businessMan,minister,secretary);
console.log(max);

if(businessMan> minister){
    // console.log("businessMan is bigger ");
    if (businessMan>secretary){
        console.log("businessMan is bigger");
    }
    else{
        console.log ("secretary is bigger");
    }
}
else{
    // console.log("minister is bigger");
    if (minister>secretary){
        console.log("minister is bigger");
    }
    else{
        console.log("secretary is bigger");
    }
}