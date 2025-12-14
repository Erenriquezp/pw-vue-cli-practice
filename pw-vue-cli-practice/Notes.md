### 🚀 Guía de Desarrollo Web: Vue 3 + Vite + Git

#### 1\. Creación de Proyecto (Vite)

[cite_start]Estos son los comandos modernos para iniciar un proyecto Vue rápido y ligero[cite: 1].

| Acción | Comando / Instrucción |
| :--- | :--- |
| **Verificar entorno** | `node -v` y `npm -v` |
| **Crear proyecto** | `npm create vite@latest` |
| **Configuración** | Nombre: `vue-vite-app` <br> Framework: `Vue` <br> Variante: `JavaScript` |
| **Instalar y correr** | 1. `cd vue-vite-app` <br> 2. `npm install` (instala dependencias) <br> 3. `npm run dev` (levanta el servidor local) |
| **Abrir en VS Code** | `code .` |
| **Url Local** | `http://localhost:5173` |

-----

#### 2\. Configuración del Proyecto y Dependencias

[cite_start]Ajustes necesarios una vez creado el proyecto[cite: 2].

  * **Instalar Axios** (para peticiones HTTP):

    ```bash
    npm install axios
    ```

  * **Configurar `vite.config.js`**:
    *Este código expone el servidor en la red local (host: true) y fija el puerto.*

    ```javascript
    export default defineConfig({
       plugins: [vue()],
       server: {
          host: true, // Permite acceso desde IP local
          port: 5173  // Fija el puerto
       }
    })
    ```

-----

#### 3\. Flujo de Trabajo con Git

[cite_start]Comandos para versionar tu código y subirlo a GitHub[cite: 2, 3].

**A. Configuración Global (Solo se hace una vez)**

  * Resetear credenciales (si hay errores de login): `git config --global --unset credential.helper`
  * Configurar usuario: `git config --global user.name "Erenriquezp"`
  * Configurar correo: `git config --global user.email "erenriquezp@uce.edu.ec"`
  * Verificar configuración: `git config --global --list`

**B. Iniciar Repositorio y Primer Commit**

1.  `git init` (Inicializar git en la carpeta)
2.  `git status` (Ver archivos modificados/nuevos)
3.  `git add .` (Preparar todos los archivos)
4.  `git commit -m "Initial commit: Vue 3 + Vite setup"` (Guardar cambios)

**C. Conectar con GitHub (Remote)**

1.  `git remote add origin https://github.com/Erenriquezp/pw-vite-practice.git`
2.  `git remote -v` (Verificar conexión)
3.  `git branch -M main` (Renombrar rama a main)
4.  `git push -u origin main` (Subir cambios)

-----

#### 4\. Entorno VS Code (Extensiones y Trucos)

[cite_start]Herramientas recomendadas para programar en Vue[cite: 3].

**Extensiones Esenciales:**

  * ✅ **Vue - Official (Volar):** Soporte oficial para Vue 3.
  * ✅ **TypeScript Vue Plugin:** Si usas TS.
  * 🧹 **ESLint:** Para encontrar errores y calidad de código.
  * 🎨 **Prettier:** Formateador de código automático.
  * 📂 **Path Intellisense:** Autocompletado de rutas de archivos.
  * 🔁 **Auto Rename Tag:** Renombra etiquetas de apertura/cierre a la vez.
  * 🚨 **Error Lens:** Muestra errores en la misma línea de código.

**Configuración de Emmet (HTML en Vue):**
Para que las abreviaciones de HTML funcionen dentro de las etiquetas `<template>` de Vue.

1.  Presiona `Ctrl + Shift + P`
2.  Escribe: `Preferences: Open Settings (JSON)`
3.  Agrega esto al archivo:
    ```json
    "emmet.includeLanguages": {
        "vue-html": "html",
        "vue": "html"
    }
    ```

**Atajo útil:** Escribir `vueinit` suele generar la estructura base de un componente (si tienes la extensión de Snippets).

-----

#### 5\. Vue CLI (Método Legacy/Alternativo)

[cite_start]Comandos para la herramienta anterior a Vite (útil para mantenimiento de proyectos viejos)[cite: 3].

  * **Instalar CLI globalmente:** `npm install -g @vue/cli`
  * **Verificar versión:** `vue --version`
  * **Crear proyecto:** `vue create vue-app`
  * **Correr servidor:** `npm run serve` (Nota: en Vite es `npm run dev`)
-----

