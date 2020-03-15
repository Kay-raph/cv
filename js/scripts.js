
$(document).ready(function () {
    $(".exp p1").hide();
    $(".exp").click(function () {
        $(".exp p1").toggle(1000);
        $(".exp #mg1").slideDown(1000).show(1000);
    });
    // $(document).ready(function(){
    //     $("img").click(function(){
    //       $("img").slideDown(200).hide(1000);
    //       $("p1").slideUp(200).show(1000);
    //       $("img").toggle();
    //   });

    $(".dev p2").hide();
    $(".dev").click(function () {
        $(".dev p2").toggle(1000);
        $(".dev #mg2").slideDown(1000).show(1000);;
    });


    $(".grap p3").hide();
    $(".grap").click(function () {
        $(".grap p3").toggle(1000);
        $(".grap #mg3").slideDown(1000).show(1000);;
    });
    $(".ex p4").hide();
    $(".ex").click(function () {
        $(".ex p4").toggle(1000);
        $(".ex #mg4").slideDown(1000).show(1000);;
    });
    $(".dj p5").hide();
    $(".dj").click(function () {
        $(".dj p5").toggle(1000);
        $(".dj #mg5").slideDown(1000).show(1000);;
    });
    $(".loops p6").hide();
    $(".loops").click(function () {
        $(".loops p6").toggle(1000);
        $(".loops #mg6").slideDown(1000).show(1000);;
    });
    $(".hobby .int").hide();
    $(".hobby").click(function () {
        $(".hobby .int").toggle(1000);
        $(".hobby").slideUp(1000).show(1000);;
    });
})

