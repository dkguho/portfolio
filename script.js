$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY >= 25){
			$('.nav').addClass("sticky");
		}else{
			$('.nav').removeClass("sticky");
		}
	});
	//toogle menu bar
	
	$('.menu-btn').click(function(){
	$('.nav .menu').toggleClass("active");
	$('.menu-btn i').toggleClass("active");
	
});

});

//typing animation script

var typed = new Typed(".typing",{
	strings: ["Developer","Booklover","Designer"],  
	typeSpeed:80,
	backSpeed:60,
	loop:true
})

var typed2 = new Typed(".typing-2",{
	strings: ["Developer","Booklover","Designer"],  
	typeSpeed:80,
	backSpeed:60,
	loop:true
})




