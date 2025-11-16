# Best Practices

Professional recommendations for optimal robots.txt configuration and WordPress SEO.

## Core Principles

### 1. Start Conservative, Optimize Gradually

**Begin with safe settings**:
```markdown
✅ **Initial Setup**:
- Allow major search engines
- Keep default WordPress protections
- Set moderate crawl delay (1 second)
- Monitor before adding restrictions
```

**Advanced optimization** comes after understanding your specific needs and traffic patterns.

### 2. Monitor Before Blocking

**Before blocking bots**:
1. **Analyze current traffic**: Use server logs to see who's crawling
2. **Check benefits**: Some "bad" bots might provide value
3. **Test gradually**: Block one category at a time
4. **Monitor impact**: Watch SEO metrics after changes

### 3. Balance SEO vs. Performance

**Optimal balance**:
```markdown
✅ **SEO Priority**:
- Allow search engine bots
- Ensure sitemaps accessible
- Don't block important content

✅ **Performance Priority**:
- Set appropriate crawl delays
- Block unnecessary parameters
- Use physical files when beneficial
```

## Search Engine Best Practices

### Major Search Engine Guidelines

**Google Recommendations**:
- ✅ Allow important content
- ✅ Don't block CSS/JS files
- ✅ Keep sitemats accessible
- ❌ Don't use robots.txt for security (use authentication instead)

**Bing Recommendations**:
- ✅ Clean, simple rules
- ✅ Allow crawling of important pages
- ✅ Use crawl-delay for large sites
- ❌ Avoid over-blocking

### Recommended Search Engine Settings

```txt
# Optimal search engine configuration
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*.css$
Allow: /*.js$
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /readme.html
Disallow: /license.txt

# Allow all major search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Set reasonable crawl delay
Crawl-delay: 1
```

## Crawl Budget Optimization

### High-Traffic Sites

**For sites with 100K+ pages**:
```markdown
✅ **Crawl Budget Strategy**:
- Crawl delay: 2-3 seconds
- Block parameter-heavy URLs
- Prioritize important content
- Use physical file generation
```

**Examples of URLs to block**:
```txt
# Crawl budget optimization
Disallow: /search/
Disallow: *?s=*
Disallow: *?p=*
Disallow: */feed/
Disallow: */page/
Disallow: */trackback/
Disallow: *?utm_*
Disallow: *?preview=*
```

### E-commerce Sites

**Product catalog optimization**:
```markdown
✅ **E-commerce Priorities**:
- Allow: Product pages, categories
- Block: Cart, checkout, account pages
- Block: Filter and sorting parameters
- Optimize: Product image crawling
```

**WooCommerce optimization**:
```txt
# E-commerce crawl efficiency
User-agent: *
Allow: /products/
Allow: /product-category/
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /*?orderby=*
Disallow: /*?filter=*
Disallow: /*add-to-cart=*
```

### Content Sites

**Blog/news site optimization**:
```markdown
✅ **Content Site Strategy**:
- Allow: All content pages and categories
- Block: Archive pagination beyond reasonable limits
- Optimize: Author page crawling
- Allow: Media file indexing for images
```

## Security Considerations

### What robots.txt Can Protect

**Effective protections**:
- ✅ Prevent accidental indexing of admin areas
- ✅ Reduce server load from unwanted crawlers
- ✅ Block known malicious bots
- ✅ Manage crawler bandwidth usage

### What robots.txt Cannot Protect

**Limited security**:
- ❌ Does not provide actual security
- ❌ Bots can ignore robots.txt
- ❌ Doesn't protect sensitive data
- ❌ Not a replacement for proper authentication

### Recommended Security Practices

**Layer security approach**:
```markdown
1️⃣ **Robots.txt**: First line of defense for well-behaved bots
2️⃣ **Authentication**: Password protection for admin areas
3️⃣ **Firewall**: Block malicious IPs and patterns
4️⃣ **Monitoring**: Log analysis for suspicious activity
```

**Admin area protection**:
```txt
# Complementary security measures
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-login.php

# But also use:
# - Strong passwords
# - Two-factor authentication
# - IP restrictions
# - Firewall rules
```

## Performance Optimization

### Physical vs Virtual Files

**Choose based on needs**:

**Virtual robots.txt** (Default):
```markdown
✅ **Pros**: Easy to update, no file permissions needed
✅ **Use cases**: Small/medium sites, shared hosting
❌ **Cons**: Slight server overhead
```

**Physical robots.txt** (Pro):
```markdown
✅ **Pros**: Better performance, CDN friendly
✅ **Use cases**: High-traffic sites, CDNs, enterprise
❌ **Cons**: Requires file permissions
```

### Caching Strategy

**Optimal caching setup**:

**Nginx configuration**:
```nginx
location = /robots.txt {
    expires 1h;
    add_header Cache-Control "public, immutable";
    add_header Vary Accept-Encoding;
}

# For physical files (Pro version)
location = /robots.txt {
    expires 1d;
    add_header Cache-Control "public";
}
```

**Apache configuration**:
```apache
<Files "robots.txt">
    ExpiresActive On
    ExpiresDefault "access plus 1 hour"
</Files>
```

### Crawl Delay Best Practices

