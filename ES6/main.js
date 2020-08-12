
class List{
    constructor(){
        this.data =[];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}


class Todolist extends List {
  constructor(){
      super();

      this.usuario = 'lucas';
  }

  mostraUsuario(){
      console.log(this.usuario);
  }
}

var MinhaLista = new Todolist();

document.getElementById('novotodo').onclick = function(){
    MinhaLista.add('testezao');
}

const arr = [1,3,4,5,8,9];

const newArr = arr.map( function(item,index){
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
});

console.log(sum);

const filter = arr.filter( item=> item %2 ===0)
    


console.log(filter);

const find = arr.find(function(item){
    return item ===1;
})

console.log(find);

const usuario = {
    nome:"Lucas",
    idade:20,
    endereco:{
        cidade:'Campinas',
        estado:'sp',
    },
}

const {nome,idade,endereco:{estado}} = usuario;

console.log(nome);
console.log(idade);
console.log(estado);

function mostraNome({nome,idade}){
    console.log(nome,idade);
}

mostraNome(usuario);


