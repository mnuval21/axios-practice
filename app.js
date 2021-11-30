
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
// async function getRandomDog() {
//   const res = await axios.get('https://dog.ceo/api/breeds/image/random');
//   console.log(res.data);
//   const img = document.querySelector("#dog");
//   img.src = res.data.message;
// }

// async function getDogByBreed(breed){
//   try{
//     //const url = `https://dog.ceo/api/breed/${breed}/images/random`;
//     const res = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
//     const img = document.querySelector("#dog");
//     img.src = res.data.message;
//   }catch(e){
//     console.log(e)
//     alert("BREED NOT FOUND"); 
//     getRandomDog();   
//   }
// }

// const form = document.querySelector('#searchForm');
// const input = document.querySelector('#search');
// form.addEventListener("submit", function(e){
//   e.preventDefault();
//   getDogByBreed(input.value);
//   input.value = '';
// })

//////AXIOS POST/////
// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users');
//   console.log(res);
// }

// async function createUser(){
//   const res = await axios.post('https://reqres.in/api/users', { username: "Butters", email:"butters@gmail.com", age:1 });
//   console.log(res);
// }
// createUser();

///////HACK OR SNOOZE API ////////
async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users', { params: { token } });
  console.log(res);
}

async function signUp(name, username, password){
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
  console.log(res);
}
//signUp('Bob', 'Blobfish', 'password' );

async function login(username, password){
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } })
  console.log(res);
  return res.data.token    
}

//login('Blobfish', 'password')

async function getUsersWithAuth(){
  const token = await login('Blobfish', 'password');
  getUsers(token);
}

// I don't think the story is actually being created.
async function createStory() {
  const token = await login ('Blobfish', 'password');
  const newStory = {
    token,
    story: {
      author: 'Blobfish',
      title: 'A Sailor Went To The Sea',
      url: 'https://www.blobfisharebeautiful.com'
    }
  }
}
