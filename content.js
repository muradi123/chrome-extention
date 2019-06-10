chrome.runtime.onMessage.addListener(function (request , sender, sendResponse) {
	if (request.todo === "changesomething") {
		let addcolor = "#" + request.clickedcolor;
		var yourstring="javascript";

$('html,div:contains('+yourstring+')', document.body).each(function(){
      console.log(this);
      $(this).html($(this).html().replace(
            new RegExp(yourstring, 'gi'), '<span class=someclass>'+yourstring+'</span>'
      ));
});

		
	  
	};
});