$(document).ready(function() {

	$('.leftContainerSection nav dl dt').on('click', function() {
		$(this).next().toggle('fast');
	});

	$('.leftContainerSection nav dl dt').next().hide();
	$('.leftContainerSection nav dl dt.active').next().show();

});