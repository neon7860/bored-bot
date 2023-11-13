const types = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const btnContainer = document.getElementById("btn-container")

for (let type of types){
  btnContainer.innerHTML += `<input id="${type}" type=button value="${type}">`
}

document.addEventListener("click", function(e){
  for (let type of types){
  if (e.target.id == type){
  fetch(`https://www.boredapi.com/api/activity?type=${e.target.id}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("activity").textContent = data.activity
      console.log(data)
    })
    }
  }
})

// document.getElementById("get-activity").addEventListener("click", function() {
//   fetch("https://www.boredapi.com/api/activity?type=recreational")
//     .then(response => response.json())
//     .then(data => {
//       document.getElementById("activity").textContent = data.activity
//       console.log(data)
//     })
// })