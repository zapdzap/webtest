
const EmptyWorkspace = document.getElementById("emptyWorkspace");
const SplineView1 = document.getElementById("spacer1");

const dropdownButton = document.getElementById('dropdownButton');
const dropdownContent = document.getElementById('dropdownContent');
const chevron = document.querySelector('.chevron');

dropdownButton.addEventListener('click', function(event) {
    event.stopPropagation();
            dropdownContent.classList.toggle('hide');
            chevron.classList.toggle('down');
    });

dropdownContent.addEventListener('click', function(event) {
       event.stopPropagation();
    });
    

function EmptyCreateNote(){
    EmptyWorkspace.style.visibility = "hidden";
    SplineView1.style.height = "0px";
}

function ViewEmptyWorkspace(){
    EmptyWorkspace.style.visibility = "visible";
    SplineView1.style.height = "360px";
}
