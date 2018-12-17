//One way to do it.
// $("li").click(function(){
// 	$(this).css("color","gray");
// 	$(this).css("text-decoration","line-through");
// });

$("ul").on("click","li",function(){
	//This way, the only thing you need to do is to create a class and use toggleClass. This is the short way of doing it.

	$(this).toggleClass("completed");

//Long way of doing it.
	// if ($(this).css("color") === "rgb(128, 128, 128)") {
	// 	$(this).css({
	// 		color: "black",
	// 		textDecoration: "none"
	// 	});
	// }else{
	// 	$(this).css({
	// 		color:"gray",
	// 		textDecoration:"line-through"
	// 	});
	// }
});


$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});
	event.stopPropagation(); //jQuery function
})

$("input[type='text']").keypress(function(key){
	if (key.which === 13) {
		var toDoText = $(this).val();

		$("ul").append("<li><span>X</span> " + toDoText + "</li>");

		toDoText = $(this).val("");
	}
})


