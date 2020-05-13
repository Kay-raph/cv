
 $(document).ready(function () {
    $(".exp p1").hide();
   $(".exp").click(function () {
       $(".exp p1").css("color", "black").toggle(1000);
      $(".exp #mg1").toggle(1000).show(1000);
    });

    $(".dev p2").hide();
    $(".dev").click(function () {
        $(".dev p2").css("color", "black").toggle(1000);
        $(".dev #mg2").toggle(1000).show(1000);;
    });


    $(".grap p3").hide();
    $(".grap").click(function () {
        $(".grap p3").css("color", "black").toggle(1000);
        $(".grap #mg3").toggle(1000).show(1000);;
    });
    $(".ex p4").hide();
    $(".ex").click(function () {
        $(".ex p4").css("color", "black").toggle(1000);
        $(".ex #mg4").toggle(1000).show(1000);;
    });
    $(".exe p5").hide();
    $(".exe").click(function () {
        $(".exe p5").css("color", "black").toggle(1000);
        $(".exe #mg5").toggle(1000).show(1000);;
    });
    $(".dj p6").hide();
    $(".dj").click(function () {
        $(".dj p6").css("color", "black").toggle(1000);
        $(".dj #mg6").toggle(1000).show(1000);;
    });
    $(".loops p7").hide();
    $(".loops").click(function () {
        $(".loops p7").css("color", "black").toggle(1000);
        $(".loops #mg7").toggle(1000).show(1000);;
    });
    $(".hobby .int").hide();
    $(".hobby").click(function () {
        $(".hobby .int").toggle(1000);
        $(".hobby").slideUp(1000).show(1000);;
    });
});