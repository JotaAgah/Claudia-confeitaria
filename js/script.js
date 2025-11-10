document.addEventListener('DOMContentLoaded', () => {
    // =============================================================
    // CONFIGURAÇÃO DOS DADOS (DEIXADO COMPLETO POR PRECAUÇÃO)
    // =============================================================
    const cakes = [
        {
            name: "Ameixa c/ doce de leite e coco",
            description: "Delicioso bolo de massa branca com recheio de ameixa, doce de leite cremoso e coco ralado.",
            image: "img/bolo1.png",
            tags: ["Bolo Branco", "Sem lactose", "Sem glúten"],
            filters: ["bolobranco", "semlactose", "semgluten"]
        },
        {
            name: "Mousse de maracujá c/ brigadeiro",
            description: "Bolo aerado com mousse refrescante de maracujá e cobertura de brigadeiro tradicional.",
            image: "img/bolo2.png",
            tags: ["Bolo Branco", "Gourmet"],
            filters: ["bolobranco", "gourmet"]
        },
        {
            name: "Sensação c/ mousse de chocolate branco",
            description: "Inspirado no famoso sorvete, com mousse cremosa de chocolate branco e pedaços de morango frescos.",
            image: "img/bolo3.png",
            tags: ["Bolo Branco", "Gourmet"],
            filters: ["bolobranco", "gourmet"]
        },
        {
            name: "Brigadeiro gourmet c/ morango",
            description: "Bolo sofisticado com brigadeiro branco cremoso e morangos frescos selecionados.",
            image: "img/bolo4.png",
            tags: ["Bolo Branco", "Gourmet", "Sem lactose"],
            filters: ["bolobranco", "gourmet", "semlactose"]
        },
        {
            name: "Coco c/ doce de leite",
            description: "Massa macia de coco com recheio cremoso de doce de leite e cobertura de coco ralado.",
            image: "img/bolo5.png",
            tags: ["Bolo Branco", "Sem glúten"],
            filters: ["bolobranco", "semgluten"]
        },
        {
            name: "Abacaxi c/ creme",
            description: "Refrescante bolo com pedaços de abacaxi natural e creme suave, perfeito para o verão.",
            image: "img/bolo6.png",
            tags: ["Bolo Branco"],
            filters: ["bolobranco"]
        },
        {
            name: "Prestigio (coco c/ chocolate)",
            description: "Inspirado no famoso doce, com massa de chocolate e recheio cremoso de coco.",
            image: "img/bolo7.png",
            tags: ["Chocolate", "Gourmet"],
            filters: ["chocolate", "gourmet"]
        },
        {
            name: "Floresta Negra",
            description: "Clássico alemão com massa de chocolate, cerejas e chantilly.",
            image: "img/bolo8.png",
            tags: ["Chocolate", "Gourmet"],
            filters: ["chocolate", "gourmet"]
        },
        {
            name: "Mousse de chocolate c/ brigadeiro gourmet",
            description: "Combinação perfeita de mousse aerada de chocolate e brigadeiro cremoso premium.",
            image: "img/bolo9.png",
            tags: ["Chocolate", "Gourmet", "Sem lactose"],
            filters: ["chocolate", "gourmet", "semlactose"]
        },
        {
            name: "Brigadeiro tradicional",
            description: "Clássico bolo brasileiro em forma de bolo, massa de chocolate com brigadeiro cremoso.",
            image: "img/bolo10.png",
            tags: ["Chocolate"],
            filters: ["chocolate"]
        },
        {
            name: "Chocolate c/ nozes",
            description: "Rica massa de chocolate com pedaços crocantes de nozes selecionadas.",
            image: "img/bolo11.png",
            tags: ["Chocolate", "Gourmet", "Sem glúten"],
            filters: ["chocolate", "gourmet", "semgluten"]
        },
        {
            name: "Ninho c/ nutella",
            description: "Irresistível combinação de leite ninho com cobertura cremosa de nutella.",
            image: "img/bolo12.png",
            tags: ["Chocolate", "Gourmet"],
            filters: ["chocolate", "gourmet"]
        }
    ];

    const flavorList = document.getElementById('flavor-list');
    const flavorSearch = document.getElementById('flavor-search');
    const flavorFilter = document.getElementById('flavor-filter');
    const allergenFilter = document.getElementById('allergen-filter');
    const orderForm = document.getElementById('order-form');

    // Funções de Filtro e Busca (omitidas por brevidade, mas você deve mantê-las)
    const renderCakes = (filteredCakes) => {
        flavorList.innerHTML = '';
        if (filteredCakes.length === 0) {
            flavorList.innerHTML = '<p>Nenhum sabor encontrado. Tente outra busca ou filtro.</p>';
            return;
        }
        filteredCakes.forEach(cake => {
            const card = document.createElement('div');
            card.className = 'flavor-card';
            card.innerHTML = `
                <img src="${cake.image}" alt="${cake.name}">
                <div class="flavor-card-content">
                    <h3>${cake.name}</h3>
                    <p>${cake.description}</p>
                    <div class="tags">
                        ${cake.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <a href="#encomendar" class="btn btn-details">Ver Detalhes</a>
                </div>
            `;
            flavorList.appendChild(card);
        });
    };
    const filterAndSearchCakes = () => {
        const searchTerm = flavorSearch.value.toLowerCase();
        const selectedFlavor = flavorFilter.value;
        const selectedAllergen = allergenFilter.value;
        const filteredCakes = cakes.filter(cake => {
            const matchesSearch = cake.name.toLowerCase().includes(searchTerm) || cake.description.toLowerCase().includes(searchTerm);
            const matchesFlavor = selectedFlavor === 'all' || cake.filters.includes(selectedFlavor);
            const matchesAllergen = selectedAllergen === 'all' || cake.filters.includes(selectedAllergen);
            return matchesSearch && matchesFlavor && matchesAllergen;
        });
        renderCakes(filteredCakes);
    };

    // Event listeners de Filtro/Busca e Carregamento
    flavorSearch.addEventListener('input', filterAndSearchCakes);
    flavorFilter.addEventListener('change', filterAndSearchCakes);
    allergenFilter.addEventListener('change', filterAndSearchCakes);
    renderCakes(cakes);

    // Formulário (código omitido por brevidade, mas você deve mantê-lo)
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome_completo').value;
        const telefone = document.getElementById('telefone').value;
        const whatsapp = document.getElementById('whatsapp').value;
        const sabor = document.getElementById('sabor_bolo').value;
        const tamanho = document.getElementById('tamanho_bolo').value;
        const data = document.getElementById('data_entrega').value;
        const ocasiao = document.getElementById('ocasiao').value;
        const observacoes = document.getElementById('observacoes_especiais').value;
        const whatsappNumber = "5516981348725"; 
        let message = `Olá, gostaria de fazer um pedido de bolo. Aqui estão os detalhes:\n\n`;
        message += `*Nome Completo:* ${nome}\n*Telefone:* ${telefone}\n`;
        if (whatsapp) { message += `*WhatsApp:* ${whatsapp}\n`; }
        message += `*Sabor do Bolo:* ${sabor}\n*Tamanho do Bolo:* ${tamanho}\n*Data de Entrega:* ${data}\n`;
        if (ocasiao) { message += `*Ocasião:* ${ocasiao}\n`; }
        if (observacoes) { message += `*Observações Especiais:* ${observacoes}\n`; }
        message += `\n*Aguardamos seu contato para confirmar o pedido!*`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    });

    // =============================================================
    // CÓDIGO GSAP PARA ANIMAÇÕES
    // =============================================================

    // 1. Animação do Título "Nossos Valores"
    const applyScrollFloat = (selector) => {
        const element = document.querySelector(selector);
        if (!element) return;
        
        // Separa o texto em <span>
        const text = element.textContent;
        element.textContent = ''; 
        const splitTextHTML = text.split('').map((char, index) => {
            const content = char === ' ' ? '\u00A0' : char; 
            return `<span class="char">${content}</span>`;
        }).join('');
        element.innerHTML = splitTextHTML;
        
        const charElements = element.querySelectorAll('.char');

        // Aplica a animação
        gsap.fromTo(
            charElements,
            { willChange: 'opacity, transform', opacity: 0, yPercent: 120, scaleY: 2.3, scaleX: 0.7, transformOrigin: '50% 0%' },
            {
                duration: 1.2, 
                ease: 'power2.out',
                opacity: 1,
                yPercent: 0,
                scaleY: 1,
                scaleX: 1,
                stagger: 0.03, 
                scrollTrigger: {
                    trigger: element,
                    start: 'top bottom', 
                    end: 'center center', 
                    scrub: true 
                }
            }
        );
    };
    applyScrollFloat('.text-to-split');
    
    // 2. Animação das Caixas de Valores (Paixão, Tradição, Qualidade)
    const valueItems = gsap.utils.toArray('.value-item');

    gsap.from(valueItems, {
        y: 100, // Começa 100px abaixo da posição final
        opacity: 0, // Começa totalmente transparente
        stagger: 0.2, // Atraso de 0.2 segundos entre cada caixa
        duration: 0.8, // Duração de 0.8 segundos para a transição
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.values-grid', // O gatilho é o container das caixas
            start: 'top 85%', // Começa quando o topo do container chega a 85% do viewport
            toggleActions: 'play none none none', // Garante que a animação só aconteça uma vez
        }
    });

});

