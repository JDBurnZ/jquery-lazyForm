(function($) {
	$.lazyForm = function(selector) {
		var $form = $(selector);

		// Grab all inputs, minus checkboxes or radio buttons which aren't checked.
		var $inputs = $form.find(':input[name]:not([type="radio"]:not(:checked)):not([type="checkbox"]:not(:checked))');

		// Segment `select` drop-downs w/ the `multiple` attribute for special processing.
		var $multi_selects = $inputs.filter('select[multiple]');
		$inputs = $inputs.not($multi_selects);

		// Segment `checkbox` inputs for special processing.
		var $checkboxes = $inputs.filter(':checkbox');
		$inputs = $inputs.not($checkboxes);

		// Define the object which will be returned by this function.
		var values = {};

		// Iterate over `select` drop-downs w/ the `multiple` attribute elements.
		$.each($multi_selects, function(index, input) {
			var $input = $(input);
			var input_name = $input.attr('name');
			var input_values = $input.val();
			if(input_values !== null) { // `null` is encountered when no options from the drop-down have been selected.
				$.each($input.val(), function(index, value) {
					values[input_name + '[' + index + ']'] = value;
				});
			}
		});

		// Iterate over `checkbox` input elements.
		$.each($checkboxes, function(index, input) {
			var $input = $(input);
			var input_name = $input.attr('name');
			// Grab all of the checkboxes with the name of the checkbox being
			// iterated over, and remove all of those checkboxes from the
			// $checkboxes` list because this single iteration takes care of all
			// checkboxes with the same name.
			var $name_checkboxes = $checkboxes.filter('[name="' + input_name + '"]:checkbox');
			$checkboxes = $inputs.not($name_checkboxes);
			$.each($name_checkboxes, function(index, checkbox) {
				values[input_name + '[' + index + ']'] = $(checkbox).val();
			});
		});

		// Iterate over general form elements.
		$.each($inputs, function(index, input) {
			var $input = $(input);
			var input_name = $input.attr('name');
			values[input_name] = $input.val();
		});

		return values;
	};
	$.fn.lazyForm = function() {
		return $.lazyForm(this);
	};
}(jQuery));
