var arr=[2,4,8,5,5,-3,-3];
function duplicate(arr){
    var newel=0;
    for (var i=0;i<=arr.length;i++){
        for (var j=i+1;j<=arr.length;j++){
            if(arr[i]==arr[j]){
                //console.log(arr[i])
                newel=1;
                break;
            }
        }
        if (newel==1){
            break;
        }
    }
    return newel!=0;
}
//console.log(arr.includes(5))
var result=console.log(duplicate(arr));
