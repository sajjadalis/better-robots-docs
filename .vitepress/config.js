import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Better Robots.txt',
  description: 'WordPress plugin for advanced robots.txt management and SEO optimization',
  lang: 'en-US',

  // Theme configuration
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation' },
      { text: 'Settings', link: '/settings' },
      { text: 'Features', link: '/features' },
      { text: 'Examples', link: '/examples' },
      { text: 'Troubleshooting', link: '/troubleshooting' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Installation', link: '/installation' },
          { text: 'Quick Start', link: '/quick-start' },
          { text: 'Basic Configuration', link: '/basic-configuration' }
        ]
      },
      {
        text: 'Features',
        items: [
          { text: 'Overview', link: '/features' },
          { text: 'Sitemap Integration', link: '/features/sitemap-integration' },
          { text: 'Bot Management', link: '/features/bot-management' },
          { text: 'WooCommerce Support', link: '/features/woocommerce' },
          { text: 'Multisite Support', link: '/features/multisite' },
          { text: 'Physical File Generation', link: '/features/physical-files' }
        ]
      },
      {
        text: 'Settings Guide',
        items: [
          { text: 'Settings Overview', link: '/settings' },
          { text: 'Free Version Settings', link: '/settings/free' },
          { text: 'Pro Version Settings', link: '/settings/pro' },
          { text: 'Advanced Settings', link: '/settings/advanced' }
        ]
      },
      {
        text: 'Examples & Use Cases',
        items: [
          { text: 'Examples', link: '/examples' },
          { text: 'Blog Configuration', link: '/examples/blog' },
          { text: 'E-commerce Setup', link: '/examples/ecommerce' },
          { text: 'Multisite Configuration', link: '/examples/multisite' },
          { text: 'Custom Rules', link: '/examples/custom-rules' }
        ]
      },
      {
        text: 'Support',
        items: [
          { text: 'Troubleshooting', link: '/troubleshooting' },
          { text: 'FAQ', link: '/faq' },
          { text: 'Best Practices', link: '/best-practices' },
          { text: 'Changelog', link: '/changelog' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'globe', link: 'https://better-robots.com/' },
      { icon: 'github', link: 'https://github.com/pagup/better-robots-txt' }
    ],

    footer: {
      message: 'Released under the GPLv2 License.',
      copyright: 'Copyright © 2024 Pagup'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true,
    container: {
      tipLabel: 'TIP',
      warningLabel: 'WARNING',
      dangerLabel: 'DANGER',
      infoLabel: 'INFO',
      detailsLabel: 'Details'
    }
  }
})