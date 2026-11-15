# Personal Portfolio – Sari Mikander

A personal portfolio website built with React to showcase my professional experience, technical skills, and software development projects.

I have five years of experience in web development, primarily working with Adobe Commerce (Magento). My background is frontend-focused, and I am currently expanding my skills in backend development and working towards becoming a full-stack developer.

This portfolio brings together my professional background, personal projects, and continuous learning.

## Live Website

[View Portfolio](https://smikander.github.io/portfolio-smikander/)

## Features

- Responsive layout for different screen sizes
- Finnish and English language support
- Language switching using react-i18next
- Overview of professional experience and technical skills
- Personal software development projects with GitHub links
- Education and professional background
- Contact information and references

## Technologies

- React
- JavaScript
- HTML5
- CSS3
- Vite
- i18next
- react-i18next
- Git & GitHub
- GitHub Pages

## Project Structure

```text
portfolio-smikander/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── Contact/
│   │   ├── Education/
│   │   ├── Hero/
│   │   ├── Languageswitcher/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   ├── References/
│   │   └── Skills/
│   ├── locales/
│   │   ├── en/
│   │   │   └── translations.json
│   │   └── fi/
│   │       └── translations.json
│   ├── App.jsx
│   ├── App.css
│   ├── i18n.js
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Installation and Setup

### Prerequisites

- Node.js
- npm

### 1. Clone the repository

```bash
git clone https://github.com/smikander/portfolio-smikander.git
cd portfolio-smikander
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open the local URL displayed in the terminal.

### 4. Build for production

```bash
npm run build
```

The production files will be generated in the `dist` directory.

## Multilingual Support

The portfolio supports Finnish and English using i18next and react-i18next.

Translations are stored in separate JSON files:

- `src/locales/en/translations.json`
- `src/locales/fi/translations.json`

This structure makes it possible to maintain and extend the content in both languages.

## Featured Projects

### Login Project

A full-stack authentication application built with React, Node.js, Express, and MySQL.

Features include user registration, login, JWT-based authentication, and password reset functionality.

[View Login Project on GitHub](https://github.com/smikander/login-project)

### API Data Fetcher

A Python command-line application that fetches and processes data from a REST API.

The project includes data validation, HTTP error handling, and automated tests using pytest.

[View API Data Fetcher on GitHub](https://github.com/smikander/api-data-fetcher)

## Future Improvements

Possible improvements include:

- Refactoring components for better reusability
- Simplifying and standardizing translation keys
- Improving accessibility and usability
- Refining the visual design and color palette
- Adding new projects as I continue learning and developing my skills

## About This Project

This portfolio is both a professional presentation and an ongoing personal development project.

It gives me an opportunity to practice React development, improve my frontend skills, and experiment with new ideas while documenting my progress as a software developer.

## Author

**Sari Mikander**

[GitHub](https://github.com/smikander)
