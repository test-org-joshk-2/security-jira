jQuery.fn.copyText = function(options) {
	// BAD may evaluate `options.sourceSelector` as HTMLasdasd
	var source = jQuery(options.sourceSelector),
	    text = source.text();
	jQuery(this).text(text);
}
