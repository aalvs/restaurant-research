
(function exeFunction() {
	var btn = document.querySelector('.btn');
	var qtdEntrevistados = 0;
	var menos10Visitas = 0;
	var entre10e15Visitas = 0;
	var acima15Visitas = 0;

	let totEntrevistados = document.querySelector('#totEntrevistados');
	let totMenos10Visitas = document.querySelector('#totMenos10Visitas');
	let totEntre10e15Visitas = document.querySelector('#totEntre10e15Visitas');
	let totAcima15Visitas = document.querySelector('#totAcima15Visitas');

	let resultPorcentagem1 = document.querySelector('#resultPorcentagem1');
	let resultPorcentagem2 = document.querySelector('#resultPorcentagem2');
	let resultPorcentagem3 = document.querySelector('#resultPorcentagem3');
	
	btn.addEventListener('click', () => {
		let respostaPesquisa = window.prompt('Quantas vezes você utilizou o Restaurante Universitário neste mês?');
		if (respostaPesquisa.trim() === "" || isNaN(respostaPesquisa) === true || respostaPesquisa == null) {
			window.alert('Número inválido!');
		} else {
			if(respostaPesquisa >= 0 && respostaPesquisa <= 9) {
				qtdEntrevistados++;
				menos10Visitas++;
				totMenos10Visitas.innerText = menos10Visitas;
			} else if(respostaPesquisa >= 10 && respostaPesquisa <= 15) {
				qtdEntrevistados++;
				entre10e15Visitas++;
				totEntre10e15Visitas.innerText = entre10e15Visitas;
			} else {
				qtdEntrevistados++;
				acima15Visitas++;
				totAcima15Visitas.innerText = acima15Visitas;
			}
			totEntrevistados.innerText = qtdEntrevistados;
			
			for(i = 0; i < 3; i++) {
				var calcPorcentagem1 = parseFloat(menos10Visitas / qtdEntrevistados) * 100;
				var calcPorcentagem2 = parseFloat(entre10e15Visitas / qtdEntrevistados) * 100;
				var calcPorcentagem3 = parseFloat(acima15Visitas / qtdEntrevistados) * 100;

				resultPorcentagem1.innerText = calcPorcentagem1.toFixed(2);
				resultPorcentagem2.innerText = calcPorcentagem2.toFixed(2);
				resultPorcentagem3.innerText = calcPorcentagem3.toFixed(2);
			}
		}	
	})
})();