//任务2第1小问
function bubblesort(arr)
{
    var temp;
    var len=arr.length;
    for(var i=0;i<len;i++)
    {
        for(var j=0;j<len-1-i;j++)
        {
            if (arr[j] > arr[j+1]) { 
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;}
        }
    }
}
//任务2第二小问（数组扁平化）
var result = [];
var arr = [[1, 2], [3, 4,], [6, 7, 9, [11, 12, [12, 13, [14]]]], 10]
function even(arr) {
    for (var i = 0; i < arr.length; i++) {
        var temp = arr[i];
        if (Array.isArray(arr[i])) {
            even(temp);
        } else {
            result.push(temp);
        }
    }
}
even(arr);
console.log(result);
//任务2第3小问

function compare(shuxing){
    return function(value1 ,value2)
    {
        if(value1[shuxing]>value2[shuxing])
        {
            return 1;
        }
        else if(value1[shuxing]===value2[shuxing])
        {
            return 0;
        }
        else
        {
            return -1;
        }
    };
}
let arr_1 = [{id:10,name:'kc'},{id:8,name:'hy'},{id:15,name:'pipi'},{id:2,name:'mama'}];

arr_1.sort(compare("id"));//[{id:2,name:'mama'},{id:8,name:'hy'},{id:10,name:'kc'},{id:15,name:'pipi'}]
console.log(JSON.stringify(arr_1))
