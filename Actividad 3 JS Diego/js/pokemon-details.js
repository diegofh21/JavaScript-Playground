function pokemonDetails() {
  const url_string = window.location.href;
  const url = new URL(url_string);
  const pokemon = url.searchParams.get("pokemon");
  // console.log("Pokémon ==> ", pokemon)

  axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then(function (response) {
      const pokemon = response.data;
      console.log(pokemon)

      const arr = pokemon.name.split(" ");
      for (var j = 0; j < arr.length; j++) {
        arr[j] = arr[j].charAt(0).toUpperCase() + arr[j].slice(1);
      }

      const pokeName = arr.join(" ");

      document.querySelector("#pokemon-name").innerHTML = "N° " + pokemon.id + " - " + pokeName
      document.querySelector("#pokemon-img").src = pokemon.sprites.other["official-artwork"].front_default;

      // Male sprites
      document.querySelector("#front_male").src = pokemon.sprites.front_default;
      document.querySelector("#back_male").src = pokemon.sprites.back_default;

      // Female sprites
      if ((pokemon.sprites.front_female && pokemon.sprites.back_female) == null) {
        document.querySelector("#front_female").src = pokemon.sprites.front_default;
        document.querySelector("#back_female").src = pokemon.sprites.back_default;
      }
      else {
        document.querySelector("#front_female").src = pokemon.sprites.front_female;
        document.querySelector("#back_female").src = pokemon.sprites.back_female;
      }

      // Shiny Male sprites
      document.querySelector("#front_shiny").src = pokemon.sprites.front_shiny;
      document.querySelector("#back_shiny").src = pokemon.sprites.back_shiny;

      // Shiny Female sprites
      if ((pokemon.sprites.front_shiny_female && pokemon.sprites.back_shiny_female) == null) {
        document.querySelector("#front_shiny_female").src = pokemon.sprites.front_shiny;
        document.querySelector("#back_shiny_female").src = pokemon.sprites.back_shiny;
      }
      else {
        document.querySelector("#front_shiny_female").src = pokemon.sprites.front_shiny_female;
        document.querySelector("#back_shiny_female").src = pokemon.sprites.back_shiny_female;
      }

      // Barra de HP
      document.querySelector("#hp_bar").innerHTML = `<div class="progress mt-1">
      <div class="progress-bar bg-success" role="progressbar" style="width: ${pokemon.stats[0].base_stat}%;" aria-valuenow="${pokemon.stats[0].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[0].base_stat}</div>
        </div>`
      // Barra de ataque
      document.querySelector("#atk_bar").innerHTML = `<div class="progress mt-1">
        <div class="progress-bar bg-danger" role="progressbar" style="width: ${pokemon.stats[1].base_stat}%;" aria-valuenow="${pokemon.stats[1].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[1].base_stat}</div>
          </div>`
      // Barra de defensa
      document.querySelector("#def_bar").innerHTML = `<div class="progress mt-1">
      <div class="progress-bar bg-primary" role="progressbar" style="width: ${pokemon.stats[2].base_stat}%;" aria-valuenow="${pokemon.stats[2].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[2].base_stat}</div>
        </div>`
      // Barra de ataque especial
      document.querySelector("#atksp_bar").innerHTML = `<div class="progress mt-1">
      <div class="progress-bar bg-warning" role="progressbar" style="width: ${pokemon.stats[3].base_stat}%;" aria-valuenow="${pokemon.stats[3].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[3].base_stat}</div>
        </div>`
      // Barra de defensa especial
      document.querySelector("#defsp_bar").innerHTML = `<div class="progress mt-1">
      <div class="progress-bar bg-fire" role="progressbar" style="width: ${pokemon.stats[4].base_stat}%;" aria-valuenow="${pokemon.stats[4].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[4].base_stat}</div>
        </div>`
      // Barra de velocidad
      document.querySelector("#spd_bar").innerHTML = `<div class="progress mt-1">
      <div class="progress-bar bg-info" role="progressbar" style="width: ${pokemon.stats[5].base_stat}%;" aria-valuenow="${pokemon.stats[5].base_stat}" aria-valuemin="0" aria-valuemax="200">${pokemon.stats[5].base_stat}</div>
        </div>`

      document.querySelector("#pokeWeight").innerHTML = pokemon.weight / 10 + " Kg";
      document.querySelector("#pokeHeight").innerHTML = pokemon.height / 10 + " M";

      var pokeCategory = "";
      var pokeSkill = "";

      axios.get(`https://pokeapi.co/api/v2/ability/${pokemon.abilities[0].ability.name}`).then((response) => {
        const pokeAbility = response.data.names[5].name
        pokeCategory = pokeAbility;
        document.querySelector("#pokeCategory").innerHTML = pokeCategory;
      });

      axios.get(`https://pokeapi.co/api/v2/ability/${pokemon.abilities[1].ability.name}`).then((response) => {
        const pokeAbility2 = response.data.names[5].name
        pokeSkill = pokeAbility2;
        document.querySelector("#pokeSkill").innerHTML = pokeSkill;
      });

      // document.querySelector("#pokeSkill").innerHTML = pokeSkill;

      // If para los tipos de pokemon: Normal, Fire, Water, Grass, Flying, Fighting, Poison, Electric, Ground, Rock, Psychic, Ice, Bug, Ghost, Steel, Dragon, Dark and Fairy
      if (pokemon.types.length > 1) {
        // Primer tipo
        switch (pokemon.types[0].type.name) {
          case 'normal':
            typeOutput1 = `<p><span class="bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Normal</span>`
            break;

          case 'fire':
            typeOutput1 = `<p><span class="bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fuego</span>`
            break;

          case 'water':
            typeOutput1 = `<p><span class="bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Agua</span>`
            break;

          case 'grass':
            typeOutput1 = `<p><span class="bg-grass text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hierba</span>`
            break;

          case 'flying':
            typeOutput1 = `<p><span class="bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Volador</span>`
            break;

          case 'poison':
            typeOutput1 = `<p><span class="bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Veneno</span>`
            break;

          case 'electric':
            typeOutput1 = `<p><span class="bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Electrico</span>`
            break;

          case 'ground':
            typeOutput1 = `<p><span class="bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Tierra</span>`
            break;

          case 'rock':
            typeOutput1 = `<p><span class="bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Roca</span>`
            break;

          case 'psychic':
            typeOutput1 = `<p><span class="bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Psiquico</span>`
            break;

          case 'ice':
            typeOutput1 = `<p><span class="bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Heilo</span>`
            break;

          case 'bug':
            typeOutput1 = `<p><span class="bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Bicho</span>`
            break;

          case 'ghost':
            typeOutput1 = `<p><span class="bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fantasma</span>`
            break;

          case 'steel':
            typeOutput1 = `<p><span class="bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Acero</span>`
            break;

          case 'dragon':
            typeOutput1 = `<p><span class="bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dragon</span>`
            break;

          case 'dark':
            typeOutput1 = `<p><span class="bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dark</span>`
            break;

          case 'fairy':
            typeOutput1 = `<p><span class="bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hada</span>`
            break;

          case 'fighting':
            typeOutput1 = `<p><span class="bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Lucha</span>`
            break;
        }

        // Segundo tipo
        switch (pokemon.types[1].type.name) {
          case 'normal':
            typeOutput2 = `<span class="bg-normal text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Normal</span></p>
            </div>`
            break;

          case 'fire':
            typeOutput2 = `<span class="bg-fire text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Fuego</span></p>
            </div>`
            break;

          case 'water':
            typeOutput2 = `<span class="bg-water text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Agua</span></p>
            </div>`
            break;

          case 'grass':
            typeOutput2 = `<span class="bg-grass text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Hierba</span></p>
            </div>`
            break;

          case 'flying':
            typeOutput2 = `<span class="bg-flying text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Volador</span></p>
            </div>`
            break;

          case 'poison':
            typeOutput2 = `<span class="bg-poison text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Veneno</span></p>
            </div>`
            break;

          case 'electric':
            typeOutput2 = `<span class="bg-electric text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Electrico</span></p>
            </div>`
            break;

          case 'ground':
            typeOutput2 = `<span class="bg-ground text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Tierra</span></p>
            </div>`
            break;

          case 'rock':
            typeOutput2 = `<span class="bg-rock text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Roca</span></p>
            </div>`
            break;

          case 'psychic':
            typeOutput2 = `<span class="bg-psychic text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Psiquico</span></p>
            </div>`
            break;

          case 'ice':
            typeOutput2 = `<span class="bg-ice text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Heilo</span></p>
            </div>`
            break;

          case 'bug':
            typeOutput2 = `<span class="bg-bug text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Bicho</span></p>
            </div>`
            break;

          case 'ghost':
            typeOutput2 = `<span class="bg-ghost text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Fantasma</span></p>
            </div>`
            break;

          case 'steel':
            typeOutput2 = `<span class="bg-steel text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Acero</span></p>
            </div>`
            break;

          case 'dragon':
            typeOutput2 = `<span class="bg-dragon text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Dragon</span></p>
            </div>`
            break;

          case 'dark':
            typeOutput2 = `<span class="bg-dark text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Dark</span></p>
            </div>`
            break;

          case 'fairy':
            typeOutput2 = `<span class="bg-fairy text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Hada</span></p>
            </div>`
            break;

          case 'fighting':
            typeOutput2 = `<span class="bg-fighting text-light rounded-3 ms-2 pt-1 pb-1 ps-5 pe-5">Lucha</span></p>
            </div>`
            break;
        }

        var typeOutput3 = typeOutput1 + typeOutput2;
        document.getElementById("pokeType").innerHTML = typeOutput3;
      }
      else {
        // Primer tipo
        switch (pokemon.types[0].type.name) {
          case 'normal':
            typeOutput1 = `<p><span class="bg-normal text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Normal</span></p>
            </div>`
            break;

          case 'fire':
            typeOutput1 = `<p><span class="bg-fire text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fuego</span></p>
            </div>`
            break;

          case 'water':
            typeOutput1 = `<p><span class="bg-water text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Agua</span></p>
            </div>`
            break;

          case 'grass':
            typeOutput1 = `<p><span class="bg-grass text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hierba</span></p>
            </div>`
            break;

          case 'flying':
            typeOutput1 = `<p><span class="bg-flying text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Volador</span></p>
            </div>`
            break;

          case 'poison':
            typeOutput1 = `<p><span class="bg-poison text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Veneno</span></p>
            </div>`
            break;

          case 'electric':
            typeOutput1 = `<p><span class="bg-electric text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Electrico</span></p>
            </div>`
            break;

          case 'ground':
            typeOutput1 = `<p><span class="bg-ground text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Tierra</span></p>
            </div>`
            break;

          case 'rock':
            typeOutput1 = `<p><span class="bg-rock text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Roca</span></p>
            </div>`
            break;

          case 'psychic':
            typeOutput1 = `<p><span class="bg-psychic text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Psiquico</span></p>
            </div>`
            break;

          case 'ice':
            typeOutput1 = `<p><span class="bg-ice text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Heilo</span></p>
            </div>`
            break;

          case 'bug':
            typeOutput1 = `<p><span class="bg-bug text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Bicho</span></p>
            </div>`
            break;

          case 'ghost':
            typeOutput1 = `<p><span class="bg-ghost text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Fantasma</span></p>
            </div>`
            break;

          case 'steel':
            typeOutput1 = `<p><span class="bg-steel text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Acero</span></p>
            </div>`
            break;

          case 'dragon':
            typeOutput1 = `<p><span class="bg-dragon text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dragon</span></p>
            </div>`
            break;

          case 'dark':
            typeOutput1 = `<p><span class="bg-dark text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Dark</span></p>
            </div>`
            break;

          case 'fairy':
            typeOutput1 = `<p><span class="bg-fairy text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Hada</span></p>
            </div>`
            break;

          case 'fighting':
            typeOutput1 = `<p><span class="bg-fighting text-light rounded-3 pt-1 pb-1 ps-5 pe-5">Lucha</span></p>
            </div>`
            break;
        }

        var typeOutput3 = typeOutput1
        document.getElementById("pokeType").innerHTML = typeOutput3;
      }

      // Movimientos
      for (let k = 0; k < pokemon.moves.length; k++) {
        const move = pokemon.moves[k].move.name;
        axios.get(`https://pokeapi.co/api/v2/move/${move}`).then((response) => {
          const movimiento = response.data;
          // console.log(movimiento)
          console.log(movimiento.names[5].name, " poder: ", movimiento.power, " usos: ", movimiento.pp)

          document.querySelector('#movesInfo').innerHTML += `<tr>
            <td>${movimiento.names[5].name}</td>
            <td>${(movimiento.power == null) ? 'Buff / Debuff' : movimiento.power}</td>
            <td>${movimiento.pp}</td>
          </tr>`;
        })
      }

      setLoader(false);
    })
    .catch(function (error) {
      console.log(error);
    });

  axios.get(`https://pokeapi.co/api/v2/gender/?name=${pokemon}`).then((response) => {

    const data = response.data;

    if (data.results.length > 2) {
      genderOutput = `Masculino, Femenino o Sin Genéro`;
      document.querySelector("#pokeGender").innerHTML = genderOutput;
    }
    else {
      genderOutput = `Masculino o Femenino`;
      document.querySelector("#pokeGender").innerHTML = genderOutput;
    }
  }).catch((error) => {
    console.log(error)
  })
}

function setLoader(state) {
  if (state == true) {
    document.getElementById("loader").style.display = "block";
    document.getElementById("wrapper").style.display = "none";
  }
  else {
    document.getElementById("loader").style.display = "none";
    document.getElementById("wrapper").style.display = "block";
  }
}