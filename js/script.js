const inputField = document.getElementById('input-field');
const upcountriestat = document.getElementById('update-stat');
const loadData = () => {
    const inputField = document.getElementById('input-field');
    const inputFieldValue = inputField.value;
    inputField.value = '';
    const url = (`https://api.covid19api.com/total/country/${inputFieldValue}`)
    fetch(url)
        .then(res => res.json())
        .then(data => updateStatistic((data)))
}
const updateStatistic = (countries) => {
    const country = countries[countries.length - 1];
    const div = document.createElement('div');
    const errorDiv = document.getElementById("error")
    if (countries.message == "Not Found") {
        errorDiv.classList.remove('d-none')
    }
    else {
        errorDiv.innerHTML = '';
        div.innerHTML = `
    
    <div class="card text-center mx-auto  " style="width: 50rem;" >
             <div class="card-body">
                <h4 class=" p-3 mb-2 w-50 mx-auto">Country : <span class="text-danger">${country.Country}</span> </h4>
          
                <h4 class=" p-3 mb-2 w-50 mx-auto">Confirmed Cases : <span class="text-danger">${country.Confirmed}</span> </h4>
                <h4 class=" p-3 mb-2 w-50 mx-auto">Active Cases : <span class="text-danger">${country.Active}</span> </h4>
            
                <h4 class=" p-3 mb-2 w-50 mx-auto">Total Deaths : <span class="text-danger">${country.Deaths}</span> </h4>
                <h4 class=" p-3 mb-2 w-50 mx-auto">Last Update : <span class="text-danger">${country.Date.slice(0, 10)}</span> </h4>
            </div>
        </div> `
        upcountriestat.innerHTML = ''
        upcountriestat.appendChild(div);
    }
}