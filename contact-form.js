// Configuração do formulário de contato usando FormSubmit.co
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            
            // Desabilitar o botão e mostrar feedback
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Enviar o formulário usando fetch
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Sucesso
                    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                    contactForm.reset();
                } else {
                    // Erro
                    throw new Error('Erro ao enviar mensagem');
                }
            })
            .catch(error => {
                console.error('Erro:', error);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente ou entre em contato diretamente pelo e-mail.');
            })
            .finally(() => {
                // Reabilitar o botão
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            });
        });
    }
});

