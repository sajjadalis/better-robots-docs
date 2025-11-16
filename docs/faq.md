# Frequently Asked Questions

Common questions about Better Robots.txt plugin functionality and usage.

## General Questions

### What is robots.txt?

**robots.txt** is a text file that tells search engine crawlers which pages or files the crawler **can** or **cannot** request from your site. It's used primarily to manage crawl traffic to your site and prevent overloading your server.

### Do I need a robots.txt file?

**Yes**, most websites benefit from a robots.txt file because it:
- Helps search engines understand your site structure
- Prevents crawling of unnecessary files
- Protects sensitive areas of your website
- Improves crawl efficiency
- Reduces server load

### What's the difference between virtual and physical robots.txt?

**Virtual robots.txt**:
- Generated dynamically by WordPress
- Easy to update through plugin settings
- No file system access required
- Default in Better Robots.txt

**Physical robots.txt**:
- Actual file on your server
- Better for CDNs and caching
- Required for PageSpeed Insights optimization
- Available in Pro version

### Will Better Robots.txt work with my SEO plugin?

**Yes**, Better Robots.txt is designed to work alongside popular SEO plugins:
- ✅ **Yoast SEO**: Auto-detects sitemaps
- ✅ **Rank Math**: Full compatibility
- ✅ **All in One SEO**: Native integration
- ✅ **SEOPress**: Complete support

### Is Better Robots.txt free?

**Free version** includes:
- Basic robots.txt generation
- ChatGPT Bot blocking
- Ads.txt support
- Core SEO features

**Pro version** adds:
- Advanced bot management
- Sitemap auto-detection
- WooCommerce optimization
- Multisite support
- Physical file generation
- Priority support

## Installation & Setup

### How do I install the plugin?

**Three easy methods**:
1. **WordPress.org**: Plugins → Add New → Search "Better Robots.txt"
2. **Manual Upload**: Download and upload via FTP
3. **Direct Download**: From WordPress.org and upload

[See detailed installation guide](/installation)

### Do I need technical knowledge?

**No technical knowledge required**! The plugin provides:
- One-click setup for beginners
- Default optimized settings
- Clear explanations for each option
- Preview functionality

### What happens after activation?

After activation:
1. Plugin automatically generates initial robots.txt
2. Settings page becomes available in WordPress dashboard
3. You can immediately see your robots.txt at `yoursite.com/robots.txt`
4. Optional Freemius setup appears (can be skipped)

### Can I migrate from another robots.txt plugin?

**Yes**, migration is straightforward:
- Plugin detects existing configurations
- Imports compatible settings
- Provides migration recommendations
- Creates backup of old settings

## Settings & Configuration

### What are the best default settings?

For most WordPress sites:

```markdown
✅ **Recommended Defaults**:
- Keep default WordPress rules
- Allow major search engines
- Block ChatGPT Bot
- Enable ads.txt access
- Set crawl delay: 1 second
- Auto-detect sitemaps (Pro)
```

### Should I block all bots except Google?

**No, this is not recommended**. Different bots serve different purposes:

**Search Engines**: Keep Google, Bing, Yahoo, DuckDuckGo
**Media Crawlers**: Allow for image/video indexing
**Social Media**: Allow for rich sharing previews
**Academic**: Allow for educational content indexing

### What crawl delay should I use?

**Recommended crawl delays**:
- **Shared hosting**: 1-2 seconds
- **VPS/Dedicated**: 0.5-1 second
- **High traffic sites**: 2-5 seconds
- **E-commerce**: 2 seconds (for performance)

### How do I add custom rules?

**Two methods**:

1. **Custom Rules Textarea**:
   ```txt
   User-agent: Googlebot
   Allow: /special-content/

   User-agent: *
   Disallow: /private/
   ```

2. **Post Meta Box**: Exclude specific posts/pages individually

### Can I exclude specific pages?

**Yes**, multiple ways:
- **Post Meta Box**: Built-in exclusion feature
- **Custom Rules**: Add Disallow directives
- **URL Patterns**: Block specific URL structures

## SEO Impact

### Will blocking bots hurt my SEO?

**Properly configured robots.txt helps SEO**:
- Focuses crawler attention on important content
- Reduces server load for better performance
- Prevents indexing of duplicate/thin content
- Protects crawl budget

**Avoid blocking**:
- Major search engines (Google, Bing)
- Important content pages
- Sitemaps and CSS/JS files

### How long until search engines notice changes?

