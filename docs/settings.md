# Settings Guide

Complete guide to all Better Robots.txt settings and configuration options.

## Settings Overview

Better Robots.txt provides comprehensive settings organized into logical sections:

- **Basic Settings**: Core robots.txt configuration
- **Bot Management**: Control which bots can access your site
- **SEO Integration**: Sitemap and search engine optimization
- **Advanced Options**: Custom rules and specialized features
- **E-commerce**: WooCommerce-specific optimizations

## Basic Settings

### 1. Default Rules

**Location**: Settings → Basic Configuration

These are the foundational rules applied to all robots.txt files:

```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php
Disallow: /wp-login.php
Disallow: /wp-register.php
Disallow: */disclaimer/*
Disallow: *?attachment_id=
Disallow: /privacy-policy
```

**What these do**:
- ✅ **Allow**: Essential WordPress functionality and resources
- ❌ **Disallow**: Admin areas, sensitive files, and duplicate content

### 2. Custom User Agents

**Location**: Settings → Custom Rules

Add your own robots.txt rules using the textarea:

**Format**:
```txt
User-agent: Googlebot
Allow: /important-page/

User-agent: *
Crawl-delay: 1
```

**Common Examples**:
```txt
# Block all bots from temporary directory
User-agent: *
Disallow: /temp/

# Allow Googlebot to access everything
User-agent: Googlebot
Allow: /

# Set crawl delay for all bots
User-agent: *
Crawl-delay: 2
```

### 3. Crawl Delay

**Location**: Settings → Performance

**Purpose**: Controls how fast bots can request pages from your site

**Recommended Settings**:
- **Shared hosting**: 1-2 seconds
- **VPS/Dedicated**: 0.5-1 seconds
- **High-traffic sites**: 2-5 seconds

**Format**: `Crawl-delay: 1` (number in seconds)

### 4. Personalization

**Location**: Settings → Customization

Add custom text or comments to your robots.txt file:

```txt
# My Custom Website Rules
# Created by: Your Name
# Contact: your-email@example.com

# Special Rules
# Add any comments here
```

## Bot Management Settings

### 1. Major Search Engine Bots

**Location**: Settings → Bot Management → Search Engines

Control access from major search engines:

| Bot | Default | Recommended | Impact |
|-----|---------|-------------|---------|
| Googlebot | Allow | ✅ Allow | Essential for Google Search |
| Bingbot | Allow | ✅ Allow | Essential for Bing Search |
| Yahoo Slurp | Allow | ✅ Allow | Essential for Yahoo Search |
| DuckDuckBot | Allow | ✅ Allow | Good for privacy-focused users |
| Yandex | Allow | ⚠️ Depends | Only if targeting Russian audience |

### 2. Media Crawlers

**Location**: Settings → Bot Management → Media

Control image and media indexing:

| Bot | Purpose | Recommendation |
|-----|---------|----------------|
| Googlebot-Image | Google Images | ✅ Allow (if good images) |
| YandexImages | Yandex Images | ⚠️ Depends on audience |
| Msnbot-media | Bing Images | ✅ Allow (usually safe) |

### 3. Specialized Bots

**Location**: Settings → Bot Management → Specialized

| Bot | Purpose | Recommendation |
|-----|---------|----------------|
| Applebot | Siri & Spotlight | ✅ Allow (increasingly important) |
| Mediapartners-Google | Google Ads | ✅ Allow (if using ads) |
| AdsBot-Google | Ad quality checking | ✅ Allow (if using ads) |

### 4. ChatGPT Bot Blocker (Free Feature)

**Location**: Settings → Bot Protection → ChatGPT

**Option**: Block ChatGPT Bot from scraping your content

```txt
# Generated rule when enabled:
User-agent: GPTBot
Disallow: /
```

**Why use this**:
- 🛡️ Protects content from AI training
- 💰 Prevents content theft
- 🎯 Controls data usage

### 5. Bad Bots Blocker (Free & Pro Features)

**Location**: Settings → Bot Protection → Bad Bots

Blocks known malicious and unwanted bots to protect your site:

**Free Version - AI-Recommended Bad Bots**:
```txt
# Block Bad Bots. AI recommended setting by ChatGPT

User-agent: ia_archiver
Disallow: /

User-agent: archive.org_bot
Disallow: /

User-agent: SiteExplorer
Disallow: /

User-agent: spbot
Disallow: /

User-agent: WBSearchBot
Disallow: /
```

**Pro Version - Extended Bad Bots**:
- All free bad bots plus 40+ additional malicious bots
- Blocks scrapers and content thieves
- Reduces server load
- Improves security

### 6. Backlink Protector (Pro Feature)

**Location**: Settings → Bot Protection → Backlinks (Pro)

Protect your competitive intelligence by blocking SEO analysis tools:

**Capabilities**:
- Blocks major SEO analysis bots
- Hides your backlink profile from competitors
- Preserves your SEO strategy and link value

**Why use this**:
- 🔒 Protects competitive intelligence
- 🛡️ Hides SEO strategy from competitors
- 💰 Preserves link value

## SEO Integration Settings

### 1. Sitemap Integration (Pro Feature)

**Location**: Settings → SEO Integration → Sitemaps

Automatically detect and integrate sitemaps from major SEO plugins:

**Supported Sources**:
- ✅ Yoast SEO - Auto-detection available
- ✅ Rank Math - Auto-detection available
- ✅ All in One SEO - Auto-detection available
- ✅ WordPress Native - Basic WordPress sitemaps
- ✅ Custom URLs - Manual configuration for custom sitemaps

