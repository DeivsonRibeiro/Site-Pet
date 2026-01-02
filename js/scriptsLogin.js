document.addEventListener("DOMContentLoaded", () => {
    // Seletores dos Modais
    const modalLogin = document.getElementById("modalLogin");
    const modalCadastro = document.getElementById("modalCadastro");
    
    // Botões de abertura
    const btnAbrirLogin = document.getElementById("abrirLogin"); // Link no Header
    const btnTrocarParaCadastro = document.querySelector(".btn-cadastrar-modal"); // Link dentro do login
    
    // Botões de fechar
    const botoesFechar = document.querySelectorAll(".close-modal");

    // Função para abrir modal
    const abrirModal = (modal) => {
        modal.classList.add("show");
        document.body.style.overflow = "hidden"; // Impede scroll no fundo
    };

    // Função para fechar todos os modais
    const fecharModais = () => {
        modalLogin.classList.remove("show");
        modalCadastro.classList.remove("show");
        document.body.style.overflow = "auto";
    };

    // Eventos
    if (btnAbrirLogin) {
        btnAbrirLogin.addEventListener("click", () => abrirModal(modalLogin));
    }

    if (btnTrocarParaCadastro) {
        btnTrocarParaCadastro.addEventListener("click", () => {
            modalLogin.classList.remove("show");
            abrirModal(modalCadastro);
        });
    }

    botoesFechar.forEach(btn => {
        btn.addEventListener("click", fecharModais);
    });

    // Fechar ao clicar fora do conteúdo
    window.addEventListener("click", (e) => {
        if (e.target.classList.contains("modal")) {
            fecharModais();
        }
    });

    // Toggle de Senha (funciona para todos os campos)
    document.body.addEventListener("click", (e) => {
        if (e.target.closest(".password-toggle")) {
            const btn = e.target.closest(".password-toggle");
            const input = btn.previousElementSibling;
            const icone = btn.querySelector("i");

            if (input.type === "password") {
                input.type = "text";
                icone.classList.replace("fa-eye", "fa-eye-slash");
            } else {
                input.type = "password";
                icone.classList.replace("fa-eye-slash", "fa-eye");
            }
        }
    });
});
