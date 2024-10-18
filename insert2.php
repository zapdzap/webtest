<?php


function insertData(){

	//Database connection info
	$host = "192.168.10.103";
	$user =  "fw2037505441";
	$password ="AHkXB0ddnRs3uWO6Yz1aybN3zuoAFl";
	$database = "db7710030035";

	// Connect to MySQL Database
	$con = new mysqli($host, $user, $password, $database);

	// Check connection
	if ($con->connect_error) {
		die("Connection failed: " . $con->connect_error);
	}

	//Receive the form data and assign to variables
	$newUsername = $_POST["username"];
	$newEmail = $_POST["email"];
	$newPassword = $_POST["password"];
	
	// Create sql statement
	$sqlp1 = "INSERT INTO userinfo (uname, pword, email) VALUES ('" . $newUsername . "','". $newPassword ."','". $newEmail ."')";
	

	if ($con->query($sqlp1) === TRUE) {
    	echo "New record created successfully ";
		$last_id = $con->insert_id;
		echo $last_id;
	} else {
		//echo "Error: ";
		echo "Error: " . $sqlp1 . "<br>" . $con->error;
	}

	//Kill connection as we're done with it
	$con->close();
}

insertData();

?>





