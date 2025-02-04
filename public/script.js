document.getElementById('chat-bubble').addEventListener('click', () => {
    const chatContainer = document.getElementById('chat-container');
    if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
        chatContainer.style.display = 'block';
    } else {
        chatContainer.style.display = 'none';
    }
});

const sendMessage = async (message) => {
    const chatBox = document.querySelector('.direct-chat-messages');

    if (!message.trim()) return;

    // Añadir mensaje del usuario al chat
    const userMessageDiv = document.createElement('div');
    userMessageDiv.classList.add('direct-chat-msg', 'right');
    userMessageDiv.innerHTML =
        `<div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right">Usuario</span></div><img class="direct-chat-img" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="message user image"><div class="direct-chat-text">${message}</div>`;
    chatBox.appendChild(userMessageDiv);

    // Enviar mensaje al servidor
    const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
    });

    const data = await response.text();

    // Añadir mensaje del bot al chat
    const botMessageDiv = document.createElement('div');
    botMessageDiv.classList.add('direct-chat-msg');
    botMessageDiv.innerHTML =
        `<div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">Lerdo Contemporaneo</span></div><img class="direct-chat-img" src="Logo Florista Circular Blanco Negro.PNG" alt="message user image"><div class="direct-chat-text">${data}</div>`;
    chatBox.appendChild(botMessageDiv);

    // Añadir botones de opciones al final del mensaje del bot
    const optionsDiv = document.createElement('div');
    optionsDiv.classList.add('options-container');
    optionsDiv.innerHTML = `
        <button class="option-button" data-message="Información">Información</button>
        <button class="option-button" data-message="Hablar con ventas">contacto</button>
        <button class="option-button" data-message="Ver carreras">Ver carreras</button>
    `;
    chatBox.appendChild(optionsDiv);

    chatBox.scrollTop = chatBox.scrollHeight;

    // Limpiar el campo de entrada de mensaje
    document.getElementById('message-input').value = '';
};

document.getElementById('send-button').addEventListener('click', () => {
    const message = document.getElementById('message-input').value;
    sendMessage(message);
});

document.getElementById('message-input').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        const message = document.getElementById('message-input').value;
        sendMessage(message);
    }
});

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('option-button')) {
        const message = event.target.getAttribute('data-message');
        sendMessage(message);
    }
});
