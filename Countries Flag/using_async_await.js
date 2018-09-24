const url = 'https://restcountries.eu/rest/v2/all';
const cnt = async (u) => ( await (await fetch(u)).json())
cnt(url).then( (json) =>(
  json.map( country => {
    const div = document.createElement('div');
    div.textContent = country.name;
    document.body.appendChild(div) ;
  }))).catch(err => console.error(err))
