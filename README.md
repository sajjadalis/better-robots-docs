# Better Robots.txt Documentation

[![VitePress](https://img.shields.io/badge/VitePress-2.0.0-blue.svg)](https://vitepress.dev/) [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Complete documentation for **Better Robots.txt** - Advanced WordPress Robots.txt Management plugin

## 📖 About This Documentation

This repository contains the official documentation for the [Better Robots.txt](https://wordpress.org/plugins/better-robots-txt/) WordPress plugin. The documentation is built with [VitePress](https://vitepress.dev/) and provides comprehensive guides, API references, and best practices for optimizing your WordPress site's robots.txt configuration.

### 🚀 Live Documentation

View the live documentation at: **[https://docs.better-robots.com/](https://docs.better-robots.com/)**

## 📋 Table of Contents

- [Features](#-features)
- [Quick Start](#-quick-start)
- [Documentation Structure](#-documentation-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

## ✨ Features

The Better Robots.txt plugin offers:

- **🔍 SEO Optimization** - Intelligent robots.txt configuration and sitemap integration
- **🛡️ Bot Protection** - Block harmful bots while allowing legitimate search engines
- **🛒 WooCommerce Support** - Optimize your online store performance
- **🌐 Multisite Compatible** - Manage robots.txt across WordPress multisite networks
- **🤖 AI-Powered Rules** - ChatGPT-4 recommended settings for optimal configuration
- **📊 Crawl Budget Management** - Prevent crawler traps and optimize indexing
- **📱 Social Media Bots** - Control social media platform crawling behavior
- **⚙️ Granular Control** - Fine-tune rules with per-post/page exclusion options

## 🚀 Quick Start

### For Plugin Users

1. **Install the plugin** from [WordPress.org](https://wordpress.org/plugins/better-robots-txt/)
2. **Read the [Installation Guide](https://docs.better-robots.com/installation)** for detailed setup instructions
3. **Follow the [Quick Start Guide](https://docs.better-robots.com/quick-start)** to configure your first robots.txt rules
4. **Explore [Best Practices](https://docs.better-robots.com/best-practices)** for optimal SEO performance

### For Documentation Contributors

1. **Clone this repository**:
   ```bash
   git clone https://github.com/pagup/better-robots-docs.git
   cd better-robots-docs
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Start development server**:
   ```bash
   pnpm docs:dev
   ```

4. **Open your browser** to `http://localhost:5173`

## 📚 Documentation Structure

```
docs/
├── .vitepress/          # VitePress configuration
├── public/              # Static assets (images, etc.)
├── examples/            # Code examples and migration guides
├── settings/            # Detailed settings documentation
├── about.md             # About the plugin
├── installation.md      # Installation instructions
├── quick-start.md       # Quick start guide
├── basic-configuration.md # Basic configuration
├── features.md          # Features overview
├── settings.md          # Settings overview
├── examples.md          # Examples overview
├── best-practices.md    # Best practices guide
├── troubleshooting.md   # Troubleshooting guide
├── faq.md              # Frequently asked questions
└── changelog.md        # Plugin changelog
```

### Main Documentation Sections

- **[Getting Started](/about)** - Plugin overview, installation, and quick start
- **[Features](/features)** - Complete feature documentation and settings
- **[Guides](/examples)** - Examples, best practices, and troubleshooting
- **[Resources](/changelog)** - Changelog and additional resources

## 🛠️ Development

### Prerequisites

- **Node.js** 20 or higher
- **pnpm** 9 or higher

### Local Development

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Run development server**:
   ```bash
   pnpm docs:dev
   ```

3. **Build for production**:
   ```bash
   pnpm docs:build
   ```

4. **Preview production build**:
   ```bash
   pnpm docs:preview
   ```

### Project Structure

- **`.vitepress/config.mts`** - VitePress configuration
- **`docs/`** - Documentation content files
- **`public/`** - Static assets (images, logos, etc.)
- **`.github/workflows/deploy.yml`** - GitHub Pages deployment workflow

### Writing Documentation

- Use **Markdown** for content
- Follow **VitePress** conventions
- Include **code examples** with syntax highlighting
- Add **screenshots** and **diagrams** where helpful
- Test your changes locally before submitting

## 🚀 Deployment

This documentation is automatically deployed to GitHub Pages using GitHub Actions.

### Automatic Deployment

The site is automatically deployed when:
- Changes are pushed to the `master` branch
- The workflow is manually triggered

### Manual Deployment

1. **Push changes to master**:
   ```bash
   git add .
   git commit -m "Update documentation"
   git push origin master
   ```

2. **Monitor deployment** in the [Actions tab](https://github.com/pagup/better-robots-docs/actions)

### Deployment Configuration

- **Platform**: GitHub Pages
- **Build Tool**: VitePress
- **Node Version**: 20
- **Package Manager**: pnpm
- **Base Path**: `/` (root)

## 🤝 Contributing

We welcome contributions to improve the documentation!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/improve-documentation
   ```
3. **Make your changes** and test locally
4. **Commit your changes**:
   ```bash
   git commit -m "Add: Improved installation guide"
   ```
5. **Push to your fork**:
   ```bash
   git push origin feature/improve-documentation
   ```
6. **Create a Pull Request**

### Contribution Guidelines

- **Be clear and concise** in your writing
- **Include examples** where appropriate
- **Test your changes** locally before submitting
- **Follow the existing style** and formatting
- **Update the table of contents** if adding new sections

### Areas Needing Help

- 🌍 **Translations** - Help translate documentation to other languages
- 📝 **Content improvements** - Expand existing guides and examples
- 🐛 **Bug fixes** - Report and fix documentation issues
- 🎨 **Visual improvements** - Enhance diagrams and screenshots

## 📄 License

This documentation is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **Plugin Page**: [wordpress.org/plugins/better-robots-txt/](https://wordpress.org/plugins/better-robots-txt/)
- **Official Website**: [better-robots.com](https://better-robots.com/)
- **Documentation**: [docs.better-robots.com](https://docs.better-robots.com/)
- **Support**: [WordPress.org Support Forum](https://wordpress.org/support/plugin/better-robots-txt/)
- **GitHub Issues**: [Report Issues](https://github.com/sajjadalis/better-robots-docs/issues)

## 📊 Stats

![GitHub stars](https://img.shields.io/github/stars/sajjadalis/better-robots-docs?style=social)
![GitHub forks](https://img.shields.io/github/forks/sajjadalis/better-robots-docs?style=social)
![GitHub issues](https://img.shields.io/github/issues/sajjadalis/better-robots-docs)
![GitHub pull requests](https://img.shields.io/github/issues-pr/sajjadalis/better-robots-docs)

---

**© 2025 Pagup. Better Robots.txt. Advanced WordPress Robots.txt Management plugin.**