function check_header_offset(){
	var image = jQuery("#wp-custom-header img");
    var viewportHeight = window.innerHeight;
    var imageParent = jQuery("#wp-custom-header img").parent().parent().height();
	var menuHeight = jQuery(".navigation-top").height();

	var wpAdminBar = jQuery('#wpadminbar');

	var primaryOffset;
    primaryOffset = (viewportHeight-imageParent);

	var finalOffset;
	var ffinalOffset;

    if (wpAdminBar.length) {
        finalOffset = (primaryOffset-wpAdminBar.height());
		ffinalOffset = finalOffset;
    }else{
		finalOffset = (primaryOffset);
		ffinalOffset = finalOffset;
	}

	if(finalOffset == '0'){
		ffinalOffset = (finalOffset+menuHeight);
		image.css("object-position","bottom");
	}

	image.css( "bottom", ffinalOffset );
	image.css( "top", "inherit" );
	//console.log(ffinalOffset);
}
jQuery( window ).ready(function() {
  	check_header_offset();
});
jQuery( window ).resize(function() {
  	check_header_offset();
});