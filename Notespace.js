const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const chevron = document.querySelector('.chevron');
const workspace = document.getElementById('workspace');
const currentSpace=document.getElementById('currentSpace');
const useritems =document.getElementById('useritems');
const searchInput = document.getElementById("searchForm");
const shortcutlister = document.getElementById("shortcuts");

var noteArr = new Array();
var shortcutArr = new Array();

toggleCount = 0;

useruid="5"; // USER ID!

$(document).ready(function() {
    fetchUserNotes();
    fetchloadUserShortcuts();
    loadUserInfo();
  });
	
	
function fetchUserNotes(){
	
	$.getJSON('WS_usr_notes.php?uid='+useruid+'&nocache=' + (new Date()).getTime(), function (data) {
        noteArr = data.notelist;
        console.log(noteArr);
		
	})
	.error(function(){
		//console.log('error: json not loaded');
		
	})
	.done(function() {
		renderUserInfo();

	});
}

function openUserNotes(){

    if(!(workspace.classList.contains('myNotes'))){
        while(workspace.firstChild){
            workspace.removeChild(workspace.firstChild);
        }
    }

    myNotes = document.createElement('div');
    myNotes.classList.add('myNotes'); 

    myNotesLister = document.createElement('div');
    myNotesLister.classList.add('myNotesLister'); 


    for(let i = 0; i<noteArr.length; i++){
        noteCard = document.createElement('div');
        noteCard.classList.add('noteCard'); 

        noteInfo = document.createElement('div');
        noteInfo.classList.add('noteInfo'); 

        noteName = document.createElement('p');
        noteName.classList.add('noteName'); 

        noteDate = document.createElement('p');
        noteDate.classList.add('noteDate'); 

        noteName.innerHTML = noteArr[i].name;
        noteDate.innerHTML = noteArr[i].date;

        noteCard.append(noteInfo)
        noteInfo.append(noteName);
        noteInfo.append(noteDate);

        myNotesLister.append(noteCard);
    }



   
    myNotes.append(myNotesLister);
    workspace.append(myNotes);

    currentSpace.innerHTML = "MY NOTES";
    
}


searchInput.addEventListener("input", () => {
  // Get the search term from the input field
  const searchTerm = searchInput.value;

  // Do something with the search term
  openUserNotes();
  currentSpace.innerHTML = 'Results for "'+searchTerm+'"';
  if(searchTerm.length==0){
  currentSpace.innerHTML = "MY NOTES";
  }
  if(searchTerm.length>=30){
    x = searchTerm.substring(0,30)
    currentSpace.innerHTML = 'Results for "'+x+'..."';
  }      
  // Perform search logic here, e.g., filter a list or send a request to a server

  if(!(workspace.classList.contains('myNotes'))){
    while(workspace.firstChild){
        workspace.removeChild(workspace.firstChild);
    }
}

myNotes = document.createElement('div');
myNotes.classList.add('myNotes'); 

myNotesLister = document.createElement('div');
myNotesLister.classList.add('myNotesLister'); 


for(let i = 0; i<noteArr.length; i++){
    if(findSubstring(noteArr[i].name.toLowerCase(),searchTerm.toLowerCase())){
        noteCard = document.createElement('div');
        noteCard.classList.add('noteCard'); 

        noteInfo = document.createElement('div');
        noteInfo.classList.add('noteInfo'); 

        noteName = document.createElement('p');
        noteName.classList.add('noteName'); 

        noteDate = document.createElement('p');
        noteDate.classList.add('noteDate'); 

        noteName.innerHTML = noteArr[i].name;
        noteDate.innerHTML = noteArr[i].date;

        noteCard.append(noteInfo)
        noteInfo.append(noteName);
        noteInfo.append(noteDate);

        myNotesLister.append(noteCard);
    }
}




myNotes.append(myNotesLister);
workspace.append(myNotes);

currentSpace.innerHTML = "MY NOTES";



});






















//---------------------------------------------------------------------------------------------------------------------------------------------


dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
            dropdownContent.classList.toggle('hide');
            chevron.classList.toggle('down');

            if(toggleCount==1){
                dropdownContent.style.height = "156px";
                useritems.style.height = "200px"
                toggleCount=0;
                dropdownButton.style.boxShadow =  "none";
            }
            else{
            dropdownContent.style.height = "0px";
            useritems.style.height = "40px"
            toggleCount=1;
            dropdownButton.style.boxShadow =  "0px 3px 0px 0px rgba(4, 8, 22, 0.253)";
            }
    });

dropdownContent.addEventListener('click', function(event) {
       event.stopPropagation();

    });

// ---------------------------------------------------------------------------------------------------------------------------------------------

	
var infoArr = new Array();
	
function loadUserInfo(){
	
	$.getJSON('WS_usr_info.php?uid='+useruid+'&nocache=' + (new Date()).getTime(), function (data) {
        console.log(data);
        infoArr = data.userlist;
		
	})
	.error(function(){
		//console.log('error: json not loaded');
		
	})
	.done(function() {
		renderUserInfo();

	});
}

function renderUserInfo(){
	username="";
    email="";
    pfpLink="";
	
	//for (i = 0; i < trickArr.length; i++) {
	//	trickTxt+=trickArr[i].trick+"<br>";
	//}


	username+=infoArr[0].uname;
    email+=infoArr[0].email;
    pfpLink+=infoArr[0].profile;

	document.getElementById("username").innerHTML = username;
    document.getElementById("pfp").style.backgroundImage = 'url("'+pfpLink+'")';
}
	
// ---------------------------------------------------------------------------------------------------------------------------------------------


function findSubstring(txt, pat) {
    const n = txt.length;
    const m = pat.length;

    // Iterate through txt
    for (let i = 0; i <= n - m; i++) {

        // Check for substring match
        let j;
        for (j = 0; j < m; j++) {

            // Mismatch found
            if (txt[i + j] !== pat[j]) {
                break;
            }
        }

        // If we completed the inner loop, we found a match
        if (j === m) {

            // Return starting index
            return true;
        }
    }

    // No match found
    return false;
}

//-----------------------------------------------------------------------------------

function fetchloadUserShortcuts(){

	$.getJSON('WS_usr_shortcuts.php?uid='+useruid+'&nocache=' + (new Date()).getTime(), function (data) {
        shortcutArr = data.shortcutlist;
        console.log(shortcutArr);	
	})
	.error(function(){
		//console.log('error: json not loaded');
		
	})
    .done(function() {
        console.log("hii")
        console.log(shortcutArr[0].shortcutname);
        console.log(shortcutArr[1].shortcutname);
        for(i = 0; i<shortcutArr.length;i++){
            shortcut = document.createElement('div');
            shortcut.classList.add('usrShortcut');
            icon = document.createElement("i");
            icon.classList.add("fa-location-dot");
            shortcut.append(icon);
            shortcut.innerHTML = shortcutArr[i].shortcutname;
    
            shortcutlister.append(shortcut);
    
        }

	});
}