**Recommended delays by server type**:

```markdown
🖥️ **Shared Hosting**: 1-2 seconds
   - Limited resources
   - Multiple sites on server

🖥️ **VPS**: 0.5-1 seconds
   - Dedicated resources
   - Better performance

🖥️ **Dedicated**: 0.5 seconds
   - High-performance servers
   - Can handle more requests

🛒 **E-commerce**: 2+ seconds
   - Resource-intensive operations
   - Database-heavy pages
```

## Content Strategy Alignment

### Content-Based Rules

**Different content types need different approaches**:

**Blog/Public Content**:
```txt
# Encourage full indexing
User-agent: *
Allow: /blog/
Allow: /articles/
Allow: /news/
Allow: /wp-content/uploads/
```

**Protected/Membership Content**:
```txt
# Block crawler access to paid content
User-agent: *
Disallow: /members-only/
Disallow: /premium-content/
Disallow: /courses/premium/
```

**Admin/Internal Content**:
```txt
# Always block administrative areas
User-agent: *
Disallow: /wp-admin/
Disallow: /admin/
Disallow: /internal/
Disallow: /private/
```

### Seasonal/Temporary Content

**Managing time-sensitive content**:
```txt
# Temporary maintenance blocks
User-agent: *
Disallow: /maintenance/
Disallow: /coming-soon/
# Remember to remove after launch!

# Seasonal content management
User-agent: *
Allow: /holiday-2024/
Disallow: /holiday-2023/
```

## Technical SEO Integration

### Sitemap Best Practices

**Optimal sitemap configuration**:
```txt
# Multiple sitemap types
Sitemap: https://example.com/sitemap_index.xml
Sitemap: https://example.com/news-sitemap.xml
Sitemap: https://example.com/products-sitemap.xml
Sitemap: https://example.com/image-sitemap.xml
```

**Sitemap accessibility**:
```markdown
✅ **Best Practices**:
- Always allow sitemap access
- Keep sitemats in accessible locations
- Submit to search engine tools
- Regularly update sitemap content
```

### Schema.org & Structured Data

**Robots.txt and structured data**:
```markdown
✅ **Recommendations**:
- Allow access to structured data files
- Don't block JSON-LD endpoints
- Ensure schema markup is accessible
- Test structured data accessibility
```

### International SEO

**Multilingual site considerations**:
```markdown
✅ **Best Practices**:
- Allow all language versions
- Don't block hreflang URLs
- Consider regional search engines
- Allow language-specific sitemaps
```

**Regional search engines**:
```txt
# Allow regional search engines
User-agent: Baiduspider
Allow: /chinese-content/

User-agent: Yandex
Allow: /russian-content/

User-agent: NaverBot
Allow: /korean-content/
```

## Monitoring & Maintenance

### Performance Monitoring

**Key metrics to track**:
```markdown
📊 **Crawl Statistics**:
- Search engine crawl frequency
- Crawl success rates
- Popular crawled pages
- Crawl error patterns

📊 **Site Performance**:
- Page load times
- Server resource usage
- Database query count
- Memory consumption
```

### Regular Maintenance Tasks

**Monthly checklist**:
```markdown
✅ **Review crawler patterns**:
- Check server logs for new bots
- Monitor crawl frequency changes
- Identify blocked legitimate crawlers

✅ **Performance check**:
- Test robots.txt accessibility
- Verify sitemap functionality
- Check page load impact

✅ **Content review**:
- Add new content directories
- Remove obsolete Disallow rules
- Update custom rules as needed
```

### Seasonal Adjustments

**Consider timing for changes**:
```markdown
🗓️ **Best Times for Major Changes**:
- Low traffic periods
- Non-peak business hours
- Weekends for B2B sites
- Off-season for e-commerce

⚠️ **Avoid During**:
- Product launches
- Major marketing campaigns
- Search algorithm updates
- High-traffic periods
```

## Common Pitfalls to Avoid

### Over-Restrictive Rules

**Don't block too much**:
```markdown
❌ **Common Mistakes**:
- Blocking CSS/JS files
- Disallowing entire categories
- Blocking all but Google
- Overusing wildcard patterns
```

### Incomplete Testing

**Test thoroughly**:
```markdown
✅ **Testing Checklist**:
- Test with different user agents
- Verify important page accessibility
- Check sitemap inclusion
- Monitor search engine crawling
```

### Neglecting Updates

**Keep current**:
```markdown
✅ **Regular Updates**:
- Update plugin regularly
- Review WordPress core changes
- Monitor search engine guideline updates
- Adjust rules as site evolves
```

## Professional Recommendations

### Enterprise-Level Configuration

**For large-scale websites**:
```markdown
✅ **Enterprise Best Practices**:
- Use physical robots.txt files
- Implement CDN caching
- Set up monitoring alerts
- Document all custom rules
- Create change management process
- Regular security audits
```

### Agency/Client Management

**For agencies managing multiple sites**:
```markdown
✅ **Agency Workflow**:
- Create standardized templates
- Document client-specific rules
- Implement change approval process
- Provide client training
- Set up monitoring dashboards
```

---

**Next**: Explore specific [Examples](/examples) for your use case or check our [Troubleshooting Guide](/troubleshooting) for common issues.