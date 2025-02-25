<?php


function attemptLogin(){

	//Database connection info
	$host = "192.168.28.72";
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
	$Email = $_POST["email2"];
	$Password = $_POST["password2"];
	
	$query = "SELECT pword FROM userinfo WHERE email = '".$Email."'";
	
	//Call query and exit if error
	if (!$result = mysqli_query($con, $query)) {
		exit(mysqli_error($con));
	}
	
	//Loop through data
	if (mysqli_num_rows($result) > 0) {
		
        $granted = FALSE;

		if($row['pword']==($Password)){
            $granted = TRUE;
        }
		}
	
	
	//Output
	echo $granted;
	
	//Kill connection as we're done with it
	$con->close();
	
}

attemptLogin();

?>



