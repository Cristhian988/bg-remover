# Cliente Frontend BG-Remove

Aplicación React moderna y receptiva para la eliminación inteligente de fondos con interfaz de usuario profesional construida con tecnologías web de última generación.

## 📋 Descripción del Proyecto

BG-Remove Frontend es una aplicación web sofisticada que proporciona a los usuarios una interfaz intuitiva para eliminar fondos de imágenes. La aplicación incluye:

- **Diseño Receptivo**: Funciona sin problemas en dispositivos de escritorio, tableta y móviles
- **Interfaz Amigable**: Interfaz intuitiva para eliminar fondos fácilmente
- **Vista Previa en Tiempo Real**: Retroalimentación visual instantánea con comparativas antes/después
- **Componentes Profesionales**: Componentes React modulares y reutilizables
- **Estilos Modernos**: Diseño limpio y moderno usando Tailwind CSS
- **Seguridad de Tipos**: Soporte completo de TypeScript para código robusto
- **Página de Resultados**: Visualización comparativa de imágenes originales y procesadas

## 🛠️ Stack Tecnológico

| Categoría              | Tecnología     | Versión |
| ---------------------- | -------------- | ------- |
| **Framework Frontend** | React          | 19.2.0  |
| **Herramienta Build**  | Vite           | 7.2.4   |
| **Lenguaje**           | TypeScript     | ~5.9.3  |
| **Estilos**            | Tailwind CSS   | 4.1.18  |
| **Enrutamiento**       | React Router   | 7.12.0  |
| **Librería Iconos**    | Remix Icon     | 4.8.0   |
| **Notificaciones**     | React Toastify | 11.0.5  |
| **Calidad Código**     | ESLint         | 9.39.1  |

## 📦 Instalación

### Requisitos Previos

- **Node.js**: Versión 16 o superior
- **npm** o **yarn**: Gestor de paquetes
- **Git**: Para control de versiones

### Pasos de Configuración

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tuusuario/bg-remove.git
   cd bg-remove
   ```

2. **Navegar a la carpeta cliente**:

   ```bash
   cd client
   ```

3. **Instalar dependencias**:

   ```bash
   npm install
   ```

   O con yarn:

   ```bash
   yarn install
   ```

4. **Crear configuración de ambiente** (opcional):

   ```bash
   cp .env.example .env.local
   ```

5. **Iniciar el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

## 🚀 Comandos de Desarrollo

### Servidor de Desarrollo

```bash
npm run dev
```

Inicia el servidor de desarrollo Vite con Hot Module Replacement (HMR).

- **Acceso**: `http://localhost:5173`
- **Recarga automática**: Los cambios se reflejan instantáneamente en el navegador

### Compilación de Producción

```bash
npm run build
```

Compila TypeScript y empaqueta la aplicación para producción.

- **Salida**: Carpeta `dist/`
- **Optimizado**: Minificado y tree-shaken para mejor rendimiento

### Vista Previa de Compilación de Producción

```bash
npm run preview
```

Sirve la compilación de producción localmente para pruebas antes del despliegue.

- **Acceso**: Generalmente `http://localhost:4173`

### Linting y Formateo

```bash
npm run lint
```

Ejecuta ESLint para identificar y corregir problemas de calidad del código.

- **Auto-corrección**: Corrige automáticamente muchos problemas
- **Validación**: Asegura que el código siga los estándares del proyecto

## 📁 Estructura de Carpetas

