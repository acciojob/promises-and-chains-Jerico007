//your JS code here. If required.
let element = document.getElementById("form");

let obj = {};
element.addEventListener("submit", (event) => {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  let prom = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age > 18) {
        resolve(name);
      } else {
        reject(name);
      }
    }, 4000);
  });

  prom.then((data)=>{
    alert(`Welcome, ${data}. You can vote.`);
  })

  prom.catch((data)=>{
    alert(`Oh sorry ${data}. You aren't old enough.`);
  })
});
