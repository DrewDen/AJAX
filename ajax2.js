var ele = document.getElementById('button1');
ele.addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'user.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var user = JSON.parse(this.responseText);
            
            var output = '';

            output = output + '<ul>' + 
            '<li>ID: ' + user.id +  '</li>' + 
            '<li>Name: ' + user.name + '</li>' + 
            '<li>Email: ' + user.email + '</li>' +
            '</ul>';

            document.getElementById('user').innerHTML = output;
        }
    }

    xhr.send();
});

var eleTwo = document.getElementById('button2');
eleTwo.addEventListener('click', ()=>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'users.json', true);

    xhr.onload = function(){
        if(this.status == 200){
            var users = JSON.parse(this.responseText);
            var input = '';

            users.forEach(object => {
             input += '<ul>' + 
            '<li>ID: ' + object.id +  '</li>' + 
            '<li>Name: ' + object.name + '</li>' + 
            '<li>Email: ' + object.email + '</li>' +
            '</ul>';
                
            });
            document.getElementById('users').innerHTML = input;
           
        }
    }

    xhr.send();
});
