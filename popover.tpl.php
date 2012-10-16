<?php
	if($user->uid == 0) {
		drupal_add_js(drupal_get_path('module','popover') . '/popover.js', 'file');
	} 
	
	drupal_add_js(drupal_get_path('module','popover') . '/popover_titleclick.js', 'file');
	drupal_add_library('system', 'ui.dialog');
	drupal_add_library('system', 'ui.tabs');
	drupal_add_css(drupal_get_path('module','popover') . '/popover.css', 'file');
	//print $var;
	 
?>
<div id="dialog" title="Maak een Job Agent aan!" style="display:none">
	<div id="tabs">
		<ul>
			<li><a href="#tabs-1">Job Agent</a></li>
			<li><a href="#tabs-2">Inloggen</a></li>
		</ul>
		<div id="tabs-1">
			<div>
			<?php print drupal_render(drupal_get_form('popover_job_agent_form')); ?>
			</div>
			<div id="dialog-footer">
				<a class="linkcolor cheat" href="#" target="_blank" title="bekijk de vacature"><small>..of bekijk de vacature zonder in te schrijven</small></a>
			</div>
		</div>
		<div id="tabs-2">
			<?php print drupal_render(drupal_get_form('popover_ajax_user_login_form')); ?>
		</div>
	</div>
</div>