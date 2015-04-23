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


Donations
---------
LazyForm is free software, but donations help the developer spend more time maintaining this projects and others like it.
<br />
<a href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=S42X58PL8SR2Y"><img src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" /></a>
