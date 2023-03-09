let userNames = ["Charz", "Sniper", "John", "Joel"];

let users = [
  {
    firstName: "Charz",
    lastName: "Lwebz",
    profilePic:
      "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=600",
    age: 20,
  },
  {
    firstName: "Sniper",
    lastName: "Kabz",
    profilePic:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
    age: 28,
  },
  {
    firstName: "John",
    lastName: "Smith",
    profilePic:
      "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=252&fit=crop&h=408",
    age: 24,
  },
];
userNames.map(function (name) {
  // Add the names inside ul li to the DOM
  document.querySelector("ul").innerHTML += `<li>${name}</li>`;
});
users.map(function (user) {
  document.getElementById("users").innerHTML += `
  <div id="user">
    <div>
      <img height="100" width="100" src="${
        user.profilePic
      }" alt="profile picture" />
    </div>
    <div id="user-info">
      <h3>${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}</h3>
      <p>${user.age}</p>
      
      <button>Follow</button>
      <button>Message</button>
      <button></button>
      
    </div>
    
  </div>`;
})
let names = ["Sniper: How are you Charz?", "Charz: I am good Sir", "Sniper: Hope all is well?", " Charz: Yeah"];
names.map(function (name) {
  // Add the names inside ul li to the DOM
  document.querySelector("ol").innerHTML += `<li>${name}</li>`;
});
