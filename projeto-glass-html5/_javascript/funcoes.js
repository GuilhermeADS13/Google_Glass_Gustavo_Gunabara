function mudaHome (foto) {
	document.getElementById("icone").src="_imagens/home.png"	
	}
	function mudaSpec (foto) {
	document.getElementById("icone").src="_imagens/especificacoes.png"

	}
	function mudaFoto (foto) {
	document.getElementById("icone").src="_imagens/fotos.png"	
	}
	function mudaMidia (foto) {
	document.getElementById("icone").src="_imagens/multimidia.png"	
	}
	function mudaFale (foto) {
	document.getElementById("icone").src="_imagens/contato.png"	
	}
	function voltaFoto() {
		document.getElementById("icone").src="_imagens/glass-oculos-preto-peq.png"
	}

	function calc_total(){

		var qtd = parseInt(document.getElementById('cQtd').value);
		tot = qtd * 1500;
		document.getElementById('cTot').value = tot;		
	}

	
