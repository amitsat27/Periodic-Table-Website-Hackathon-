

$('periodictable.html').ready(function () {
    let copymain, copyclicked;
    let state = 0;
    console.log(screen.availWidth)
    copy = $('.main').html();
    copyclicked = $('.main').html();

    window.onresize = displayWindowSize;
    function displayWindowSize() {
        let myWidth = window.innerWidth;
        let myHeight = window.innerHeight;
        // your size calculation code here
        console.log(myWidth + "x" + myHeight)
    };

    $('.cell').click(function () {
        let global = $(this).find('.at_num').text();
        // $('.main').empty();
        $('.main').load('element-1.html', function () {
            console.log(global)
            $.getJSON("JSON/PTJ.json", function (data) {
                console.log(data.elements[global - 1].name);
                $('.atomicnum').append(data.elements[global - 1].number);
                $('.name').append(data.elements[global - 1].name);
                $('.sname').append(data.elements[global - 1].symbol)
                // block specification
                // let leng = data.elements[global-1].shells.length;
                // if(data.elements[global-1].block == "s"){
                //     $('#block').append(data.elements[global - 1].block);
                //     $('#group').append(data.elements[global-1].shells[leng-1]);
                // }else if(data.elements[global-1].block == "d"){
                //     if(data.elements[global-1].symbol == "Cr"){
                //         $('#block').append(data.elements[global - 1].block);
                //         $('#group').append("6");

                //     }else{
                //         let l = data.elements[global-1].electron_configuration.length;
                //         if(data.elements[global-1].electron_configuration[l-1]=="0"){
                //             $('#block').append(data.elements[global - 1].block);
                //             $('#group').append(10+2);
                //         }else{

                //             $('#block').append(data.elements[global - 1].block);
                //             $('#group').append(parseInt(data.elements[global-1].electron_configuration[l-1])+2);
                //         }

                //     }
                // }else if(data.elements[global-1].block == "p"){
                //     $('#block').append(data.elements[global - 1].block);
                //     $('#group').append(data.elements[global-1].shells[leng-1]+10);
                // // }else{
                //     $('#block').append(data.elements[global - 1].block);
                //     $('#group').append(3);
                // }
                if (data.elements[global - 1].block == "f") {
                    $('#group').append(3);
                    $('#block').append(data.elements[global - 1].block);
                } else {

                    $('#block').append(data.elements[global - 1].block);
                    $('#group').append(data.elements[global - 1].xpos);
                }

                $('#period').append(data.elements[global - 1].period)
                $('#electrons').append(data.elements[global - 1].number)
                let protons = data.elements[global - 1].number
                let neutrons = Math.round(data.elements[global - 1].atomic_mass - data.elements[global - 1].number)
                $('#protons').append(data.elements[global - 1].number)
                $('#neutrons').append(Math.round(data.elements[global - 1].atomic_mass - data.elements[global - 1].number))


                // second box
                let shells = data.elements[global - 1].shells.length;
                let toappend = "";
                for (var i = 0; i < shells; i++) {

                    $('#epershell').append(data.elements[global - 1].shells[i] + " ");
                }
                $('#econfig').append(data.elements[global - 1].electron_configuration_semantic)

                // image
                let currentatom = data.elements[global - 1].name + "Atom.png"

                $('.shellimg').attr('src', 'https://sciencenotes.org/wp-content/uploads/2018/08/' + currentatom)


                // third box
                $('#atnum').append(data.elements[global - 1].number)
                $('#atweight').append(data.elements[global - 1].atomic_mass)
                $('#mass').append(protons + neutrons);
                $('#category').append(data.elements[global - 1].category);
                $('#color').append(data.elements[global - 1].appearance);
                $('#rd').append(data.elements[global - 1].discovered_by);


                // fourth box
                $('#phase').append(data.elements[global - 1].phase);
                $('#density').append(data.elements[global - 1].density);
                $('#melt').append(data.elements[global - 1].melt + " K");
                $('#boil').append(data.elements[global - 1].boil + " K");

                // fourth box
                $('#eaff').append(" " + data.elements[global - 1].electron_affinity);
                $('#eneg').append(" " + data.elements[global - 1].electronegativity_pauling);


                // sixth box
                $('#summary').append(data.elements[global - 1].summary);
                let currentimg = data.elements[global - 1].symbol;
                $('.img').attr('src', "https://raw.githubusercontent.com/catchspider2002/periodic-table.io/master/en/images/elements" + "/" + currentimg + ".jpg")


                $.getJSON("https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.json", function (data) {
                    $('#vander').append(data[global - 1].vanDelWaalsRadius + " pm");
                    $('#atradius').append(data[global - 1].atomicRadius + " pm");
                    $('#oxidation').append(data[global - 1].oxidationStates);
                })


            });


            $('.back').click(function () {
                window.location.href = 'periodictable.html';
            });
        });

    });

    // Searching element
    let count = 0;
    let pcell,currcolor,sel,half;
    $('#sbtn').click(function () {
        // console.log($('.at_details').text())
        if (count == 0) {
            let _val = $('#searchedname').val();
            var _txt = _val.charAt(0).toUpperCase() + _val.slice(1).toLowerCase();
            half = "('" + _txt + "')";
            sel = ".at_details:contains" + half;
            currcolor = $(sel).parent().css("background-color");
            pcell = sel;
            
            $(sel).parent().css({ "background-color": "purple", "transition": " background-color 0.5s ease-in" });
            count = count +1;
            
        }else if(count > 0){
            console.log(pcell)
            let _val = $('#searchedname').val();
            var _txt = _val.charAt(0).toUpperCase() + _val.slice(1).toLowerCase();
            $(pcell).parent().css({ "background-color": currcolor, "transition": " background-color 0.5s ease-out" });         
            half = "('" + _txt + "')";
            sel = ".at_details:contains" + half;
            console.log(sel)
            $(sel).parent().css({ "background-color": "purple", "transition": " background-color 0.5s ease-in" ,"transform":"transition 1s"});
            pcell = sel;
        }        
    });

    $('#sbtn').hover(function () {
        $('#sbtn').css({ "color": "blue" });
    }, function () {
        $('#sbtn').css({ "color": "green" });
    });







    // hoverbuttons
    // diatomic
    $('#cat-diatomic').hover(function () {
        $('.cell .element').not(".cell.cat-diatomic .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-diatomic .element").css({ "opacity": "1" });
    }
    );


    // noble
    $('#cat-noble').hover(function () {
        $('.cell .element').not(".cell.cat-noble .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-noble .element").css({ "opacity": "1" });
    }
    );

    // transition
    $('#cat-transmetal').hover(function () {
        $('.cell .element').not(".cell.cat-transition .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-transition .element").css({ "opacity": "1" });
    }
    );

    // alkali metal
    $('#cat-alkali').hover(function () {
        $('.cell .element').not(".cell.cat-alkali .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-alkali .element").css({ "opacity": "1" });
    }
    );

    // alkali earth
    $('#cat-alkaliem').hover(function () {
        $('.cell .element').not(".cell.cat-alkaliem .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-alkaliem .element").css({ "opacity": "1" });
    }
    );
    // polymetal
    $('#cat-polymetal').hover(function () {
        $('.cell .element').not(".cell.cat-polymetal .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-polymetal .element").css({ "opacity": "1" });
    }
    );
    // mettalloids
    $('#cat-metalloid').hover(function () {
        $('.cell .element').not(".cell.cat-metalloid .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-metalloid .element").css({ "opacity": "1" });
    }
    );

    // post metals
    $('#cat-postmetal').hover(function () {
        $('.cell .element').not(".cell.cat-postmetal .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-postmetal .element").css({ "opacity": "1" });
    }
    );
    // lanthanide
    $('#cat-lanthanide').hover(function () {
        $('.cell .element').not(".cell.cat-lanthanide .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-lanthanide .element").css({ "opacity": "1" });
    }
    );
    // actinide
    $('#cat-actinide').hover(function () {
        $('.cell .element').not(".cell.cat-actinide .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-actinide .element").css({ "opacity": "1" });
    }
    );

    // SMALL SCREEN 
    // polymetal
    $('#cat-polymetal-2').hover(function () {
        $('.cell .element').not(".cell.cat-polymetal .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-polymetal .element").css({ "opacity": "1" });
    }
    );

    // lanthanide
    $('#cat-lanthanide-2').hover(function () {
        $('.cell .element').not(".cell.cat-lanthanide .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-lanthanide .element").css({ "opacity": "1" });
    }
    );
    // actinide
    $('#cat-actinide-2').hover(function () {
        $('.cell .element').not(".cell.cat-actinide .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-actinide .element").css({ "opacity": "1" });
    }
    );
    // post metals
    $('#cat-postmetal-2').hover(function () {
        $('.cell .element').not(".cell.cat-postmetal .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-postmetal .element").css({ "opacity": "1" });
    }
    );
    $('#cat-transmetal-2').hover(function () {
        $('.cell .element').not(".cell.cat-transition .element").css({ "opacity": "0.3" });
    }, function () {
        $('.cell .element').not(".cell.cat-transition .element").css({ "opacity": "1" });
    }
    );

    // blocks
    // sblock
    $('#s-block').hover(function () {
        $('#s-block .element.s-block').css({ 'opacity': '1' });
        $('.cell .element').not('.element.s').css({ 'opacity': '0.3' });
    },
        function () {
            $('.cell .element').not('.element.s').css({ 'opacity': '1' });
        });


    // pblock
    $('#p-block').hover(function () {
        $('.cell .element').not('.element.p').css({ 'opacity': '0.3' });
    },
        function () {
            $('.cell .element').not('.element.p').css({ 'opacity': '1' });
        });

    //  d-block
    $('#d-block').hover(function () {
        $('.cell .element').not('.element.d').css({ 'opacity': '0.3' });
    },
        function () {
            $('.cell .element').not('.element.d').css({ 'opacity': '1' });
        });

    //  f-block
    $('#f-block').hover(function () {
        $('.cell .element').not('.element.f').css({ 'opacity': '0.3' });
    },
        function () {
            $('.cell .element').not('.element.f').css({ 'opacity': '1' });
        });





});







