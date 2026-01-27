document.addEventListener("DOMContentLoaded", () => {

  const installedMsg = document.getElementById("installed-msg");
  const installBtn = document.getElementById("install-btn");

  // Detectar si está en modo app (standalone)
  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true ||
    window.location.search.includes("standalone=true");

  // Si está instalada → mostrar mensaje y redirigir
  if (isStandalone) {
    installedMsg.style.display = "block";

    setTimeout(() => {
      window.location.replace("jamqrshield.lovable.app/");
    }, 600);

    return;
  }

  // Manejo del evento de instalación
  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "inline-block";
  });

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choice) => {
      if (choice.outcome === "accepted") {
        console.log("App instalada");
      }
      deferredPrompt = null;
    });
  });

  // Registrar service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
