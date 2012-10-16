(function ($) { 
	Drupal.behaviors.popover_titleclick = {
		attach: function (context, settings) {
			$('.view-vacatures h1.article-title > a').click( function(event) {
				event.preventDefault();
				$(this).css('text-decoration', 'none');
			});
    	}
  	};
})(jQuery);