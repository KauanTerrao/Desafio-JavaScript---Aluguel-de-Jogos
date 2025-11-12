/** Descrisção da função:
 * 
 * Recebe o ID de um jogo e altera seu status entre alugado e disponível.
 * Altera o status de um jogo entre alugado e disponível.
 * Se o jogo estiver alugado, solicita confirmação para devolução.
 * Atualiza a interface do usuário para refletir o status atual do jogo.
 * 
 * @param {number} id Recebe o ID do jogo a ser alterado.
 * @return {void} Não há retorna.
 */
function alterarStatus(id) {
    // Seleciona o elemento do jogo com base no ID fornecido
    let gameClicado = document.getElementById(`game-${id}`);
    let item = gameClicado.getElementsByClassName('dashboard__item__img')[0];
    let link = gameClicado.getElementsByTagName('a')[0];
    // Verifica o status atual do jogo e altera conforme necessário
    if (item.classList.contains('dashboard__item__img--rented')) {
        if (confirm('Tem certeza que deseja realizar a devolução?')) {
            item.classList.remove('dashboard__item__img--rented');
            link.classList.remove('dashboard__item__button--return');
            link.innerHTML = 'Alugar';
        }
    } else {
        item.classList.add('dashboard__item__img--rented');
        link.classList.add('dashboard__item__button--return');
        link.innerHTML = 'Devolver';
    }
}