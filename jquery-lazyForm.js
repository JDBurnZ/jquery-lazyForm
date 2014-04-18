
(function($) {
	$.lazyForm = function(selector) {
		var $form = $(selector);

		// Grab all inputs, minus checkboxes or radio buttons which aren't checked.
		var $inputs = $form.find(':input:not([type="checkbox"]:not(:checked)):not([type="checkbox"]:not(:checked))');

		var values = {};
		$.each($inputs, function(index, input) {
			var $input = $(input);
			var input_name = $input.attr('name');
			if(input_name === undefined) {
				// Skip inputs with no name.
				return;
			}
			var input_value = $input.val();
			// Support for `select` objects w/ multiple options.
			if($input.is('select[multiple]')) {
				$.each(input_value, function(index, value) {
					values[input_name + '[' + index + ']'] = value;
				});
			} else {
				values[input_name] = input_value;
			}
		});
		return values;
	};
	$.fn.lazyForm = function() {
		return $.lazyForm(this);
	};
}(jQuery));
