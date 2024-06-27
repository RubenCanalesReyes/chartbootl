function sendMessage() {
    const userInput = document.getElementById('user-input');
    const chatBox = document.getElementById('chat-box');
    
    if (userInput.value.trim() === '') return;
    
    // Add user message to chat
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.innerText = userInput.value;
    chatBox.appendChild(userMessage);
    
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
    
    // Simulate bot response
    setTimeout(() => {
        const botMessage = document.createElement('div');
        botMessage.classList.add('message', 'bot-message');
        
        if (userInput.value.includes('1') || userInput.value.toLowerCase().includes('información')) {
            botMessage.innerHTML = '¡Claro! Para obtener información sobre cómo inscribirte en una carrera universitaria, generalmente necesitas:<br>1. Completar el formulario de inscripción.<br>2. Presentar tu certificado de estudios secundarios.<br>3. Proporcionar documentos de identificación.<br>4. Presentar exámenes de admisión (si es necesario).<br>5. Pagar las tasas de inscripción.';
        } else if (userInput.value.includes('2') || userInput.value.toLowerCase().includes('hablar con ventas')) {
            botMessage.innerHTML = 'Te pondremos en contacto con nuestro equipo de ventas. Por favor, proporciona tu nombre y un número de teléfono o correo electrónico para que podamos comunicarnos contigo.';
        } else if (userInput.value.includes('3') || userInput.value.toLowerCase().includes('ver carreras')) {
            botMessage.innerHTML = 'Nuestra universidad ofrece una variedad de carreras en diferentes áreas. Algunas de nuestras facultades incluyen:<br>1. Ciencias de la Salud<br>2. Ingeniería y Tecnología<br>3. Ciencias Sociales y Humanidades<br>4. Negocios y Administración<br>¿Te gustaría saber más sobre alguna de estas áreas en particular?';
        } else {
            botMessage.innerHTML = 'Lo siento, no entiendo tu solicitud. Por favor, intenta elegir una de las opciones: "Información", "Hablar con ventas" o "Ver carreras".';
        }
        
        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
    
    userInput.value = '';
}