/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],// lo que hace es que va a buscar en ese mismo directorio(src) y ** va a  buscar todos los archivos que esten dentro de src, y luego .*.jsx esto lo que hace es que va a entrar a src y va a buscar todos los archivos en las diferentes carpetas y busca todos los que tenganjsx porque son nuestros componentes react y ahi es donde vamos a aplicar la clases de tailwind
  theme: {
    extend: {},
  },
  plugins: [],
}

