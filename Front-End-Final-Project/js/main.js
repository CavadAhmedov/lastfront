$(function(){

    $("#prev").click(function(){
        $("#firsttwit").toggleClass("hide");
        $("#secondtwit").toggleClass("hide");
    })

    $("#next").click(function(){
        $("#firsttwit").toggleClass("hide");
        $("#secondtwit").toggleClass("hide");
    })


    $("#prev1").click(function(){
        $(".testtext1").toggleClass("hide");
        $(".testtext2").toggleClass("hide");
    })

    $("#next1").click(function(){
        $(".testtext1").toggleClass("hide");
        $(".testtext2").toggleClass("hide");
    })


});