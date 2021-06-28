$(document).ready(function () {

    // inserting names 
    let s = '<div class="card"><div class="card-header" id="headingOne"><h2 class="mb-0"><button class="btn bg-success">Practice</button><button  class="my-button btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"></button></h2></div><div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample"><div class="card-body"><p id="right-ele-name"> </p></div></div></div>';
   
    let debug_count = 0;
    let LEVELCOUNT = 1;
    let TempVarEle =2;
    let ElementNumberPract = 0;
    $('#main-heading').hide()
    $('#ec').hide();
    $('#levelED2').prop('disabled',true);
    $('#levelED3').prop('disabled',true);
    $('#levelED4').prop('disabled',true);
    $('#levelED5').prop('disabled',true);
    for(var g=2;g<=118;g++){
        $('#'+g).prop('disabled',true);
    }
    for(var g=2;g<=118;g++){
        $('.btn.bg-success').css("color","white");
        $('.my-button.btn.btn.btn-link').addClass('ml-5');
       
    }
    for(var g=2;g<=118;g++){
        $('#p'+g).hide();   
    }



    $('.btn.bg-success').click(function (e) {
       
        if (debug_count == 0) {

            $('#main-heading').append('Try to Fill the Electrons Demand Of <span id="heading-atom" ></span> Atom');
            $('#main-heading').show()
        }
        let z=[];
        debug_count = debug_count + 1;
        let y = $(this).next().attr('id');
        setTimeout(() => {
            
            $('#collapse'+y).addClass('show');
        }, 1000);

        // console.log(y)
        get_data(y - 1);


        let count = 0;
   
        let i = 0, eval, class_circles, circle_string, temp;
        let shell_circles = [
            {
                "one": '<circle r="230" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "two": '<circle r="320" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "three": '<circle r="410" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "four": '<circle r="500" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "five": '<circle r="590" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "six": '<circle r="680" fill="none" stroke="currentColor" stroke-width="8"></circle>',
                "seven": '<circle r="770" fill="none" stroke="currentColor" stroke-width="8"></circle>'
            }
        ]
        // 1toonmapping
        let electrons_circles = ["one"
            , "two"
            , "three"
            , "four"
            , "five"
            , "six"
            , "seven"
            , "eight"
            , "nine"
            , "ten"
            , "eleven"
            , "twelve"
            , "thirteen"
            , "fourteen"
            , "fifteen"
            , "sixteen"
            , "seventeen"
            , "eighteen"
            , "nineteen"
            , "twenty"
            , "twentyone"
            , "twentytwo"
            , "twentythree"
            , "twentyfour"
            , "twentyfive"
            , "twentysix"
            , "twentyseven"
            , "twentyeight"
            , "twentynine"
            , "thirty"
            , "thirtyone"
            , "thirtytwo"];
        let shell_circleswords = ["one", "two", "three", "four", "five", "six", "seven"]

        let electrons = [
            {
                "one": {
                    "one": '<circle class="electron" cx="0" cy="230" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="-230" r="25"></circle>',
                },
                "two": {
                    "one": '<circle class="electron" cx="0" cy="-320" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="320" r="25"></circle>',
                    "three": '<circle class="electron" cx="-320" cy="0" r="25"></circle>',
                    "four": '<circle class="electron" cx="320" cy="0" r="25"></circle>',
                    "five": '<circle class="electron" cx="-226.272" cy="-226.272" r="25"></circle>',
                    "six": '<circle class="electron" cx="226.272" cy="-226.272" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-226.272" cy="226.272" r="25"></circle>',
                    "eight": '<circle class="electron" cx="226.272" cy="226.272" r="25"></circle>'

                },
                "three": {
                    "one": '<circle class="electron" cx="0" cy="-410" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="410" r="25"></circle>',
                    "three": '<circle class="electron" cx="-403.77117873000003" cy="-71.19575298" r="25"></circle>',
                    "four": '<circle class="electron" cx="403.77117873000003" cy="-71.19575298" r="25"></circle>',
                    "five": '<circle class="electron" cx="-355.07041399999997" cy="205" r="25"></circle>',
                    "six": '<circle class="electron" cx="355.07041399999997" cy="205" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-263.542916" cy="-314.07822163" r="25"></circle>',
                    "eight": '<circle class="electron" cx="263.542916" cy="-314.07822163" r="25"></circle>',
                    "nine": ' <circle class="electron" cx="-263.542916" cy="314.07822163" r="25"></circle>',
                    "ten": '<circle class="electron" cx="263.542916" cy="314.07822163" r="25"></circle>',
                    "eleven": '<circle class="electron" cx="-355.07041399999997" cy="-205" r="25"></circle>',
                    "twelve": '<circle class="electron" cx="355.07041399999997" cy="-205" r="25"></circle>',
                    "thirteen": '<circle class="electron" cx="-403.77117873000003" cy="71.19575298" r="25"></circle>',
                    "fourteen": ' <circle class="electron" cx="403.77117873000003" cy="71.19575298" r="25"></circle>',
                    "fifteen": '<circle class="electron" cx="-140.2282" cy="-385.2739742" r="25"></circle>',
                    "sixteen": '<circle class="electron" cx="140.2282" cy="-385.2739742" r="25"></circle>',
                    "seventeen": '<circle class="electron" cx="-140.2282" cy="385.2739742" r="25"></circle>',
                    "eighteen": '<circle class="electron" cx="140.2282" cy="385.2739742" r="25"></circle>',
                },
                "four": {
                    "one": '<circle class="electron" cx="0" cy="500" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="-500" r="25"></circle>',
                    "three": '<circle class="electron" cx="-500" cy="0" r="25"></circle>',
                    "four": '<circle class="electron" cx="500" cy="0" r="25"></circle>',
                    "five": '<circle class="electron" cx="-353.54999999999995" cy="-353.54999999999995" r="25"></circle>',
                    "six": '<circle class="electron" cx="353.54999999999995" cy="-353.54999999999995" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-353.54999999999995" cy="353.54999999999995" r="25"></circle>',
                    "eight": '<circle class="electron" cx="353.54999999999995" cy="353.54999999999995" r="25"></circle>',
                    "nine": '<circle class="electron" cx="-461.93976625564335" cy="-191.3417161825449" r="25"></circle>',
                    "ten": '<circle class="electron" cx="461.93976625564335" cy="-191.3417161825449" r="25"></circle>',
                    "eleven": '<circle class="electron" cx="461.93976625564335" cy="191.3417161825449" r="25"></circle>',
                    "twelve": '<circle class="electron" cx="-461.93976625564335" cy="191.3417161825449" r="25"></circle>',
                    "thirteen": '<circle class="electron" cx="-191.3417161825449" cy="-461.93976625564335" r="25"></circle>',
                    "fourteen": '<circle class="electron" cx="191.3417161825449" cy="-461.93976625564335" r="25"></circle>',
                    "fifteen": '<circle class="electron" cx="-191.3417161825449" cy="461.93976625564335" r="25"></circle>',
                    "sixteen": '<circle class="electron" cx="191.3417161825449" cy="461.93976625564335" r="25"></circle>',
                    "seventeen": '<circle class="electron" cx="-490.3926402016152" cy="-97.54516100806414" r="25"></circle>',
                    "eighteen": '<circle class="electron" cx="490.3926402016152" cy="-97.54516100806414" r="25"></circle>',
                    "nineteen": '<circle class="electron" cx="-97.54516100806414" cy="490.3926402016152" r="25"></circle>',
                    "twenty": '<circle class="electron" cx="415.7348061512726" cy="277.78511650980107" r="25"></circle>',
                    "twentyone": '<circle class="electron" cx="-97.54516100806414" cy="-490.3926402016152" r="25"></circle>',
                    "twentytwo": '<circle class="electron" cx="277.78511650980107" cy="-415.7348061512726" r="25"></circle>',
                    "twentythree": '<circle class="electron" cx="-415.7348061512726" cy="277.78511650980107" r="25"></circle>',
                    "twentyfour": '<circle class="electron" cx="-277.78511650980107" cy="-415.7348061512726" r="25"></circle>',
                    "twentyfive": '<circle class="electron" cx="97.54516100806414" cy="490.3926402016152" r="25"></circle>',
                    "twentysix": '<circle class="electron" cx="-490.3926402016152" cy="97.54516100806414" r="25"></circle>',
                    "twentyseven": '<circle class="electron" cx="490.3926402016152" cy="97.54516100806414" r="25"></circle>',
                    "twentyeight": '<circle class="electron" cx="97.54516100806414" cy="-490.3926402016152" r="25"></circle>',
                    "twentynine": '<circle class="electron" cx="-415.7348061512726" cy="-277.78511650980107" r="25"></circle>',
                    "thirty": '<circle class="electron" cx="277.78511650980107" cy="415.7348061512726" r="25"></circle>',
                    "thirtyone": '<circle class="electron" cx="415.7348061512726" cy="-277.78511650980107" r="25"></circle>',
                    "thirtytwo": '<circle class="electron" cx="-277.78511650980107" cy="415.7348061512726" r="25"></circle>',
                },
                "five": {
                    "one": '<circle class="electron" cx="0" cy="-590" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="590" r="25"></circle>',
                    "three": '<circle class="electron" cx="-590" cy="0" r="25"></circle>',
                    "four": '<circle class="electron" cx="590" cy="0" r="25"></circle>',
                    "five": '<circle class="electron" cx="-417.18899999999996" cy="-417.18899999999996" r="25"></circle>',
                    "six": '<circle class="electron" cx="417.18899999999996" cy="-417.18899999999996" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-417.18899999999996" cy="417.18899999999996" r="25"></circle>',
                    "eight": '<circle class="electron" cx="417.18899999999996" cy="417.18899999999996" r="25"></circle>',
                    "nine": '<circle class="electron" cx="-545.0889241816592" cy="-225.78322509540297" r="25"></circle>',
                    "ten": '<circle class="electron" cx="545.0889241816592" cy="-225.78322509540297" r="25"></circle>',
                    "eleven": '<circle class="electron" cx="545.0889241816592" cy="225.78322509540297" r="25"></circle>',
                    "twelve": '<circle class="electron" cx="-545.0889241816592" cy="225.78322509540297" r="25"></circle>',
                    "thirteen": '<circle class="electron" cx="-225.78322509540297" cy="-545.0889241816592" r="25"></circle>',
                    "fourteen": '<circle class="electron" cx="225.78322509540297" cy="-545.0889241816592" r="25"></circle>',
                    "fifteen": '<circle class="electron" cx="-225.78322509540297" cy="545.0889241816592" r="25"></circle>',
                    "sixteen": '<circle class="electron" cx="225.78322509540297" cy="545.0889241816592" r="25"></circle>',
                    "seventeen": '<circle class="electron" cx="-578.6633154379059" cy="-115.10328998951569" r="25"></circle>',
                    "eighteen": '<circle class="electron" cx="578.6633154379059" cy="-115.10328998951569" r="25"></circle>',
                    "nineteen": '<circle class="electron" cx="-115.10328998951569" cy="578.6633154379059" r="25"></circle>',
                    "twenty": '<circle class="electron" cx="490.5670712585017" cy="327.78643748156526" r="25"></circle>',
                    "twentyone": '<circle class="electron" cx="-115.10328998951569" cy="-578.6633154379059" r="25"></circle>',
                    "twentytwo": '<circle class="electron" cx="327.78643748156526" cy="-490.5670712585017" r="25"></circle>',
                    "twentythree": '<circle class="electron" cx="-490.5670712585017" cy="327.78643748156526" r="25"></circle>',
                    "twentyfour": '<circle class="electron" cx="-327.78643748156526" cy="-490.5670712585017" r="25"></circle>',
                    "twentyfive": '<circle class="electron" cx="115.10328998951569" cy="578.6633154379059" r="25"></circle>',
                    "twentysix": '<circle class="electron" cx="-578.6633154379059" cy="115.10328998951569" r="25"></circle>',
                    "twentyseven": '<circle class="electron" cx="578.6633154379059" cy="115.10328998951569" r="25"></circle>',
                    "twentyeight": '<circle class="electron" cx="115.10328998951569" cy="-578.6633154379059" r="25"></circle>',
                    "twentynine": '<circle class="electron" cx="-490.5670712585017" cy="-327.78643748156526" r="25"></circle>',
                    "thirty": '<circle class="electron" cx="327.78643748156526" cy="490.5670712585017" r="25"></circle>',
                    "thirtyone": '<circle class="electron" cx="490.5670712585017" cy="-327.78643748156526" r="25"></circle>',
                    "thirtytwo": '<circle class="electron" cx="-327.78643748156526" cy="490.5670712585017" r="25"></circle>',
                },
                "six": {
                    "one": '<circle class="electron" cx="0" cy="-680" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="680" r="25"></circle>',
                    "three": '<circle class="electron" cx="-669.66927204" cy="-118.08076103999998" r="25"></circle>',
                    "four": '<circle class="electron" cx="669.66927204" cy="-118.08076103999998" r="25"></circle>',
                    "five": '<circle class="electron" cx="-588.8972719999999" cy="340" r="25"></circle>',
                    "six": '<circle class="electron" cx="588.8972719999999" cy="340" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-437.095568" cy="-520.9102212399999" r="25"></circle>',
                    "eight": '<circle class="electron" cx="437.095568" cy="-520.9102212399999" r="25"></circle>',
                    "nine": '<circle class="electron" cx="-437.095568" cy="520.9102212399999" r="25"></circle>',
                    "ten": '<circle class="electron" cx="437.095568" cy="520.9102212399999" r="25"></circle>',
                    "eleven": '<circle class="electron" cx="-588.8972719999999" cy="-340" r="25"></circle>',
                    "twelve": '<circle class="electron" cx="588.8972719999999" cy="-340" r="25"></circle>',
                    "thirteen": '<circle class="electron" cx="-669.66927204" cy="118.08076103999998" r="25"></circle>',
                    "fourteen": '<circle class="electron" cx="669.66927204" cy="118.08076103999998" r="25"></circle>',
                    "fifteen": '<circle class="electron" cx="-232.5736" cy="-638.9909815999999" r="25"></circle>',
                    "sixteen": '<circle class="electron" cx="232.5736" cy="-638.9909815999999" r="25"></circle>',
                    "seventeen": '<circle class="electron" cx="-232.5736" cy="638.9909815999999" r="25"></circle>',
                    "eighteen": '<circle class="electron" cx="232.5736" cy="638.9909815999999" r="25"></circle>',
                },
                "seven": {
                    "one": '<circle class="electron" cx="0" cy="-770" r="25"></circle>',
                    "two": '<circle class="electron" cx="0" cy="770" r="25"></circle>',
                    "three": '<circle class="electron" cx="-770" cy="0" r="25"></circle>',
                    "four": '<circle class="electron" cx="770" cy="0" r="25"></circle>',
                    "five": '<circle class="electron" cx="-544.467" cy="-544.467" r="25"></circle>',
                    "six": '<circle class="electron" cx="544.467" cy="-544.467" r="25"></circle>',
                    "seven": '<circle class="electron" cx="-544.467" cy="544.467" r="25"></circle>',
                    "eight": '<circle class="electron" cx="544.467" cy="544.467" r="25"></circle>',
                }






            }
        ]
        

        $('#next').click(function () {
            $('#prev').show();
        });

        



        function electronfilling(data, i, temp) {

            let slen, numbr;
            if (circle_string == "one") {

                temp = 0;
                times = 0;
                console.log(slen)
            }
            numbr = data.elements[i].shells[temp]
            slen = data.elements[i].shells.length
            // console.log(numbr)
            // removeprevshells

            $('#shellno').empty();
            $('#shellno').append(temp + 1);
            $('#filling').click(function () {

                eval = $('#enum').val();
                eval = parseInt(eval);
                console.log("numbr " + numbr)
                console.log("eval " + eval)
                if (eval == numbr) {
                    let c = $('<g>').attr("class", circle_string).attr("fill", "currentColor");
                    $('.g').append(c);

                    $(c).append(shell_circles[0][circle_string]);

                    // push electrons;
                    for (var p = 0; p < eval; p++) {
                        // console.log(electrons[0][circle_string][electrons_circles[p]])
                        $(c).append(electrons[0][circle_string][electrons_circles[p]]);
                    }

                    $(".right-container").html($(".right-container").html());

                    temp = temp + 1;
                    times = times + 1;
                    if (temp == slen) {
                        
                        console.log(data.elements[y-1].number+1)
                        if(data.elements[y-1].number+1 == 21){
                             $('#levelED2').prop('disabled',false);
                           
                        }
                        if(data.elements[y-1].number+1 == 41){
                            $('#levelED3').prop('disabled',false);
                        }
                        if(data.elements[y-1].number+1 ==70){
                             $('#levelED4').prop('disabled',false);
                        }
                        if(data.elements[y-1].number+1 == 81){
                             $('#levelED5').prop('disabled',false);
                        }
                        
                        // completed practise button off
                        // let evaluated = data.elements[y-1].number+1;
                     
                        // $('#'+ evaluated).prop('disabled',false);
                        // $('#p'+evaluated).fadeIn(2000);
                        // $('#p'+ data.elements[y-1].number).hide();
                        // $('#'+data.elements[y-1].number).append('<span class="badge badge-pill badge-primary"><em>Completed</em></span>')
                        // $('#' + data.elements[y-1].number).removeClass('ml-5');
                        // $('#'+data.elements[y-1].number+ ' .badge.badge-pill.badge-primary').addClass('ml-5');


                        $('#heading-atom').empty();
                        $('#main-heading').empty();
                        $('#main-heading').append('<span id="heading-atom"></span> Atom');
                        $('#heading-atom').append(data.elements[y - 1].name);
                        $('#inputelec').append('<div class="dialog" title="Well Done" style="border: 2px solid red;"><p id="message"></p></div>')
                        $('#message').append("You have Filled All the Electrons now fill in electrons in respective orbitals to complete this atom");

                        $('.dialog').dialog();
                        setTimeout(function () {
                            $('.dialog').remove();
                            $('.ui-dialog').remove();
                            $('#inputelec').hide();
                            $('#ec').show();
                        }, 3000);

                        $('#nameofele').append(data.elements[i].name);
                        $('.long-hand').append(data.elements[i].electron_configuration_semantic);
                        //FILLING EC
                        
                        let vart = 0;
                        let s = [];
                        $('.long-hand sup').each(function () {
                            s[vart] = $(this).text();
                            vart = vart + 1;
                        });
                        let cn = 0;
                        $('.long-hand sup').each(function(){
                            ++cn;
                        })
                        console.log(cn)
                       

                        $('.long-hand sup').empty();
                        class_fill_no = 0
                        $('.long-hand sup').each(function () {
                            tempstring = "<input  class='filling-sup-"+ String(class_fill_no)+"'" + " type='text' >"
                           $(this).append(tempstring)
                           class_fill_no = class_fill_no + 1
                        //    console.log(tempstring)
                        });
                        if(data.elements[i].number > 2){

                            let short = data.elements[i].electron_configuration_semantic[1]  + data.elements[i].electron_configuration_semantic[2]
                            $.getJSON('JSON/PTJ.json',function(data){
                                for(var he = 0;he<data.elements.length;he++){
                                    if(data.elements[he].symbol == short){
                                        hec = he
                                        break
                                    }
                                }$('#half-ec').empty();
                                $('#half-ec').append(short+ ":" + data.elements[hec].electron_configuration_semantic);
                            });
                        }
                        // $('.long-hand sup').append('<input  id="filling-sup" type="text" >')
                        for (var f = 0; f < s.length; f++) {
                            s[f] = parseInt(s[f]);
                            
                        }
                        let correctN = 0;

                        $('#filling-2').click(function () {
                            temp_ec_fill= 0
                            for(var cx = 0;cx<vart;cx++){
                                z[temp_ec_fill] = $('.filling-sup-' + cx).val();
                               temp_ec_fill = temp_ec_fill + 1
                            }
                                console.log(z)
                                console.log(s)
                      
                            

                                let cy=0,ck = 0;
                                while(cy<cn){
                                    if(parseInt(z[cy]) == s[cy]){
                                        console.log(parseInt(z[cy]))
                                        $('.filling-sup-' + cy).css({"background-color":"green","color":"white"});
                                        
                                        
                                       correctN = correctN +1 ;
                                    }else{
                                        $('.filling-sup-' + cy).css({"background-color":"red","color":"white"});
                                        ck = cy +1;
                                        while(ck<vart){
                                            if(parseInt(z[ck]) == s[ck]){
                                                $('.filling-sup-' + ck).css({"background-color":"green","color":"white"});
                                            }else{
                                                $('.filling-sup-' + ck).css({"background-color":"red","color":"white"});
                                            }
                                            ck++;
                                        }
                                        correctN = -1;
                                        break;
                                    }
                                    cy++;
                                    console.log(cy)
                                }
                                console.log(correctN);
                                console.log("Vart = "+vart +"and correctN = "+correctN + "and cn = " +cn )
                                if(correctN == -1){
                                    correctN = 0;
                                }else if(correctN === cn){
                                    let evaluated = data.elements[y-1].number+1;
             
                                    $('#'+ evaluated).prop('disabled',false);
                                    $('#p'+evaluated).fadeIn(2000);
                                    $('#p'+ data.elements[y-1].number).hide();
                                    $('#'+data.elements[y-1].number).append('<span class="badge badge-pill badge-primary"><em>Completed</em></span>')
                                    $('#' + data.elements[y-1].number).removeClass('ml-5');
                                    $('#'+data.elements[y-1].number+ ' .badge.badge-pill.badge-primary').addClass('ml-5');
                                    $('#ec').hide();
                                    if(data.elements[y-1].number+1 == 21){
                                       
                                       $('#lock2').css("display","none");
                                   }
                                   if(data.elements[y-1].number+1 == 41){
                                    $('#lock3').css("display","none");
                                   }
                                   if(data.elements[y-1].number+1 ==70){
                                    $('#lock4').css("display","none");
                                   }
                                   if(data.elements[y-1].number+1 == 81){
                                    $('#lock5').css("display","none");
                                   }
                                    
                                }
                            });
                           
                
                        // /ends
                        // console.log(electronconfiguration)
                        console.log(data.elements[i].electron_configuration_semantic)
                        setTimeout(function () {
                            for (var t = 0; t < slen; t++) {
                                
                                $('.' + shell_circleswords[t]).remove();
                            }
                            

                        },8000000)
                        $('.btn.bg-success').click(function () {
                            $('#inputelec').show();
                            $('#heading-atom').empty();
                            for (var t = 0; t < slen; t++) {

                                $('.' + shell_circleswords[t]).remove();
                            }
                            $('#ec').hide();
                            $('.long-hand').empty();
                            $('#nameofele').empty();
                            $('#main-heading').empty();
                            $('#main-heading').append('Try to Fill the Electrons Demand Of <span id="heading-atom"></span> Atom');
                            $('#main-heading').show()
                            y = $(this).next().attr('id');
                            console.log(y - 1)
                            get_data(y - 1);
                        })
                    } else {

                        circle_string = shell_circleswords[times];
                        // console.log(circle_string)
                        electronfilling(data, i, temp);
                    }
                   

                } else {
                    if (!isNaN(eval)) {

                        $('#inputelec').append('<div class="dialog" title="Try Again" style="border: 2px solid red;"><p id="message"></p></div>')
                        $('#message').append("Fill Correct Number of Electrons");

                        $('.dialog').dialog();
                        setTimeout(function () {
                            $('.dialog').remove();
                            $('.ui-dialog').remove();
                        }, 3000);
                    }
                }

            });

        }

        function get_data(i) {
            $.getJSON("JSON/PTJ.json", function (data) {

                class_circles = data.elements[i].shells.length;


                // right container
                let string = ".card-body.collapse " + "." + data.elements[y - 1].name;
                console.log(string)
                console.log(string)
                $('#heading-atom').empty();
                $('#heading-atom').append(data.elements[y - 1].name);

                $(string).empty()
                $(string).append('<span id="element-name-full"></span> Atom')
                $(string + ' #element-name-full').empty()
                $(string + ' #element-name-full').append(data.elements[i].name);

                circle_string = shell_circleswords[0];
                electronfilling(data, i, shell_circles, circle_string);
                $('#elementsym').empty();
                $('#elementsym').append(data.elements[i].symbol);

                // leftcontainer
                $(string).append('<br><span id="atomic-number">  </span> <br><span id="shells"> </span><br> Start Filling Electrons');
                $(string + ' #atomic-number').empty();
                $(string + ' #atomic-number').append("Atomic Number : " + data.elements[i].number);
                $(string + ' #shells').empty();
                $(string + ' #shells').append("Total Shells : " + class_circles);



            });
            return true;

        }

        function electron_configuration_status(z){
                        
        }


    });








});

