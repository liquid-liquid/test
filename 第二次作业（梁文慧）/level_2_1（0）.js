var str ='today is a happy day'
function change(str){
    var arr = str.toLowerCase().split(" ");//字符串以空格为界限转换为数组 
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);//charAt()方法得到第一个字母，slice()得到第二个字母以后的字符串
    }
    str = arr.join(" ");//合并数组为字符串
}
change(str)
