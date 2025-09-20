# n0d3 Hugo Theme

A hacker/matrix/terminal-style Hugo theme for personal blogs with green-on-black aesthetics, inspired by the classic terminal and Matrix movie aesthetic.

![n0d3 Theme](https://img.shields.io/badge/Theme-n0d3-00ff00?style=for-the-badge&logo=hugo&logoColor=white)
![Hugo Version](https://img.shields.io/badge/Hugo-0.100.0+-blue?style=for-the-badge&logo=hugo)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

## 🎯 Features

- **Terminal Aesthetic**: Classic green-on-black color scheme with monospace fonts
- **Matrix Effects**: Subtle background animations and glowing text effects
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Clean Layout**: Minimalist design focused on content readability
- **TailwindCSS**: Built with modern CSS framework for maintainability
- **Terminal Cursor**: Animated blinking cursor for authentic terminal feel
- **Hugo Integration**: Built specifically for Hugo static site generator

## 🚀 Quick Start

### Prerequisites

- [Hugo](https://gohugo.io/installation/) 0.100.0 or higher
- Git

### Installation

1. **Create a new Hugo site:**
   ```bash
   hugo new site my-hacker-blog
   cd my-hacker-blog
   ```

2. **Clone the theme repository:**
   ```bash
   git clone https://github.com/oscarzhou/n0d3.git themes/n0d3
   ```

3. **Copy the example site content:**
   ```bash
   cp -r themes/n0d3/exampleSite/* .
   ```

4. **Install theme dependencies:**
   ```bash
   cd themes/n0d3
   npm install
   npm run build-css
   cd ../..
   ```

5. **Start the development server:**
   ```bash
   hugo server -D
   ```

6. **Open your browser:**
   Navigate to `http://localhost:1313` to see your site.

## 📁 Project Structure

```
n0d3-hugo-theme/
├── assets/
│   └── css/
│       └── main.css          # Main stylesheet with TailwindCSS
├── layouts/
│   ├── _default/
│   │   ├── baseof.html       # Base template
│   │   ├── list.html         # List page template
│   │   └── single.html       # Single page template
│   ├── partials/
│   │   ├── header.html       # Header partial
│   │   └── footer.html       # Footer partial
│   └── index.html            # Homepage template
├── static/
│   └── css/                  # Static CSS files
├── exampleSite/
│   ├── config.toml           # Example configuration
│   └── content/              # Example content
├── theme.toml                # Theme metadata
├── tailwind.config.js        # TailwindCSS configuration
└── README.md                 # This file
```

## ⚙️ Configuration

### Basic Configuration

Add the following to your `config.toml`:

```toml
baseURL = "https://your-domain.com"
languageCode = "en-us"
title = "Your Hacker Blog"
theme = "n0d3"

[params]
  description = "A personal blog in the Matrix style"
  author = "Your Name"
  email = "your@email.com"
  github = "https://github.com/yourusername"
  location = "The Matrix"
  status = "Hacking"
  welcome_message = "Welcome to the Matrix. You are now part of the system."
```

### Menu Configuration

```toml
[[menu.main]]
  name = "Home"
  url = "/"
  weight = 10

[[menu.main]]
  name = "Posts"
  url = "/posts/"
  weight = 20

[[menu.main]]
  name = "Tags"
  url = "/tags/"
  weight = 30
```

### Content Structure

Create your content in the `content/` directory:

```
content/
├── _index.md                 # Homepage content
├── posts/                    # Blog posts
│   ├── post-1.md
│   ├── post-2.md
│   └── ...
└── pages/                    # Static pages
    ├── about.md
    └── contact.md
```

### Post Front Matter

```yaml
---
title: "Your Post Title"
date: 2024-01-01T12:00:00Z
draft: false
tags: ["tag1", "tag2", "tag3"]
description: "Post description for SEO"
---
```

## 🎨 Customization

### Colors

The theme uses a custom color palette defined in `tailwind.config.js`:

- `matrix-green`: #00ff00 (Primary green)
- `matrix-dark-green`: #00cc00 (Darker green)
- `matrix-bright-green`: #00ff41 (Brighter green)
- `terminal-black`: #000000 (Background)
- `terminal-dark-gray`: #0a0a0a (Card backgrounds)
- `terminal-gray`: #1a1a1a (Secondary backgrounds)

### Typography

The theme uses monospace fonts for the authentic terminal feel:
- Primary: Courier New, Monaco, Consolas, monospace
- All text elements use the terminal font family

### Animations

- **Cursor Blink**: Animated blinking cursor for terminal elements
- **Matrix Rain**: Subtle background animation effect
- **Glow Effects**: Text and border glow animations
- **Hover Effects**: Smooth transitions on interactive elements

## 📱 Responsive Design

The theme is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- Various screen sizes and orientations

## 🔧 Development

### Prerequisites for Development

- [Node.js](https://nodejs.org/) (for TailwindCSS)
- [Hugo](https://gohugo.io/installation/) 0.100.0 or higher
- Git

### Development Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/oscarzhou/n0d3.git
   cd n0d3
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build CSS for development:**
   ```bash
   npm run build-css
   ```

### Development Mode

#### Option 1: Run Example Site (Recommended)

1. **Start CSS watch mode (in one terminal):**
   ```bash
   npm run watch-css
   ```

2. **Start Hugo development server (in another terminal):**
   ```bash
   cd exampleSite
   hugo server -D --themesDir ../../
   ```

3. **Open your browser:**
   Navigate to `http://localhost:1313` to see the example site.

#### Option 2: Run with Your Own Site

1. **Create a new Hugo site:**
   ```bash
   hugo new site my-test-site
   cd my-test-site
   ```

2. **Link to the theme:**
   ```bash
   ln -sf ../n0d3 themes/n0d3
   ```

3. **Copy example content:**
   ```bash
   cp -r themes/n0d3/exampleSite/* .
   ```

4. **Start development servers:**
   ```bash
   # Terminal 1: Watch CSS changes
   cd themes/n0d3 && npm run watch-css
   
   # Terminal 2: Start Hugo server
   hugo server -D
   ```

### Available NPM Scripts

- `npm run build-css` - Build and minify CSS once
- `npm run watch-css` - Watch for changes and rebuild CSS automatically
- `npm run dev` - Start Hugo development server (from theme root)
- `npm run build` - Build Hugo site for production

### Building the Theme

1. **Build CSS for production:**
   ```bash
   npm run build-css
   ```

2. **Test the theme:**
   ```bash
   cd exampleSite
   hugo server -D --themesDir ../../
   ```

### Customizing Styles

Edit `assets/css/main.css` to customize the theme styles. The file includes:
- TailwindCSS imports
- Custom component classes
- Animation definitions
- Responsive utilities

## 🚨 Troubleshooting

### Common Issues

#### Theme Not Found Error

If you get an error like `module "n0d3" not found`, try these solutions:

**For Example Site Development:**
```bash
cd exampleSite
hugo server -D --themesDir ../../
```

**For Regular Hugo Site:**
```bash
# Make sure the theme is properly linked
ln -sf /path/to/n0d3 themes/n0d3

# Or copy the theme directory
cp -r /path/to/n0d3 themes/n0d3
```

#### CSS Not Loading

1. **Build CSS first:**
   ```bash
   npm run build-css
   ```

2. **Check if CSS file exists:**
   ```bash
   ls -la static/css/main.css
   ```

3. **Start CSS watch mode:**
   ```bash
   npm run watch-css
   ```

#### Windows Users

On Windows, use these commands instead of `ln -sf`:

```bash
# Create symbolic link (requires admin privileges)
mklink /D themes\n0d3 C:\path\to\n0d3

# Or simply copy the theme
xcopy /E /I C:\path\to\n0d3 themes\n0d3
```

### Development Workflow

1. **Make changes to templates** in `layouts/`
2. **Edit styles** in `assets/css/main.css`
3. **CSS automatically rebuilds** (if watch mode is running)
4. **Hugo automatically reloads** the page
5. **See changes instantly** in your browser

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test with the example site
5. Commit your changes: `git commit -m 'Add some feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## 🙏 Acknowledgments

- Inspired by the Matrix movie aesthetic
- Built with [Hugo](https://gohugo.io/)
- Styled with [TailwindCSS](https://tailwindcss.com/)
- Terminal inspiration from classic Unix systems
- Color scheme inspired by green phosphor monitors

## 📞 Support

If you have any questions or need help with the theme:

1. Check the [Issues](https://github.com/oscarzhou/n0d3/issues) page
2. Create a new issue if your problem isn't already reported
3. Join the discussion in the [Discussions](https://github.com/oscarzhou/n0d3/discussions) section

## 🌟 Showcase

If you're using this theme, we'd love to see your site! Add it to the showcase by:

1. Creating an issue with the "showcase" label
2. Including your site URL and a brief description
3. We'll add it to our showcase section

---

*"Welcome to the Matrix. You are now part of the system."*

**Happy Hacking!** 🚀