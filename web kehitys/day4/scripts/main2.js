const list = document.createElement('ul'); // Luodaan uusi elementti ul javakoodissa ja tallennetaan muuttujaan list.
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = 'Below is a dynamic list. Click anywhere on the page to add a new list item. Click an existing list item to change its text to something else.';

document.body.appendChild(info);  // Jokaisella dokumentilla on vain yksi body, body saa 2 uutta lasta --> info ja list
document.body.appendChild(list);

html.onclick = function() {       // HTML -elementille onclick -funktio  
  const listItem = document.createElement('li');
  const listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);

  listItem.onclick = function(e) {  // listItem -elementille myös onclick -eventti
    e.stopPropagation();
    const listContent = prompt('Enter new content for your list item', this.textContent); // Näytetään vanha arvo
    // this-avainsana, viitataan siihen elementtiin, jota klikattiin.
    // Eli se elementti, jonka onclick funktiota suoritetaan.
    this.textContent = listContent;
  }
}