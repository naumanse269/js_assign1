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

const url = 'https://restcountries.eu/rest/v2/all';
let worldCountries =[];
let coulumns = ['name','capital','region']

let countries = [];
let main = document.querySelector('main');

fetch(url)
  .then(response => response.json())
  .then(countriz => {
    let div;
    for (let i = 0; i < countriz.length; i++) {
      countries[i] = countriz[i]
    }
    console.log(countries.name);
    
    createCountryDiv()
  })




function createCountryDiv() {
  let colorDiv;

  function createInnerDiv(inner) {
    colorDiv.appendChild(inner);
    inner.style.width = '20%';
    inner.className = 'child';
  }
  countries.forEach(country => {
    console.log(Object.keys(country));
    console.log(country.languages);
    colorDiv = document.createElement('div');
    const countryName = document.createElement('div');
    const name = document.createElement('span');
    createInnerDiv(name);
    const capital = document.createElement('span');
    createInnerDiv(capital);
    const area = document.createElement('span');
    createInnerDiv(area);
    const region = document.createElement('span');
    createInnerDiv(region);
    const language = document.createElement('span');
    createInnerDiv(language);
    const flag = new Image(50, 60);
    createInnerDiv(flag);
    main.appendChild(colorDiv);
    colorDiv.className = 'country';
    countryName.className = 'country-name';
    name.textContent = country.name;
    capital.textContent = country.capital;
    area.textContent = country.area;
    region.textContent = country.region;
    const languages = country.languages.map(lang => lang.name);
    language.textContent = languages.join(',\n');
    
     

    flag.src = country.flag;
    flag.className = 'flag'

    // flag.style.backgroundImage = src

  })
}

                
           
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
           
             /* 
        .then(countries => {
			let div;
            countries.forEach(country => {
					div = document.createElement('div');
					div.textContent = country.capital;
					
            })   
            
        })
*/
        
            
    
   
       