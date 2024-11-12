<?php


/*
SQL I used to create the database table on the host console

CREATE TABLE demitridata(
   id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
   note varchar(255),
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

	$profile_viewer_uid = $_GET["uid"];
	$table1 = "tags"; // eventually grab id and add "user" to front;

	$query = "SELECT * FROM $table1 WHERE id = '".$profile_viewer_uid."'";
	
	//Call query and exit if error
	if (!$result = mysqli_query($con, $query)) {
		exit(mysqli_error($con));
	}
	
	//Loop through data
	if (mysqli_num_rows($result) > 0) {
		
		$noteList="";
		
		
		while ($row = mysqli_fetch_assoc($result)) {
			$noteList .= '{"id":"'.$row['id'].'",';
			$noteList .= '"tagname":"'.$row['tagname'].'"},';
		}
	}

	//Remove last comma for legit JSON
	$noteListEdit = substr_replace($noteList, '', -1);
	
	$jsonSend = '{"taglist":['.$noteListEdit.']}';
	
	
	//Output
	echo $jsonSend;
	
	//Kill connection as we're done with it
	$con->close();
	
}

loadData();

?>


