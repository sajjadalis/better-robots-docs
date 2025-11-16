# Examples & Use Cases

Practical examples and configurations for common WordPress scenarios.

> **Note**: These examples show what's possible with Better Robots.txt. Free version includes AI-recommended bad bot blocking and ChatGPT protection. Advanced features like WooCommerce optimization, multisite management, and backlink protection require the Pro version.

## Blog/Content Site Example

### Scenario
Personal or business blog focused on content marketing and SEO.

### Recommended Configuration

```markdown
✅ **Basic Settings**:
- Keep default WordPress rules
- Set crawl delay: 1 second
- Enable ads.txt allowance

✅ **Search Engines**:
- Allow: Googlebot, Bingbot, Yahoo Slurp
- Allow: DuckDuckBot, Applebot
- Allow: Media crawlers (for images)

✅ **Bot Protection**:
- Block: ChatGPT Bot (Free)
- Enable: AI-Recommended bad bot blocking (Free)
- Consider: Backlink protector for competitive niches (Pro)

✅ **SEO Integration**:
- Auto-detect: Yoast/Rank Math sitemaps (Pro)
- Enable: WordPress native sitemaps
```

### Generated robots.txt

```txt
# Auto-detected sitemap
Sitemap: https://yourblog.com/sitemap_index.xml

# Basic WordPress rules
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

# Image access for SEO
User-agent: Googlebot-Image
Allow: /wp-content/uploads/

# ChatGPT Bot blocked
User-agent: GPTBot
Disallow: /

# Crawl delay for server performance
Crawl-delay: 1

# Ads.txt allowed
User-agent: *
Allow: /ads.txt
Allow: /app-ads.txt

# This robots.txt file was created by Better Robots.txt
```

### Additional Custom Rules

```txt
# Block common WordPress spam patterns
User-agent: *
Disallow: */comment-page-*
Disallow: */amp/
Disallow: */feed/$
Disallow: /?s=*
Disallow: /search/
```

## E-commerce Site Example (WooCommerce)

### Scenario
Online store with WooCommerce, focused on product sales and conversion optimization.

### Recommended Configuration

```markdown
✅ **Basic Settings**:
- Default WordPress rules
- Crawl delay: 2 seconds (e-commerce needs more server resources)
- Enable physical file generation (Pro)

✅ **WooCommerce Optimization** (Pro):
- Enable: WooCommerce performance optimization
- Block: Unnecessary e-commerce URLs
- Optimize: Product page crawling focus
- Improve: Server performance

✅ **SEO Integration**:
- Auto-detect: WooCommerce product sitemaps
- Enable: Category and product image indexing
- Consider: Custom product feed sitemaps

✅ **Bot Protection**:
- Block: ChatGPT Bot
- Enable: Bad bot blocking (protect pricing data)
- Enable: Backlink protector (competitive niche)
```

### Generated robots.txt

```txt
# WooCommerce sitemaps
Sitemap: https://yourstore.com/sitemap_index.xml
Sitemap: https://yourstore.com/product-sitemap.xml

# Basic WordPress rules
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /xmlrpc.php
Disallow: /wp-login.php

# WooCommerce performance optimization (Pro feature)
# Blocks unnecessary e-commerce URLs to improve crawling efficiency
# Specific rules configured via Better Robots.txt Pro interface

# Crawl delay for e-commerce performance
Crawl-delay: 2
```

### Additional E-commerce Rules

```txt
# Protect customer data and sessions
User-agent: *
Disallow: /my-account/
Disallow: /customer-logout/
Disallow: /lost-password/
Disallow: /order-received/

# Block AJAX endpoints that don't need crawling
Disallow: /wc-api/
Disallow: */wc-api/*
```

## Multisite Network Example

### Scenario
WordPress multisite network with multiple blogs and stores.

### Recommended Configuration

```markdown
✅ **Network Settings** (Pro):
- Enable: Network management
- Sites: blog1, blog2, store1, news
- Enable: Network-wide sitemap detection
- Enable: Cross-site protection

✅ **Individual Site Rules**:
- Blog sites: Standard blog configuration
- Store sites: E-commerce optimization
- News site: Media-heavy optimization

✅ **Network Protection**:
- Enable: Bad bot blocking across network
- Enable: Spam backlink protection
- Standardize: crawl delay rules
```

### Network Configuration Example

The Pro multisite feature provides centralized management with:

**Key Features:**
- Centralized dashboard for all sites
- Individual site rule customization
- Network-wide bot protection
- Automatic sitemap detection per site
- Consistent crawl delay management

**Configuration is handled through:**
- Network admin dashboard
- Site-specific override options
- Bulk rule application
- Individual site optimization

Note: Specific rules are generated automatically based on your network configuration and Pro settings.

## Corporate/Business Website Example

### Scenario
Corporate website with emphasis on brand protection and professional appearance.

### Recommended Configuration

```markdown
✅ **Basic Settings**:
- Professional default rules
- Crawl delay: 1 second
- Enable physical file generation

✅ **Brand Protection**:
- Enable: Backlink protector (Pro)
- Block: Competitor analysis tools (Pro)
- Enable: ChatGPT Bot blocking (Free)
- Control: Social media bot access (Pro)

✅ **SEO Integration**:
- Auto-detect: Corporate sitemaps
- Enable: Professional image indexing
- Add: Custom corporate sitemaps
```

### Corporate robots.txt

