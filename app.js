const char = document.getElementById('charContainer');
const responseContainer = document.getElementById('charInfo');
let searchedChar;
let number;

char.addEventListener('click', function(event) {
  let evento = event.target;
  /* console.log(evento);*/
  const aidi = evento.getAttribute('id');
  const number = aidi.substring(4);
  /* console.log(number);*/

  /* responseContainer.innerHTML = ''; */
  searchedChar = number;
  addChar();
});

function addChar() {
  let modals = document.getElementById('modal');
  fetch('https://swapi.co/api/people/' + searchedChar + '/')
  .then(function(response) {
    //Turns the the JSON into a JS object
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    //Let's make some HTML!
    let html = `<div class="modal-dialog modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title text-center" id="myModalLabel">${data.name}</h4>
      </div>
      <div class="modal-body">
        <div id="charInfo">
          <p>Birth year: ${data.birth_year}</p>
          <p>Gender: ${data.gender}</p>
          <p>Height: ${data.height}</p>
          <p>Eye color: ${data.eye_color}</p>
          <p>Hair color: ${data.hair_color}</p>
        </div>
      </div>
    </iv>
  </div>`;
  //Put that HTML on the page
  modals.innerHTML = html;
  });
}
