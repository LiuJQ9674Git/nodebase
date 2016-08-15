define(function(){
    // do sth
    console.log("util module define");
    return {
        say:function(msg){
            console.log("util module define,msg method is ",msg);
            return msg+(" <--added util");
        }
    }
});
