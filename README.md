jquery-lazyForm
===============
 
The easiest jQuery form data extraction plug-in you'll ever find.

Features
----------------------------------------
* Lighning fast, utilizing jQuery's own `:input` selector.
* Supports every HTML5 form element including `<input>`, `<select>`, `<textarea>`, and `<button>`.
* Un-checked `radio` and `checkbox` inputs are automatically omitted.
* Supports automatic conversion of `name="fieldname[]"` to arrays

How To Use
----------

<pre>
// Grab the form we want to pull input values from.
var $myForm = $('form');

// Grab the input values using lazyForm.
var data = $.lazyForm($myForm);

// Alternate method of retrieving values:
var data = $myForm.lazyForm();
</pre>

That's it, you now have all the form data you need!
