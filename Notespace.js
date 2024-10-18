const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const chevron = document.querySelector('.chevron');
const workspace = document.getElementById('workspace');



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

    // Eventually add server component for adding each note but for now im doing this
    for(let i = 0; i<30; i++){
        noteCard = document.createElement('div');
        noteCard.classList.add('noteCard'); 

        noteName = document.createElement('p');
        noteName.classList.add('noteName'); 

        noteDate = document.createElement('p');
        noteDate.classList.add('noteDate'); 

        noteCard.append(noteName);
        noteCard.append(noteDate);

        myNotesLister.append(noteCard);
    }

    myNotes.append(myNotesLister);
    workspace.append(myNotes);


    
}






















//---------------------------------------------------------------------------------------------------------------------------------------------


dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
            dropdownContent.classList.toggle('hide');
            chevron.classList.toggle('down');
    });

dropdownContent.addEventListener('click', function(event) {
       event.stopPropagation();
    });

// ---------------------------------------------------------------------------------------------------------------------------------------------