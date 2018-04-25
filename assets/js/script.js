$(document).ready(function()  {

// jQuery Function Number 1
$("#passions").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$("#interests").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

$("#facts").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

// jQuery Function Number 2
$("#passions").hover(function(){
    $(this).css("opacity", "0.8");
        }, function(){
        $(this).css("opacity", "1");
});

$("#interests").hover(function(){
    $(this).css("opacity", "0.8");
        }, function(){
        $(this).css("opacity", "1");
});

$("#facts").hover(function(){
    $(this).css("opacity", "0.8");
        }, function(){
        $(this).css("opacity", "1");
});


//Passions
	const distanceToNextImage = -450;
	let currentImageNumber = 0;

	// jQuery Function Number 3
	$("#lightbox").hide();

	$(".item").click(function() {
		
		// jQuery Function Number 4		
		currentImageNumber = parseInt($(this).attr("id"), 10);
		let newLeft = distanceToNextImage * currentImageNumber;
		
		// jQuery Function Number 5
		$("#carousel-strip").css("left", newLeft);
		
		// jQuery Function Number 6
		$("#lightbox").show();
	});
	

	// Carousel section
	$("#right").click(function() {
		currentImageNumber = (currentImageNumber + 1) % 6;
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");

	});

	$("#left").click(function() {
		currentImageNumber = currentImageNumber == 0 ? 8 : (currentImageNumber - 1);
		$("#carousel-strip").css("left", currentImageNumber * distanceToNextImage + "px");
	});

	// OTHER CODE
	// This closes the lightbox when you click on the overlay or the x.
	$("#overlay, #close").click(function() {
		$("#lightbox").hide();
	})
})