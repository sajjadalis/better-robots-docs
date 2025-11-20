import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Better Robots.txt Docs",
  description: "Create Robots.txt the Pro Way",
  base: '/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Installation', link: '/installation' },
      { text: 'Quick Start', link: '/quick-start' },
      { text: 'Features', link: '/features' },
      { text: 'Settings', link: '/settings' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'About', link: '/about' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Basic Configuration', link: '/basic-configuration' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Features Overview', link: '/features' },
          {
            text: 'Settings',
            items: [
              { text: 'Settings Overview', link: '/settings' },
              { text: 'Pro Version Settings', link: '/settings/pro' },
              { text: 'Advanced Settings', link: '/settings/advanced' }
            ]
          }
        ]
      },
      {
        text: 'Guides',
        items: [
          {
            text: 'Examples',
            items: [
              { text: 'Examples Overview', link: '/examples' },
              { text: 'Migration Guide', link: '/examples/migration' }
            ]
          },
          { text: 'Best Practices', link: '/best-practices' },
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' }
        ]
      },
      {
        text: 'Resources',
        items: [
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'globe', link: 'https://better-robots.com/' }
    ],

    footer: {
      message: '© 2025 Pagup. Better Robots.txt. Advanced WordPress Robots.txt Management plugin.'
    },

    search: {
      provider: 'local'
    }
  }
})
