// --- LÓGICA DO TERMÔMETRO ---
function medirTemperatura() {
    const container = document.getElementById('resultado-container');
    const resultado = document.getElementById('resultado-temperatura');
    const btn = document.getElementById('btn-medir');
    
    // Configura o estado de carregamento
    container.classList.remove('oculto', 'normal', 'febre');
    container.classList.add('loading');
    resultado.innerHTML = "⏳ Conectando ao RTS...";
    btn.disabled = true; // Evita cliques duplos
    btn.style.opacity = "0.7";

    // Simula atraso de rede
    setTimeout(() => {
        const temp = (Math.random() * (38.5 - 36.0) + 36.0).toFixed(1);
        
        container.classList.remove('loading');
        
        if (temp >= 37.5) {
            resultado.innerHTML = `🌡️ ${temp}°C - Estado febril detectado!`;
            container.classList.add('febre');
        } else {
            resultado.innerHTML = `✅ ${temp}°C - Temperatura normal.`;
            container.classList.add('normal');
        }
        
        btn.disabled = false;
        btn.style.opacity = "1";
    }, 1500);
}


// --- LÓGICA DE VALIDAÇÃO DO CADASTRO ---
document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    // Pega os valores dos campos
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const paciente = document.getElementById('paciente').value.trim();
    const senha = document.getElementById('senha').value.trim();

    const divMensagem = document.getElementById('mensagem-form');

    // Validação básica
    if (nome === '' || email === '' || paciente === '' || senha === '') {
        exibirMensagemForm("⚠️ Por favor, preencha todos os campos.", "erro-msg");
        return;
    }

    if (senha.length < 6) {
        exibirMensagemForm("⚠️ A senha deve ter pelo menos 6 caracteres.", "erro-msg");
        return;
    }

    // Se passou por tudo, simula sucesso
    exibirMensagemForm(`🎉 Cadastro realizado com sucesso! Bem-vindo(a), ${nome.split(' ')[0]}.`, "sucesso-msg");
    
    // Limpa o formulário
    this.reset();
});

// Função auxiliar para exibir as mensagens na tela
function exibirMensagemForm(texto, classe) {
    const divMensagem = document.getElementById('mensagem-form');
    divMensagem.innerHTML = texto;
    divMensagem.className = ""; // Limpa classes anteriores
    divMensagem.classList.add(classe);
    
    // Remove a mensagem após 4 segundos
    setTimeout(() => {
        divMensagem.classList.add('oculto');
    }, 4000);
}