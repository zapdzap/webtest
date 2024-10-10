const sidebar1 = document.getElementById("sidebar");

const innerbar = document.getElementById("accfile");

function addFileToBar(){

    const listItem1 = document.createElement('div');
    listItem1.className = 'listItem';

    const docName1 = document.createElement('div');
    docName1.className = 'docName';
    docName1.textContent = 'Untitled';

    const dwnbtn = document.createElement('div');
    dwnbtn.className = 'downloadbtn';

    const xbtn = document.createElement('i');
    xbtn.className = 'fa-regular fa-circle-xmark';

    listItem1.append(docName1);
    dwnbtn.append(xbtn);
    listItem1.append(dwnbtn);

    innerbar.append(listItem1);

}