```txt
# Corporate sitemap structure
Sitemap: https://company.com/sitemap_index.xml
Sitemap: https://company.com/team-sitemap.xml
Sitemap: https://company.com/products-sitemap.xml

# Professional WordPress rules
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php
Disallow: /wp-login.php
Disallow: */disclaimer/*

# Brand protection (Pro feature)
# Blocks competitor analysis tools via Better Robots.txt Pro
# Specific competitor bots configured through Pro interface

# Social media optimization (Pro feature)
# Allows social media crawlers for better brand visibility
# Platform-specific rules configured through Pro settings

# Professional crawl delay
Crawl-delay: 1

# Corporate signature
# Custom robots.txt for Company Name
# Managed by Better Robots.txt Pro
```

## News/Media Website Example

### Scenario
High-traffic news site with frequent content updates and media-rich content.

### Recommended Configuration

```markdown
✅ **Performance Focus**:
- Crawl delay: 2-3 seconds
- Enable: Physical file generation (Pro)
- Enable: Crawl budget optimization (Pro)
- Optimize: Image crawling (Pro)

✅ **SEO Integration**:
- Auto-detect: News sitemaps
- Enable: Google News integration
- Optimize: Media indexing
- Add: Custom category sitemaps

✅ **Bot Management**:
- Allow: Major search engines
- Allow: Media crawlers
- Block: Aggressive scrapers
- Control: Social media access
```

### News Site robots.txt

```txt
# News sitemaps
Sitemap: https://news.com/news-sitemap.xml
Sitemap: https://news.com/post-sitemap.xml
Sitemap: https://news.com/category-sitemap.xml

# News-optimized WordPress rules
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /xmlrpc.php
Disallow: /wp-login.php

# Allow news-specific crawlers
User-agent: Googlebot-News
Allow: /

User-agent: Applebot
Allow: /

User-agent: Bingbot
Allow: /

# Optimize image crawling for news
User-agent: Googlebot-Image
Allow: /wp-content/uploads/
Allow: /wp-content/uploads/2024/
Allow: /wp-content/uploads/2023/

# Crawl budget optimization (Pro feature)
# Prevents crawl traps and optimizes search engine efficiency
# Specific patterns blocked via Better Robots.txt Pro settings

# Social media optimization for news sharing
User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# News site crawl delay
Crawl-delay: 2
```

## Educational/Institutional Website Example

### Scenario
University or educational institution website with diverse content types.

### Recommended Configuration

```markdown
✅ **Accessibility Focus**:
- Moderate crawl delay: 1 second
- Allow: Educational search engines
- Enable: PDF indexing where appropriate
- Control: Bot access for research content

✅ **SEO Integration**:
- Auto-detect: Multiple sitemaps
- Include: Course and department sitemaps
- Add: Research publication sitemaps

✅ **Content Protection**:
- Selective content blocking
- Research access control
- Student privacy protection
```

### Educational robots.txt

```txt
# Educational sitemap structure
Sitemap: https://university.edu/sitemap_index.xml
Sitemap: https://university.edu/courses-sitemap.xml
Sitemap: https://university.edu/research-sitemap.xml
Sitemap: https://university.edu/departments-sitemap.xml

# Educational WordPress rules
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php
Disallow: /wp-login.php

# Allow educational and academic crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Baiduspider
Allow: /

# Protect student and faculty areas
Disallow: /student-portal/
Disallow: /faculty-login/
Disallow: /admin-only/
Disallow: /private-research/

# Allow public course materials
Allow: /courses/public/
Allow: /open-courseware/
Allow: /publications/

# Moderate crawl delay for shared hosting
Crawl-delay: 1

# Educational institution signature
# Robots.txt for University Name
# Optimized for educational search indexing
```

## Custom Rules Examples

### Block Specific File Types

```txt
# Block access to specific file types
User-agent: *
Disallow: /*.pdf$
Disallow: /*.doc$
Disallow: /*.docx$
Disallow: /*.xls$
Disallow: /*.xlsx$
```

### Allow Specific Directory Only

```txt
# Allow only specific directory for certain bots
User-agent: Googlebot
Allow: /public-content/
Disallow: /

User-agent: *
Disallow: /private-content/
```

### Seasonal/Temporary Rules

```txt
# Temporary maintenance block (remember to remove!)
User-agent: *
Disallow: /
# Maintenance mode - remove after date
```

### Geographic Targeting

```txt
# Allow bots from specific regions
User-agent: Googlebot
Allow: /

User-agent: Baiduspider
Allow: /chinese-content/

User-agent: Yandex
Allow: /russian-content/
```

## Testing Your Configuration

### Manual Testing Checklist

1. **Basic Accessibility**:
   ```bash
   curl -I https://yoursite.com/robots.txt
   # Should return 200 OK
   ```

2. **Search Engine Testing**:
   - Google Search Console robots.txt tester
   - Bing Webmaster Tools
   - Third-party robots.txt validation tools

3. **Content Verification**:
   ```bash
   # Check specific URLs
   curl -A "Googlebot" https://yoursite.com/private-page/
   # Should be blocked if configured correctly
   ```

### Automated Testing

```bash
# Test with different user agents
curl -A "Googlebot" https://yoursite.com/robots.txt
curl -A "AhrefsBot" https://yoursite.com/robots.txt
curl -A "facebookexternalhit" https://yoursite.com/robots.txt
```

---

**Next**: Explore our [Troubleshooting Guide](/troubleshooting) or learn about [Best Practices](/best-practices).