### 1\. Interpolación (El Bigote `{{ }}`)

  * **Qué es:** La forma de imprimir texto en pantalla.
  * **Caso de uso:** Mostrar el puntaje, el nombre del usuario o los intentos.
  * **Sintaxis:** `{{ nombreVariable }}`
  * **Ejemplo:**
    ```html
    <h3>Puntaje: {{ puntaje }}</h3>
    ```

-----

### 2\. Enlace de Atributos (`:`) -\> `v-bind`

  * **Qué es:** Conecta una variable de JS a un atributo de una etiqueta HTML.
  * **Caso de uso:** Cambiar la imagen (`src`), desactivar un botón (`disabled`) o cambiar estilos dinámicamente (`class`, `style`).
  * **Sintaxis:** `:atributo="variable"`
  * **Ejemplo:**
    ```html
    <button :disabled="bloquear">Click</button>
    <img :src="url">
    ```

-----

### 3\. Escucha de Eventos (`@`) -\> `v-on`

  * **Qué es:** Detecta lo que hace el usuario (clics, teclas, mouse).
  * **Caso de uso:** Ejecutar una función cuando dan clic en "Jugar" o "Reiniciar".
  * **Sintaxis:** `@evento="funcion"`
  * **Ejemplo:**
    ```html
    <button @click="reiniciarJuego">Reiniciar</button>
    ```

-----

### 4\. Bucles (`v-for`)

  * **Qué es:** Repite un elemento HTML basándose en una lista.
  * **Caso de uso:** Crear los 4 botones de opciones de Pokémon sin copiar y pegar código.
  * **Sintaxis:** `v-for="item in lista" :key="item"` (**OJO:** El `:key` es obligatorio).
  * **Ejemplo:**
    ```html
    <button v-for="nombre in opciones" :key="nombre">
      {{ nombre }}
    </button>
    ```

-----

### 5\. Condicionales (`v-if` / `v-else`)

  * **Qué es:** Muestra u oculta elementos (los crea o destruye).
  * **Caso de uso:** Mostrar el mensaje de "Ganaste" o "Perdiste" solo cuando corresponda.
  * **Sintaxis:** `v-if="booleano"`
  * **Ejemplo:**
    ```html
    <div v-if="mensaje"> {{ mensaje }} </div>
    <div v-else> No hay mensajes </div>
    ```

-----

### 6\. Comunicación Hijo a Padre (`$emit`)

  * **Qué es:** El grito del hijo. Envía un aviso al componente padre.
  * **Caso de uso:** El botón está en el componente hijo, pero la lógica de puntos está en el padre. El hijo avisa "¡Me clickearon\!".
  * **Sintaxis:** `$emit('nombre-del-evento', dato)`
  * **Ejemplo (En el @click del botón del hijo):**
    ```html
    <button @click="$emit('seleccion', 'pikachu')">Elegir</button>
    ```

-----

### 7\. Comunicación Padre a Hijo (`props`)

  * **Qué es:** La herencia. Variables que el hijo recibe para poder trabajar.
  * **Caso de uso:** El padre tiene el puntaje y se lo pasa al componente hijo para que lo muestre.
  * **Sintaxis:** En el JS del hijo: `props: ['nombreProp']`
  * **Ejemplo:**
    ```javascript
    // En el script del Componente Hijo
    export default {
      props: ['puntaje', 'imagen', 'intentos']
    }
    ```

-----

### 8\. Ciclo de Vida (`mounted`)

  * **Qué es:** El momento exacto en que la pantalla termina de cargar.
  * **Caso de uso:** Llamar a la API (Axios) apenas entras a la página para que la imagen ya esté ahí.
  * **Sintaxis:** `mounted() { ... }` (va al mismo nivel que `data` y `methods`).
  * **Ejemplo:**
    ```javascript
    mounted() {
      this.cargarJuego(); // Llama a tu función principal al inicio
    }
    ```

-----

### ⚡ Resumen de Estructura (Options API)

Memoriza este esqueleto, es el contenedor de todo lo anterior:

```javascript
export default {
    // 1. Lo que recibo de mi padre
    props: ['dato1', 'dato2'], 
    
    // 2. Mis variables propias (Estado)
    data() {
        return {
            variable: 0,
            otraVariable: false
        }
    },
    
    // 3. Mis funciones (Lógica)
    methods: {
        miFuncion() {
            this.variable++; // Usa this para acceder a data
            this.$emit('evento'); // Avisa al padre
        }
    },
    
    // 4. Lo primero que hago al nacer
    mounted() {
        this.miFuncion();
    }
}
```