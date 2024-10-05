/* 

Desenvolva um programa em JavaScript que permita ao usuário inserir os níveis de emissões de carbono de 
diferentes países (em toneladas por ano) e calcule o impacto cumulativo das emissões no aquecimento global. 
O programa deve:

1- Permitir a entrada do nome do país e das emissões anuais em toneladas de CO₂.

2- Continuar pedindo entradas até que o usuário digite "sair".

3- Exibir um relatório com a média das emissões de todos os países, o país com a maior e a menor emissão.

*/

// Função principal
function calcularEmissoesCarbono() {
    let paises = [];
    let emissoes = [];
    let totalEmissoes = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let emissao = parseFloat(prompt(`Digite as emissões de carbono de ${pais} em toneladas por ano:`));
  
      if (!isNaN(emissao)) {
        paises.push(pais);
        emissoes.push(emissao);
        totalEmissoes += emissao; 
      } else {
        alert("Por favor, insira um valor numérico válido para as emissões.");
      }
    }
  
    if (paises.length > 0) {
      let mediaEmissoes = totalEmissoes / emissoes.length;
  
      let maiorEmissao = emissoes[0];
      let menorEmissao = emissoes[0];
      let paisMaiorEmissao = paises[0];
      let paisMenorEmissao = paises[0];
  
      for (let i = 1; i < emissoes.length; i++) {
        if (emissoes[i] > maiorEmissao) {
          maiorEmissao = emissoes[i];
          paisMaiorEmissao = paises[i];
        }
        if (emissoes[i] < menorEmissao) {
          menorEmissao = emissoes[i];
          paisMenorEmissao = paises[i];
        }
      }
  
      alert(`Relatório de Emissões de Carbono:
      - Média de emissões: ${mediaEmissoes.toFixed(2)} toneladas/ano
      - País com maior emissão: ${paisMaiorEmissao} (${maiorEmissao} toneladas/ano)
      - País com menor emissão: ${paisMenorEmissao} (${menorEmissao} toneladas/ano)`);
    } else {
      alert("Nenhum dado de emissão foi inserido.");
    }
  }
  
  calcularEmissoesCarbono();

  
  /*Crie um programa que receba o número de medalhas de ouro, prata e bronze 
  de um país nas Olimpíadas e calcule o total de medalhas. 
  Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o 
  ranking de medalhas no formato:
#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas */


function calcularNumeroMedalhas() {
    let paises = [];
    let medalhasOuro = [];
    let medalhasPrata = [];
    let medalhasBronze = [];
    let totalMedalhasOuro = 0;
    let totalMedalhasPrata = 0;
    let totalMedalhasBronze = 0;
  
    while (true) {
      let pais = prompt("Digite o nome do país (ou 'sair' para terminar):");
  
      if (pais.toLowerCase() === "sair") {
        break;
      }
  
      let medalhasOu = parseFloat(prompt(`Digite as medalhas de ouro de ${pais}:`));
      let medalhasPra = parseFloat(prompt(`Digite as medalhas de prata de ${pais}:`));
      let medalhasBron = parseFloat(prompt(`Digite as medalhas de bronze de ${pais}:`));
  
      if (!isNaN(medalhasOuro)) {
        paises.push(pais);
        medalhasOuro.push(medalhasOu);
        medalhasBronze.push(medalhasBron);
        totalMedalhasOuro += medalhasOu;
      }else if (!isNaN(medalhasPrata)) {
        paises.push(pais);
        medalhasPrata.push(medalhasPra);
        totalMedalhasPrata += medalhasPra; 
      }else if (!isNaN(medalhasBronze)) {
        paises.push(pais);
        medalhasBronze.push(medalhasBron);
        totalMedalhasBronze += medalhasBron; 
      } else {
        alert("Por favor, insira um valor numérico válido para as medalhas.");
      }
    }
    
  let totalTodasMedalhas = totalMedalhasOuro + totalMedalhasPrata + totalMedalhasBronze;
  let medalhas = medalhasOuro + medalhasPrata + medalhasBronze;

    if (paises.length > 0) {
      let mediaMedalhas = totalTodasMedalhas  / medalhas.length;
  
      let maiorMedalha = totalTodasMedalhas[0];
      let menorMedalha = totalTodasMedalhas[0];
      let paisMaiorMedalha = paises[0];
      let paisMenorMedalha = paises[0];
  
      for (let i = 1; i < medalhas.length; i++) {
        if (totalTodasMedalhas[i] > maiorMedalha) {
          maiorMedalha = totalTodasMedalhas[i];
          paisMaiorMedalha = paises[i];
        }
        if (totalTodasMedalhas[i] < menorMedalha) {
          menorMedalha = totalTodasMedalhas[i];
          paisMenorMedalha = paises[i];
        }
      }
  
      alert(`Relatório do ranking de medalhas:
      - Média de medalhas: ${mediaMedalhas.toFixed(2)}
      - País com maior número de medalhas: ${paisMaiorMedalha} (${maiorMedalha}
      - País com menor núemro de medalhas: ${paisMenorMedalha} (${menorMedalha}`);
    } else {
      alert("Nenhum número de medalhas foi inserido.");
    }
  }
  
  calcularNumeroMedalhas();
  