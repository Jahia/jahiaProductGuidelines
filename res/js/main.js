$(document).ready(function() {

	$('.leftContainerSection nav dl dt').on('click', function() {
		$(this).next().toggle();
	});

});