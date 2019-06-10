

 $(function () {
 	let color = $('#color-letters').val();
 	$('#color-letters').on("change", (function(){
 		color = $(this).val();
 	}));
 	$('#changecolors').click(function(){
     chrome.tabs.query({active:true, currentWindow:true,}, function(tabs){
     chrome.tabs.sendMessage(tabs[0].id, {todo:"changesomething" , clickedcolor:color})
     });
 	});
 });