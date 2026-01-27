document.addEventListener("DOMContentLoaded", () => {

  const installedMsg = document.getElementById("installed-msg");
  const installBtn = document.getElementById("install-btn");

  const isStandalone =
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true ||
    window.location.search.includes("standalone=true");

  if (isStandalone) {
    installedMsg.style.display = "block";

    setTimeout(() => {
      window.location.replace("https://jamqrshield.lovable.app/");
    }, 600);

    return;
  }

  let deferredPrompt;

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = "inline-block";
  });

  installBtn.addEventListener("click", () => {
    installBtn.style.display = "none";
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(() => {
      deferredPrompt = null;
    });
  });

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js");
  }
});
