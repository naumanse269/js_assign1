/*
***
The countries API we used during
thelecture:https://restcountries.eu/rest/v2/all
***
*/
/*
const countryName = document.querySelector('#country-name');
const capitalCity = document.querySelector('#capital-city');
const contryContinent = document.querySelector('#country-language');
const countryPopulation = document.querySelector('#country-population');
const countryFlag = document.querySelector('#country-flag');
*/
let worldCountries =[];
let coulumns = ['name','capital','region']
const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(response => response.json())
       .then(countries => {
            worldCountries = countries;
            let divKey ;
            countries.forEach(country => {
                let divCountry = document.createElement('div');
                coulumns.forEach(e=>{
                    divkey = document.createElement('div');
                    div.textContent = country.name;
                    div.style.width = "70%";
                    document.querySelector('#wrapper').appendChild(div);
                });
                   
                    
                  
            })   
            
            
        })
     /* 
        .then(countries => {
			let div;
            countries.forEach(country => {
					div = document.createElement('div');
					div.textContent = country.capital;
					document.body.appendChild(div)
            })   
            
        })
*/
        
            
    
   
       