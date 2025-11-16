# Troubleshooting

Comprehensive troubleshooting guide for Better Robots.txt plugin issues.

## Common Issues & Solutions

### robots.txt File Not Found (404 Error)

**Problem**: Visiting `yoursite.com/robots.txt` shows 404 error

**Causes & Solutions**:

#### 1. WordPress Privacy Settings
```php
// Check WordPress reading settings
Settings → Reading → Search Engine Visibility
```

**Solution**:
- Uncheck "Discourage search engines from indexing this site"
- Save settings and test again

#### 2. Permalink Structure Issues
```bash
# Test permalink structure
# Visit: /wp-admin/options-permalink.php
# Click "Save Changes" (no modification needed)
```

#### 3. Plugin Conflicts
**Conflicting Plugins**:
- Other SEO plugins with robots.txt features
- Security plugins
- Caching plugins

**Solution**:
1. Deactivate other robots.txt plugins
2. Test with default theme
3. Reactivate plugins one by one

#### 4. .htaccess Configuration
Add to `.htaccess`:
```apache
<Files robots.txt>
    Order Allow,Deny
    Allow from all
</Files>
```

### Settings Not Saving

**Problem**: Changes in plugin settings don't persist after saving

**Solutions**:

#### 1. Check User Permissions
```php
// Verify user capabilities
current_user_can('manage_options')
```

**Requirements**:
- Must be WordPress Administrator
- Need `unfiltered_html` capability

#### 2. PHP Memory Limit
Add to `wp-config.php`:
```php
define('WP_MEMORY_LIMIT', '256M');
```

#### 3. Clear Caches
```bash
# Clear various caches
- WordPress object cache
- Plugin caches (W3 Total Cache, WP Rocket, etc.)
- Browser cache
- Server-side cache (Varnish, Redis)
```

#### 4. Database Issues
```sql
-- Check options table
SELECT option_name, option_value
FROM wp_options
WHERE option_name = 'robots_txt';
```

### Plugin Causing White Screen

**Problem**: Website shows blank page after plugin activation

**Immediate Fix**:
```bash
# Deactivate plugin via FTP/SSH
# Rename plugin folder
mv wp-content/plugins/better-robots.txt wp-content/plugins/better-robots.txt.disabled
```

**Prevention**:

#### 1. PHP Version Compatibility
- Requires PHP 7.4+
- Check via: `php -v` or WordPress dashboard

#### 2. Memory Limit
```php
// wp-config.php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');
```

#### 3. Debug Mode
```php
// wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Check debug log: `/wp-content/debug.log`

### robots.txt Content Incorrect

**Problem**: Generated robots.txt doesn't match expected content

**Debugging Steps**:

#### 1. Check Plugin Settings
```php
// View current settings in database
SELECT option_value FROM wp_options WHERE option_name = 'robots_txt';
```

#### 2. Verify Physical vs Virtual
```bash
# Check for physical file
ls -la /path/to/wordpress/robots.txt

# If exists, remove or rename:
mv robots.txt robots.txt.backup
```

#### 3. Test with Different Bots
```bash
# Test different user agents
curl -A "Googlebot" https://yoursite.com/robots.txt
curl -A "AhrefsBot" https://yoursite.com/robots.txt
curl -A "facebookexternalhit" https://yoursite.com/robots.txt
```

#### 4. Review Generated Content
Check for:
- Correct sitemap URLs
- Proper user-agent directives
- Expected allow/disallow rules
- Custom rule formatting

### Performance Issues

**Problem**: Website slowed down after plugin installation

**Solutions**:

#### 1. Crawl Delay Settings
```php
// Check current crawl delay
$settings = get_option('robots_txt');
$crawl_delay = $settings['crawl_delay'] ?? 0;
```

**Optimization**:
- Set appropriate crawl delay (1-5 seconds)
- Enable physical file generation (Pro)
- Optimize server caching

#### 2. Bot Traffic Analysis
```bash
# Analyze server logs
tail -f /var/log/nginx/access.log | grep "robots.txt"

# Check for aggressive crawlers
grep "bot" /var/log/apache2/access.log | tail -20
```

#### 3. Caching Configuration
```nginx
# Nginx caching for robots.txt
location = /robots.txt {
    expires 1h;
    add_header Cache-Control "public, immutable";
}
```

### Sitemap Issues

**Problem**: Sitemaps not appearing in robots.txt

**Debugging**:

#### 1. Check Sitemap URLs
```bash
# Test sitemap accessibility
curl -I https://yoursite.com/sitemap_index.xml
curl -I https://yoursite.com/wp-sitemap.xml
```

#### 2. Verify SEO Plugin Integration
```php
// Check for Yoast SEO
if (class_exists('WPSEO_Sitemaps')) {
    // Yoast detected
}

