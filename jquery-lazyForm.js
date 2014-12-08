/*
The MIT License (MIT)

Copyright (c) 2014 Joshua D. Burns

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

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

		// Iterate over `select` drop-downs w/ the `multiple` attribute.
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
		$.each($checkboxes, function(index, checkbox) {
			var $checkbox = $(checkbox);
			var input_name = $checkbox.attr('name');

			// Check if input's name ends in "[]". If it does, strip it.
			if(input_name.indexOf('[]', this.length - '[]'.length) !== -1) {
				input_name = input_name.slice(0, -2);
			}

			// Check if an array has been created for the checkbox values.
			if(values[input_name] === undefined) {
				values[input_name] = [];
			}

			var checkbox_value = $checkbox.val();

			// Push the checkbox's value onto the array.
			values[input_name].push(checkbox_value);
		});

		// Iterate over general form elements.
		$.each($inputs, function(index, input) {
			var $input = $(input);
			var input_name = $input.attr('name');
			var value = $input.val();
			// Check if the input_name we're now encountering has been encountered
			// from separate input. If it has, then we need to store an array of values rather
			// than a single value.
			if(values[input_name] === undefined) {
				// Newly encountered input name, add it to the object.
				values[input_name] = value;
			} else {
				// Determine if the value has already been transformed to an array.
				if(Object.prototype.toString.call(values[input_name]) !== '[object Array]') {
					// Not an array, transform to array.
					values[input_name] = [
						values[input_name]
					];
				}
				values[input_name].push(value);
			}
		});

		return values;
	};
	$.fn.lazyForm = function() {
		return $.lazyForm(this);
	};
}(jQuery));
