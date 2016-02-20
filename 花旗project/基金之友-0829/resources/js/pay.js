window.onload = function() {
	$('.menu .item').tab();
	$('.ui.checkbox').checkbox('attach events', '.toggle.button');

	var flag1 = true;;
	var flag2 = false;

	var pushed = false;
	$(".bank_list").hide();

	$('#select1').attr("checked","checked");
	$(".pay1").after('<div class="added1" style="float:right;margin-right:20px;">支付 <span style="color:red;">100.00</span> 元</div>');
	$(".pay_way_1").css("background-color", "rgb(248, 248, 248)");

	$('#select1').change(function() {
		if (this.checked && !flag1) {
			$(".added2").remove();
			$(".pay_way_2").css("background-color", "white");
			flag2 = false;
			$(".pay1").after('<div class="added1" style="float:right;margin-right:20px;">支付 <span style="color:red;">100.00</span> 元</div>');
			$(".pay_way_1").css("background-color", "rgb(248, 248, 248)");
			flag1 = true;
		}
	});

	$('#select2').change(function() {
		if (this.checked  && ! flag2) {
			$(".added1").remove();
			$(".pay_way_1").css("background-color", "white");
			flag1 = false;
			$(".pay2").after('<div class="added2" style="float:right;margin-right:20px;">支付 <span style="color:red;">100.00</span> 元</div>');
			$(".pay_way_2").css("background-color", "rgb(248, 248, 248)");
			flag2 = true;
		}
	});

	$("#add_web_bank").click(function() {
		if (!pushed) {
			$(".pay_way_2").css("height", "240px");
			$(".bank_list").show();
			pushed = true;
		} else {
			$(".pay_way_2").css("height", "40px");
			$(".bank_list").hide();
			pushed = false;
		}
	});
}
