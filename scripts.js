const infoForm = document.getElementById('infoForm');
const ufSelect = document.getElementById('uf');
const citySelect = document.getElementById('cidade');

fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(response => response.json())
    .then(states => {
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state.sigla;
            option.textContent = state.sigla;
            ufSelect.appendChild(option);
        });
    });

ufSelect.addEventListener('change', () => {
    citySelect.innerHTML = '';
    const option = document.createElement('option');
    option.value = '';
    option.textContent = 'Selecione...';
    citySelect.appendChild(option);

    if (ufSelect.value) {
        fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufSelect.value}/municipios`)
            .then(response => response.json())
            .then(cities => {
                cities.forEach(city => {
                    const option = document.createElement('option');
                    option.value = city.nome;
                    option.textContent = city.nome;
                    citySelect.appendChild(option);
                });
            });
    }
});

infoForm.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(infoForm);
    const personalInformation = Object.fromEntries(formData.entries());

    console.log(personalInformation);

    
  async function fetchIBGEData() {
 
}

function handleFormSubmit(event) {
 event.preventDefault();

}

function saveRecord() {

}

function deleteRecord() {
  
}

document.getElementById('myForm').addEventListener('submit', handleFormSubmit);
});