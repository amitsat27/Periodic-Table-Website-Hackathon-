$(document).ready(function(){
    window.openNav = function(){
        $("#mySidenav").css("width","15%");
        $("#main").css("margin-left","15%");
        $("#nav_button").hide();
    }
    window.closeNav = function(){
        $("#mySidenav").css("width","0px");
        $("#main").css("margin-left","0px");
        $("#nav_button").show();
    }
    $("#sample_testing").hide();
    $("#score_source").hide();
    $("#sample_testing_2").hide();
    $("#score_animated").hide();
    $(".progress").hide();
    $(".btn").hide();
    ini_block_dict = {"sb":"#s_block","pb":"#p_block","db":"#d_block","fb":"#f_block"};
    var ini_block_name;
    $(".sidenav a").hover(function(){
        console.log($(this).attr("id"));
        ini_block_name = ini_block_dict[$(this).attr("id")];
        $(ini_block_name + ".element").css({"border" : "3px solid" , "border-color" : "black"});
    } , function(){
        $(ini_block_name + ".element").css({"border" : "1px solid" , "border-color" : "rgba(0,0,0,0.05)"});
    });
    window.fade_other_blocks = function(block_name){
        closeNav();
        $("#sample_testing").show();
        $("#sample_testing_2").show();
        $("#score_animated").show();
        $("#nav_button").hide();
        $(block_name + ".element").addClass("testing");
        $(".periodic").removeClass("p-lg-5");
        $(".periodic").addClass("p-lg-3");
        $(".progress").show();
        $(".btn").show()
        $(".btn").addClass("mr-2");
        $(".progress-bar").css({"width":"0%"});
        $(".progress").addClass("m-4");
        block_list = ["#s_block","#p_block","#d_block","#f_block"];
        var x = document.querySelectorAll(block_name);
        var new_element;
        var key;
        var child_nodes;
        var score = 0;
        var done_elements = {};
        var count = 0;
        var block_count=0;``
        var allowed_time_for_block;
        var prog = 0;
        var ele_block;
        var ele_font;
        var bg_color;
        $("#score_animated").text(score);
        for(var i=0;i<x.length;i++)
        {
            child_nodes = x[i].children;
            key = child_nodes[1].innerHTML;
            new_element = $('<input>');
            $(new_element).attr('type','text');
            $(new_element).attr('minlength','1');
            $(new_element).attr('maxlength','3');
            $(new_element).attr('tabindex','-1');
            $(new_element).data("key",key);
            done_elements[$(new_element).data("key")] = 0;
            $.each(x[i].attributes, function(i, attrib){
                $(new_element).attr(attrib.name, attrib.value);
            });
            $(x[i]).replaceWith(function(){
                return $(new_element).append($(x[i]).contents());
            });
            block_count = block_count + 1;
        }
        for(var i=0;i<4;i++)
        {
            if(block_list[i] == block_name)
            {
                continue ;
            }
            else
            {
                ele_block = block_list[i];
                x = document.querySelectorAll(block_list[i]);
                for(var j=0;j<x.length;j++)
                {
                    x[j].style.opacity = 0.15 ;
                }
                $(block_list[i] + ".element").addClass("testing_1");
            }
        }
        allowed_time_for_block = (10000 * block_count) + 10000;
        var close_timer = false;
        var timer;
        var total_counter = allowed_time_for_block / 1000;
        var total_counter_val = false;
        var block_interval = setInterval(function(){
            total_counter = total_counter - 1 ;
            $("#sample_testing_2").text(total_counter+" s");
            if(total_counter <= 10 && total_counter_val==false)
            {
                $("#sample_testing_2").css({"color" : "red"});
                total_counter_val = true;
            }
        } , 1000);
        var block_timeout = setTimeout(function(){ close_timer = true; $(block_name + ".element").attr('disabled','disabled'); $("#sample_testing_2").text("--"); $("#sample_testing").text("--"); clearInterval(block_interval); clearInterval(timer); $(".btn").removeClass("btn-info btn-sm"); $(".btn").addClass("btn-success"); $("#reset").css("text-align","center"); setTimeout(function() { alert("Wow , you achieved 100% accuracy !!!"); }, 700); } , allowed_time_for_block);
        ele_font = ele_block.replace("#",".");
        $(block_name + ".element").css("width",$(ele_block).css("width"));
        $(block_name + ".element").css("height",$(ele_block).css("height"));
        $(block_name + ".element").click(function(){
            var timer_count = 10;
            var timer_count_val = false;
            var that = $(this);
            var disable_timeout = setTimeout(function() { $("#sample_testing").css({"color" : "green"}); that.attr('disabled','disabled'); clearInterval(timer); $("#sample_testing").text("--"); } , 10000);
            var timer = setInterval(function(){
                if(close_timer == true)
                {
                    $("#sample_testing").text("--");
                    clearTimeout(disable_timeout);
                    clearInterval(timer);
                }
                else
                {
                    $("#sample_testing").text(timer_count+" s");
                    timer_count = timer_count - 1;
                    if(timer_count < 5 && timer_count_val == false)
                    {
                        $("#sample_testing").css({"color" : "red"});
                        timer_count_val = true;
                    }
                    if(timer_count < 5)
                    {
                        $('#sample_testing').fadeOut(500);
	                    $('#sample_testing').fadeIn(500);
                    }
                    console.log($("#sample_testing").attr("class"));
                }
            } , 1000 );
            bg_color = $(this).css("background-color");
            done_elements[$(this).data("key")] = done_elements[$(this).data("key")] + 1;
            count = 0;
            $(this).keyup(function(){
                if($(this).val() == $(this).data("key"))
                {
                    $(this).attr('disabled','disabled');
                    $(this).addClass("end");
                    $(this).css({"font-size" : $(ele_font).css("font-size") , "font-weight" : "bold" , "color" : "rgba(255,255,255,0.9)"});
                    score = score + 1;
                    if(done_elements[$(this).data("key")] > 1)
                    {
                        count = count + 1;
                        if(count != done_elements[$(this).data("key")])
                        {
                            score = score - 1;
                        }
                    }
                    $("#score_source").show();
                    $(this).css("background-color" , bg_color);
                    prog = (score / block_count) * 100;
                    $(".progress-bar").css("width", prog + "%");
                    clearTimeout(disable_timeout);
                    clearInterval(timer);
                    $("#sample_testing").text("--");
                    $("#sample_testing").css({"color" : "green"});
                    var leftPos  = $("#score_animated").css("left");
                    var rightPos = $("#score_animated").css("right");
                    var topPos   = $("#score_animated").css("top");
                    var bottomPos= $("#score_animated").css("bottom");
                    $("#score_source").animate({top:topPos,bottom:bottomPos,left:leftPos,right:rightPos},1000,function(){
                       $("#score_source").hide();
                       $("#score_animated").text(score);
                       $("#score_animated").animate({"font-size" : "150px"},1000);
                       $("#score_animated").animate({"font-size" : "30px"},1000);
                       $("#score_source").css({"top":"50%","bottom":"50%","left":"50%","right":"50%"});
                    });
                }
                else
                {
                    $(this).css("background-color" , "red");
                }
                if(score == block_count)
                {
                    clearInterval(block_interval);
                    clearTimeout(block_timeout);
                    $(".btn").removeClass("btn-info btn-sm");
                    $(".btn").addClass("btn-success");
                    $("#sample_testing_2").remove();
                    $("#sample_testing").remove();
                    $("#reset").css("text-align","center");
                    $(".progress").remove();
                    $("#score_animated").remove();
                    $("#score_source").remove();
                    setTimeout(function() { alert("Wow , you achieved 100% accuracy !!!"); }, 700);
                }
            });
        });
        $(window).resize(function(){
            $(block_name + ".element").css("width",$(ele_block).css("width"));
            $(block_name + ".element").css("height",$(ele_block).css("height"));
            $(block_name + ".element").css("font-size",$(ele_font).css("font-size"));
        });
    }
});