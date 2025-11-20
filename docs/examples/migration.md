# Migration Guide

Step-by-step instructions for migrating to Better Robots.txt from other solutions or upgrading from free to pro.

## Migration Overview

This guide helps you transition smoothly to Better Robots.txt whether you're:
- Switching from another robots.txt plugin
- Upgrading from manual configuration
- Moving from Free to Pro version

## From Other Robots.txt Plugins

### Common Migration Scenarios

#### From Yoast SEO or Rank Math
These plugins often include basic robots.txt functionality:

**Before Migration:**
1. **Backup current settings**
   - Take screenshots of current robots.txt
   - Export settings if available
   - Note any custom rules

2. **Deactivate old plugin** (temporarily)
   - Don't delete yet
   - Test that robots.txt still works

3. **Install Better Robots.txt**
   - Follow standard installation process
   - Activate the plugin

4. **Import Settings**
   - Better Robots.txt automatically detects existing rules
   - Review imported settings
   - Customize as needed

**Migration Checklist:**
```markdown
✅ Backup existing robots.txt
✅ Test current robots.txt accessibility
✅ Install Better Robots.txt
✅ Verify automatic rule import
✅ Test new robots.txt output
✅ Remove old plugin (after confirmation)
```

#### From Dedicated Robots.txt Plugins

