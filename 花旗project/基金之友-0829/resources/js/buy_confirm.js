window.onload = function() {
	$('.menu .item').tab();
	$('.ui.checkbox').checkbox('attach events', '.toggle.button');

	var flag1 = false;
	var flag2 = false;

	$('#goon').attr("disabled","disabled");

	$('#isagreed1').change(function() {
		if (this.checked) {
			flag1 = true;
			if (flag1 && flag2) {
				$('#goon').removeAttr("disabled");
			}
		} else {
			flag1 = false;
			$('#goon').attr("disabled","disabled");
		}
	});

	$('#isagreed2').change(function() {
		if (this.checked) {
			flag2 = true;
			if (flag1 && flag2) {
				$('#goon').removeAttr("disabled");
			}
		} else {
			flag2 = false;
			$('#goon').attr("disabled","disabled");
		}
	});
}
