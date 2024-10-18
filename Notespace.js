const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const chevron = document.querySelector('.chevron');
const workspace = document.getElementById('workspace');
const currentSpace=document.getElementById('currentSpace');
const useritems =document.getElementById('useritems');

toggleCount = 0;

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

        noteInfo = document.createElement('div');
        noteInfo.classList.add('noteInfo'); 

        noteName = document.createElement('p');
        noteName.classList.add('noteName'); 

        noteDate = document.createElement('p');
        noteDate.classList.add('noteDate'); 

        noteName.innerHTML = "My First Note"
        noteDate.innerHTML = "Oct 14"

        noteCard.append(noteInfo)
        noteInfo.append(noteName);
        noteInfo.append(noteDate);

        myNotesLister.append(noteCard);
    }

    myNotes.append(myNotesLister);
    workspace.append(myNotes);

    currentSpace.innerHTML = "MY NOTES";
    
}






















//---------------------------------------------------------------------------------------------------------------------------------------------


dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
            dropdownContent.classList.toggle('hide');
            chevron.classList.toggle('down');

            if(toggleCount==1){
                dropdownContent.style.height = "156px";
                useritems.style.height = "200px"
                toggleCount=0;
            }
            else{
            dropdownContent.style.height = "0px";
            useritems.style.height = "40px"
            toggleCount=1;
            }
    });

dropdownContent.addEventListener('click', function(event) {
       event.stopPropagation();

    });

// ---------------------------------------------------------------------------------------------------------------------------------------------