##### From "Robots.txt" by Joost de Valk
1. **Export custom rules** from plugin settings
2. **Disable plugin** (don't delete yet)
3. **Install Better Robots.txt**
4. **Manually add custom rules** in Better Robots.txt:
   ```
   # Add your custom rules here
   User-agent: *
   Disallow: /custom-private-area/
   ```

##### From "All in One SEO Pack" robots.txt
1. **Note current settings** from SEO plugin
2. **Disable robots.txt module** in AIOSEO
3. **Install Better Robots.txt**
4. **Recreate custom rules** in Better Robots.txt

#### From Manual Configuration

##### Physical robots.txt File
If you have a physical `robots.txt` file:

**Step 1: Backup Physical File**
```bash
# Backup via FTP/SSH
cp robots.txt robots.txt.backup
```

**Step 2: Remove Physical File**
- Delete or rename the physical file
- WordPress will now handle robots.txt generation

**Step 3: Configure Better Robots.txt**
- Add your rules to Better Robots.txt settings
- Test the virtual output

**Step 4: Verify Migration**
```
# Test the new virtual robots.txt
curl https://yoursite.com/robots.txt
```

##### .htaccess robots.txt Rules
If using .htaccess for robots.txt:

**Remove .htaccess Rules:**
```apache
# Remove these lines from .htaccess
<Files "robots.txt">
    # Your custom rules here
</Files>
```

**Add to Better Robots.txt:**
Recreate your rules in the plugin interface.

## Free to Pro Migration

### Pre-Migration Preparation

#### Backup Current Settings
1. **Screenshot current configuration**
2. **Export settings** (if available)
3. **Note custom rules**
4. **Test current functionality**

#### License Preparation
1. **Purchase Pro license**
2. **Have license key ready**
3. **Ensure plugin compatibility**
4. **Schedule migration during low traffic**

### Migration Process

#### Step 1: Install Pro Version
```bash
# Method 1: Upload via WordPress admin
1. Download Pro version
2. Upload via Plugins → Add New → Upload
3. Activate Pro version

# Method 2: Replace files via FTP
1. Backup current plugin folder
2. Upload Pro version files
3. Refresh WordPress admin
```

#### Step 2: License Activation
1. **Navigate to** Better Robots.txt → Settings
2. **Enter license key**
3. **Click "Activate"**
4. **Verify Pro features are enabled**

#### Step 3: Settings Migration
Free settings should automatically transfer:
- Basic allow/disallow rules
- Bot management settings
- Sitemap configuration
- Custom directives

**Verify Migration:**
```markdown
✅ Basic rules preserved
✅ Bot settings transferred
✅ Sitemap settings maintained
✅ Custom directives intact
```

#### Step 4: Configure Pro Features
After successful migration, configure new Pro features:

##### Physical File Generation
1. **Choose file mode**: Virtual vs Physical
2. **Set update frequency**: Real-time, hourly, daily
3. **Configure backup options**
4. **Test file generation**

##### Advanced Bot Protection
1. **Enable AI detection**
2. **Set sensitivity level**
3. **Configure custom bot rules**
4. **Test bot blocking**

##### Multisite Management (if applicable)
1. **Enable network mode**
2. **Configure global rules**
3. **Set site-specific overrides**
4. **Test subsite functionality**

### Post-Migration Testing

#### Functional Testing
Test all major features:

```markdown
✅ robots.txt accessibility: https://yoursite.com/robots.txt
✅ Rule application: Test specific URLs
✅ Bot blocking: Test with different user agents
✅ Sitemap inclusion: Verify sitemap references
✅ Pro features: Test new functionality
```

#### Performance Testing
Monitor performance impact:
- Page load times
- Server response times
- Crawl efficiency
- Resource usage

#### SEO Validation
Ensure SEO continuity:
- Google Search Console checks
- Bing Webmaster Tools validation
- Third-party SEO tools verification
- Crawl behavior analysis

## Special Migration Scenarios

### Multisite Networks

#### Network-Wide Migration
For WordPress multisite installations:

1. **Network Activation**
   - Install at network level
   - Activate network-wide
   - Configure global settings

2. **Site-Specific Migration**
   - Migrate each subsite individually
   - Import existing rules per site
   - Configure site-specific settings

3. **Network Management Setup**
   - Enable network mode (Pro)
   - Set global policies
   - Configure override permissions

### High-Traffic Sites

#### Careful Migration Planning
For sites with high traffic volumes:

1. **Schedule maintenance window**
2. **Prepare rollback plan**
3. **Monitor real-time performance**
4. **Gradual feature enablement**

#### Performance Considerations
- Monitor server load during migration
- Test with staging environment first
- Consider gradual rollout
- Have emergency rollback ready

### E-commerce Sites

#### Sales-Sensitive Migration
For online stores:

1. **Schedule during off-peak hours**
2. **Test checkout process**
3. **Verify product page access**
4. **Monitor conversion rates**

#### Critical Path Testing
- Product category pages
- Shopping cart functionality
- Checkout process
- Customer account areas

## Troubleshooting Migration Issues

### Common Problems

#### Settings Not Transferred
**Problem**: Free settings lost after Pro upgrade

**Solutions**:
1. **Check plugin compatibility**
2. **Re-enter settings manually**
3. **Restore from backup**
4. **Contact support**

#### robots.txt Not Working
**Problem**: robots.txt returns 404 or old content

**Solutions**:
1. **Clear all caches**
2. **Check file permissions**
3. **Verify plugin activation**
4. **Test with different user agents**

#### Pro Features Not Available
**Problem**: Pro features not showing after upgrade

**Solutions**:
1. **Verify license activation**
2. **Check plugin version**
3. **Clear WordPress cache**
4. **Re-enter license key**

### Emergency Rollback

If migration fails completely:

#### Quick Rollback Steps
1. **Deactivate Better Robots.txt**
2. **Reactivate previous solution**
3. **Restore physical robots.txt** (if applicable)
4. **Test functionality**

#### Data Recovery
```bash
# Restore from backup
cp robots.txt.backup robots.txt

# Reactivate old plugin
# Or restore .htaccess rules
```

## Best Practices for Smooth Migration

### Before Migration
- ✅ Complete backup of WordPress site
- ✅ Document current configuration
- ✅ Test migration on staging site
- ✅ Schedule appropriate migration window
- ✅ Prepare rollback plan

### During Migration
- ✅ Follow steps methodically
- ✅ Test each feature before proceeding
- ✅ Monitor system performance
- ✅ Keep detailed notes of changes

### After Migration
- ✅ Comprehensive functionality testing
- ✅ Performance monitoring
- ✅ SEO validation
- ✅ User experience verification
- ✅ Documentation update

## Professional Migration Services

### When to Consider Professional Help
- Complex multisite setups
- High-traffic production sites
- Custom integration requirements
- Limited technical expertise
- Time-critical migrations

### What Professional Services Include
- Pre-migration assessment
- Staging environment setup
- Automated migration tools
- Performance optimization
- Post-migration support
- Training and documentation


## Next Steps After Migration

### Immediate Actions
- Monitor crawl behavior
- Check SEO rankings
- Verify user experience
- Document new configuration

### Ongoing Optimization
- Analyze performance metrics
- Fine-tune bot rules
- Optimize crawl efficiency
- Stay updated with features

## Support Resources

### Documentation
- [Installation Guide](/installation)
- [Configuration Guide](/basic-configuration)
- [Pro Features](/settings/pro)
- [Troubleshooting](/troubleshooting)

### Community Support
- [WordPress.org Forum](https://wordpress.org/support/plugin/better-robots-txt/)
- [User Community](https://better-robots.com/community)
- [Knowledge Base](https://better-robots.com/knowledge)

### Professional Support
- Priority support for Pro users
- Migration consultation services
- Custom configuration assistance
- Emergency support options

---

**Migration doesn't have to be complicated** with proper planning and the right tools. Better Robots.txt is designed to make transitions as smooth as possible.