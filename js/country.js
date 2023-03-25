const loadcountry = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displaycountrys(data));
}

const displaycountrys = countrys => {
    for (const country of countrys){
        const div = document.getElementById('div');
        const newdiv = document.createElement('div');
        newdiv.classList.add('div');
        div.appendChild(newdiv);
        newdiv.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="countryname('${country.name.common}')">Detail</button>
        `
        // const h2 = document.createElement('h2');
        // h2.innerText = country.name.common;
        // newdiv.appendChild(h2);
        // const p = document.createElement('p');
        // p.innerText = country.capital;
        // newdiv.appendChild(p);
        // const btn = document.createElement('button');
        // newdiv.appendChild(btn); 

    }
}

 const countryname = name => {
     const url = `https://restcountries.com/v3.1/name/${name}`

     fetch(url)
     .then(res => res.json())
     .then (data => countrydetails(data[0]));
 }

 const countrydetails = country => {
    const details = document.getElementById('details');
    details.innerHTML = `
    <h4>${country.name.common}</h4>
    <p>population ${country.population}</p>
    <img src="${country.flags.png}">
    `
 } 