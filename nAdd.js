function outerFun()
{
    var a =0;
    function innerFun(){
        a++;
        console.log(a);
    }
    return innerFun;
}
var cal1=outerFun();
cal1();
var cal2=outerFun();
cal2();
cal1();




