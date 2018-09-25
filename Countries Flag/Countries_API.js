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


            let EachCountryDiv;
            function createInnerDiv(inner) {
                EachCountryDiv.appendChild(inner);
                inner.style.width = '15%';
                inner.className = 'child';
                inner.
              }

           
                EachCountryDiv = document.createElement('div');
                const name = document.createElement('div');
                createInnerDiv(name);
                name.textContent = worldCountries.name;
                
           
           /*     
                worldCountries.forEach(country => {
                const name = document.createElement('span');
                EachCountryDiv.appendChild('span');
                name.style.withe='20%';
                name.textContent = country.name;

             //       const name = document.createElement('div');    
                
            })
        
                    //  console.log(worldCountries);
           // console.log(worldCountries.name);
           
           /*
            let divKey ;
            let div;
            countries.forEach(country => {
                let divCountry = document.createElement('div');
                coulumns.forEach(e=>{
                    divkey = document.createElement('div');
                    div.textContent = country.name;
                    div.style.width = "70%";
                    document.body.appendChild(div)
                  //  document.querySelector('#wrapper').appendChild(div);
                });
          }) */  
           
        })
     /* 
        .then(countries => {
			let div;
            countries.forEach(country => {
					div = document.createElement('div');
					div.textContent = country.capital;
					
            })   
            
        })
*/
        
            
    
   
       