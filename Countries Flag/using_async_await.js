const url = 'https://restcountries.eu/rest/v2/all';
const cnt = async (u) => ( await (await fetch(u)).json())
cnt(url).then( (json) =>(
  json.map( country => {
    const div = document.createElement('div');
    div.textContent = country.name;
    document.body.appendChild(div) ;
  }))).catch(err => console.error(err))




  function table(dataSet,columns){  // array
    return `<table> <thead> ${headers(columns)}</thead> <tbody>${rows(dataSet,columns)}</tbody> </table>`; 
  }
  
  function headers(columns){
    let header = '';
    for(let column of columns) {
      header += `<th>${column} <button onclick=sort("${column}",'A')> Ascendig</button><button onclick=sort("${column}",'D')>Descending</button></th>`;
    }
    return `<tr">${header}</tr>`;  
  }
  
  function rows(dataSet,columns){
    let tableRows = '';
    for(let elt of dataSet){
      tableRows += `<tr>${cells(elt,columns)}</tr>`; 
    }  
    return tableRows;
  }
  
  function cells(element,columns){ 
    let rowCells = '';
    for(column of columns){
      rowCells +=  `<td>${element[column]}</td>`; 
    }  
    return rowCells;
  }
