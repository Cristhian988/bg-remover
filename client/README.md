# BG-Remove Frontend Client

A modern, responsive React application for intelligent background removal with a professional user interface built with the latest web technologies.

## 📋 Project Description

BG-Remove Frontend is a sophisticated web application that provides users with an intuitive interface to remove backgrounds from images. The application features:

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **User-Friendly Interface**: Intuitive UI for easy background removal
- **Real-time Preview**: Instant visual feedback with before/after comparisons
- **Professional Components**: Modular, reusable React components
- **Modern Styling**: Clean, modern design using Tailwind CSS
- **Type Safety**: Full TypeScript support for robust code

## 🛠️ Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Frontend Framework** | React | 19.2.0 |
| **Build Tool** | Vite | 7.2.4 |
| **Language** | TypeScript | ~5.9.3 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **Routing** | React Router | 7.12.0 |
| **Icon Library** | Remix Icon | 4.8.0 |
| **Notifications** | React Toastify | 11.0.5 |
| **Code Quality** | ESLint | 9.39.1 |

## 📦 Installation

### Prerequisites

- **Node.js**: Version 16 or higher
- **npm** or **yarn**: Package manager
- **Git**: For version control

### Setup Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/bg-remove.git
   cd bg-remove
   ```

2. **Navigate to the client folder**:
   ```bash
   cd client
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```
   Or with yarn:
   ```bash
   yarn install
   ```

4. **Create environment configuration** (optional):
   ```bash
   cp .env.example .env.local
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🚀 Development Commands

### Development Server
```bash
npm run dev
```
Starts the Vite development server with Hot Module Replacement (HMR).
- **Access**: `http://localhost:5173`
- **Auto-reload**: Changes reflect instantly in the browser

### Production Build
```bash
npm run build
```
Compiles TypeScript and bundles the application for production.
- **Output**: `dist/` folder
- **Optimized**: Minified and tree-shaken for best performance

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally for testing before deployment.
- **Access**: Usually `http://localhost:4173`

### Lint and Format
```bash
npm run lint
```
Runs ESLint to identify and fix code quality issues.
- **Auto-fix**: Automatically fixes many issues
- **Validation**: Ensures code follows project standards

## 📁 Folder Structure

```
client/
├── public/                          # Static assets (favicon, etc.)
│
├── src/
│   ├── components/                 # Reusable React components
│   │   ├── BgSlider.tsx           # Interactive background slider
│   │   ├── Footer.tsx             # Application footer
│   │   ├── Header.tsx             # Page header
│   │   ├── Navbar.tsx             # Navigation bar
│   │   ├── Steps.tsx              # Steps/process display
│   │   ├── Testimonials.tsx       # User testimonials section
│   │   ├── Title.tsx              # Page title component
│   │   └── Upload.tsx             # Image upload component
│   │
│   ├── context/                   # React Context API
│   │   └── [context files]        # Global state management
│   │
│   ├── pages/                     # Page-level components
│   │   ├── Home.tsx               # Landing/home page
│   │   ├── Result.tsx             # Results display page
│   │   └── BuyCreadit.tsx         # Credit purchase page
│   │
│   ├── assets/                    # Images and static resources
│   │   └── assets.tsx             # Asset definitions
│   │
│   ├── App.tsx                    # Root application component
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles
│   └── vite-env.d.ts              # Vite environment types
│
├── package.json                    # Dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── tsconfig.app.json              # App-specific TS config
├── tsconfig.node.json             # Node-specific TS config
├── vite.config.ts                 # Vite build configuration
├── eslint.config.js               # ESLint rules
├── index.html                     # HTML entry point
├── README.md                       # This file
└── .gitignore                      # Git ignore patterns
```

### Component Architecture

- **BgSlider**: Slider component for background comparison effects
- **Upload**: Handles image file uploads and validation
- **Navbar**: Navigation menu with routing
- **Header & Footer**: Layout components
- **Steps & Testimonials**: Content display components
- **Home**: Main landing page
- **Result**: Displays processed image results
- **BuyCreadit**: User credit/subscription management

## 🔧 Configuration

### Vite Configuration (`vite.config.ts`)
- React plugin integration
- Build optimization settings
- Development server configuration

### TypeScript Configuration (`tsconfig.json`)
- Strict type checking enabled
- ES2020 target
- JSX support for React

### ESLint Configuration (`eslint.config.js`)
- React and React Hooks rules
- TypeScript support
- Code style enforcement

## 🌍 Environment Variables

Create a `.env.local` file in the client directory:

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=BG-Remove
```

Access in code:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deployment on push to main

### Netlify
1. Connect GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

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

### Traditional Server
```bash
npm run build
# Upload dist/ folder to web server
```

## 📝 Development Workflow

1. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** and test locally

3. **Commit with conventional commits**:
   ```bash
   git commit -m "feat: add new feature description"
   ```

4. **Push your branch**:
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request** on GitHub

## ✅ Code Quality Standards

- **TypeScript**: Strict mode enabled for type safety
- **ESLint**: Enforce code quality rules
- **Component Structure**: Functional components with hooks
- **Naming Conventions**: camelCase for variables/functions, PascalCase for components
- **Props**: Properly typed using TypeScript interfaces

## 🔄 Git Workflow

- **main**: Production-ready code
- **develop**: Integration branch for features
- **feature/***: Feature branches for new functionality
- **bugfix/***: Bug fix branches
- **docs/***: Documentation updates

## 📚 Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com)

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`feature/amazing-feature`)
3. Commit changes with clear messages
4. Push to your fork
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 💬 Support & Contact

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact the development team

---

**Last Updated**: January 2026  
**Maintained By**: Development Team
