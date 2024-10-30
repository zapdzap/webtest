
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
            card.style.bottom = '-100px';
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
                cards[index].style.bottom = '-100px';
            });
            cards[selectedCard].style.bottom = '-30px';


            
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




        