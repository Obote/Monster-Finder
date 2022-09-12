import {monsters} from './monsters';



showMonters();
function showMonters(){
    
const monster = document.createElement('div');
monster.className = 'monster';

const img = document.createElement('img');
img.src = 'https://robohash.org/6?set=set2';
img.alt = 'Denis Obote';

const mname = document.createElement('p');
mname.className = 'name';
mname.innerText = "Denis Obote";

const email = document.createElement('p');
email.className = 'email';
email.innerText = 'obotedenis256@gmail.com';

monster.append(img, mname, email); 

document.querySelector('.monsters').append(monster);

}

noFound();
function noFound(){

const notFoundDiv = document.createElement('div');
notFoundDiv.className = 'p-5 not-found';
notFoundDiv.style.display = 'none';

const span = document.createElement('span');
span.innerText = '404';

const h1 = document.createElement('h1');
h1.innerText = '🧟‍♂️ No Monster Found 🧟‍♂️';

notFoundDiv.append(span, h1);

document.querySelector('.monsters').append(notFoundDiv);

}
