# JAM QR Shield

Aplicación web progresiva (PWA) para instalar JAM QR Shield en dispositivos compatibles y abrir la aplicación principal alojada en [jamqrshield.lovable.app](https://jamqrshield.lovable.app/).

Este repositorio contiene la página de instalación. La aplicación principal se sirve desde el sitio enlazado.

## Idiomas

La página de instalación está disponible en español, inglés, francés, alemán y portugués. Selecciona el idioma desde el menú; la preferencia se guarda en el navegador. En la primera visita se usa el idioma preferido del navegador cuando está disponible y, en caso contrario, español.

## Funcionalidades

- Instalación de la PWA en navegadores compatibles.
- Detección del modo independiente y redirección a la aplicación principal.
- Manifiesto e iconos para añadirla a la pantalla de inicio.
- Interfaz adaptable a móvil y escritorio.

## Archivos

| Archivo | Descripción |
| --- | --- |
| `index.html` | Página de entrada y selector de idioma. |
| `app.js` | Traducciones, preferencia de idioma, instalación y redirección. |
| `manifest.json` | Configuración de la PWA. |
| `icon-192.png`, `icon-512.png` | Iconos de la aplicación. |
| `style.css` | Estilos de la página. |
| `sw.js` | Service worker. |

## Ejecución local

Sirve los archivos desde un servidor web local:

```bash
python -m http.server 8000
```

Abre [http://localhost:8000](http://localhost:8000). Para probar la instalación, publica el sitio mediante HTTPS; `localhost` también suele admitirse para desarrollo.

## Publicación

Publica el contenido de este directorio en la raíz del sitio, por ejemplo con GitHub Pages. El manifiesto usa la raíz como `start_url`; si publicas en una ruta de proyecto (por ejemplo, `usuario.github.io/repositorio/`), ajusta `start_url` y las rutas de recursos para que incluyan esa ruta.

## Tecnologías

- HTML, CSS y JavaScript
- Web App Manifest
- Service Workers
