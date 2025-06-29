# Generated Portfolio Website

This portfolio website was generated using **PortGen - Dynamic Portfolio Generator**. It's a fully functional React application that showcases your professional profile, skills, projects, and experience.

## Project Structure

```
portfolio/
├── .idea/                          # IDE configuration files
├── node_modules/                   # Dependencies (created after npm install)
├── public/
│   ├── index.html                  # Main HTML template
│   └── images/
│       └── favicon.png             # Site favicon (customizable)
├── src/
│   ├── components/                 # React components
│   │   ├── HeroSection.js          # Hero/landing section
│   │   ├── About.js                # About section
│   │   ├── Contact.js              # Contact information
│   │   ├── Skills.js               # Skills showcase
│   │   ├── Works.js                # Projects gallery
│   │   ├── WorkCard.js             # Individual project card
│   │   ├── Main.js                 # Main layout component
│   │   ├── Education.js            # Education timeline
│   │   └── navbar/
│   │       ├── Navbar.js           # Navigation bar
│   │       └── NavLinks.js         # Navigation links
│   ├── data/
│   │   ├── resume.pdf              # Your resume file
│   │   └── WorkData.js             # Portfolio data configuration
│   ├── images/                     # Static assets
│   │   ├── bg/                     # Background images
│   │   └── icons/                  # Skill and technology icons
│   ├── pages/
│   │   └── HomePage.js             # Main homepage component
│   ├── screen/
│   │   └── App.js                  # Root application component
│   └── styles/                     # CSS stylesheets
│       ├── App.css
│       ├── HeroSection.css
│       ├── About.css
│       ├── Skills.css
│       ├── Works.css
│       ├── Education.css
│       └── Contact.css
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file
└── README.md                       # This file
```

## Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)

### Installation & Setup

1. **Extract the ZIP file** to your desired location
2. **Navigate to the project directory**:
   ```bash
   cd portfolio
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to:
   ```
   http://localhost:3001
   ```

The portfolio website will automatically reload when you make changes to the code.

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3001](http://localhost:3001).
- Hot reload enabled for live editing
- Console shows lint errors and warnings

### `npm run build`
Creates an optimized production build in the `build/` folder.
- Minified and optimized for best performance
- Ready for deployment to any web server

### `npm test`
Launches the test runner in interactive watch mode.

## Customization Guide

### 1. **Personal Information**
Edit `src/components/HeroSection.js`, `src/components/Contact.js` and `src/components/NavBar.js` to update:
- Personal details (name, title, bio)
- Contact information
- Social media links
- Skills and technologies
- Project details
- Education and certifications

### 2. **Resume**
Replace `src/data/resume.pdf` with your own resume file (keep the same filename).

### 3. **Favicon**
Replace `public/images/favicon.png` with your own favicon (recommended size: 32x32px or 16x16px).

### 4. **Images & Assets**
- **Background images**: Add/replace files in `src/images`
- **Skill icons**: Add/replace files in `src/images`
- **Profile pictures**: Add your images to `src/images`

Update image paths in components and `WorkData.js` accordingly.

### 5. **Styling & Colors**
Customize the look and feel by editing CSS files in `src/styles/`:
- `App.css` - Global styles and color variables
- `HeroSection.css` - Landing section styling
- `About.css` - About section styling
- `Skills.css` - Skills section styling
- `Works.css` - Projects section styling
- `Education.css` - Education section styling
- `Contact.css` - Contact section styling

### 6. **Adding New Sections**
To add new sections:
1. Create a new component in `src/components/`
2. Add corresponding CSS file in `src/styles/`
3. Import and use in `src/pages/HomePage.js`
4. Add navigation link in `src/components/navbar/NavLinks.js`

### 7. **Modifying Existing Components**

#### **Hero Section**
- Update introduction text
- Modify call-to-action buttons
- Change background or animations

#### **About Section**
- Edit biography and description
- Update profile image
- Modify layout and content

#### **Skills Section**
- Add/remove skill categories
- Update skill icons and names
- Modify proficiency indicators

#### **Projects Section**
- Update project information in `WorkData.js`
- Modify project card layout in `WorkCard.js`
- Add/remove project filtering options

#### **Navigation**
- Update navigation link types in `NavLinks.js`
- Modify navbar links, styling and behavior in `Navbar.js`

## Deployment

### Option 1: Netlify (Recommended)
1. Run `npm run build`
2. Drag and drop the `build/` folder to [Netlify](https://netlify.com)
3. Your site will be live instantly!

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts to deploy

### Option 3: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

### Option 4: Traditional Web Hosting
1. Run `npm run build`
2. Upload the contents of the `build/` folder to your web server
3. Configure your server to serve `index.html` for all routes

## Troubleshooting

### Common Issues:

1. **Dependencies not installing**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Images not loading**:
   - Check file paths in `WorkData.js`
   - Ensure images are in the correct directories
   - Verify file extensions match

3. **Build fails**:
   - Check for syntax errors in JavaScript files
   - Ensure all imports are correct
   - Run `npm start` first to catch development errors

4. **Styling issues**:
   - Clear browser cache
   - Check CSS file imports
   - Verify class names match between JS and CSS files

## Responsive Design

This portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1440px and up)

## License

This generated portfolio is yours to use, modify, and deploy as you wish. Feel free to customize it to match your personal brand and requirements.

## Support

If you need help customizing your portfolio:
- Check the component files for inline comments
- Refer to [React documentation](https://reactjs.org/docs) for React-specific questions
- Review CSS files for styling guidance

---

**Generated by**: [PortGen - Dynamic Portfolio Generator](https://github.com/Ashish110411/PortGen)  
**Generated on**: June 29, 2025  
**Template Version**: 1.0.0

**Congratulations on your new portfolio website!** Make it uniquely yours by customizing the content, colors, and layout to reflect your personal brand.
