<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Country Search</title>

    <style>
        header{
            text-align: center;
        }
        #ContentOFCountries {
            text-align: center;    
        }
        #ContentOFCountries>div{
          /*  background:gray;*/
            border: 1px solid goldenrod;
            margin: 0 auto;
            width: 50%;
            padding: 25px;
        }
        

    </style>
</head>
<body>
    <header>
            <h1>World Countries List</h1>
           
            <p id="totalCountries">Total Number Of Countries </p>            
            <input id="startWord" type="radio" name="wordPositon" value="startWord" checked=true> Start Word
            <input id="anyWord" type="radio" name="wordPositon" value="anyWord"> Search Any Word<br><br/>
            <input type="text" placeholder="Search with ..." id="searchString">
    </header>
    
    <div id="ContentOFCountries"></div>
    



    <script>
    
        const countries= ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
        ,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","British Virgin Islands"
        ,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
        ,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
        ,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
        ,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
        ,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
        ,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
        ,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
        ,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
        ,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre and Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
        ,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts and Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
        ,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad and Tobago","Tunisia"
        ,"Turkey","Turkmenistan","Turks and Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay"
        ,"Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// Function the Generate the Random colours for each div
        function randomColorGenrator(){
            let randomNum = Math.floor(Math.random()* 10000000);
            return (`#${randomNum.toString(16)}`);    
        }
// display Dom with the list of all countries
     function displayResult(countryList){            
            let countryContainer = 	document.querySelector('#ContentOFCountries');
            let	numOfResults = document.createElement('p');
            numOfResults.textContent = `Countries that start with: ${countryList.length}`;	
            countryContainer.appendChild(numOfResults);
           let eachCountryDiv;
           countryList.forEach(element => {
                eachCountryDiv = document.createElement('div');
                eachCountryDiv.textContent = element;
                countryContainer.appendChild(eachCountryDiv);
                eachCountryDiv.style.background = randomColorGenrator();
            });				
        }

    //    displayResult(countries);
     

        function searchData(){ // it handles the whole process of searching
            let startwith = document.querySelector('#startWord').checked;
            let Anyword = document.querySelector('#anyWord').checked;
        //    let result = [];
            if(startwith){
                let keyWord = 'Pak';
                   let result.filter(e => e.toLowerCase().startsWith(keyWord));	
                   document.querySelector('#container').innerHTML = '';	
                   displayResult(result);     
                } else {
                
            }		
            
        }

        document.querySelector('#searchString').addEventListener('input', searchData());
       
        
     let keyWord = document.querySelector('#searchInput').value.toLowerCase(); 
            console.log(resultStartWith);
            console.log('Number of countries starting with : ' +resultStartWith.length );
  
   // Find the sub string in the main countries array 
       let result = countries.filter((country,index) =>{
            let regexx= 'b';
           if( country.toLowerCase().includes(regexx.toLowerCase())) 
                return true ;
        })
            console.log(result);
            console.log('Number of countries including search string : '+ result.length)
 
 */
        </script>





</body>
</html>