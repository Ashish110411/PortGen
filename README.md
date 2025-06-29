# PortGen - Dynamic Portfolio Generator

A modern, dynamic portfolio generator that creates personalized portfolio websites with customizable content, animations, and responsive design. Built with React frontend form for data collection and Spring Boot backend for portfolio generation.

## Features

The system is built with a scalable architecture that provides the following features:

#### Frontend Form Interface (React)
- **Data Collection Form**:
  - Personal information capture.
  - Role and skills selection with dynamic categories
  - Project details input with links and descriptions
  - Education and certification entries
  - Resume upload functionality
- **Interactive UI**:
  - Real-time form validation
  - Progress indicators for multi-step forms
  - Preview capabilities before generation
  - Responsive design for all devices
  - Dark mode interface with smooth animations

#### Backend Services (Spring Boot)
- **Portfolio Generation Engine**:
  - Template-based React portfolio creation
  - Dynamic content injection from form data
  - Icon and asset management system
  - ZIP file generation with complete portfolio structure
- **Template Processing**:
  - Resource bundling and optimization
  - Automated file structure creation
  - Cross-platform compatibility

#### Generated Portfolio Output
- **Complete React Application**:
  - Hero section with personalized roles and introduction
  - About section with bio and contact information
  - Skills showcase with categorized technology stacks
  - Projects gallery with live links and descriptions
  - Education timeline with certifications
  - Resume download functionality
- **Professional Design**:
  - Modern dark theme with elegant animations
  - Fully responsive across all devices
  - SEO-optimized structure
  - Fast loading with optimized assets

### System Architecture

#### High-Level Architecture Overview

```
┌─────────────────────┐    Form Data    ┌─────────────────────┐
│   pg-frontend/      │ ──────────────► │   pg-backend/       │
│                     │                 │                     │
│ • Data Collection   │                 │ • Template Engine   │
│ • Form Validation   │                 │ • Asset Management  │
│ • User Interface    │                 │ • ZIP Generation    │
│ • Progress Tracking │                 │ • API Processing    │
└─────────────────────┘                 └─────────────────────┘
                                                   │
                                                   ▼
                                        ┌─────────────────────┐
                                        │   Generated ZIP     │
                                        │                     │
                                        │ portfolio/          │
                                        │ ├── public/         │
                                        │ ├── src/            │
                                        │ │   ├── components/ │
                                        │ │   ├── styles/     │
                                        │ │   ├── images/     │
                                        │ │   ├── data/       │
                                        │ │   └── App.js      │
                                        │ ├── package.json    │
                                        │ └── README.md       │
                                        └─────────────────────┘
```

#### Detailed Technical Architecture

```
                    ┌───────────────────────────────────────────┐
                    │              USER INTERFACE               │
                    │          (Browser - Port 3000)            │
                    └─────────────────┬─────────────────────────┘
                                      │
                                      ▼
                    ┌───────────────────────────────────────────┐
                    │            FRONTEND LAYER                 │
                    │          pg-frontend/ (React)             │
                    ├───────────────────────────────────────────┤
                    │ • Multi-step Form Components              │
                    │ • State Management (React Hooks)          │
                    │ • Form Validation (Real-time)             │
                    │ • File Upload Handler                     │
                    │ • API Integration Layer                   │
                    │ • Responsive UI Components                │
                    └─────────────────┬─────────────────────────┘
                                      │ HTTP/REST API
                                      │ POST /api/portfolio/generate
                                      ▼
                    ┌───────────────────────────────────────────┐
                    │             BACKEND LAYER                 │
                    │        pg-backend/ (Spring Boot)          │
                    ├───────────────────────────────────────────┤
                    │ ┌─────────────────────────────────────┐   │
                    │ │        REST Controller              │   │
                    │ │   • @PostMapping /generate          │   │
                    │ │   • Request Validation              │   │
                    │ │   • Error Handling                  │   │
                    │ └─────────────────────────────────────┘   │
                    │                    │                      │
                    │                    ▼                      │
                    │ ┌─────────────────────────────────────┐   │
                    │ │      Portfolio Service              │   │
                    │ │   • Data Processing                 │   │
                    │ │   • Template Coordination           │   │
                    │ │   • Business Logic                  │   │
                    │ └─────────────────────────────────────┘   │
                    │                    │                      │
                    │                    ▼                      │
                    │ ┌─────────────────────────────────────┐   │
                    │ │     Template Engine                 │   │
                    │ │   • Variable Injection              │   │
                    │ │   • File Processing                 │   │
                    │ │   • Resource Management             │   │
                    │ └─────────────────────────────────────┘   │
                    │                    │                      │
                    │                    ▼                      │
                    │ ┌─────────────────────────────────────┐   │
                    │ │      Asset Manager                  │   │
                    │ │   • Icon Repository                 │   │
                    │ │   • Image Processing                │   │
                    │ │   • Static Resources                │   │
                    │ └─────────────────────────────────────┘   │
                    │                    │                      │
                    │                    ▼                      │
                    │ ┌─────────────────────────────────────┐   │
                    │ │       ZIP Generator                 │   │
                    │ │   • File Structure Creation         │   │
                    │ │   • Archive Compression             │   │
                    │ │   • Download Response               │   │
                    │ └─────────────────────────────────────┘   │
                    └─────────────────┬─────────────────────────┘
                                      │
                                      ▼
                    ┌───────────────────────────────────────────┐
                    │            OUTPUT LAYER                   │
                    │        Generated Portfolio ZIP            │
                    ├───────────────────────────────────────────┤
                    │   ↓ User Downloads & Deploys              │
                    │                                           │
                    │  ┌─────────────────────────────────────┐  │
                    │  │     Deployed Portfolio Website      │  │
                    │  │                                     │  │
                    │  │ • Fully Functional React App        │  │
                    │  │ • Ready for Production              │  │
                    │  │ • Customized Content                │  │
                    │  │ • Professional Design               │  │
                    │  │ • SEO Optimized                     │  │
                    │  └─────────────────────────────────────┘  │
                    └───────────────────────────────────────────┘
```

