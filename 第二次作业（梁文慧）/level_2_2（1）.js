//任务1的第一小问
var str1='ABCDEEF,GHJKKM';
var arr = str1.split("");
function recur(arr){
   var l = arr.length;
   var arr1=[];
   var arr2 =[];
   for(var i=0;i<l;i++)
   {
       if(arr[i]===arr[i+1])
       {
           for(var j=i;arr[j]===arr[i];j++)
           {
              arr1.push(arr[j]);
           }
           var str=arr1.join("");
           arr1=[];
           arr2.push(str);
       }
   }
   console.log(arr2);
}
recur(arr);
//任务1第二小问
function count(arr,n){
    var l = arr.length;
    var num =0;
    for(var i=0;i<l;i++)
    {
        if(arr[i]==n)
        {
            num++;
        }
    }
    return num;
}
