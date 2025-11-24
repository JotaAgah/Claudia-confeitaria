document.addEventListener('DOMContentLoaded', () => {

    // =============================================================
    // 1. DADOS DOS BOLOS (A LISTA QUE TINHA SUMIDO)
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

    // =============================================================
    // 2. LÓGICA DA GALERIA (RENDERIZAR E FILTRAR)
    // =============================================================
    const flavorList = document.getElementById('flavor-list');
    const flavorSearch = document.getElementById('flavor-search');
    const flavorFilter = document.getElementById('flavor-filter');
    const allergenFilter = document.getElementById('allergen-filter');

    // Função que desenha os cards na tela
    const renderCakes = (filteredCakes) => {
        if (!flavorList) return; // Segurança caso a lista não exista
        
        flavorList.innerHTML = '';
        if (filteredCakes.length === 0) {
            flavorList.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Nenhum sabor encontrado. Tente outra busca ou filtro.</p>';
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

    // Função que filtra os bolos
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

    // Ativa os filtros se os elementos existirem
    if (flavorSearch) flavorSearch.addEventListener('input', filterAndSearchCakes);
    if (flavorFilter) flavorFilter.addEventListener('change', filterAndSearchCakes);
    if (allergenFilter) allergenFilter.addEventListener('change', filterAndSearchCakes);
    
    // Desenha a lista inicial
    renderCakes(cakes);


    // =============================================================
    // 3. MÁSCARA DE TELEFONE E WHATSAPP (CORRIGIDA)
    // =============================================================
    const handlePhoneMask = (event) => {
        let input = event.target;
        input.value = phoneMask(input.value);
    }

    const phoneMask = (value) => {
        if (!value) return "";
        
        // 1. Remove tudo que NÃO é número
        value = value.replace(/\D/g, ''); 
        
        // Se não tem números, retorna vazio
        if (value.length === 0) return "";

        // 2. Limita a 11 números (DDD + 9 dígitos)
        value = value.substring(0, 11);

        // 3. Aplica a formatação
        if (value.length > 10) {
            value = value.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
        } else if (value.length > 6) { 
            value = value.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
        } else if (value.length > 2) {
            value = value.replace(/^(\d\d)(\d{0,5}).*/, "($1) $2");
        } else {
            value = value.replace(/^(\d*)/, "($1");
        }
        
        return value;
    }

    const phoneInputs = document.querySelectorAll('#telefone, #whatsapp');
    phoneInputs.forEach(input => {
        input.addEventListener('input', handlePhoneMask);
    });


    // =============================================================
    // 4. DATA MÍNIMA (Bloqueia datas passadas e < 2 dias)
    // =============================================================
    const dateInput = document.getElementById('data_entrega');
    
    if (dateInput) {
        const today = new Date();
        today.setDate(today.getDate() + 2); // Hoje + 2 dias
        
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        
        const minDate = `${yyyy}-${mm}-${dd}`;
        dateInput.min = minDate;
        
        dateInput.addEventListener('change', function() {
            if (this.value && this.value < minDate) {
                alert("A data deve ser de no mínimo 2 dias a partir de hoje!");
                this.value = '';
            }
        });
    }


    // =============================================================
    // 5. ENVIO DO FORMULÁRIO PARA O WHATSAPP
    // =============================================================
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const nome = document.getElementById('nome_completo').value;
            const telefone = document.getElementById('telefone').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const sabor = document.getElementById('sabor_bolo').value;
            const tamanho = document.getElementById('tamanho_bolo').value;
            const data = document.getElementById('data_entrega').value;
            const observacoes = document.getElementById('observacoes_especiais').value;
            
            // --- VALIDAÇÃO ---
            const whatsappClean = whatsapp.replace(/\D/g, '');
            const telefoneClean = telefone.replace(/\D/g, '');

            if (whatsappClean.length < 10) {
                alert("Número de WhatsApp inválido! Por favor, digite o número completo com DDD.");
                document.getElementById('whatsapp').focus();
                return; 
            }

            if (telefoneClean.length > 0 && telefoneClean.length < 10) {
                alert("Número de Telefone inválido! Digite o número completo ou deixe em branco.");
                document.getElementById('telefone').focus();
                return; 
            }
            // --- FIM VALIDAÇÃO ---

            const whatsappNumber = "5516981348725"; 

            let message = `Olá, gostaria de fazer um pedido de bolo. Aqui estão os detalhes:\n\n`;
            message += `*Nome Completo:* ${nome}\n`;
            
            message += `*WhatsApp de Contato:* ${whatsapp}\n`;
            if (telefone) { message += `*Telefone Alternativo:* ${telefone}\n`; }
            
            message += `*Sabor do Bolo:* ${sabor}\n*Tamanho do Bolo:* ${tamanho}\n*Data de Entrega:* ${data}\n`;
            message += `*Observações Especiais:* ${observacoes}\n`;
            message += `\n*Aguardamos seu contato para confirmar o pedido!*`;
            
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
        });
    }


    // =============================================================
    // 6. HEADER "LIQUID GLASS" E ROLAGEM
    // =============================================================
    const header = document.querySelector('.header');
    const scrollThreshold = 50; 

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > scrollThreshold) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });
    }


    // =============================================================
    // 7. MENU HAMBÚRGUER (MOBILE)
    // =============================================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('is-active');
        });

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


    // =============================================================
    // 8. EFEITO AURORA NOS BOTÕES
    // =============================================================
    const heroButtons = document.querySelectorAll('.hero-buttons .btn');
    heroButtons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            button.style.setProperty('--x', `${x}px`);
            button.style.setProperty('--y', `${y}px`);
        });
    });


    // =============================================================
    // 9. ANIMAÇÕES GSAP
    // =============================================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        const applyScrollFloat = (selector) => {
            const element = document.querySelector(selector);
            if (!element) return;
            
            const text = element.textContent;
            element.textContent = ''; 
            const splitTextHTML = text.split('').map((char) => {
                const content = char === ' ' ? '\u00A0' : char; 
                return `<span class="char">${content}</span>`;
            }).join('');
            element.innerHTML = splitTextHTML;
            
            const charElements = element.querySelectorAll('.char');

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
        
        const valueItems = gsap.utils.toArray('.value-item');
        if (valueItems.length > 0) {
            gsap.from(valueItems, {
                y: 100, 
                opacity: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: '.values-grid',
                    start: 'top 85%',
                    toggleActions: 'play none none none',
                }
            });
        }
    }
});