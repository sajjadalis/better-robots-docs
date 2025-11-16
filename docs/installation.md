# Installation

This guide will walk you through installing Better Robots.txt on your WordPress site.

## Requirements

Before installing, ensure your WordPress site meets these requirements:

- **WordPress version**: 4.1 or higher
- **PHP version**: 7.4 or higher
- **Access**: Administrator access to WordPress dashboard
- **Storage**: 10MB free space for plugin files

## Installation Methods

### Method 1: WordPress.org Directory (Recommended)

1. **Log in** to your WordPress dashboard
2. Navigate to **Plugins → Add New**
3. Search for "Better Robots.txt"
4. Click **Install Now** on the plugin by Pagup
5. Click **Activate** after installation completes

### Method 2: Manual Upload

1. **Download** the plugin from [WordPress.org](https://wordpress.org/plugins/better-robots-txt/)
2. **Unzip** the downloaded file to your computer
3. **Connect** to your website via FTP or file manager
4. **Navigate** to `/wp-content/plugins/`
5. **Upload** the `better-robots-txt` folder
6. **Log in** to WordPress and activate the plugin

### Method 3: Direct Download

1. Visit the [Better Robots.txt WordPress.org page](https://wordpress.org/plugins/better-robots-txt/)
2. Click **Download** button
3. Follow **Method 2** steps 2-6

## Post-Installation Setup

### 1. Initial Configuration

After activation, you'll see a new menu item:

1. In your WordPress dashboard, navigate to **Better Robots.txt → Settings**
2. The plugin will automatically detect your current setup and suggest optimal settings
3. Review the default configuration and make any desired changes
4. Click **Save Changes**

### 2. Freemius Setup (Optional)

Better Robots.txt uses Freemius for premium features:

1. You'll see an opt-in screen after activation
2. **Free Version**: Click "Skip" to continue with free features
3. **Pro Version**: Click "Allow & Continue" to unlock premium features

::: tip Why Opt-In?
Opting in allows us to:
- Provide automatic updates
- Offer priority support
- Send security notifications
- Share feature announcements
:::

### 3. Verify Installation

To verify your robots.txt is working:

1. Visit `https://yoursite.com/robots.txt`
2. You should see the generated robots.txt content
3. Check that it contains the Better Robots.txt signature

```txt
# This robots.txt file was created by Better Robots.txt (Index & Rank Booster by Pagup) Plugin
```

## Common Installation Issues

### Plugin Installation Failed

**Problem**: WordPress shows "Installation failed: Could not create directory"

**Solutions**:
- Check WordPress file permissions
- Ensure `/wp-content/plugins/` is writable (755 permissions)
- Try manual installation method

### White Screen After Activation

**Problem**: Website shows white screen after plugin activation

**Solutions**:
1. **Increase PHP memory limit** in `wp-config.php`:
   ```php
   define('WP_MEMORY_LIMIT', '256M');
   ```
2. **Check PHP version** - requires PHP 7.4+
3. **Deactivate conflicting plugins**
4. **Switch to a default theme** temporarily

### robots.txt Not Found

**Problem**: `yoursite.com/robots.txt` returns 404 error

**Solutions**:
1. **Check WordPress privacy settings**:
   - Go to **Settings → Reading**
   - Ensure "Discourage search engines..." is **unchecked**

2. **Verify permalink structure**:
   - Go to **Settings → Permalinks**
   - Save settings (no changes needed)

3. **Check .htaccess file**:
   ```apache
   <Files robots.txt>
       Allow from all
   </Files>
   ```

### Plugin Settings Not Saving

**Problem**: Changes in settings don't save

**Solutions**:
1. **Clear WordPress cache**
2. **Check PHP version compatibility**
3. **Verify user permissions** (must be Administrator)
4. **Disable caching plugins** temporarily

## Uninstallation

If you need to remove Better Robots.txt:

### Safe Removal

1. **Backup your settings** (screenshot or copy configuration)
2. Navigate to **Plugins → Installed Plugins**
3. Find "Better Robots.txt" and click **Deactivate**
4. Click **Delete** to remove completely

### Preserve Settings During Removal

To keep your robots.txt configuration after deactivation:

1. Go to **Better Robots.txt → Settings**
2. Scroll to **Advanced Options**
3. **Uncheck** "Remove settings on uninstall"
4. Save changes before deactivation

## Migration from Other Robots.txt Plugins

Switching from another robots.txt plugin? Better Robots.txt automatically:

- **Detects** existing robots.txt files
- **Imports** current settings when possible
- **Backups** original configuration
- **Provides** migration recommendations

::: warning Physical Files
If you have a physical `robots.txt` file in your root directory, the plugin will suggest removing it for virtual generation, or convert it for Pro version users.
:::

## Getting Help

If you encounter issues during installation:

- **Support Forum**: [WordPress.org Support](https://wordpress.org/support/plugin/better-robots-txt/)
- **Documentation**: Continue reading these guides
- **Premium Support**: Available for Pro version users
- **Contact**: Through the plugin's support page

## Next Steps

After successful installation:

1. 📖 Read the [Quick Start Guide](/quick-start)
2. ⚙️ Configure your [Basic Settings](/basic-configuration)
3. 🚀 Explore [Pro Features](/settings/pro) (if applicable)
4. 🎯 Check our [Examples](/examples) for common use cases

---

**Need help?** Visit our [Support Forum](https://wordpress.org/support/plugin/better-robots-txt/) or check our [Troubleshooting Guide](/troubleshooting).