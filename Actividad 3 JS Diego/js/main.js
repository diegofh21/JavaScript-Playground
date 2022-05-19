function datos() {
  for (let i = 1; i < 13; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {
        console.log(response.data);

        const pokemon = response.data;
        // console.log(pokemon.name)
        const arr = pokemon.name.split(" ");
        for (var j = 0; j < arr.length; j++) {
          arr[j] = arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
        }
        const pokeName = arr.join(" ");
        var output = '';
        var output2 = '';

        output += `
          <div class="col-sm-3">
            <a href="./pokemon.html?pokemon=${pokemon.name}" class="pokemon">
              <img src="${pokemon.sprites.front_default}" alt="" class="bg-pokemon img-fluid w-50 rounded-3">
            </a>
            <h6 class="mt-1">N° ${i}</h6>
            <h4 class="mb-3">${pokeName}</h4>
            
          `;

        if(pokemon.types.length > 1)
        {
          console.log(pokemon.types[0].type.name)
          console.log(pokemon.types[1].type.name)
          // console.log('2 tipos', pokemon.name)
        }
        else
        {
          console.log(pokemon.types[0].type.name)
        }
        // console.log('1 tipo', pokemon.name)

        output2 += `<p><span class="bg-grass text-dark rounded-3 pt-1 pb-1 ps-3 pe-3">Planta</span> <span
          class="bg-poison text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Venenooutput2</span></p>
          </div>`;

        var output3 = output + output2
        document.getElementById("pokeData").innerHTML += output3;
        // document.getElementById("pokeData").innerHTML += output2;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
}