// Check for Rank Math
if (defined('RANK_MATH_VERSION')) {
    // Rank Math detected
}
```

#### 3. Manual Sitemap Addition
Add custom sitemap in plugin settings:
```
https://yoursite.com/custom-sitemap.xml
```

### Multisite Issues

**Problem**: Rules not applying to all subsites

**Solutions**:

#### 1. Network Activation
```bash
# Activate plugin network-wide
/wp-admin/network/plugins.php
```

#### 2. Subdirectory vs Subdomain
```php
// Check multisite configuration
if (is_multisite()) {
    $subdomain_install = get_site_option('subdomain_install');
}
```

#### 3. Individual Site Settings
Configure each subsite:
```bash
/wp-admin/network/sites.php
# Edit individual site settings
```

### Physical File Issues (Pro Feature)

**Problem**: Physical robots.txt file not being created or updated

**Solutions**:

#### 1. File Permissions
```bash
# Check WordPress directory permissions
ls -la /path/to/wordpress/

# Set proper permissions
chmod 755 /path/to/wordpress/
chown www-data:www-data /path/to/wordpress/
```

#### 2. PHP File System Functions
Test file system access:
```php
// Test file creation
$test_file = ABSPATH . 'test-write.txt';
$result = file_put_contents($test_file, 'test');
echo $result ? 'Success' : 'Failed';
```

#### 3. Server Configuration
**Apache**:
```apache
# Allow file writing
<Directory "/var/www/html">
    AllowOverride FileInfo
    Require all granted
</Directory>
```

**Nginx**:
```nginx
# Allow file writing
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Debug Mode & Testing

### Enable Debug Mode

Add to `wp-config.php`:
```php
// Enable debugging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);

// Plugin-specific debugging
define('ROBOTS_DEBUG', true);
```

### Debug Information Collection

Create a debug script:
```php
<?php
// debug-robots.php
echo "<h2>Better Robots.txt Debug Info</h2>";

// WordPress info
echo "<h3>WordPress Info</h3>";
echo "Version: " . get_bloginfo('version') . "<br>";
echo "Multisite: " . (is_multisite() ? 'Yes' : 'No') . "<br>";
echo "PHP Version: " . PHP_VERSION . "<br>";

// Plugin settings
echo "<h3>Plugin Settings</h3>";
$settings = get_option('robots_txt');
echo "<pre>" . print_r($settings, true) . "</pre>";

// SEO plugin detection
echo "<h3>SEO Plugin Detection</h3>";
echo "Yoast SEO: " . (class_exists('WPSEO_Sitemaps') ? 'Active' : 'Not Active') . "<br>";
echo "Rank Math: " . (defined('RANK_MATH_VERSION') ? 'Active' : 'Not Active') . "<br>";

// robots.txt test
echo "<h3>robots.txt Test</h3>";
$robots_url = home_url('/robots.txt');
$robots_content = wp_remote_get($robots_url);
if (!is_wp_error($robots_content)) {
    echo "robots.txt accessible: Yes<br>";
    echo "Response code: " . wp_remote_retrieve_response_code($robots_content) . "<br>";
    echo "Content length: " . strlen(wp_remote_retrieve_body($robots_content)) . " characters<br>";
} else {
    echo "robots.txt accessible: No<br>";
    echo "Error: " . $robots_content->get_error_message() . "<br>";
}
?>
```

## Performance Monitoring

### Monitor robots.txt Performance

Add to theme functions.php:
```php
// Monitor robots.txt requests
add_action('do_robots', function() {
    $log_entry = date('Y-m-d H:i:s') . " - robots.txt accessed by " . $_SERVER['HTTP_USER_AGENT'] . "\n";
    file_put_contents(WP_CONTENT_DIR . '/robots-access.log', $log_entry, FILE_APPEND);
});
```

### Analyze Bot Traffic

```bash
# Analyze bot access patterns
grep -i "bot" /var/log/nginx/access.log | grep "robots.txt" | tail -20

# Check response times
grep "robots.txt" /var/log/nginx/access.log | awk '{print $NF}' | sort -n
```

## Getting Help

### Support Channels

1. **WordPress.org Support Forum**
   - Free support from community
   - Plugin author responses
   - Search existing issues

2. **Premium Support (Pro Users)**
   - Priority response times
   - Direct developer assistance
   - Advanced troubleshooting

3. **Documentation & Guides**
   - Comprehensive guides
   - Video tutorials
   - Best practice articles

### Before Requesting Support

**Information to Provide**:
1. WordPress version
2. PHP version
3. Plugin version
4. Current settings (screenshot or export)
5. Error messages
6. Steps to reproduce
7. Other active plugins

**Debug Package**:
```bash
# Create debug information package
wp plugin list > plugins.txt
wp theme list > themes.txt
wp option get robots_txt > robots-settings.txt
wp core version > wp-version.txt
php -v > php-version.txt
```

### Common Support Questions

**Q: Why isn't my robots.txt updating?**
A: Check caching, user permissions, and plugin conflicts

**Q: Should I use virtual or physical robots.txt?**
A: Virtual is easier, physical is better for CDNs and performance

**Q: Will blocking bots hurt my SEO?**
A: Only block malicious bots - keep search engines crawling

**Q: How do I know if my settings are working?**
A: Test with different user agents and check search engine tools

---

**Next**: Check our [FAQ](/faq) for common questions or review [Best Practices](/best-practices).