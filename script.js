document.addEventListener('DOMContentLoaded', () => {
    const formCriarEvento = document.getElementById('form-criar-evento');
    const listaEventos = document.getElementById('lista-eventos');

    // Array para armazenar os eventos. Para este protótipo, os dados ficarão na memória do navegador.
    let eventos = [];

    // Função para renderizar os eventos na tela
    function renderizarEventos() {
        listaEventos.innerHTML = ''; // Limpa a lista antes de renderizar
        if (eventos.length === 0) {
            listaEventos.innerHTML = '<p>Nenhum evento criado ainda.</p>';
        } else {
            eventos.forEach(evento => {
                const eventoCard = document.createElement('div');
                eventoCard.className = 'evento-card';
                eventoCard.innerHTML = `
                    <h3>${evento.titulo}</h3>
                    <p><strong>Data:</strong> ${evento.data}</p>
                    <p><strong>Descrição:</strong> ${evento.descricao}</p>
                `;
                listaEventos.appendChild(eventoCard);
            });
        }
    }

    // Lidar com o envio do formulário
    formCriarEvento.addEventListener('submit', (e) => {
        e.preventDefault(); // Impede o envio padrão do formulário

        // Coleta os dados do formulário
        const titulo = document.getElementById('titulo-evento').value;
        const data = document.getElementById('data-evento').value;
        const descricao = document.getElementById('descricao-evento').value;

        // Cria um novo objeto de evento
        const novoEvento = {
            titulo,
            data,
            descricao
        };

        // Adiciona o novo evento ao array
        eventos.push(novoEvento);

        // Limpa o formulário
        formCriarEvento.reset();

        // Atualiza a lista de eventos na tela
        renderizarEventos();
    });

    // Renderiza a lista inicial ao carregar a página
    renderizarEventos();
});