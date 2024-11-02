<?php


/*
SQL I used to create the database table on the host console

CREATE TABLE demitridata(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   trick varchar(255),
   level varchar(255)
);



 ______         _____  _____ ______         _____  
|___  /   /\   |  __ \|  __ \___  /   /\   |  __ \ 
   / /   /  \  | |__) | |  | | / /   /  \  | |__) |
  / /   / /\ \ |  ___/| |  | |/ /   / /\ \ |  ___/ 
 / /__ / ____ \| |    | |__| / /__ / ____ \| |     
/_____/_/    \_\_|    |_____/_____/_/    \_\_|     

*/

function loadData(){
	
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

	//Define query

	//$query = "SELECT * FROM demitridata";

	$Email = "demitrilucienclark@gmail.com";

	$query = "SELECT * FROM userinfo WHERE email = '".$Email."'";




	//Call query and exit if error





	if (!$result = mysqli_query($con, $query)) {
		exit(mysqli_error($con));
	}
	
	//Loop through data
	if (mysqli_num_rows($result) > 0) {
		
		$userList="";
		
		
		while ($row = mysqli_fetch_assoc($result)) {
			$userList .= '{"uname":"'.$row['uname'].'",';
			$userList .= '"pword":"'.$row['pword'].'",';
			$userList .= '"profile":"'.$row['profile'].'",';
			$userList .= '"email":"'.$row['email'].'"},';
		}
	}

	//Remove last comma for legit JSON
	$userListEdit = substr_replace($userList, '', -1);
	
	$jsonSend = '{"userlist":['.$userListEdit.']}';
	
	
	//Output
	echo $jsonSend;
	
	//Kill connection as we're done with it
	$con->close();
	
}

loadData();

?>





