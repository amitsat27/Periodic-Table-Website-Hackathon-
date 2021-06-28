$(document).ready(function()
{
    $("#source").hide();
    $("#target").hide();
    $("#close_1").hide();
    var count = 0;
    var parent_elements = ["H","Li","Na","K","Rb","Cs","Fr","Be","Mg","Ca","Sr","Ba","Ra",
                            "B", "C" , "N" , "O" , "F" , "Al" , "Si" , "P" , "S" , "Cl" ,
                            "Ga" , "Ge" , "As" , "Se" , "Br" , "In" , "Sn" , "Sb" , "Te" , "I" ,
                            "Ti" , "Pb" , "Bi" , "Po" , "At" , "He" , "Ne" , "Ar" , "Kr" , "Xe" , "Rn"];
    var solution = {"H" : 1 , "Li" : 3 , "Na" : 11 , "K" : 19 , "Rb" : 37 , "Cs" : 55 , "Fr" : 87,
    "Be" : 4 ,"Mg" : 12 , "Ca" : 20 , "Sr" : 38 , "Ba" : 56 , "Ra" : 88 , 
    "B" : 5 , "C" : 6 , "N" : 7 , "O" : 8 , "F" : 9 , "Al" : 13 , "Si" : 14 , "P" : 15 , "S" : 16 , "Cl" : 17 ,
    "Ga" : 31 , "Ge" : 32 , "As" : 33 , "Se" : 34 , "Br" : 35 , "In" : 49 , "Sn" : 50 , "Sb" : 51 , "Te" : 52 , "I" : 53 ,
    "Ti" : 81 , "Pb" : 82 , "Bi" : 83 , "Po" : 84 , "At" : 85 , "He" : 2 , "Ne" : 10 , "Ar" : 18 , "Kr" : 36 , "Xe" : 54 , "Rn" : 86};
    var elements = [];
    var slots = [];
    var limit = 7;
    var repeat;
    for(var i=0;i<limit;i++)
    {
        repeat = false;
        var random_no = Math.floor((Math.random() * parent_elements.length));
        for(var j=0;j<slots.length;j++)
        {
            if(slots[j] == solution[parent_elements[random_no]])
            {
                limit = limit + 1;
                repeat = true;
            }
        }
        if(repeat == false)
        {
            elements.push(parent_elements[random_no]);
            slots.push(solution[parent_elements[random_no]]);
        }
    }

    var hints = {"H" : "The atomic number of this element is neither prime nor composite" ,
    "Li" : "Electronic configuration of this element is 1s^2 2s^1" , 
    "Na" : "This element has 11 protons in its nucleus" , 
    "K"  : "This element has atomic mass 39 and has 20 neutrons" ,
    "Rb" : "The element preceeding this element is krypton a noble gas" ,
    "Cs" : "The atomic number of this element is a multiple of 11" ,
    "Fr" : "The electron distribution of this element in various shells is 2, 8, 18, 32, 18, 8, 1" ,
    "Be" : "This element has 2 electrons in the outermost shell" , 
    "Mg" : "The electronic configuration of this element is [Ne] 3s^2" , 
    "Ca" : "This element has 20 protons in its nucleus" , 
    "Sr" : "This element has mass no 88 and 50 neutrons in its nucleus" , 
    "Ba" : "The electronic configuration of this element is [Xe] 6s^2" , 
    "Ra" : "This element has 88 protons in its nucleus" ,
    "B" : "The electronic configuration of this element is [He] 2s2 2p1" , 
    "C" : "This element has 6 protons in its nucleus" , 
    "N" : "The atomic number of this element is a prime number" , 
    "O" : "This element has mass no 16 and 8 neutrons in its nucleus" , 
    "F" : "The electronic configuration of this element is [He] 2s2 2p5" , 
    "Al" : "This element has 13 protons in its nucleus" , 
    "Si" : "The atomic number of this element is a multiple of 2 and 7" , 
    "P" : "The electronic configuration of this element is [Ne] 3s2 3p3" , 
    "S" : "The electronic configuration of this element is [Ne] 3s2 3p4" , 
    "Cl" : "The electronic configuration of this element is [Ne] 3s2 3p5" ,
    "Ga" : "The electronic configuration of this element is [Ar] 3d10 4s2 4p1" , 
    "Ge" : "The electronic configuration of this element is [Ar] 3d10 4s2 4p2" , 
    "As" : "The electronic configuration of this element is [Ar] 3d10 4s2 4p3" , 
    "Se" : "The electronic configuration of this element is [Ar] 3d10 4s2 4p4" , 
    "Br" : "The electronic configuration of this element is [Ar] 3d10 4s2 4p5" , 
    "In" : "The electronic configuration of this element is [Kr] 4d10 5s2 5p1" , 
    "Sn" : "The electronic configuration of this element is [Kr] 4d10 5s2 5p2" , 
    "Sb" : "The electronic configuration of this element is [Kr] 4d10 5s2 5p3" , 
    "Te" : "The electronic configuration of this element is [Kr] 4d10 5s2 5p4" , 
    "I" : "The electronic configuration of this element is [Kr] 4d10 5s2 5p5" ,
    "Ti" : "The electronic configuration of this element is [Xe] 4f14 5d10 6s2 6p1" , 
    "Pb" : "The electronic configuration of this element is [Xe] 4f14 5d10 6s2 6p2" , 
    "Bi" : "The electronic configuration of this element is [Xe] 4f14 5d10 6s2 6p3" , 
    "Po" : "The electronic configuration of this element is [Xe] 4f14 5d10 6s2 6p4" , 
    "At" : "The electronic configuration of this element is [Xe] 4f14 5d10 6s2 6p5" , 
    "He" : "This element has 2 protons in its nucleus" , 
    "Ne" : "This element has 10 protons in its nucleus" , 
    "Ar" : "This element has 18 protons in its nucleus" , 
    "Kr" : "This element has 36 protons in its nucleus" , 
    "Xe" : "This element has 54 protons in its nucleus" , 
    "Rn" : "This element has 86 protons in its nucleus"};

    elements.sort(function() {return Math.random() - 0.5})

    for(var i=0;i<elements.length;i++)
    {
        $('<div>'+elements[i]+'</div>').data('element',elements[i]).attr('id',elements[i]).appendTo('#available_elements').draggable(
            {
                containment : '#root' ,
                cursor : 'move' ,
                revert : true ,
                stack : '#available_slots div'
            }
        );
    }

    for(var i=0;i<slots.length;i++)
    {
        $('<div>'+slots[i]+'</div>').data('atomic_no',slots[i]).attr('id',slots[i]).appendTo('#available_slots').droppable(
            {
                accept : '#available_elements div' ,
                hoverClass : 'hovered' ,
                drop : handleElementDrop
            }
        );
    }
    $("div").click(function(){
        for(var i=0;i<elements.length;i++)
        {
            if($(this).attr("id") == elements[i])
            {
                $(this).css("background-color","indigo");
                $("#source").show();
                $("#target").show();
                var display = hints[elements[i]];
                var e = elements[i];
                var l = $("#target").css("left");
                var r = $("#target").css("right");
                var t = $("#target").css("top");
                var b = $("#target").css("bottom");

                var ll = $("#source").css("left");
                var rr = $("#source").css("right");
                var tt = $("#source").css("top");
                var bb = $("#source").css("bottom");

                $("#source").animate({top:t,bottom:b,left:l,right:r},1000,function(){
                    $("#source").hide();
                    $("#target").text(display);
                    $("#target").animate({"font-size" : "25px"},1000);
                    $("#target").animate({"font-size" : "20px"},1000,function(){$("#"+e).css("background-color","rgb(255, 77, 77)");});
                    $("#source").css({"top":tt,"bottom":bb,"left":ll,"right":rr});
                });
            }
        }
    });
    function handleElementDrop(event , ui)
    {
        var dropped_upon_element = $(this).data('atomic_no');
        var temp = ui.draggable.data('element');
        var dragged_element = solution[temp];

        if(dropped_upon_element == dragged_element)
        {
            ui.draggable.draggable('disable');
            $(this).droppable('disable');
            ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
            ui.draggable.draggable( 'option', 'revert', false );
            $('#'+temp).html('<sub><sub><sub>'+dragged_element+'</sub></sub></sub>'+temp)
            count = count + 1 ;
            ui.draggable.css("background-color","teal");
            ui.draggable.animate({"font-size" : "60px"},1000);
            ui.draggable.animate({"font-size" : "30px"},1000 , function(){
                if(count == 7)
                {
                    $("#suc_msg").css("opacity" , "0.1");
                    $("#close_1").show();
                    $("#close_1").css("opacity" , "0.1");
                    $("#close_1").animate({"top" : "50%" , "opacity" : "1"},1000);
                }
            });
        }
    }
});