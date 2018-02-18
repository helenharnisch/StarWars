const personajes = document.getElementById('personajes');
const info = document.getElementById('info');
let buscar;
let number;

personajes.addEventListener('click', function(event) {
  let evento = event.target;
  console.log(evento);
  const nombre = evento.getAttribute('id');
  const number = nombre.substring(4);
  buscar = number;
  addChar();
});

function addChar() {
  let modal = document.getElementById('modal');
  fetch(`https://swapi.co/api/people/${buscar}/`)
    .then(function(response) {
      return response.json();
    })

    .then(function(data) {
      console.log(data);
      let html = `  <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-header text-center">
                          <h2 class="modal-title" id="exampleModalLabel">${data.name}</h2>
                          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body text-center">
                          <div>
                            <p>Gender: ${data.gender}</p>
                            <p>Height: ${data.height}</p>
                            <p>Eye color: ${data.eye_color}</p>
                            <p>Hair color: ${data.hair_color}</p>
                          </div>
                        </div>
                      </div>
                    </div>`;
      info.innerHTML = html;
    });
};
