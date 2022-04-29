var objPeople = [
    {
        username: "madler",
        password: "menachem"
    }
  ]

function getInfo() {
    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for(i = 0; i < objPeople.length; i++) {
        if(username == objPeople[i].username && password == objPeople[i].password)
        console.log.print(username + "Welcome to Evil Academy. No updates today.")
  
    }
}