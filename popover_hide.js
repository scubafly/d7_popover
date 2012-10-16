(function ($) { 
  Drupal.behaviors.popover_hide = {
    attach: function (context, settings) {
	 
	 
	 $('#edit-first').hide();
	 $('#edit-second').hide();
	 $('#edit-third').hide();
	 $('#edit-fourth').hide();
	 $('#edit-fifth').hide();
	 $('#edit-sixth').hide();
	 $('#dialog-footer').hide();
	 $('#clickme').attr('href', $('.cheat').attr('href'));
	 // this is called when everything is oke
	 
	 // safari workaround below ????
	 // get url to open
	// /* var url = $('#clickme').attr('href'); */
	 // if url get was succesfull
	 // if (url) {
		 // // check if window was already opened
// 		 
		 // // if not opened open window
		 // var windowopen = window.open(url);
// 		 
		 // // if not able to open window because of the popup blocker warn user
		 // if(!windowopen) {
		 	// // alert here();
		 // } else {
		 	// // if it was opend append something to html for check
// 		 
		 	// // hide inschrijf link en log user in	
		 // }
// 		 
	 // } // else wait one sec ?
// 	 
	 // werkt niet, popup is blocked
	 // werkt dit ook op langzame / snelle computers? wat als de url nog niet geset is?
	 
	 // -------- \\
	 // open link in new window.
	 
	 // remove class from link
	 
	 // set focus on new window eventueel
	}
  };
})(jQuery);