#### Container Architecture (Docker)

```
Docker Environment
├─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  ┌─────────────────────────┐      ┌─────────────────────────────┐   │
│  │    Frontend Container   │      │     Backend Container       │   │
│  │   (pg-frontend)         │      │      (pg-backend)           │   │
│  │                         │      │                             │   │
│  │ • Node.js 22-alpine     │◄────►│ • OpenJDK 21-jdk-slim       │   │
│  │ • React App (Port 3000) │      │ • Spring Boot (Port 8080)   │   │
│  │ • Nginx/Serve           │      │ • Maven Build               │   │
│  │ • Form Components       │      │ • Template Engine           │   │
│  │ • State Management      │      │ • ZIP Generation            │   │
│  └─────────────────────────┘      └─────────────────────────────┘   │
│              │                                    │                 │
│              └────────────────────────────────────┘                 │
│                        Docker Network                               │
│                     (portgen-network)                               │
│                                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    Volume Mounts                            │    │
│  │                                                             │    │
│  │ • Backend Templates   /app/src/main/resources/templates/    │    │
│  │ • Asset Repository    /app/src/main/resources/static/       │    │
│  │ • Generated Files     /tmp/portfolios/                      │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘

External Access:
• Frontend: http://localhost:3000
• Backend API: http://localhost:8080
• Health Check: http://localhost:8080/actuator/health
```

### Application Flow

1. **User Input**: Fill out the comprehensive form with personal and professional details
2. **Data Validation**: Real-time validation ensures complete and accurate information
3. **Template Processing**: Backend processes form data and injects into React templates
4. **Asset Integration**: Icons, images, and resources are bundled automatically
5. **Portfolio Generation**: Complete React application is generated and packaged
6. **ZIP Download**: User receives a ready-to-deploy portfolio website

## Prerequisites

- **Docker and Docker Compose** (for containerized deployment)
- **Node.js 22+** (for local development)
- **Java 21+** (for local backend development)
- **Maven** (for backend build)

## Running on Docker

### 1. Clone the repository
```bash
git clone https://github.com/Ashish110411/PortGen.git
cd PortGen
```

### 2. Build Image for backend service
```bash
cd pg-backend
mvn compile jib:dockerBuild
```

### 3. Build Image for Frontend
```bash
cd ../pg-frontend
docker build --no-cache -t ashish110411/portgen-frontend .
```

### 4. Start the docker services
```bash
cd ..
docker-compose up -d
```

### 5. Access the Application
- **Frontend Form**: http://localhost:3000
- **Backend API**: http://localhost:8080
- **Portfolio Generation**: http://localhost:8080/api/portfolio/generate

## Alternative Docker Setup

If you prefer to use docker-compose for the entire build process:

```bash
# Build and start all services in one command
docker-compose up --build -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## API Documentation

The system provides a RESTful API for portfolio generation:

### Portfolio Generation

- `POST /api/portfolio/generate` - Generate a complete portfolio ZIP file.

**Response:** ZIP file containing complete React portfolio application

### Generated Portfolio Structure
For the complete generated portfolio details, see the [template-base README](./pg-backend/src/main/resources/template-base/README.md)

## Form Features

### Multi-Step Form Process

1. **Personal Information**
  - Name, email, phone, location
  - Professional bio and summary
  - Profile picture upload

2. **Skills & Technologies**
  - Categorized skill selection
  - Proficiency levels
  - Custom skill additions

3. **Projects Portfolio**
  - Project title and description
  - Technology stack used
  - Multiple Project domains
  - Live demo or GitHub links

4. **Education & Certifications**
  - Academic background
  - Professional certifications
  - Training and courses

5. **Resume & Final Review**
  - Resume file upload
  - Generate portfolio

## Customization Options

### Template Modifications
- Color scheme customization
- Layout variations
- Component additions/removals

### Skill Categories
- Add new technology categories
- Custom skill icons
- Proficiency indicators
- Skill grouping options

## Development Setup

For local development without Docker:

### Frontend Development
```bash
cd pg-frontend
npm install
npm start
# Runs on http://localhost:3000
```

### Backend Development
```bash
cd pg-backend
mvn spring-boot:run
# Runs on http://localhost:8080
```

## Deployment Options

### Production Deployment
- **Netlify/Vercel**: Deploy generated portfolio directly (preferred)
- **AWS S3**: Static website hosting for portfolios
- **GitHub Pages**: Free hosting for generated sites
- **Docker Hub**: Push images for easy deployment

### Environment Configuration
- Development: `docker-compose.yml`
- Production: `docker-compose.prod.yml`
- Custom environment variables support

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- 📧 Email: ashish110411@example.com
- 🐛 Issues: [GitHub Issues](https://github.com/Ashish110411/PortGen/issues)
- 📚 Documentation: [Wiki](https://github.com/Ashish110411/PortGen/wiki)

---

**Version**: 1.0.0  
Built with ❤️ by [Ashish110411](https://github.com/Ashish110411)
