
const btnSend = document.getElementById('btnSend');
//const greeting = document.getElementById('greeting');

const name = document.getElementById('name');    
const surname = document.getElementById('surname');
const countriesList = document.getElementById('countriesList');
const birthday = document.getElementById('birthday');
const greeting = document.querySelector('#greeting');
const pGreeting = document.getElementById('textGreeting');

    //Current day
    
    let d = new Date();
    let day = d.getDate();

    //Current month + name
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const m = new Date();


    //Get age not only for year but also considering month and day
    function getAge(dateString) {
        const today = new Date();
        let birthDate = new Date(dateString);
        let age = today.getFullYear() - birthDate.getFullYear();
        let month = today.getMonth() - birthDate.getMonth();
        
        if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return {age};
    }

btnSend.addEventListener('click', function(e){
    e.preventDefault();

    //Text
    pGreeting.innerHTML = (`Hello ${name.value} ${surname.value}
    from ${countriesList.value} on ${day} of ${monthNames[m.getMonth()]} you will have  ${getAge(birthday.value).age} years`);




    //Table
    const tableDisplay = document.querySelector('.table-display');


    const newTr = document.createElement('tr');
    const newTdName = document.createElement('td');
    const newTdCountry = document.createElement('td');
    const newTdBirthday = document.createElement('td');
    const tdContentName = document.createTextNode(`${name.value} ${surname.value}`);
    const tdContentCountry = document.createTextNode(`${countriesList.value}`);
    const tdContentBirthday = document.createTextNode(`${birthday.value}`);

    newTdName.appendChild(tdContentName);
    newTdCountry.appendChild(tdContentCountry);
    newTdBirthday.appendChild(tdContentBirthday);
    
    tableDisplay.appendChild(newTr);
    newTr.appendChild(newTdName);
    newTr.appendChild(newTdCountry);
    newTr.appendChild(newTdBirthday);
});



//fetch 
function fetchData() {
    fetch('http://api.countrylayer.com/v2/all?access_key=7b192f56c8e925e094ed5d4576df4e79')
    .then(response => {
        if (!response.ok){
            throw Error("Error");
        }
        return response.json();
    }).then((data) => {
        const countries = document.getElementById('countries');
        data.map(
          (country) =>
            (countries.innerHTML += `<option value="${country.name}"></option>`)
        );
      })
      .catch(error =>{
        console.log(error)
    })
}

fetchData();
//Fetch 

//'http://api.countrylayer.com/v2/all?access_key=7b192f56c8e925e094ed5d4576df4e79'


/*
countriesName = fetch(
    'http://api.countrylayer.com/v2/all?access_key=7b192f56c8e925e094ed5d4576df4e79',
    {
      method: 'GET',
    }
  )
    .then((response) => response.json())
    .then((data) => console.log(data));

    const updateDOM = () => {
        countriesList.innerHTML += 
            `
            <label for="countries">Countries:</label>
                        <input list="countries" placeholder="countries" id="countriesList" name="countries" >
                        <datalist id="countries">
                            <option value="${data.name}">
                        </datalist>`
        
    }
*/