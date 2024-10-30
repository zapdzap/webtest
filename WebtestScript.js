
const subheader = document.getElementById("pop-in-text2");
const blocker = document.getElementById("blocker");
const cardbox = document.getElementById("cardbox");
function loginpage(){
    window.location.href = 'LoginPage.html';
}

subheader.style.opacity = 1;

window.addEventListener('wheel', (event) => {
    deltaY = 0;
    deltaY += event.deltaY;

    if(event.deltaY>0){
        showCards();
    }
    else{
        hideCards();
    }

    
  });

  let cardsVisible = false;
  let selectedCard = 0;
  canScroll = false;

  function showCards() {
    if(cardsVisible==false){
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.bottom = '20px';
        }, index * 100);
        setTimeout(() =>{
            canScroll = true;
        }, 650)
    });
    cardsVisible = true;
    }
    else{
        const cards = document.querySelectorAll('.card');
        if(canScroll){
            blocker.style.opacity = 1;
            cards.forEach((card, index) => {
                //cards[index].style.position = 'relative'; 
                cards[index].style.top = '-20px';
            });
            //cards[selectedCard].style.position = 'absolute'; 
            cards[selectedCard].style.top = '-70px';
            //cards[selectedCard].style.animation="0.45s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite";


            
            if(selectedCard==cards.length-1){
                selectedCard = 0;
            }
            else{
            selectedCard++;
            }
        }
    }
}

function hideCards() {
    blocker.style.opacity = 0;
    selectedCard = 0;
    canScroll = false;

    console.log("hi");
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        cards[index].style.top = '';
    });

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.bottom = '-200px';
        }, index * 100);
    });
    cardsVisible = false;
}

const cards = document.querySelectorAll('.card');




        