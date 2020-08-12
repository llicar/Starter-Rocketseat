"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// DESAFIO #1
var usuario = /*#__PURE__*/function () {
  function usuario(email, senha) {
    _classCallCheck(this, usuario);

    this.admin = false;
    this.email = email;
    this.senha = senha;
  }

  _createClass(usuario, [{
    key: "isAdmin",
    value: function isAdmin() {
      return console.log(this.admin);
    }
  }]);

  return usuario;
}();

var admin = /*#__PURE__*/function (_usuario) {
  _inherits(admin, _usuario);

  var _super = _createSuper(admin);

  function admin() {
    var _this;

    _classCallCheck(this, admin);

    _this = _super.call(this);
    _this.admin = true;
    return _this;
  }

  return admin;
}(usuario);

var user1 = new usuario('lucas.licar2016@gmail.com', '15012000');
var admin1 = new admin('fulano@admin', 'admin123');
console.log(user1.isAdmin());
console.log(admin1.isAdmin()); //DESAFIO #2

var usuarios = [{
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
}, {
  nome: 'Gabriel',
  idade: 15,
  empresa: 'Rocketseat'
}, {
  nome: 'Lucas',
  idade: 30,
  empresa: 'Facebook'
}];
var idades = usuarios.map(function (item) {
  return item.idade;
});
console.log(idades);
var maior = usuarios.filter(function (item) {
  return item.idade >= 18 && item.empresa === 'Rocketseat';
});
console.log(maior);
var google = usuarios.find(function (item) {
  return item.empresa === 'google';
});
console.log(google);
usuarios.map(function (item) {
  item.idade = item.idade * 2;
});
var filter50 = usuarios.filter(function (item) {
  return item.idade <= 50;
});
console.log(filter50); //#DESAFIO 3
//3.1

var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); //3.2

var user = {
  nome: 'Diego',
  idade: 23
};

var mostraIdade = function mostraIdade(user) {
  return user.idade;
};

console.log('parou aqui' + mostraIdade(user)); //3.3

var nome = "Diego";
var idade = 23;

var mostraUsuario = function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
};

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome)); //3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve('aaa');
  });
};

console.log(promise()); //#DESAFIO 4
//4.1

var empresa = {
  name: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var name = empresa.name,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(name, cidade, estado); //4.2

function mostraInfo(nome, idade) {
  return "".concat(nome, " tem ").concat(idade, " anos.");
}

mostraInfo({
  nome: 'Diego',
  idade: 23
}); //5.1

var arrr = [1, 2, 3, 4, 5, 6];
var x = arr[0],
    y = arr.slice(1);
console.log(x);
console.log(y);

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 5)); //5.2

var usuario1 = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil'
  }
};

var usuario2 = _objectSpread({}, usuario1);

usuario2.nome = 'gabriel';

var usuario3 = _objectSpread({}, usuario1);

usuario2.endereco.cidade = 'londres';
console.log(usuario1);
console.log(usuario2);
console.log(usuario3); //6

var usuario7 = 'Diego';
var idade1 = 23;
console.log("O usuario ".concat(usuario7, " possui ").concat(idade1, " anos")); //7

var nome8 = 'Diego';
var idade8 = 23;
var usuario8 = {
  nome8: nome8,
  idade8: idade8,
  cidade: 'Rio do Sul'
};
