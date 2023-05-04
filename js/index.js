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

// Adding the cards into parent div
for(let i = 0;i<shuffleChild.length;i++){
    const childDiv = document.createElement('div');
    childDiv.classList.add('card');
    childDiv.dataset.name = shuffleChild[i].name;
    childDiv.style.backgroundImage = `url(${shuffleChild[i].img})`;


    parentDiv.appendChild(childDiv);

}


