
////SWAPI EXAMPLE////
// async function getData(){
//   const response = await axios.get('https://swapi.dev/api/planets/');
//   const {next, results} = response.data;
//   for (let planet of response.data.results){
//     console.log(planet.name)
//   }
//   const response2 = await axios.get(next);
//   console.log(response2.data.results);
//   for (let planet2 of response2.data.results){
//     console.log(planet2.name)
//   }
// }
// getData();

//////SPACEX LAUNCHES///////
// async function getLaunches() {
//   const res = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
//   renderLaunches(res.data);
  
// }

// function renderLaunches(launches){
//   const ul = document.querySelector("#launches");
//   for(let launch of launches){
    
//     ul.append(makeLaunchLi(launch));
//   }
// }

// function makeLaunchLi(launch){
//   const newLi = document.createElement('li');
//   const mission = document.createElement('B');
//   mission.innerText = launch.mission_name;
//   newLi.append(mission);
//   newLi.innerHTML += ` -${launch.rocket.rocket_name}`
//   return newLi;
// }

// const btn = document.querySelector('#getLaunches');
// btn.addEventListener('click', getLaunches);

////ERROR HANDLING EXAMPLE WITH RANDOM DOG API////
async function getRandomDog() {
  const res = await axios.get('https://dog.ceo/api/breeds/image/random');
  console.log(res.data);
  const img = document.querySelector("#dog");
  img.src = res.data.message;
}

async function getDogByBreed(breed){
  try{
    //const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
  }catch(e){
    console.log(e)
    alert("BREED NOT FOUND"); 
    getRandomDog();   
  }
}

const form = document.querySelector('#searchForm');
const input = document.querySelector('#search');
form.addEventListener("submit", function(e){
  e.preventDefault();
  getDogByBreed(input.value);
  input.value = '';
})

