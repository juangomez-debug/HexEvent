// ===============================
// 1. Navegación suave en el menú
// ===============================

document.querySelectorAll("nav a").forEach(enlace => {
    enlace.addEventListener("click", function (e) {
        e.preventDefault();

        const seccionID = this.getAttribute("href");
        const seccion = document.querySelector(seccionID);

        if (seccion) {
            seccion.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


// =======================================
// 2. Validación del formulario de registro
// =======================================

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar envío por defecto

    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const contraseña = document.getElementById("contraseña").value.trim();

    let errores = [];

    // Validaciones básicas
    if (nombre.length < 3) errores.push("El nombre debe tener al menos 3 caracteres.");
    if (!email.includes("@") || !email.includes(".")) errores.push("El correo no es válido.");
    if (telefono.length < 7) errores.push("El número de teléfono es demasiado corto.");
    if (contraseña.length < 6) errores.push("La contraseña debe tener mínimo 6 caracteres.");

    // Si hay errores
    if (errores.length > 0) {
        alert("⚠️ Revisa lo siguiente:\n\n" + errores.join("\n"));
        return;
    }

    // Si todo está bien
    alert("🎉 Registro exitoso. ¡Bienvenido a HexEvents!");

    form.reset();
});


// =====================================
// 3. Cambiar color del menú al hacer scroll
// =====================================

window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");

    if (window.scrollY > 80) {
        nav.style.backgroundColor = "#222";
    } else {
        nav.style.backgroundColor = "#434141";
    }
});

// ===============================
// 4. Animación al entrar a secciones
// ===============================

const secciones = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    },
    { threshold: 0.2 }
);

secciones.forEach(sec => {
    sec.style.opacity = "0";
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "all 0.8s ease";
    observer.observe(sec);
});
