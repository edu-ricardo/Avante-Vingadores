(function (){

	// Cria aplicação de angular js
	var app = angular.module('avante', []);

	// Cria controller principal
	app.controller('BodyCtrl', ['$http', function($http){
		this.titulo = "Avante Vingadores";


		if (getCookie('nome') == '') {
			var ckNome = prompt("Insira seu nome: ");
			this.nome = ckNome;
			setCookie('nome', ckNome, 30);
		} else {
			this.nome = getCookie('nome');
		};

		function setCookie(cname, cvalue, exdays) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+d.toUTCString();
		    document.cookie = cname + "=" + cvalue + "; " + expires;
		}		


		function getCookie(cname) {
		    var name = cname + "=";
		    var ca = document.cookie.split(';');
		    for(var i=0; i<ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
		    }
		    return "";
		}
	}]);

	// Cria diretiva do menu
	app.directive('menuPrincipal', function(){
		return {
			restrict: 'E', 
			templateUrl: 'menu-principal.html'
		};
	});

	// Cria diretiva do rodapé
	app.directive('footerPrincipal', function(){
		return {
			restrict: 'E', 
			templateUrl: 'footer-principal.html'
		};
	});

})();