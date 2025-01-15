document.addEventListener("DOMContentLoaded", () => {
    // Botón para continuar y ocultar el overlay de bienvenida
    document.getElementById("btnContinuar").addEventListener("click", () => {
        const bienvenida = document.getElementById("bienvenida");
        const hero = document.getElementById("hero");

        bienvenida.style.opacity = "0";  // Animación de desvanecimiento
        setTimeout(() => {
            bienvenida.style.display = "none";  // Ocultar la bienvenida
            hero.style.display = "block";  // Mostrar el hero
            hero.style.opacity = "0";  // Inicializar opacidad
            setTimeout(() => {
                hero.style.opacity = "1";  // Mostrar el hero con transición
            }, 50);
        }, 500);
    });


    // Función para mostrar las secciones al hacer scroll
    const showSectionsOnScroll = () => {
        const sections = document.querySelectorAll('.section');
        const scrollPosition = window.scrollY + window.innerHeight;

        sections.forEach(section => {
            if (section.offsetTop <= scrollPosition) {
                section.classList.add('visible');
            }
        });
    };




    // Inicializamos el observador de intersección para las secciones
    const sections = document.querySelectorAll('.section');
    if (sections.length > 0) {
        const observerOptions = {
            root: null, // Usa el viewport como contenedor
            rootMargin: '0px',
            threshold: 0.2 // Se activa cuando el 20% de la sección es visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        sections.forEach(section => observer.observe(section)); // Observa cada sección
    }

    function mostrarContenidoJS() {
        const hero = document.getElementById("hero");
        const contenido = document.getElementById("contenido");

        if (hero && contenido) {
            hero.style.opacity = "0";
            setTimeout(() => {
                hero.style.display = "none";
                contenido.style.display = "block";
                contenido.style.opacity = "1";
            }, 500);
        }
    }

    // Crear partículas para animación
    const numParticles = 100; // Ajusta el número de partículas
    const container = document.querySelector(".particle-container");

    if (container) {
        for (let i = 0; i < numParticles; i++) {
            const particle = document.createElement("div");
            particle.classList.add("particle");
            container.appendChild(particle);

            // Asignar posiciones aleatorias a las partículas
            particle.style.left = `${Math.random() * 100}vw`;
            particle.style.top = `${Math.random() * 100}vh`;
        }
    }

    // Llamamos a la función de scroll para mostrar las secciones
    window.addEventListener('scroll', showSectionsOnScroll);
    // Ejecutamos al cargar la página para manejar las secciones que ya están visibles
    showSectionsOnScroll();

    // Número de partículas a generar para la animación
    const numParticlesForAnimation = 50; // Puedes ajustar el número de partículas
    const containerForAnimation = document.querySelector('.particle-container');

    // Generar partículas para la animación
    if (containerForAnimation) {
        for (let i = 0; i < numParticlesForAnimation; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            containerForAnimation.appendChild(particle);

            // Asignar posiciones aleatorias y duración aleatoria de la animación
            particle.style.left = `${Math.random() * 100}vw`; // Posición aleatoria en el eje X
            particle.style.top = `${Math.random() * 100}vh`;  // Posición aleatoria en el eje Y
            particle.style.animationDuration = `${Math.random() * 5 + 3}s`; // Duración aleatoria para cada partícula
            particle.style.animationDelay = `${Math.random() * 5}s`; // Retardo aleatorio para la animación
        }
    }

    // Carrusel de imágenes
    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.slide');
        if (index >= slides.length) currentIndex = 0; // Si llega al final, vuelve al inicio
        if (index < 0) currentIndex = slides.length - 1; // Si llega al principio, va al final

        slides.forEach((slide, i) => {
            slide.style.display = i === currentIndex ? 'block' : 'none'; // Muestra la imagen actual, oculta las demás
        });
    }

    function moveSlide(step) {
        currentIndex += step; // Avanza o retrocede el índice
        showSlide(currentIndex); // Actualiza la imagen mostrada
    }

    // Mostrar la primera imagen al cargar la página
    showSlide(currentIndex);

    // Botones de navegación
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    if (prevButton && nextButton) {
        prevButton.addEventListener('click', () => moveSlide(-1)); // Mueve a la imagen anterior
        nextButton.addEventListener('click', () => moveSlide(1)); // Mueve a la siguiente imagen
    }
});