**Benefits**:
- Automatic sitemap discovery
- Better search engine indexing
- No manual configuration needed for supported plugins

### 2. Ads.txt & App-ads.txt Support

**Location**: Settings → SEO Integration → Ads.txt

**Options**:
- **Allow**: Permits crawler access to ads.txt files
- **Disallow**: Blocks access (rarely recommended)
- **Off**: No specific rule

**Generated Rules**:
```txt
# When allowed:
User-agent: *
Allow: /ads.txt
Allow: /app-ads.txt
```

## Advanced Settings

### 1. Physical File Generation (Pro Feature)

**Location**: Settings → Advanced → Physical File

Creates an actual `robots.txt` file in your website root directory.

**Benefits**:
- ✅ Better compatibility with caching services
- ✅ Improved PageSpeed Insights scores
- ✅ Reduced server load
- ✅ Works with CDN services

**Considerations**:
- ⚠️ Requires file system write permissions
- ⚠️ May conflict with other robots.txt solutions
- ⚠️ Needs manual updates if modified directly

### 2. Image Crawlability (Pro Feature)

**Location**: Settings → Advanced → Images

Control how search engines index your images:

**Options**:
- **Allow**: All bots can index images (recommended for visual content)
- **Disallow**: Block image indexing (for text-focused sites)
- **Off**: No specific rules (default behavior)

**Use Cases**:
- **Allow**: Image-heavy sites, photographers, e-commerce stores
- **Disallow**: Text-focused sites, bandwidth conservation

### 3. Crawl Budget Optimization (Pro Feature)

**Location**: Settings → Advanced → Crawl Budget

Prevents crawl traps and optimizes search engine crawling efficiency:

**What it blocks**:
- Search results pages and parameters
- Preview and duplicate content URLs
- Crawler traps that waste crawl budget
- Unnecessary query parameters

**Benefits**:
- Focuses search engine attention on important content
- Improves indexing efficiency
- Reduces server load from unnecessary crawling

## E-commerce Settings (WooCommerce)

### WooCommerce Optimization (Pro Feature)

**Location**: Settings → E-commerce → WooCommerce

Optimize your WooCommerce store by blocking unnecessary URLs that waste crawl budget:

**What it blocks**:
- Shopping cart and checkout pages
- User account areas
- Product filter and sorting URLs
- Add to cart action URLs
- Admin-only WooCommerce pages

**Benefits**:
- ⚡ Reduces server load
- 📈 Improves crawl efficiency
- 🛍️ Focuses search engines on product pages
- 💰 Better SEO for important e-commerce content

## Multisite Settings (Pro Feature)

### Network Management

**Location**: Settings → Multisite → Network Sites

Manage robots.txt across WordPress multisite networks efficiently:

**Options**:
- **Enable Network Management**: Apply rules to all sites
- **Site Selection**: Choose which sites to manage
- **Network Rules**: Apply common rules across sites
- **Network Sitemaps**: Auto-detect sitemaps for all sites

**Benefits**:
- Centralized management of multiple sites
- Consistent robots.txt rules across network
- Individual site override options
- Time-saving bulk configuration

## Social Media Bots (Pro Feature)

### Platform-Specific Control

**Location**: Settings → Social Media

Control how social media platforms access and display your content:

**Supported Platforms**:
- **Facebook**: Facebook crawler for rich snippets
- **Twitter**: Twitter bot for card previews
- **LinkedIn**: LinkedIn crawler for content sharing
- **Pinterest**: Pinterest bot for pin creation

**Options per Platform**:
- **Allow**: Full access for rich social media previews
- **Disallow**: Block social media crawling
- **Off**: No specific rules (default behavior)

**Benefits**:
- Better social media preview generation
- Control over social content access
- Improved social sharing experience

## Post/Page Specific Settings

### Manual Exclusion

**Location**: Edit Post/Page → Better Robots.txt Meta Box

Control search engine access to individual pages and posts:

**Options**:
- **Exclude from Search Engines**: Adds specific disallow rules for that page
- **Custom URL Pattern**: Specify custom URL patterns to block

**Use Cases**:
- 🎯 Thank you pages (after form submissions)
- 🎯 Private landing pages
- 🎯 Admin-only content
- 🎯 Test or development pages
- 🎯 Dynamic calendar pages
- 🎯 Member-only content

## Best Practice Settings

### Recommended Configuration for Most Sites

```markdown
✅ **Free Version Features**:
- Keep default robots.txt rules
- Add crawl delay: 1 second
- Enable ads.txt allowance
- Allow all major search engines
- Block ChatGPT Bot (AI-recommended bad bots)

✅ **Pro Version Upgrades**:
- Extended bad bot blocking (40+ additional bots)
- Auto-detect sitemaps from SEO plugins
- Crawl budget optimization
- WooCommerce optimization
- Social media bot control
- Physical file generation
- Multisite management
- Backlink protection
```

### Blog/Content Sites

```markdown
✅ Prioritize: Image indexing, social media bots
❌ Avoid: Overly restrictive crawling
⚠️ Consider: CDN compatibility
```

### E-commerce Sites

```markdown
✅ Enable: WooCommerce optimization
✅ Consider: Physical file generation
✅ Block: Unnecessary parameter URLs
⚠️ Monitor: Product page indexing
```

### High-Traffic Sites

```markdown
✅ Increase: Crawl delay (2-5 seconds)
✅ Enable: Crawl budget optimization
✅ Consider: Physical file generation
✅ Monitor: Server performance
```

---

**Next**: Explore our [Examples](/examples) for specific use cases and configurations.