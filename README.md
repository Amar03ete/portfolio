# Amar's Portfolio Website

A modern, responsive portfolio website showcasing skills and experience as a Computer Science & Engineering graduate specializing in Data Science, Business Analytics, AI, and Python Development.

## 🚀 Features

- **Modern Space Theme**: Dark theme with animated stars, floating orbs, and cosmic effects
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Animations**: Smooth scrolling, hover effects, and entrance animations
- **Glass-morphism Design**: Modern UI with backdrop blur effects
- **Working Contact Form**: Functional email integration
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel/Netlify

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for cloning the repository)

## 🔧 Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Amar03ete/amar-portfolio.git
cd amar-portfolio
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

### 3. Start Development Server

Using npm:
```bash
npm run dev
```

Or using yarn:
```bash
yarn dev
```

The application will start on `http://localhost:5173`

### 4. Build for Production

Using npm:
```bash
npm run build
```

Or using yarn:
```bash
yarn build
```

### 5. Preview Production Build

Using npm:
```bash
npm run preview
```

Or using yarn:
```bash
yarn preview
```

## 📁 Project Structure

```
amar-portfolio/
├── public/
│   ├── vite.svg
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── hooks/
│   │   ├── useIntersectionObserver.ts
│   │   └── useScrollspy.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Personal Information
Update the following files with your information:

1. **Contact Details**: Update email, phone, and social links in:
   - `src/components/Contact.tsx`
   - `src/components/Footer.tsx`
   - `src/components/Hero.tsx`

2. **Profile Image**: Replace the image URL in `src/components/Hero.tsx`

3. **Resume**: Add your resume PDF to `public/resume.pdf`

4. **Social Links**: Update GitHub and LinkedIn URLs throughout the components

### Content Sections

- **About**: Modify `src/components/About.tsx`
- **Skills**: Update technical skills in `src/components/Skills.tsx`
- **Projects**: Add your projects in `src/components/Projects.tsx`
- **Education**: Update education details in `src/components/Education.tsx`
- **Experience**: Modify work experience in `src/components/Experience.tsx`

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Animations**: Customize animations in `src/index.css`
- **Layout**: Adjust responsive breakpoints in Tailwind classes

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

### Environment Variables
No environment variables are required for basic functionality.

## 📧 Contact Form Setup

The contact form currently uses `mailto:` links to open the user's default email client. For a more robust solution, consider integrating:

- **EmailJS** for client-side email sending
- **Formspree** for form handling
- **Netlify Forms** if deploying to Netlify

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.ts` or kill the process using the port
2. **Dependencies not installing**: Delete `node_modules` and `package-lock.json`, then run `npm install`
3. **Build errors**: Check TypeScript errors and fix them before building

### Performance Tips

- Optimize images before adding them
- Use WebP format for better compression
- Minimize custom CSS and rely on Tailwind utilities
- Test on different devices and browsers

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

##  Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide** for the beautiful icons
- **Vite** for the fast build tool

---