**Typical timelines**:
- **Google**: Usually within 24-48 hours
- **Bing**: 2-3 days
- **Other engines**: Varies, up to a week

**Speed up detection**:
- Submit sitemap in Search Console
- Use "Fetch as Google" feature
- Monitor crawling activity

### Should I block AI/ChatGPT bots?

**Consider these factors**:
- ✅ **Block if**: Protect original content, prevent training data usage
- ✅ **Allow if**: Want AI visibility, content discovery
- ⚠️ **Mixed**: Allow limited access with specific rules

### How do I check if my robots.txt is working?

**Testing methods**:
1. **Direct URL**: Visit `yoursite.com/robots.txt`
2. **Search Console**: robots.txt testing tool
3. **Manual testing**: Different user agents
4. **Third-party tools**: Online validators

## Pro Features

### Is the Pro version worth it?

**Pro version provides**:
- 🎯 **Advanced bot management**: Better protection
- 🛒 **E-commerce optimization**: WooCommerce support
- 🌐 **Multisite support**: Network management
- 📁 **Physical files**: Performance optimization
- 🔍 **Sitemap integration**: Auto-detection
- 📞 **Priority support**: Direct help

**ROI**:
- Improved SEO performance
- Reduced server costs
- Better security
- Time savings

### How do I upgrade to Pro?

**Simple upgrade process**:
1. Go to **Better Robots.txt → Settings**
2. Click "Upgrade to Pro" button
3. Choose pricing plan
4. Complete payment
5. Features activate automatically

### Can I try Pro before buying?

**Yes**, Pro features include:
- **14-day free trial**
- Full feature access
- No credit card required
- Cancel anytime

### What happens if I cancel Pro subscription?

**When you cancel**:
- Keep using current Pro features until subscription ends
- Site remains functional with free features
- Settings are preserved
- Can reactivate anytime

## Technical Questions

### What PHP version is required?

**Minimum requirements**:
- **WordPress**: 4.1 or higher
- **PHP**: 7.4 or higher
- **Memory**: 64MB PHP memory limit
- **Permissions**: Write access for some features

### Will the plugin slow down my site?

**No, the plugin is optimized**:
- Efficient code structure
- Minimal database queries
- Smart caching mechanisms
- Pro version includes physical file option

### Does it work with multisite?

**Yes, multisite support includes**:
- Network-wide activation
- Individual site configuration
- Cross-site rule management
- Bulk operations
- Network sitemap detection

### Can I use it with CDNs?

**Yes**, CDN compatibility**:
- Virtual mode works with most CDNs
- Physical file mode (Pro) optimal for CDNs
- Cloudflare, CloudFront, MaxCDN supported
- Caching-friendly configuration

## Troubleshooting

### My robots.txt shows 404 error

**Common solutions**:
1. Check WordPress privacy settings
2. Resave permalink structure
3. Check for conflicting plugins
4. Verify file permissions
5. Clear all caches

### Settings aren't saving

**Troubleshooting steps**:
1. Verify admin permissions
2. Increase PHP memory limit
3. Clear WordPress and plugin caches
4. Check for JavaScript errors
5. Try different browser

### robots.txt content is wrong

**Debugging checklist**:
1. Review plugin settings
2. Check for physical robots.txt file
3. Test with different user agents
4. Verify custom rule syntax
5. Check for plugin conflicts

### Performance issues after installation

**Performance optimization**:
1. Adjust crawl delay settings
2. Enable physical file generation (Pro)
3. Review bot blocking rules
4. Optimize server caching
5. Monitor server resources

## Billing & Support

### What payment methods are accepted?

**Accepted payment methods**:
- Credit/Debit cards (Visa, MasterCard, American Express)
- PayPal
- Bank transfer (annual plans)

### Is there a money-back guarantee?

**Yes**, Pro version includes:
- **30-day money-back guarantee**
- No questions asked
- Full refund process
- Keep free features

### How do I get support?

**Support channels**:
1. **Free users**: WordPress.org support forums
2. **Pro users**: Priority support email
3. **Documentation**: Comprehensive guides
4. **Video tutorials**: Step-by-step instructions

### Can I use Pro on multiple sites?

**License options**:
- **Personal**: 1 site
- **Business**: 3 sites
- **Agency**: 10 sites
- **Unlimited**: Unlimited sites

---

**Need more help?** Visit our [Support Forum](https://wordpress.org/support/plugin/better-robots-txt/) or check our [Troubleshooting Guide](/troubleshooting).