// Espera o DOM (a página) carregar completamente
document.addEventListener("DOMContentLoaded", () => {
    // --- INÍCIO: Header com Fundo Sólido ao Rolar ---
    
    const header = document.querySelector('.header');
    
    // Define a 'altura' do banner. O header mudará de cor 
    // depois que o usuário rolar 50 pixels para baixo.
    const scrollThreshold = 700; 

    window.addEventListener('scroll', () => {
        // Se o usuário rolou mais que o 'scrollThreshold'
        if (window.scrollY > scrollThreshold) {
            // Adiciona a classe que o tornará sólido
            header.classList.add('header-scrolled');
        } else {
            // Remove a classe se o usuário voltar ao topo
            header.classList.remove('header-scrolled');
        }
    });
    
    // --- FIM: Header com Fundo Sólido ao Rolar ---
    // --- Início: Lógica do Menu Hambúrguer ---
    
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Adiciona/Remove a classe 'active' no menu (para mostrar/esconder)
            navMenu.classList.toggle('active');
            
            // Adiciona/Remove a classe 'is-active' no botão (para mudar para "X")
            menuToggle.classList.toggle('is-active');
        });

        // Opcional: Fechar o menu ao clicar em um link ou no botão de zap
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    menuToggle.classList.remove('is-active');
                }
            });
        });
    }

    // --- Fim: Lógica do Menu Hambúrguer ---
    
    // (Deixe o resto do seu JS, como o dos botões da hero, aqui)
    // Seleciona todos os botões que queremos animar
    // (Neste caso, os botões dentro de .hero-buttons)
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');

    // Adiciona um "ouvinte" de movimento do mouse para CADA botão
    heroButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            
            // 1. Pega o tamanho e a posição do botão na tela
            const rect = button.getBoundingClientRect();
            
            // 2. Calcula a posição do mouse DENTRO do botão
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 3. Atualiza as variáveis CSS (--x e --y) no estilo do botão
            // O CSS que você colou acima usará essas variáveis!
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });
});