var outter=[];
function clouseTest(){
    var array=['one','two','three','four'];
    for(var i=0;i<array.length;i++){
        var x={};
        x.no=i;
        x.text=array[i];
        x.invoke=function(pos){
            return function() {
                console.log(pos);
                return pos;
            }
        }(i);
        outter.push(x);
    }

}
console.log("start");
clouseTest();
console.log("start console");
console.log(outter[0].invoke());
console.log(outter[0].text);
console.log(outter[0].no);

console.log(outter[1].invoke());
console.log(outter[1].text);
console.log(outter[1].no);