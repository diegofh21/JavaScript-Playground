let pokeID = 1
let maxPokeID = 13

var pokeData = document.getElementById('bodyData');

pokeData.addEventListener("scroll", loadOnScroll);

function setLoader(state) {
  if(state == true) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("wrapper").style.display = "none";
  }
  else {
    document.getElementById("loader").style.display = "none";
    document.getElementById("wrapper").style.display = "block";
  }
}

function scanPokemon() {
  for (let i = pokeID; i < maxPokeID; i++) {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then(function (response) {

        const pokemon = response.data;
        
        const arr = pokemon.name.split(" ");
        for (var j = 0; j < arr.length; j++) {
          arr[j] = arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
        }

        const pokeName = arr.join(" ");

        var output = '';
        var output2 = '';
        var typeOutput1, typeOutput2;

        output += `
          <div class="col-sm-3">
            <a href="./pokemon.html?pokemon=${pokemon.name}" class="pokemon">
              <img src="${pokemon.sprites.front_default}" alt="" class="bg-pokemon img-fluid w-50 rounded-3">
            </a>
            <h6 class="mt-1">N° ${i}</h6>
            <h4 class="mb-3">${pokeName}</h4>`;

        // If para los tipos de pokemon: Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy
        if(pokemon.types.length > 1)
        {
          switch(pokemon.types[0].type.name)
          {
            case 'normal':
              typeOutput1 = `<p><span class="bg-normal text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Normal</span>`
            break;

            case 'fire':
              typeOutput1 = `<p><span class="bg-fire text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Fuego</span>`
            break;

            case 'water':
              typeOutput1 = `<p><span class="bg-water text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Agua</span>`
            break;

            case 'grass':
              typeOutput1 = `<p><span class="bg-grass text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Hierba</span>`
            break;

            case 'flying':
              typeOutput1 = `<p><span class="bg-flying text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Volador</span>`
            break;

            case 'poison':
              typeOutput1 = `<p><span class="bg-poison text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Veneno</span>`
            break;

            case 'electric':
              typeOutput1 = `<p><span class="bg-electric text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Electrico</span>`
            break;

            case 'ground':
              typeOutput1 = `<p><span class="bg-ground text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Tierra</span>`
            break;

            case 'rock':
              typeOutput1 = `<p><span class="bg-rock text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Roca</span>`
            break;

            case 'psychic':
              typeOutput1 = `<p><span class="bg-psychic text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Psiquico</span>`
            break;

            case 'ice':
              typeOutput1 = `<p><span class="bg-ice text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Heilo</span>`
            break;

            case 'bug':
              typeOutput1 = `<p><span class="bg-bug text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Bicho</span>`
            break;

            case 'ghost':
              typeOutput1 = `<p><span class="bg-ghost text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Fantasma</span>`
            break;

            case 'steel':
              typeOutput1 = `<p><span class="bg-steel text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Acero</span>`
            break;

            case 'dragon':
              typeOutput1 = `<p><span class="bg-dragon text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Dragon</span>`
            break;

            case 'dark':
              typeOutput1 = `<p><span class="bg-dark text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Dark</span>`
            break;

            case 'fairy':
              typeOutput1 = `<p><span class="bg-fairy text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Hada</span>`
            break;

            case 'fighting':
              typeOutput1 = `<p><span class="bg-fighting text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Lucha</span>`
            break;
          }

          // Segundo tipo
          switch(pokemon.types[1].type.name)
          {
            case 'normal':
              typeOutput2 = `<span class="bg-normal text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Normal</span></p>
              </div>`
            break;

            case 'fire':
              typeOutput2 = `<span class="bg-fire text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Fuego</span></p>
              </div>`
            break;

            case 'water':
              typeOutput2 = `<span class="bg-water text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Agua</span></p>
              </div>`
            break;

            case 'grass':
              typeOutput2 = `<span class="bg-grass text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Hierba</span></p>
              </div>`
            break;

            case 'flying':
              typeOutput2 = `<span class="bg-flying text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Volador</span></p>
              </div>`
            break;

            case 'poison':
              typeOutput2 = `<span class="bg-poison text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Veneno</span></p>
              </div>`
            break;

            case 'electric':
              typeOutput2 = `<span class="bg-electric text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Electrico</span></p>
              </div>`
            break;

            case 'ground':
              typeOutput2 = `<span class="bg-ground text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Tierra</span></p>
              </div>`
            break;

            case 'rock':
              typeOutput2 = `<span class="bg-rock text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Roca</span></p>
              </div>`
            break;

            case 'psychic':
              typeOutput2 = `<span class="bg-psychic text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Psiquico</span></p>
              </div>`
            break;

            case 'ice':
              typeOutput2 = `<span class="bg-ice text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Heilo</span></p>
              </div>`
            break;

            case 'bug':
              typeOutput2 = `<span class="bg-bug text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Bicho</span></p>
              </div>`
            break;

            case 'ghost':
              typeOutput2 = `<span class="bg-ghost text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Fantasma</span></p>
              </div>`
            break;

            case 'steel':
              typeOutput2 = `<span class="bg-steel text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Acero</span></p>
              </div>`
            break;

            case 'dragon':
              typeOutput2 = `<span class="bg-dragon text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Dragon</span></p>
              </div>`
            break;

            case 'dark':
              typeOutput2 = `<span class="bg-dark text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Dark</span></p>
              </div>`
            break;

            case 'fairy':
              typeOutput2 = `<span class="bg-fairy text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Hada</span></p>
              </div>`
            break;

            case 'fighting':
              typeOutput2 = `<span class="bg-fighting text-light rounded-3 ms-2 pt-1 pb-1 ps-3 pe-3">Lucha</span></p>
              </div>`
            break;
          }

          var output2 = output + typeOutput1 + typeOutput2;
          document.getElementById("pokeData").innerHTML += output2;
        }
        else
        {
          switch(pokemon.types[0].type.name)
          {
            case 'normal':
              typeOutput1 = `<p><span class="bg-normal text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Normal</span></p>
              </div>`
            break;

            case 'fire':
              typeOutput1 = `<p><span class="bg-fire text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Fuego</span></p>
              </div>`
            break;

            case 'water':
              typeOutput1 = `<p><span class="bg-water text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Agua</span></p>
              </div>`
            break;

            case 'grass':
              typeOutput1 = `<p><span class="bg-grass text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Hierba</span></p>
              </div>`
            break;

            case 'flying':
              typeOutput1 = `<p><span class="bg-flying text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Volador</span></p>
              </div>`
            break;

            case 'poison':
              typeOutput1 = `<p><span class="bg-poison text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Veneno</span></p>
              </div>`
            break;

            case 'electric':
              typeOutput1 = `<p><span class="bg-electric text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Electrico</span></p>
              </div>`
            break;

            case 'ground':
              typeOutput1 = `<p><span class="bg-ground text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Tierra</span></p>
              </div>`
            break;

            case 'rock':
              typeOutput1 = `<p><span class="bg-rock text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Roca</span></p>
              </div>`
            break;

            case 'psychic':
              typeOutput1 = `<p><span class="bg-psychic text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Psiquico</span></p>
              </div>`
            break;

            case 'ice':
              typeOutput1 = `<p><span class="bg-ice text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Heilo</span></p>
              </div>`
            break;

            case 'bug':
              typeOutput1 = `<p><span class="bg-bug text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Bicho</span></p>
              </div>`
            break;

            case 'ghost':
              typeOutput1 = `<p><span class="bg-ghost text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Fantasma</span></p>
              </div>`
            break;

            case 'steel':
              typeOutput1 = `<p><span class="bg-steel text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Acero</span></p>
              </div>`
            break;

            case 'dragon':
              typeOutput1 = `<p><span class="bg-dragon text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Dragon</span></p>
              </div>`
            break;

            case 'dark':
              typeOutput1 = `<p><span class="bg-dark text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Dark</span></p>
              </div>`
            break;

            case 'fairy':
              typeOutput1 = `<p><span class="bg-fairy text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Hada</span></p>
              </div>`
            break;

            case 'fighting':
              typeOutput1 = `<p><span class="bg-fighting text-light rounded-3 pt-1 pb-1 ps-3 pe-3">Lucha</span></p>
              </div>`
            break;
          }

          var output2 = output + typeOutput1
          document.getElementById("pokeData").innerHTML += output2;
        }
        setLoader(false);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

      pokeID = maxPokeID;
  }

  maxPokeID += 13

  // console.log(pokeID)
  // console.log(maxPokeID)
}