```
client/
├── public/                          # Activos estáticos (favicon, etc.)
│
├── src/
│   ├── components/                 # Componentes React reutilizables
│   │   ├── BgSlider.tsx           # Deslizador interactivo de fondos
│   │   ├── Footer.tsx             # Pie de página
│   │   ├── Header.tsx             # Encabezado de página
│   │   ├── Navbar.tsx             # Barra de navegación
│   │   ├── Steps.tsx              # Visualización de pasos/proceso
│   │   ├── Testimonials.tsx       # Sección de testimonios
│   │   ├── Title.tsx              # Componente de título de página
│   │   └── Upload.tsx             # Componente de carga de imágenes
│   │
│   ├── context/                   # React Context API
│   │   └── [archivos context]     # Gestión de estado global
│   │
│   ├── pages/                     # Componentes de nivel de página
│   │   ├── Home.tsx               # Página de inicio/bienvenida
│   │   ├── Result.tsx             # Página de visualización de resultados procesados
│   │   └── BuyCredit.tsx          # Página de compra de créditos
│   │
│   ├── assets/                    # Imágenes y recursos estáticos
│   │   └── assets.tsx             # Definiciones de activos
│   │
│   ├── App.tsx                    # Componente raíz de la aplicación
│   ├── main.tsx                   # Punto de entrada de la aplicación
│   ├── index.css                  # Estilos globales
│   └── vite-env.d.ts              # Tipos de ambiente de Vite
│
├── package.json                    # Dependencias y scripts
├── tsconfig.json                   # Configuración de TypeScript
├── tsconfig.app.json              # Configuración TS específica de la app
├── tsconfig.node.json             # Configuración TS específica de Node
├── vite.config.ts                 # Configuración de build de Vite
├── eslint.config.js               # Reglas de ESLint
├── index.html                     # Punto de entrada HTML
├── README.md                       # Este archivo
└── .gitignore                      # Patrones de ignore de Git
```

### Arquitectura de Componentes

- **BgSlider**: Componente deslizador para efectos de comparación de fondos
- **Upload**: Maneja cargas de archivos de imagen y validación
- **Navbar**: Menú de navegación con enrutamiento
- **Header & Footer**: Componentes de diseño
- **Steps & Testimonials**: Componentes de visualización de contenido
- **Home**: Página de inicio principal
- **Result**: Muestra resultados de imágenes procesadas
- **BuyCredit**: Gestión de créditos/suscripciones de usuarios

## 🔧 Configuración

### Configuración de Vite (`vite.config.ts`)

- Integración del plugin React
- Configuración de optimización de build
- Configuración del servidor de desarrollo

### Configuración de TypeScript (`tsconfig.json`)

- Verificación de tipos estricta habilitada
- Target ES2020
- Soporte JSX para React

### Configuración de ESLint (`eslint.config.js`)

- Reglas de React y React Hooks
- Soporte de TypeScript
- Aplicación de estilo de código

## 🌍 Variables de Ambiente

