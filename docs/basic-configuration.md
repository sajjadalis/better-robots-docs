# Basic Configuration

Learn the essential settings to configure your Better Robots.txt plugin for optimal performance.

## Getting Started with Basic Settings

After installation, navigate to **Better Robots.txt → Settings** in your WordPress dashboard to access these configuration options.

## Core Settings

### General Configuration

#### Robots.txt Mode
- **Virtual (Free)**: Generate robots.txt dynamically (recommended)
- **Physical (Pro)**: Create actual robots.txt file in root directory

::: tip Recommendation
Use Virtual mode for most sites. Physical mode is only needed for specific hosting requirements.
:::

#### Default User Agent
Controls which crawlers your rules apply to:
```
User-agent: *
```

## Essential Directives

### Allow Directives
These specify what crawlers CAN access:

#### Common CSS/JS Access
```
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css$
Allow: /*/*.js$
```

#### Media Files
```
Allow: /wp-content/uploads/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
```

### Disallow Directives
These specify what crawlers CANNOT access:

#### WordPress Core
```
Disallow: /wp-admin/
Disallow: /wp-includes/
```

#### Sensitive Files
```
Disallow: /wp-login.php
Disallow: /wp-register.php
Disallow: /xmlrpc.php
Disallow: /readme.html
Disallow: /license.txt
```

## Bot Management Settings

### Block Specific Bots

#### ChatGPT/OpenAI Bots
1. Go to **Bot Management** section
2. Enable **"Block ChatGPT Bot"**
3. Save changes

This blocks:
- `GPTBot`
- `ChatGPT-User`
- `CCBot`

#### Bad Bot Protection (Free Version)
Basic protection against known malicious crawlers:
1. Enable **"Basic Bad Bot Blocking"**
2. Configure **"User Agent Blacklist"** if needed

## Sitemap Integration

### Manual Sitemap Support (Free Version)
1. Go to **Sitemap Settings**
2. Enter your sitemap URL manually if known:
   ```
   Sitemap: https://yoursite.com/sitemap_index.xml
   ```
3. **Note**: Free version requires manual sitemap URL entry

### Auto-Detection (Pro Feature)
The Pro version can automatically detect and include sitemaps from:
- Yoast SEO
- Rank Math
- All in One SEO
- Google XML Sitemaps
- WordPress native sitemaps

## Ads.txt Configuration

### Basic Setup
Control access to ads verification files:

1. Navigate to **Ads.txt Settings**
2. Configure each option:
   - **ads.txt**: Choose Allow/Block
   - **app-ads.txt**: Choose Allow/Block
   - **ads.txt file security**: Enable/Disable

### Recommended Settings
For most sites:
```
ads.txt: Allow
app-ads.txt: Allow (if you have mobile app)
ads.txt file security: Enable
```

## Crawl Rate Control

### Basic Rate Limiting (Free)
Set basic crawl delays:
1. Go to **Crawl Settings**
2. Configure **Crawl Delay** (in seconds)
3. Recommended: 1-5 seconds for shared hosting

### Advanced Rate Control (Pro)
Fine-tuned control per bot type:
- Search engines: 0-1 second delay
- AI crawlers: 5-10 second delay
- Unknown bots: 10+ second delay

## Content Type Protection

### Common Content to Block
Protect sensitive content types:

#### WordPress Specific
```
Disallow: */comments/feed/
Disallow: */trackback/
Disallow: */attachment/
Disallow: */disclaimer/
```

#### Dynamic Parameters
```
Disallow: *?attachment_id=
Disallow: *?replytocom=
Disallow: *?share=
```

## Testing Your Configuration

### Manual Testing
1. Visit `https://yoursite.com/robots.txt`
2. Verify all your rules are present
3. Check syntax using [robots.txt Tester](https://developers.google.com/search/docs/crawling-indexing/robots-txt)

### Google Search Console Testing
1. Add your site to Google Search Console
2. Use the **robots.txt Tester** tool
3. Test important URLs and bots

## Best Practices

### DO
- ✅ Test changes immediately after saving
- ✅ Keep rules simple and clear
- ✅ Monitor crawl stats in Google Search Console
- ✅ Update settings when adding new features

### DON'T
- ❌ Block CSS/JS files (affects rendering)
- ❌ Block important content areas
- ❌ Use overly complex wildcard patterns
- ❌ Forget to test after WordPress updates

## Troubleshooting Basic Issues

### robots.txt Not Updating
1. Clear WordPress cache
2. Clear browser cache
3. Check if CDN is caching old version
4. Verify settings were saved

### Rules Not Working
1. Check syntax errors
2. Verify correct User-agent targeting
3. Test with Google's robots.txt tester
4. Check for conflicting plugins

## Common Configuration Examples

### Blog Site Setup
```
User-agent: *
Allow: /*.css$
Allow: /*.js$
Disallow: /wp-admin/
Disallow: /wp-includes/
Sitemap: https://blog.com/sitemap.xml
```

### E-commerce Setup
```
User-agent: *
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /cart/
Disallow: /checkout/
Allow: /*.css$
Allow: /*.js$
```

## Next Steps

After configuring basic settings:

- 📖 Learn about [Pro Features](/settings/pro)
- 🎯 Explore [Advanced Configuration](/settings/advanced)
- 💡 Check [Feature Examples](/examples)
- ❓ Review our [FAQ](/faq)

## Need Help?

- **Support Forum**: [WordPress.org Support](https://wordpress.org/support/plugin/better-robots-txt/)
- **Documentation**: Browse these guides
- **Premium Support**: Available for Pro users

---

**Remember**: Always backup your current configuration before making significant changes, and test thoroughly after each update.