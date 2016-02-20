window.onload = function() {
	$('.menu .item').tab();
	$('.ui.checkbox').checkbox('attach events', '.toggle.button');

	$('#register_but').attr("disabled","disabled");

	$('#isagreed').change(function() {
		if (this.checked) {
			$('#register_but').removeAttr("disabled");
		} else {
			$('#register_but').attr("disabled","disabled");
		}
	});
}
