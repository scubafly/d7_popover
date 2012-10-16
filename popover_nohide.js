(function ($) {
  Drupal.behaviors.popover_nohide = {
    attach: function (context, settings) {    	
	 	$('#clickme2').attr('href', $('.cheat').attr('href'));
	}
  };
})(jQuery);