<?php

	class controller_contact {

		function send_email() {
			$check = mail::send_email($_POST);
			echo json_encode($check);
		
		}
	}
?>
