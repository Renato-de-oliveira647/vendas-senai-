'use strict'
const vendas = [500, 1025, 287, 3210, 220 ,50]

function exibirVendas(venda){
    const card = document.createElement('div')
    const container = document.getElementById('container')

   // if (nota){
   //     card.classList.add('aprovado') //este certo 
   // }else{
   //     card.classList.add('reprovado')
    //}
     
    card.classList.add ( venda >= 5 ? 'aprovado ': 'reprovado') //deste jeito tbm certo um ou outro

    card.textContent = venda
    container.append(card)
}
   vendas.forEach(exibirVendas)