# Quick Start Guide

Get Better Robots.txt up and running in minutes with this step-by-step guide.

## Step 1: Activate & Access Settings

1. **Navigate to** **Better Robots.txt** → **Settings** in your WordPress dashboard
2. **Accept defaults** for now (you can customize later)
3. **Click** **Save Changes**

Your basic robots.txt is now configured!

## Step 2: Check Your robots.txt

Visit `https://yoursite.com/robots.txt` to see your new robots.txt file:

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

# This robots.txt file was created by Better Robots.txt (Index & Rank Booster by Pagup) Plugin
```

## Step 3: Essential Free Features

Enable these important free settings:

### Block ChatGPT Bot
1. Go to **Settings** → **Bot Management**
2. **Enable** "Block ChatGPT Bot"
3. **Save Changes**

### Allow Ads.txt Files
1. Scroll to **Ads.txt Settings**
2. **Select** "Allow" for both ads.txt and app-ads.txt
3. **Save Changes**

## Step 4: Recommended Pro Features

For optimal performance, consider these Pro features:

### Enable Sitemap Detection
1. **Upgrade to Pro** (if not already)
2. Go to **Sitemap Integration**
3. **Enable** "Auto-detect sitemaps"
4. **Select** your SEO plugin (Yoast, Rank Math, etc.)

### Block Bad Bots
1. Navigate to **Bot Protection**
2. **Enable** "Block Bad Bots (AI Recommended)"
3. **Enable** "Spam Backlink Blocker"

## Step 5: WooCommerce Optimization (If Applicable)

If you run an online store:

1. Go to **E-commerce Settings**
2. **Enable** "WooCommerce Optimization"
3. **Save Changes**

This blocks unnecessary URLs like `/cart/`, `/checkout/`, `add-to-cart` etc.

## Step 6: Test Your Configuration

### Google Search Console
1. Add your site to [Google Search Console](https://search.google.com/search-console/)
2. Submit your robots.txt for testing
3. Check for any blocking issues

### Manual Testing
Test important pages:
- Homepage: Should be accessible
- Admin areas: Should be blocked
- Sitemap: Should be referenced

## Common Quick Configurations

### Blog Site
```markdown
✅ Enable: Sitemap auto-detection
✅ Enable: ChatGPT Bot blocking
✅ Enable: Ads.txt allowance
✅ Disable: WooCommerce (if not used)
```

### E-commerce Site
```markdown
✅ Enable: All blog settings
✅ Enable: WooCommerce optimization
✅ Enable: Bad bot blocking
✅ Consider: Physical file generation
```

### Multisite Network
```markdown
✅ Enable: Multisite management
✅ Configure: Network rules
✅ Enable: Cross-site protection
✅ Test: Each subsite individually
```

## Troubleshooting Quick Issues

### robots.txt Not Updating
1. **Clear cache** (WordPress and browser)
2. **Check** settings are saved
3. **Wait** 5-10 minutes for propagation

### SEO Plugin Conflict
1. **Disable** other robots.txt plugins
2. **Check** Yoast/Rank Math robots.txt settings
3. **Set** Better Robots.txt to "override"

### 404 Error
1. **Check** WordPress privacy settings
2. **Verify** permalink structure
3. **Ensure** no physical robots.txt exists

## Next Steps

- 📖 Learn about [Advanced Settings](/settings/advanced)
- 🎯 Explore [Feature Examples](/examples)
- 🛠️ Review [Best Practices](/best-practices)
- ❓ Check our [FAQ](/faq)

## Need Help?

- **Documentation**: Browse these guides
- **Support**: [WordPress.org Forum](https://wordpress.org/support/plugin/better-robots-txt/)
- **Premium**: Priority support for Pro users

---

**Congratulations!** 🎉 Your WordPress site now has an optimized robots.txt file that will help improve your SEO and protect your content.