function buscar(){
    
    var userElement = document.querySelector('input');
    var listElement = document.querySelector('ul');
    var userName = userElement.value;
    

    function buscarUser(){
        return new Promise(function(resolve,resect){
            axios.get('https://api.github.com/users/'+userName+'/repos')
        }) 
    }

    function renderList(result){
        for(repos of result.data){
            var liRepos = document.createElement('li');
            var textRepos = document.createTextNode(repos.name);

            listElement.appendChild(liRepos);
            liRepos.appendChild(textRepos);
        }
    }

    buscarUser()
    .then (function(response){
       renderList(response)
    })
    .catch(function(){
        console.log('Usuário Inexistente')
    })

}


/*EXIBE SE É MENOR OU MAIOR DE IDADE DEPOIS DE 5S

function cIdade(idade){
    return new Promise(function(resolve,reject){
        if (idade >=18) {
            setTimeout(resolve,5000)
        }else {
            setTimeout(reject,5000)
        }
    })
}

cIdade(20)
    .then (function(){
        console.log('Maior de idade')
    })
    .catch (function(){
        console.log('Menor de idade')
    })
    */

