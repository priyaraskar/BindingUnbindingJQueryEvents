$(function() {
	
  $("#divBox").on('mouseover mouseleave', colored);
  
	$("#divBox").on("click",function(){
		$("#divBox").off("mouseover mouseleave", colored);
		// removes the set events mouseover and mouseleave
		
		$("#divBox").removeClass("setColor");
		// removes the class if its there
	}); 
	
	function colored(){
		$("#divBox").toggleClass("setColor");
	}

});
