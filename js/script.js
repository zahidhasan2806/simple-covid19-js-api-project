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
        errorDiv.innerHTML = `<h4 class='bg-white d-inline-block p-1 rounded'>Please!Input valid country name</h4>`
    }
    else {
        errorDiv.innerHTML = '';
        div.innerHTML = `
    
    <div class="card text-center mx-auto " style="width: 35rem;" >
             <div class="card-body">
                <h5 class=" fw-bold my-3 w-50 mx-auto">Country : ${country.Country} </h5>
          
                <h5 class=" fw-bold my-3 w-50 mx-auto">Confirmed Cases : ${country.Confirmed} </h5>
                <h5 class=" fw-bold my-3 w-50 mx-auto">Active Cases : ${country.Active} </h5>
            
                <h5 class=" fw-bold my-3 w-50 mx-auto">Total Deaths : ${country.Deaths} </h5>
                <h5 class=" fw-bold my-3 w-50 mx-auto">Last Update : ${country.Date.slice(0, 10)} </h5>
            </div>
        </div> `
        upcountriestat.innerHTML = ''
        upcountriestat.appendChild(div);
    }
}