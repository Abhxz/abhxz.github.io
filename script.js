    let intro = 'Hello,Welcome on behalf of '+'Abhay Pratap';
    let flag = false;
    let animateHobbiesFlag = false;

    function isOnScreen(elem, deltaOffset = 5){
        if(elem.length == 0) return;

        var $window = jQuery(window);
        var viewport_top = $window.scrollTop();
        var  viewport_height = $window.height();
        var viewport_bottom =  viewport_top + viewport_height;
        var $elem = jQuery(elem);
        var top = $elem.offset().top + deltaOffset;
        var height = $elem.height();
        var bottom = top + height;
    

        return( bottom > viewport_top && top < viewport_bottom);

    }

    function writeIntro(elem, intro){
        if(elem.length == 0 || intro.length == 0) return;
        var $elem = jQuery(elem);
        
        for(let i=0; i < intro.length; i++){
        (function(i){

            window.setTimeout(function(){
            $elem.append(intro.charAt(i));
            
            if(i==15) $elem.append('<br>');
            }, i * 40);
        
        }(i));
        }
        

    }


    function skillLevel(){
        var maxLevelWidth = 80;
        $('.skillLevel').each(function(){
            if($(this).html() == 'python'){
                $(this).animate({width :maxLevelWidth * 90/100+'%'} ,1000);
            }else if($(this).html() == 'flask'){
                $(this).animate({width:maxLevelWidth * 84/100+'%'} ,600);
            }else if($(this).html() == 'elastic search'){
                $(this).animate({width:maxLevelWidth * 80/100+'%'} ,200);
            }else if($(this).html() == 'java'){
                $(this).animate({width:maxLevelWidth * 84/100+'%'} ,700);
            }else if($(this).html() == 'spring boot'){
                $(this).animate({width:maxLevelWidth * 80/100+'%'} ,500);
            }else if($(this).html() == 'html'){
                $(this).animate({width:maxLevelWidth * 83/100+'%'} ,300);
            }else if($(this).html() == 'css'){
                $(this).animate({width:maxLevelWidth * 75/100+'%'} ,350);
            }else if($(this).html() == 'mysql'){
                $(this).animate({width:maxLevelWidth * 50/100+'%'} ,1100);
            }else if($(this).html() == 'git'){
                $(this).animate({width:maxLevelWidth * 85/100+'%'} ,1400);
            }
        });

    }

    function showCertification(){
        var animationDuration = 500;
        $('#certification-container div ul li:nth-child(1) div').animate({left : '0' } , animationDuration,
            function(){
            $('#certification-container div ul li:nth-child(2) div').animate({left : '0' }, animationDuration,
            function(){
            $('#certification-container div ul li:nth-child(3) div').animate({left : '0' }, animationDuration,
            function(){
            $('#certification-container div ul li:nth-child(4) div').animate({left : '0' }, animationDuration);
        });
        });
        });
    }

    function showHobbies(){
        var animationDuration = 800;
        $('#likes-container div ul li:nth-child(1) div').animate({left : '0' } , animationDuration,
            function(){$('#likes-container div ul li:nth-child(2) div').animate({left : '0' }, animationDuration,
            function(){$('#likes-container div ul li:nth-child(3) div').animate({left : '0' }, animationDuration,
            function(){$('#likes-container div ul li:nth-child(4) div').animate({left : '0' }, animationDuration);
        });
        });
        });
    }

    window.addEventListener('load', function(){
        $('#headerOptionsBox').addClass('rightToLeftAnimation');
        $('#profileIcon span' ).css('background-color','whitesmoke');

        writeIntro('#introductionQuote', intro);
        if(isOnScreen($('#certification-container'))) showCertification();
        if(isOnScreen($('#likes-container'))) showHobbies();
        if(isOnScreen('#about')) $('#about .section-name span').addClass('section-name-span');
        if(isOnScreen('#project')) $('#project .section-name span').addClass('section-name-span');
        if(isOnScreen('#education-container')) $('#education-container .section-name span').addClass('section-name-span');
        if(isOnScreen('#certification-container')) $('#certification-container .section-name span').addClass('section-name-span');
        if(isOnScreen('#likes-container')) $('#likes-container .section-name span').addClass('section-name-span');
        if(isOnScreen('#contact')) $('#contact .section-name span').addClass('section-name-span');

    });

    $(document).ready( function(){
            $('#profile button:nth-child(1)').addClass('leftToRightAnimation');
            $('#profile button:nth-child(2)').addClass('rightToLeftAnimation');
            $('#linkContainer').addClass('leftToRightAnimation');
            
            isOnScreen('#profile') ? $('#scrollTopButton div').hide() :$('#scrollTopButton div').show();

            //tooltip
            $('[data-toggle="tooltip"]').tooltip();
            if(isOnScreen('#about')) $('#about .section-name span').addClass('section-name-span');
            if(isOnScreen('#project')) $('#project .section-name span').addClass('section-name-span');
            if(isOnScreen('#education-container')) $('#education-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#certification-container')) $('#certification-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#likes-container')) $('#likes-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#contact')) $('#contact .section-name span').addClass('section-name-span');


            window.addEventListener('unload', function(){
            writeIntro('#introductionQuote', intro);
            $('#profile button').addClass('leftToRightAnimation');
            $('#hackerRankBtn').addClass('rightToLeftAnimation');
            $('#linkContainer').addClass('leftToRightAnimation');

            
        
        });
        

    
        window.addEventListener('scroll', function(){

            isOnScreen('#profile') ? $('#scrollTopButton div').hide() :$('#scrollTopButton div').show();
            if(isOnScreen('#about', 200)) $('#about .section-name span').addClass('section-name-span');
            if(isOnScreen('#project', 200)) $('#project .section-name span').addClass('section-name-span');
            if(isOnScreen('#education-container', 200)) $('#education-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#certification-container', 200)) $('#certification-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#likes-container', 200)) $('#likes-container .section-name span').addClass('section-name-span');
            if(isOnScreen('#contact', 200)) $('#contact .section-name span').addClass('section-name-span');

            if(isOnScreen($('#skillsContainer'), 420)) skillLevel();
            if(isOnScreen($('#certification-container'), 420)) showCertification();
            if(isOnScreen($('#likes-container'), 420)) showHobbies();
            
            
        });


        
        //sending Email
    $('#sendEmailBtn').click(function(event){
        
        var name = $('form #name').val();
        var subject = $('form #subject').val();
        var body = $('form #body').val();
        $('form #name').css({'background-color': '#1e272c'});
        $('form #subject').css({'background-color': '#1e272c'});
        $('form #body').css({'background-color': '#1e272c'});

        if(name.length == 0){
            $('#statusMessage').text('*Please Enter Your Name');
            $('form #name').css({'background-color': 'lightslategrey'});
            event.preventDefault();
        }else if(subject.length == 0){
            $('#statusMessage').text('*Please Enter Subject');
            $('form #subject').css({'background-color': 'lightslategrey'});
            event.preventDefault();
        }else if(body.length == 0){
            $('#statusMessage').text('*Please Write Your Message');
            $('form #body').css({'background-color': 'lightslategrey'});
            event.preventDefault();
        }else{
            var mailLink = 'mailto:we.abhay@gmail.com?subject='+subject+'&body='+'Name : '+name+', Message : '+body;
            $('#sendEmailBtn').attr("href",mailLink);
        }
    });
        
    });