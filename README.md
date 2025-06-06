# CodeForge - Online Code Editor

![CodeForge Banner](https://ibb.co/XffcH7HP)

<div align="center">
  
  ![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?logo=vite&logoColor=white)
  ![CodeMirror](https://img.shields.io/badge/CodeMirror-6-d30707?logo=codemirror&logoColor=white)
  ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.8-38B2AC?logo=tailwind-css&logoColor=white)
  
</div>

## 🌟 Overview

**CodeForge** is a powerful, lightweight code editor inspired by CodePen that runs in your browser. Write HTML, CSS, and JavaScript in separate panes and see your changes rendered in real-time. Perfect for web development experimentation, code sharing, and prototyping.

![CodeForge Screenshot](https://i.imgur.com/placeholder-screenshot.png)

## ✨ Features

- **Live Preview**: See your code changes instantly reflected in the preview pane
- **Syntax Highlighting**: Full syntax highlighting for HTML, CSS, and JavaScript
- **Collapsible Panes**: Maximize your workspace by collapsing editor panes you're not using
- **Material Theme**: Easy-on-the-eyes dark theme for comfortable coding
- **Modern Editor**: Powered by CodeMirror 6 for a smooth editing experience
- **Sandboxed Environment**: JavaScript executes in a sandboxed iframe for security
- **Responsive Design**: Works on desktop and tablet devices

## 🚀 Quick Start

### Online Demo

> 💡 Live demo coming soon!

### Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Pratham279/CodeForge.git
   cd CodeForge
   ```

2. Install dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## 🔧 Technologies

- **Frontend Framework**: React 19
- **Build Tool**: Vite 6
- **Code Editor**: CodeMirror 6
- **Styling**: TailwindCSS
- **Icons**: Lucide React

## 📦 Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/
│   │   └── Editor.jsx   # Code editor component
│   ├── assets/          # Images and icons
│   ├── App.jsx          # Main application
│   ├── App.css          # Application styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## 📚 How It Works

CodeForge combines three CodeMirror editors for HTML, CSS, and JavaScript. When you type in any of these editors, your code is combined into a single HTML document and rendered in the preview pane:

1. **HTML Editor**: Write your HTML structure
2. **CSS Editor**: Style your HTML elements
3. **JavaScript Editor**: Add interactivity to your page
4. **Preview Pane**: See the combined result in real-time

The app uses React's `useEffect` hook with a short delay to prevent constant re-rendering while typing, making the experience smooth and responsive.

## 🏗️ Building for Production

To build the project for production:

```bash
cd frontend
npm run build
```

This will generate optimized files in the `dist` directory that you can deploy to any static hosting service.

## 🔍 Deployment Options

You can deploy CodeForge to various platforms:

- **Vercel**: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2FCodeForge)
- **Netlify**: [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/CodeForge)
- **GitHub Pages**: Deploy the built files to GitHub Pages
- **Any Static Host**: Upload the `dist` directory to any static hosting service

## 🔮 Roadmap

- [ ] Save and share code snippets with unique URLs
- [ ] Add more themes (light theme, high contrast, etc.)
- [ ] Support for preprocessors (SCSS, TypeScript, etc.)
- [ ] Import external libraries and frameworks
- [ ] User accounts to save and organize projects
- [ ] Responsive layout for mobile devices
- [ ] Collaborative editing features

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch: `git checkout -b my-new-feature`
3. Make your changes and commit: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [CodeMirror](https://codemirror.net/) - Text editor component
- [TailwindCSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/Pratham279">Pratham Malavia</a>
</div>
