$(document).ready(function(){$('.fa-bars').click(function(){$('.home-nav-sm').slideToggle();});var austDay=new Date($(".countdown").attr("date-time"));$(".countdown").countdown({until:austDay,format:'yowdHMS'});$(".fancybox").fancybox();$(".top_mnu").navigation();$(".block").waypoint(function(direction){if(direction==="down"){$(".class").addClass("active");}else if(direction==="up"){$(".class").removeClass("deactive");};},{offset:100});$("a.scroll").click(function(){$.scrollTo($(".div"),800,{offset:-90});});$("a.scroll1").click(function(){$.scrollTo($(".div1"),800,{offset:-90});});$("a.scroll2").click(function(){$.scrollTo($(".div2"),800,{offset:-90});});$("a.scroll3").click(function(){$.scrollTo($(".div3"),800,{offset:-90});$("a.scroll4").click(function(){$.scrollTo($(".div4"),800,{offset:-90});});$("a.scroll5").click(function(){$.scrollTo($(".div5"),800,{offset:-90});});});var owl=$(".carousel");owl.owlCarousel({items:4});owl.on("mousewheel",".owl-wrapper",function(e){if(e.deltaY>0){owl.trigger("owl.prev");}else{owl.trigger("owl.next");}e.preventDefault();});$(".next_button").click(function(){owl.trigger("owl.next");});$(".prev_button").click(function(){owl.trigger("owl.prev");});$(document).ready(function(){$("#owl-demo1").owlCarousel({navigation:true,slideSpeed:300,loop:true,paginationSpeed:400,singleItem:true});});$("#top").click(function(){$("body, html").animate({scrollTop:0},800);return false;});$(document).ready(function(){var top_show=150;var delay=1000;$(window).scroll(function(){if($(this).scrollTop()>top_show)$('#top').fadeIn();else $('#top').fadeOut();});$('#top').click(function(){$('body, html').animate({scrollTop:0},delay);});});$(".button").click(function(){$.ajax({type:"GET",url:"mail.php",data:$("#open_form").serialize()}).done(function(){alert("Спасибо за заявку!");setTimeout(function(){$('#open_form').close();},1000);});return false;});});$(document).ready(function(){$("#owl-demo").owlCarousel({navigation:true,slideSpeed:300,paginationSpeed:400,singleItem:true,autoPlay:6000});});$(document).ready(function(){$('#Container').mixItUp();});$(document).ready(function(){$('.filter').click(function(){$('.filter').removeClass('filter-active');$(this).addClass('filter-active');});$('.link-form').click(function(event){event.preventDefault();$('.form_header').fadeIn();});$('.fa-times').click(function(){$('.form_header').fadeOut();});});$(window).load(function(){$('.action_animate ').animated("fadeInLeft");});