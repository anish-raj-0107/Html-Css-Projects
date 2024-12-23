var input = document.querySelector("input");

var data = [
    {name: "Anish", src: "https://plus.unsplash.com/premium_photo-1682096252599-e8536cd97d2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"},
    {name: "Nikku", src: "https://images.unsplash.com/photo-1519744434498-a0de604df9db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXRzfGVufDB8fDB8fHww"},
    {name: "Wishu", src: "https://images.unsplash.com/photo-1535579710123-3c0f261c474e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXRzfGVufDB8fDB8fHww"},
    {name: "Liam" , src: "https://images.unsplash.com/photo-1639164543505-01e8d1332f0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHBvcnRyYWl0c3xlbnwwfHwwfHx8MA%3D%3D"},
]


var pers = "";
data.forEach(function(elem){
    pers += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h4>${elem.name}</h4>
          </div>`
})

document.querySelector(".people").innerHTML = pers;

input.addEventListener("input",function(){
  var matching =  data.filter((e)=>{
        return  e.name.startsWith(input.value)
    })
    var newuser = "";
matching.forEach(function(elem){
    newuser += `<div class="person">
            <div class="img">
              <img
                src="${elem.src}"
                alt=""
              />
            </div>
            <h4>${elem.name}</h4>
          </div>`
})
document.querySelector(".people").innerHTML = newuser;
})