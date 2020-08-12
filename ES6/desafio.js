// DESAFIO #1
class usuario {
    constructor(email,senha){
        this.admin = false;
        this.email = email;
        this.senha = senha;
    }

    isAdmin(){
        return console.log(this.admin);
    }
    

}

class admin extends usuario {
    constructor(){
        super();
        this.admin = true;
    }
 }

const user1 = new usuario('lucas.licar2016@gmail.com','15012000');
const admin1 = new admin('fulano@admin','admin123');

console.log(user1.isAdmin());
console.log(admin1.isAdmin());

//DESAFIO #2

const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idades = usuarios.map(function(item){
       return item.idade;
   })
    console.log(idades);

   const maior = usuarios.filter( item => item.idade >=18 && item.empresa === 'Rocketseat')
    console.log(maior);

    const google = usuarios.find( item => item.empresa === 'google');

    console.log(google);

    usuarios.map((item) => {
        item.idade = item.idade*2;
    })

    const filter50 = usuarios.filter( item => item.idade <=50);

        console.log(filter50)

        //#DESAFIO 3
        //3.1
        const arr = [1, 2, 3, 4, 5];
            arr.map(item => item + 10);

        //3.2
            const user = { nome: 'Diego', idade: 23 };
            
            const mostraIdade = user => {
                return user.idade;
            }

            console.log('parou aqui'+mostraIdade(user));

        //3.3

        const nome = "Diego";
        const idade = 23;
        
        const mostraUsuario = (nome = 'Diego', idade = 18) => {
            return {nome,idade};
        }
        console.log(mostraUsuario(nome, idade));
        console.log(mostraUsuario(nome));

        //3.4

        const promise = () => {
            return new Promise((resolve, reject) => resolve('aaa'));
           }

           console.log(promise());

        //#DESAFIO 4

        //4.1

        const empresa = {
            name: 'Rocketseat',
            endereco: {
            cidade: 'Rio do Sul',
            estado: 'SC',
            } 
        }

        const {name,endereco:{cidade,estado} } = empresa;

        console.log(name,cidade,estado)

        //4.2

        function mostraInfo(nome,idade) {
            return `${nome} tem ${idade} anos.`;
           }
           mostraInfo({ nome: 'Diego', idade: 23 });

        //5.1

        const arrr = [1, 2, 3, 4, 5, 6];

        const [x,...y] = arr;

        console.log(x);
        console.log(y);

        function soma(...params){
            return params.reduce((total,next) => total+next);
        }
        
        console.log(soma(1,3,5))

        //5.2
        const usuario1 = {
            nome: 'Diego',
            idade: 23,
            endereco: {
            cidade: 'Rio do Sul',
            uf: 'SC',
            pais: 'Brasil',
            }
           };
        
        const usuario2 =  {...usuario1};
        usuario2.nome = 'gabriel';

        const usuario3 =  {...usuario1};
        usuario2.endereco.cidade = 'londres';
        
        console.log(usuario1);
        console.log(usuario2);
        console.log(usuario3);


        //6

        const usuario7 = 'Diego';
        const idade1 = 23;
        console.log(`O usuario ${usuario7} possui ${idade1} anos`);

        //7

        const nome8 = 'Diego';
        const idade8 = 23;
        const usuario8 = {
            nome8,
            idade8,
            cidade: 'Rio do Sul',
        };

            
           
            

   

