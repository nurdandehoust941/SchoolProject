let arr = [];
for (var i=0;i<10;i++){
    var num = Math.floor(Math.random() * 50) + 1;
    if (!arr.includes(num)){
        arr.push(num);
    }
}
console.log(arr);
