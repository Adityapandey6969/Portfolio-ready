# Aditya Pandey's Portfolio Website

A modern, high-performance portfolio website showcasing Data Science, Full-Stack Development, and Machine Learning expertise with an engaging shadow fighting game theme animation.

## 🚀 Features

- **Modern Design**: Dark-mode portfolio with gradient accents and glass-morphism effects
- **Shadow Fighting Game Theme**: Animated background particles, shadow fighters, and battle effects
- **Responsive**: Fully responsive design for mobile, tablet, and desktop
- **Fast Performance**: Built with Next.js 14 for optimal speed and SEO
- **Interactive Animations**: Smooth scroll animations, game-card pop-ins, and continuous shader effects
- **Project Showcase**: Detailed project pages with tech stack and outcomes
- **Skills Visualization**: Animated skill bars with proficiency levels
- **Contact Form**: Easy-to-use contact form with fallback options

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, React Type Animation
- **Icons**: React Icons
- **UI Effects**: Custom Canvas animations, particle system

## 📋 Project Structure

```
aditya-portfolio/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── layout.tsx       # Root layout with global providers
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── projects/        # Projects listing and details
│   │   ├── skills/          # Skills showcase
│   │   └── contact/         # Contact page
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   └── ui/              # Reusable UI components
│   ├── data/                # Static data (projects, skills, etc.)
│   └── styles/              # Global CSS
├── public/                  # Static assets
├── package.json
└── tailwind.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone/navigate to the project directory:
```bash
cd d:\My_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📄 Pages

- **Home** (`/`): Hero section with typewriter effect, featured projects, and CTA
- **About** (`/about`): Detailed about me, education timeline, certifications
- **Skills** (`/skills`): Categorized skills with proficiency bars
- **Projects** (`/projects`): Filterable project grid with detailed pages
- **Contact** (`/contact`): Contact form and social links

## 🎨 Design System

### Colors
- **Primary**: `#2563EB` (Electric Blue)
- **Accent**: `#06B6D4` (Cyan)
- **Secondary**: `#0F172A` (Deep Navy)
- **Dark Background**: `#030712` (Rich Black)

### Typography
- **Headings**: Inter (700)
- **Body**: Inter (400)
- **Code**: JetBrains Mono

## 🎬 Animation Features

### Shadow Fighting Game Theme
- **Floating Shadow Particles**: Background particles with glowing cyan effects
- **Shadow Fighter**: Animated fighter silhouette with punching and kicking animations
- **Battle Slashes**: Real-time slash effects that appear randomly
- **Scroll Fighter**: Dynamic fighter that moves with scroll position
- **Game Cards**: Pop-in animation for content cards with scaling effect

## 📈 Performance Optimization

- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Tailwind CSS purging unused styles
- Font optimization with `font-display: swap`

## 🔍 SEO Features

- Meta tags and Open Graph support
- Semantic HTML structure
- Structured data (JSON-LD)
- Sitemap and robots.txt ready
- Fast load times for better SEO

## 📞 Contact Information

- **Email**: adityapandey2479@gmail.com
- **Phone**: +91 9713948039
- **Location**: Nagpur, Maharashtra, India
- **GitHub**: [github.com/](https://github.com/)
- **LinkedIn**: [linkedin.com/in/](https://linkedin.com/in/)

## 📝 Customization

### Update Personal Information
Edit `src/data/personal.ts` to update:
- Name, email, phone
- Social links
- Resume URL
- About content

### Update Projects
Edit `src/data/projects.ts` to add/modify projects with:
- Title, description, problem statement
- Tech stack and features
- GitHub links and live demos

### Update Skills
Edit `src/data/skills.ts` to modify:
- Skill categories and proficiency levels
- Skill icons and labels

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on push

```bash
# Or deploy manually
npm install -g vercel
vercel
```

### Deploy to Other Platforms

The project works with any Node.js hosting:
- Netlify
- Railway
- Heroku
- Self-hosted servers

## 📊 Project Statistics

- **Projects**: 6+
- **Skills**: 25+
- **Certifications**: 2
- **CGPA**: 8.09

## 🎯 Future Enhancements

- [ ] Blog section with MDX
- [ ] Project case studies
- [ ] Testimonials section
- [ ] GitHub activity widget
- [ ] Interactive resume
- [ ] Newsletter subscription

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

**Aditya Pandey**
- Data Science Student at RCOEM, Nagpur
- Full-Stack Developer & Machine Learning Enthusiast
- [Connect on LinkedIn](https://linkedin.com/in/)

---

Made with ⚡ and ❤️ using Next.js & Tailwind CSS
