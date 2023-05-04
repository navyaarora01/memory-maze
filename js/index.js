let cardArray = [
    {
        'name': 'CSS',
        'img': 'http://thapatechnical.online/logos/css.png',
    },
    {
        'name': 'HTML',
        'img': 'http://thapatechnical.online/logos/html5.png',
    },
    {
        'name': 'jQuery',
        'img': 'http://thapatechnical.online/logos/jquery.png',
    },
    {
        'name': 'JS',
        'img': 'http://thapatechnical.online/logos/js.png',
    },
    {
        'name': 'Node',
        'img': 'http://thapatechnical.online/logos/nodejs.png',
    },
    {
        'name': 'Python',
        'img': 'http://thapatechnical.online/logos/python.png',
    }
];
 // styling the match card
 const card_matches = () =>{
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem)=>{
        curElem.classList.add('card_match');
    })
 }

const parentDiv = document.querySelector('#card-section');
// Duplicate each card
const gameCard = cardArray.concat(cardArray);

//shuffle evry card with one another
const myNumbers = (array)=>{
    for(let i = array.length-1;i>0;i--){
        let j = Math.floor(Math.random() * (i+1));

        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

const shuffleChild = myNumbers(gameCard);


let clickCount = 0;
let firstCard = "";
let secondCard = "";
  
//reset game
const reset_game=()=>{
    clickCount = 0;
    firstCard ="";
    secondCard=""; 

    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem)=>{
        curElem.classList.remove('card_selected');
    })
    
}

// select the clicked card
parentDiv.addEventListener('click' , (event)=>{
    let curCard = event.target;
   
    if(curCard.id === 'card-section'){
        return false;
    }
     clickCount++;
    if(clickCount<3){
        if(clickCount === 1){
            firstCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        else{
            secondCard = curCard.parentNode.dataset.name;
            curCard.parentNode.classList.add('card_selected');
        }
        if(firstCard !=="" && secondCard!== ""){
            if(firstCard === secondCard){

                setTimeout(()=>{
                   card_matches();
                reset_game(); 
                },1000)
                
            }
            else{
                setTimeout(()=>{
                 reset_game(); 
                 },1000)
            }
        }
    }
    
    
})


// Adding the cards into parent div
for(let i = 0;i<shuffleChild.length;i++){

    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleChild[i].name;
    // childDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;
    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');

    back_div.style.backgroundImage = `url(${shuffleChild[i].img})`;

    parentDiv.appendChild(childDiv);

    childDiv.appendChild(front_div);
    childDiv.appendChild(back_div);

}


