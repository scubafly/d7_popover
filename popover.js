(function ($) {
  Drupal.behaviors.popover = {
    attach: function (context, settings) {
    	var mydialog = $('#dialog');
    	 $('#clickme').click(function() {
	  		location.reload();
		});
    	// if(settings.popover_reload) {
    	// 	// somehow called 2 times
    	// 	window.location.reload();
    	// }

    	$('.bronlink').click( function(event) {
    		var linky = $(this).attr("href");
    		event.preventDefault();
    		mydialog.dialog({
	    		width: 881,
	    		modal: true,
	    		resizable: false,
	    		closeOnEscape: true,
	    		hide: {effect: "explode", duration: 500},
	    		open: function() {

	    			//$(".ui-dialog-titlebar-close").hide(); // hide close button in the top right corner
	    			mydialog.parent().css({position:"fixed"}).end().dialog('open');
	    			$('#dialog-footer').click( function() {
	    				mydialog.dialog('close').effect('clip');
	    			});
	    			$('div.ui-widget-overlay').click(function(){
	    				mydialog.dialog('close').effect('transfer');
	    			});
	    			$("#tabs").tabs();
	    			// hide cv form by default
	    			$('fieldset#edit-fifth, fieldset#edit-sixth').hide(0);
	    			if ($("input[name$='fourth[subscribe_jobagent_cv]']:checked").val() == 1) {
	    				// if checked value is cv show cv form and hide default submit button.
       					$('fieldset#edit-fifth, fieldset#edit-sixth').show(0);
	    				$('input#edit-fourth-submit').hide(0);
        			}

	    			$("input[name$='fourth[subscribe_jobagent_cv]']").change(function(){
	    				// some logic here to check radio button value
	    				if($(this).val() == 1) {
	    					// if cv checked show cv upload forms
	    					$('fieldset#edit-fifth, fieldset#edit-sixth').show(500);
	    					$('input#edit-fourth-submit').hide(500);
	    				} else {
	    					// if job agent checked hide cv upload forms
	    					$('fieldset#edit-fifth, fieldset#edit-sixth').hide(500);
	    					$('input#edit-fourth-submit').show(500);
	    				}
	    			});
	    			// set color of labels
	    			var linkcolor = $('a.linkcolor').css('color');
	    			$('div.fieldset-wrapper > div.form-item > label').css('color', linkcolor);
	    			$('.givemelinkcolor').css('color', linkcolor);
	    			$('.cheat').attr("href",linky);
	    			$('#clickme').attr("href",linky);
	    		} 
	    	});
    		mydialog.show(500);
    	});
    	
    	// function to add class to clicked element
    	
    	// function windowopener(){
    	   // windy = window.open("http://google.com");
           // windy.focus();
    	// }
    }
  };
})(jQuery);