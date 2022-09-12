import {monsters} from './monsters.js';

for (let monsterdiv of monsters){
    showMonters(monsterdiv);

}

function showMonters(monsterdiv){
    
const monster = document.createElement('div');
monster.className = 'monster';

const img = document.createElement('img');
img.src = `https://robohash.org/${monsterdiv.id}?set=set2`;
img.alt = monsterdiv.name;

const mname = document.createElement('p');
mname.className = 'name';
mname.innerText = monsterdiv.name;

const email = document.createElement('p');
email.className = 'email';
email.innerText = monsterdiv.email;

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


document.querySelector('#search-monster-form').addEventListener('keyup', 
function(e){
    const keyword = e.target.value.toLowerCase();
    
    const findmonter = document.querySelectorAll('.monster');
    for (let monster of findmonter){
        
        const name = monster.children[1].innerText.toLowerCase();
        const email = monster.children[2].innerText.toLowerCase();
        console.log(name, email);

        if (name.includes(keyword) || email.includes(keyword) ){
            monster.style.display = 'block';
        }else{
            monster.style.display = 'none';
        }
    }
})