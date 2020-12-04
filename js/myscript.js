$(function(){
            const loading=$('.loading');

            $(window).on('load',function(){
                loading.remove();
            })

            $(window).on('pageshow',function(){
                $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
                $('body').css('overflow','visible');
            })

            //19.캐로셀 옵션 설정
            $('.carousel').carousel({
                interval:3000
            })
            //animatescroll plugin
            $('.navbar li:nth-child(1) a').click(function(){
            	$('#top').animatescroll({scrollSpeed:800,easing:'easeInOutQuad'});
            })
            $('.navbar li:nth-child(2) a').click(function(){
            	$('#birth').animatescroll({scrollSpeed:800,easing:'easeInOutQuad'});
            })
            $('.navbar li:nth-child(3) a').click(function(){
            	$('#mineral').animatescroll({scrollSpeed:800,easing:'easeInOutQuad'});
            })
            $('.navbar li:nth-child(4) a').click(function(){
            	$('#product').animatescroll({scrollSpeed:800,easing:'easeInOutQuad'});
            })
            $('.navbar li:nth-child(5) a').click(function(){
            	$('#recycle').animatescroll({scrollSpeed:800,easing:'easeInOutQuad'});
            })

            //제품클릭시 용량나타나기
            $('.water1').hide();
            $('.bottle1').click(function(){
                $('.water1').toggle().addClass('animate__animated animate__bounce');
            })
             $('.water2').hide();
            $('.bottle2').click(function(){
                $('.water2').toggle().addClass('animate__animated animate__bounce');
            })
             $('.water3').hide();
            $('.bottle3').click(function(){
                $('.water3').toggle().addClass('animate__animated animate__bounce');
            })
             $('.water4').hide();
            $('.bottle4').click(function(){
                $('.water4').toggle().addClass('animate__animated animate__flash');
            })
             $('.water5').hide();
            $('.bottle5').click(function(){
                $('.water5').toggle().addClass('animate__animated animate__bounce');
            })
             $('.water6').hide();
            $('.bottle6').click(function(){
                $('.water6').toggle().addClass('animate__animated animate__bounce');
            })
            

            //waypoint
            $('.wp1').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp1').addClass('animate__animated animate__fadeInUp');
                }
            },{
                offset:'80%'
            })
            $('.wp1').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp1').removeClass('animate__animated animate__fadeInUp');
                }
            },{
                offset:'50%'
            })
            $('.wp2').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp2').addClass('animate__animated animate__slideInLeft');
                }
            },{
                offset:'80%'
            })
            $('.wp2').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp2').removeClass('animate__animated animate__slideInLeft');
                }
            },{
                offset:'50%'
            })
            $('.wp3').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp3').addClass('animate__animated animate__slideInRight');
                }
            },{
                offset:'80%'
            })
            $('.wp3').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp3').removeClass('animate__animated animate__slideInRight');
                }
            },{
                offset:'50%'
            })
            $('.wp4').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp4').addClass('animate__animated animate__slideInUp');
                }
            },{
                offset:'80%'
            })
            $('.wp4').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp4').removeClass('animate__animated animate__slideInUp');
                }
            },{
                offset:'50%'
            })
            $('.wp5').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp5').addClass('animate__animated animate__flipInX');
                }
            },{
                offset:'50%'
            })
            $('.wp5').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp5').removeClass('animate__animated animate__flipInX');
                }
            },{
                offset:'50%'
            })
            $('.wp6').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp6').addClass('animate__animated animate__flipInY');
                }
            },{
                offset:'50%'
            })
            $('.wp6').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp6').removeClass('animate__animated animate__flipInY');
                }
            },{
                offset:'50%'
            })
            $('.wp7').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp7').addClass('animate__animated animate__flipInX');
                }
            },{
                offset:'50%'
            })
            $('.wp7').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp7').removeClass('animate__animated animate__flipInX');
                }
            },{
                offset:'50%'
            })
            $('.wp8').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp8').addClass('animate__animated animate__bounceInLeft');
                }
            },{
                offset:'80%'
            })
            $('.wp8').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp8').removeClass('animate__animated animate__bounceInLeft');
                }
            },{
                offset:'50%'
            })
            $('.wp9').waypoint(function(direction){
                if(direction==='down'){
                    $('.wp9').addClass('animate__animated animate__bounceInRight');
                }
            },{
                offset:'80%'
            })
            $('.wp9').waypoint(function(direction){
                if(direction==='up'){
                    $('.wp9').removeClass('animate__animated animate__bounceInRight');
                }
            },{
                offset:'50%'
            })
        })