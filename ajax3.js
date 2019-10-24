document.getElementById('button3').addEventListener('click', loadUsers);

//Loading in the github users
function loadUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.github.com/users', true);

    xhr.onload = function(){


        if(this.status == 200){
            let users = JSON.parse(this.responseText);
           
            
            // var ele = '';
            // for(user in users){ 
            //     console.log(user);   
            //     ele +='<div>' + '<img src="' + users[user].avatar_url + '" width = "100" height = "100">' + users[user].login + "</div>" + "<br>";
            // };
            
            
            //  var git = users.filter(user => {
            //     return user.login;
            // }).map(filteredUser => {
            //     if (filteredUser.length > 10) {
            //       return users;
            //     } else {
            //         return false;
            //     }
            // });


            
            var gitLogin = users.filter(user =>{
               return user.id < 10;
            }).map(user =>{
                return '<img src="' + user.avatar_url + '" width = "100" height = "100">' + user.login + " & ";
            })
            document.getElementById('users2').innerHTML  = gitLogin.join("");
        }

    }
    xhr.send();
};