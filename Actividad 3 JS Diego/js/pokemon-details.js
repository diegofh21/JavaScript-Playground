function pokemonDetails()
{
    const url_string = window.location.href;
    const url = new URL(url_string);
    const pokemon = url.searchParams.get("pokemon");
    console.log("Pokémon ==> ", pokemon)

    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function (response) {
      const data = response.data;
      console.log(data)
    
    // document.querySelector("#flag").src= data.flags.png;
    // document.querySelector("#name").innerHTML= data.name;
    // document.querySelector("#capital").innerHTML= checkCapital(data.capital)
    // document.querySelector("#phone").innerHTML= `+${data.callingCodes[0]}`;
    // document.querySelector("#domain").innerHTML= data.topLevelDomain[0];
    // document.querySelector("#area").innerHTML= data.area;
    // document.querySelector("#population").innerHTML= data.population;
    
    // const lang = response.data.languages;

    // var outputLang = '';
    // for(var l of lang) {
    //   outputLang += `
    //   <li> ${l.name} </li>
    //   `;
    // }
    // document.querySelector("#lang").innerHTML= outputLang;

    // const borders = response.data.borders;
    // var outputBorders = '';
    
    // if(borders == undefined) {
    //   outputBorders += `
    //     <li> Sin fronteras </li>
    //   `;
    // }
    // else {
    //   for(var b of borders) {
    //     outputBorders += `
    //     <li> ${b} </li>
    //     `;
    //   }
    // }
    // document.querySelector("#borders").innerHTML = outputBorders;

    // const lat = data.latlng[0];
    // const lng = data.latlng[1];

    // initMap(lat, lng);

    // setLoader(false);
  })
  .catch(function (error) {
    console.log(error);
  });
}