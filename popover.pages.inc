<?php
/**
 * Load request password usin ajax
 */
 // function popover_password_form($type = 'ajax') {
 // 	$form = drupal_get_form('popover_user_pass');
 // 	$output = render($form);

 // 	if ( $type == 'ajax') {
 // 		$commands = array();
 // 		$commands[] = ajax_command_replace('#popover-login-form', $output);
 // 		$page = array('#type' => 'ajax', '#commands' => $commands);
 // 		$commands = ajax_prepare_response($page);
 // 		print ajax_render($commands);
 // 	}
 // 	else {
 // 		return $output;
 // 	}
 // }



// /**
//  * Request user password form
//  */
// function popover_user_pass($form, &$form_state){ 
// 	module_load_include('pages.inc', 'user');
// 	global $user;

// 	$form['#id'] = 'popover-user-pass';

// 	$form['#attributes']['class'] = array('popover-user-form');

// 	$form['erros'] = array('#markup' => '<div id="popover-error"></div>');

// 	$form['name'] = array(
// 		'#type' => 'textfield',
// 		'#title' => t('Username or e-mail address'),
// 		'#size' => 60,
// 		'#maxlength' => max(USERNAME_MAX_LENGTH, EMAIL_MAX_LENGTH),
// 		'#required' => TRUE,
// 	);

// 	// Allow logged in users to request this also.
// 	if ($user->uid > 0) {
// 		$form['name']['#type'] = 'value';
// 		$form['name']['#value'] = $user->mail;
// 		$form['mail'] = array(
// 		  '#prefix' => '<p>',
// 		  '#markup' =>  
// 		  	t('Password reset instructions will be mailed to %email. You must log out to use the password reset link in the e-mail.',
// 		  		array('%email' => $user->mail)
// 		  	),
// 	  		'#suffix' => '</p>',
// 		);
// 	}

// 	$form['#validate'][] = 'user_pass_validate';
// 	$form['#submit'][] = 'user_pass_submit';

// 	$form['actions'] = array(
// 		'#type' => 'actions',
// 		'submit' => array(
// 			'#type' => 'submit',
// 			'#value' => t('E-mail new password'),
// 			'#ajax' => array(
// 				'path' => 'popover/request_password',
// 			)
// 		),
// 	);

// 	return $form;
//  }

// /**
//  * Process user login form using ajax
//  */
// function popover_login_ajax_callback() {
// 	module_load_include('pages.inc', 'user');

// 	list($form, $form_state) = ajax_get_form();
// 	drupal_process_form($form['#form_id'], $form, $form_state);
// 	$commands = array();
// 	if(!form_get_errors()){
// 		// $commands[] = ajax_command_html('#popover-error', $form['#form_id']);
// 		$commands[] = ajax_command_html('#popover-error', t('Login successfull. Your are now being redirected.'));
// 		$settings_data = array('popover_reload' => TRUE);
// 		array_unshift($commands, ajax_command_settings($settings_data, FALSE));
// 	}
// 	else {
// 		$commands[] = ajax_command_html('#popover-error', theme('status_messages'));
// 	}

// 	return drupal_json_encode($commands);
// }

// /** 
//  * Request password ajax call
//  */
// function popover_request_password_ajax_callback() {
// 	module_load_include('pages.inc', 'user');

// 	list($form, $form_state) = ajax_get_form();
// 	drupal_process_form($form['#form_id'], $form, $form_state);
// 	$commands = array();
// 	if(!form_get_errors()) {
// 		// no errors
// 		$commands = ajax_command_html('#popover-user-pass', theme('status_messages'));
// 	}
// 	else {
// 		$commands = ajax_command_html('#popover-error', theme('status_messages'));
// 	}
// 	return drupal_json_encode($commands);
// }