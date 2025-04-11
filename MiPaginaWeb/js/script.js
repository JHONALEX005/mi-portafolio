document.addEventListener("DOMContentLoaded", function () {
  // Validación de formulario de contacto (si se implementa en el futuro)
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nombre = document.getElementById("nombre")?.value.trim();
      const correo = document.getElementById("correo")?.value.trim();
      const mensaje = document.getElementById("mensaje")?.value.trim();

      if (!nombre || !correo || !mensaje) {
        alert("Por favor completa todos los campos del formulario.");
        return;
      }

      if (!correo.includes("@") || !correo.includes(".")) {
        alert("Por favor ingresa un correo electrónico válido.");
        return;
      }

      alert("¡Formulario enviado correctamente!");
      form.reset();
    });
  }

  // Cierre automático de video modal al cerrar ventana
  $(".modal").on("hidden.bs.modal", function () {
    const $iframe = $(this).find("iframe");
    $iframe.attr("src", $iframe.attr("src"));
  });
});
