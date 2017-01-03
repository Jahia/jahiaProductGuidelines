
// Initialize code highlighting plugin.

hljs.configure({
	tabReplace: '    ' // 4 spaces
})
hljs.initHighlightingOnLoad();
	

$(document).ready(function() {


	// nav dropdowns (left navbar).
	
	$('.leftContainerSection nav dl dt').on('click', function() {
		$(this).next().toggle('fast');
	});

	$('.leftContainerSection nav dl dt').next().hide();
	$('.leftContainerSection nav dl dt.active').next().show();
	
	
	// Add line number on code preview.
	
	(function() {
	var pre = document.getElementsByTagName('pre'),
		pl = pre.length;
	for (var i = 0; i < pl; i++) {
		pre[i].innerHTML = '<span class="line-number"></span>' + pre[i].innerHTML + '<span class="cl"></span>';
		var num = pre[i].innerHTML.split(/\n/).length;
		for (var j = 0; j < num; j++) {
			var line_num = pre[i].getElementsByTagName('span')[0];
			line_num.innerHTML += '<span>' + (j + 1) + '</span>';
		}
	}
	})();
	
	
	// Toggle light/dark theme for preview result/
	
	$(".changeTheme_result").on( "click", function(){
		if ( $(this).is(':checked') ){
			$(".elementSnippetContainer .resultItemPreview").css("background", "#6e6e6e");
		}else{
			$(".elementSnippetContainer .resultItemPreview").css("background", "initial");
		}
	});
	
	
	// Externalize as jahia_components.js
	
	var addRippleEffect = function (e) {
		var target = e.target;
		if (target.tagName.toLowerCase() !== 'button') return false;
		var rect = target.getBoundingClientRect();
		var ripple = target.querySelector('.ripple');
		if (!ripple) {
			ripple = document.createElement('span');
			ripple.className = 'ripple';
			ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
			target.appendChild(ripple);
		}
		ripple.classList.remove('show');
		var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
		var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
		ripple.style.top = top + 'px';
		ripple.style.left = left + 'px';
		ripple.classList.add('show');
		return false;
	}

	document.addEventListener('click', addRippleEffect, false);


});
