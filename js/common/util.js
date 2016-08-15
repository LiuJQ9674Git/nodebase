define(function(){
    // do sth
    console.log("util module define,in common package");
    return {
        say:function(msg){
            console.log("util module define,in common package,msg method is ",msg);
            return msg+(" <--added util");
        }
    }
});