Crea un archivo `.env.local` en el directorio del cliente:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=BG-Remove
```

Acceso en el código:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🎨 Características Implementadas

### Result Page (`src/pages/Result.tsx`)
La página de resultados proporciona una experiencia visual clara para los usuarios después de procesar una imagen:

**Componentes Principales:**
- **Comparativa Visual**: Muestra lado a lado la imagen original y el resultado procesado
- **Interfaz Limpia**: Diseño minimalista con tarjeta blanca redondeada y sombra sutil
- **Botones Funcionales**:
  - "Probar con otra imagen": Redirige a la página de inicio para subir una nueva imagen
  - "Descargar imagen": Permite descargar la imagen sin fondo en formato PNG
- **Diseño Responsivo**: Adaptado para móviles (una columna) y desktop (dos columnas)

**Características Técnicas:**
- Uso de React Router para navegación entre páginas
- Integración con el sistema de assets centralizado
- Estilos responsivos usando Tailwind CSS con breakpoints sm y lg
- Accesibilidad mejorada con atributos `alt` descriptivos en imágenes
- Componente funcional escrito en TypeScript
- Animaciones de hover con transiciones suaves

**Mejoras de Accesibilidad:**
- Alt text descriptivo para todas las imágenes
- Aria-labels en botones interactivos
- Semántica HTML adecuada con elementos semánticos
- Navegación clara y funcional
- Contraste de colores suficiente para WCAG compliance

### Buy Credit Page (`src/pages/BuyCredit.tsx`)
La página de compra de créditos permite a los usuarios adquirir paquetes de créditos para procesar más imágenes:

**Componentes Principales:**
- **Visualización de Planes**: Muestra tarjetas con los diferentes planes disponibles
- **Información de Precios**: Cada plan muestra el precio y cantidad de créditos incluidos
- **Botón de Compra**: Cada tarjeta tiene un botón "Purchase" para adquirir el plan
- **Diseño Responsivo**: Layout flexible que se adapta a diferentes tamaños de pantalla

**Características Técnicas:**
- Integración con datos de planes desde el sistema de assets
- Componente de titulo reutilizable
- Grid flexible con Tailwind CSS para disposición de tarjetas
- Efectos hover suave con escala y transiciones
- Componente funcional tipado en TypeScript

**Planes Disponibles:**
- **Basic**: $10 - 100 créditos (para uso personal)
- **Advanced**: $50 - 500 créditos (para uso empresarial)
- **Business**: $250 - 5000 créditos (para uso empresarial)

**Mejoras de Interfaz:**
- Tarjetas con sombra drop-shadow para profundidad visual
- Bordes redondeados y espaciado consistente
- Animaciones hover que mejoran la experiencia del usuario
- Contraste de colores claros para buena legibilidad

## 🚀 Despliegue

### Vercel (Recomendado)

1. Envía código a GitHub
2. Conecta el repositorio a Vercel
3. Despliegue automático al hacer push a main

### Netlify

1. Conecta el repositorio de GitHub
2. Configura comando de build: `npm run build`
3. Configura directorio de publicación: `dist`

### Docker

```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Servidor Tradicional

```bash
npm run build
# Sube la carpeta dist/ al servidor web
```

## 📝 Flujo de Trabajo de Desarrollo

1. **Crea una rama de característica**:

   ```bash
   git checkout -b feature/nombre-de-tu-caracteristica
   ```

2. **Realiza tus cambios** y prueba localmente

3. **Haz commit con commits convencionales**:

   ```bash
   git commit -m "feat: agregar descripción de nueva característica"
   ```

4. **Envía tu rama**:

   ```bash
   git push origin feature/nombre-de-tu-caracteristica
   ```

5. **Crea una Pull Request** en GitHub

## ✅ Estándares de Calidad del Código

- **TypeScript**: Modo estricto habilitado para seguridad de tipos
- **ESLint**: Aplicación de reglas de calidad de código
- **Estructura de Componentes**: Componentes funcionales con hooks
- **Convenciones de Nombres**: camelCase para variables/funciones, PascalCase para componentes
- **Props**: Correctamente tipados usando interfaces de TypeScript

## 🔄 Flujo de Git

- **main**: Código listo para producción
- **develop**: Rama de integración para características
- **feature/\***: Ramas de características para nueva funcionalidad
- **bugfix/\***: Ramas de corrección de errores
- **docs/\***: Actualizaciones de documentación

## 📚 Recursos

- [Documentación de React](https://react.dev)
- [Documentación de Vite](https://vitejs.dev)
- [Manual de TypeScript](https://www.typescriptlang.org/docs/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de React Router](https://reactrouter.com)

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor:

1. Haz un fork del repositorio
2. Crea una rama de característica (`feature/caracteristica-increible`)
3. Haz commit de los cambios con mensajes claros
4. Envía a tu fork
5. Abre una Pull Request

## 📄 Licencia

Este proyecto está bajo licencia MIT - ve el archivo LICENSE para más detalles.

## 💬 Soporte y Contacto

Para problemas, preguntas o sugerencias:

- Abre un issue en GitHub
- Contacta al equipo de desarrollo

---

**Última Actualización**: Enero 2026  
**Versión**: 1.0.0 - Feature: Result Page  
**Mantenido Por**: Equipo de Desarrollo
