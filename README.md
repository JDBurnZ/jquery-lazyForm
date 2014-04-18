jquery-lazyForm
===============

A very simply jQuery plugin for retrieving all input names and values from a form.

Features
--------
* Incredibly fast andeasy to use.
* Supports all form inputs, using the `:input` selector.
* Supports `select` elements with `multiple` options selected.
* Ignores unchecked `radio` and `checkbox` inputs.

Examples
--------

More examples are available within the `examples` directory.


<pre>
// Grab the form we want to pull input values from.
var $myForm = $('form');

// Grab the input values using lazyForm.
var data = $.lazyForm($myForm);
</pre>

That's it! You can then take the data returned and directly pass it to an `$.ajax()` request under the `data` key.
