# Guide de dépannage

Solutions aux problèmes courants avec Better Robots.txt et configurations robots.txt.

## Problèmes fréquents

### 1. robots.txt ne se met pas à jour

**Symptômes** :
- Les changements de paramètres ne s'appliquent pas
- Ancien robots.txt toujours visible
- Modifications sauvegardées mais non effectives

**Causes possibles** :
```markdown
🔍 **Cache WordPress** :
   - Cache de page activé
   - Plugin de cache actif
   - Cache serveur mis en place

🔍 **Cache navigateur** :
   - Navigateur garde l'ancienne version
   - Fichier robots.txt mis en cache localement

🔍 **CDN ou proxy** :
   - Cloudflare cache
   - Autre service CDN
   - Proxy inverse
```

**Solutions - Étape par étape** :

1. **Videz tous les caches** :
   ```bash
   # Via WordPress admin
   - Allez dans Performance → Purge Caches (si W3 Total Cache)
   - Ou Réglages → WP Rocket → Vider le cache
   - Ou votre plugin de cache spécifique

   # Via ligne de commande (si accessible)
   wp cache flush
   ```

2. **Videz le cache navigateur** :
   ```markdown
   - Ctrl+F5 (Windows/Linux)
   - Cmd+Shift+R (Mac)
   - Outils de développement → Réseau → Vider le cache
   - Navigation privée pour tester
   ```

3. **Videz le cache CDN** :
   ```markdown
   - Cloudflare : Purge Everything
   - Autre CDN : Clear cache complet
   - Attendez 5-10 minutes pour propagation
   ```

4. **Testez avec différentes méthodes** :
   ```bash
   # Test curl
   curl -I https://votresite.com/robots.txt

   # Test avec user-agent spécifique
   curl -A "Googlebot" https://votresite.com/robots.txt
   ```

### 2. Erreur 404 sur robots.txt

**Symptômes** :
- `https://votresite.com/robots.txt` renvoie 404
- Fichier robots.txt introuvable
- Moteurs de recherche ne peuvent pas accéder au fichier

**Causes possibles** :
```markdown
🔍 **Configuration WordPress** :
   - "Discourager les moteurs de recherche" activé
   - Structure de permaliens cassée
   - Problème de réécriture d'URL

🔍 **Permissions fichiers** :
   - Permissions incorrectes sur les répertoires
   - Problème de propriétaire de fichiers
   - Restrictions d'accès serveur

🔍 **Fichier physique en conflit** :
   - Ancien fichier robots.txt physique existe
   - Override du serveur configuré
   - Configuration Nginx/Apache en conflit
```

**Solutions détaillées** :

1. **Vérifiez les paramètres WordPress** :
   ```markdown
   ✅ Allez dans Réglages → Lecture
   ✅ Décochez "Discourager les moteurs de recherche..."
   ✅ Sauvegardez les modifications
   ```

2. **Vérifiez la structure des permaliens** :
   ```markdown
   ✅ Allez dans Réglages → Permaliens
   ✅ Cliquez "Sauvegarder les modifications"
   ✅ Aucun changement nécessaire, juste sauvegardez
   ```

3. **Vérifiez les permissions de fichiers** :
   ```bash
   # Permissions recommandées
   chmod 755 /var/www/html/
   chmod 755 /var/www/html/wp-content/
   chmod 644 /var/www/html/wp-content/plugins/

   # Vérifiez si WordPress peut écrire
   wp option get home
   wp option get siteurl
   ```

4. **Cherchez les fichiers robots.txt physiques** :
   ```bash
   # Trouvez tous les fichiers robots.txt
   find /var/www/html -name "robots.txt" -type f

   # S'il y en a un dans la racine, déplacez-le ou supprimez-le
   mv /var/www/html/robots.txt /var/www/html/robots.txt.backup
   ```

### 3. Règles ne s'appliquent pas correctement

**Symptômes** :
- Pages censées être bloquées accessibles
- Pages autorisées bloquées par erreur
- Moteurs de recherche ignorent les règles

**Diagnostique** :

1. **Testez avec Google Robots.txt Tester** :
   ```markdown
   📊 Allez dans Google Search Console
   📊 Sélectionnez votre propriété
   📊 Outils d'exploration → Tester robots.txt
   📊 Testez des URLs spécifiques
   ```

2. **Analysez la syntaxe** :
   ```markdown
   ✅ Vérifiez la syntaxe robots.txt
   ✅ Confirmez les chemins absolus
   ✅ Validez les caractères génériques
   ✅ Vérifiez l'ordre des règles
   ```

3. **Testez avec différents user-agents** :
   ```bash
   # Test Googlebot
   curl -A "Googlebot" -I https://votresite.com/private-page/

   # Test Bingbot
   curl -A "Bingbot" -I https://votresite.com/private-page/

   # Test un user-agent générique
   curl -A "Mozilla/5.0" -I https://votresite.com/private-page/
   ```

### 4. Conflits avec d'autres plugins SEO

**Symptômes** :
- Plusieurs plugins essaient de gérer robots.txt
- Paramètres écrasés automatiquement
- Comportement imprévisible

**Plugins souvent en conflit** :
```markdown
⚠️ **Yoast SEO** :
   - Options dans SEO → Avancé → Outils d'exploration
   - "Créer un fichier robots.txt" peut être activé

⚠️ **Rank Math** :
   - Configuration dans Rank Math → Titres et méta
   - Options de modification robots.txt disponibles

⚠️ **All in One SEO Pack** :
   - Options dans Outils d'exploration
   - Gestion robots.txt intégrée

⚠️ **Plugins robots.txt dédiés** :
   - KB Robots.txt
   - Robots.txt Manager
   - Autres similaires
```

**Solution complète** :

1. **Identifiez tous les plugins concernés** :
   ```markdown
   📋 Faites la liste des plugins installés
   📋 Vérifiez les paramètres robots.txt de chacun
   📋 Notez ceux qui ont des options robots.txt
   ```

2. **Choisissez un seul gestionnaire** :
   ```markdown
   ✅ **Option A** : Utiliser seulement Better Robots.txt
   - Désactivez robots.txt dans tous les autres plugins
   - Configurez Better Robots.txt comme principal

   ✅ **Option B** : Utiliser un autre plugin
   - Désactivez Better Robots.txt
   - Configurez l'autre plugin comme souhaité
   ```

3. **Configurez les priorités** :
   ```markdown
   🎯 Dans Better Robots.txt :
   - Utilisez le mode "Remplacer" si disponible
   - Activez la priorité sur autres plugins
   - Testez après configuration
   ```

### 5. Problèmes multisite

**Symptômes spécifiques multisite** :
- Règles non appliquées sur certains sous-sites
- Configuration réseau ne se propage pas
- Comportement incohérent entre sites

**Diagnostique multisite** :

1. **Vérifiez la configuration réseau** :
   ```markdown
   🔍 Allez dans Tableau de bord → Réseau → Paramètres
   🔍 Vérifiez les paramètres robots.txt réseau
   🔍 Confirmez que "Better Robots.txt" est activé réseau
   ```

2. **Testez chaque sous-site individuellement** :
   ```bash
   # Test robots.txt pour chaque sous-site
   curl -I https://site1.votresite.com/robots.txt
   curl -I https://site2.votresite.com/robots.txt
   curl -I https://votresite.com/site1/robots.txt
   ```

3. **Vérifiez les permissions multisite** :
   ```markdown
   ✅ L'administrateur réseau a les droits nécessaires
   ✅ Les administrateurs de site ont les permissions locales
   ✅ Les règles d'héritage sont correctement configurées
   ```

## Outils de dépannage

### Tests automatisés

**Script de test complet** :
```bash
#!/bin/bash
# Script de test robots.txt

SITE_URL="https://votresite.com"
ROBOTS_URL="$SITE_URL/robots.txt"

echo "=== Test de base robots.txt ==="
curl -I "$ROBOTS_URL"

echo -e "\n=== Test avec différents user-agents ==="
# Test Googlebot
echo "Googlebot:"
curl -A "Googlebot" -I "$SITE_URL/wp-admin/"

# Test Bingbot
echo "Bingbot:"
curl -A "Bingbot" -I "$SITE_URL/wp-admin/"

# Test user-agent générique
echo "Generic:"
curl -A "Mozilla/5.0" -I "$SITE_URL/wp-admin/"

echo -e "\n=== Test de validation ==="
# Vérifiez que le fichier est accessible
if curl -s "$ROBOTS_URL" | grep -q "User-agent"; then
    echo "✅ robots.txt valide et accessible"
else
    echo "❌ robots.txt invalide ou inaccessible"
fi
```

### Outils en ligne

**Services de validation** :
```markdown
🔗 **Google Search Console** :
   - Outils d'exploration → Tester robots.txt
   - Analyse complète des règles
   - Détection d'erreurs

🔗 **Bing Webmaster Tools** :
   - Outils → Analyser robots.txt
   - Test des URLs spécifiques
   - Rapports détaillés

🔗 **Robots.txt Tester** (tools.robotstxt.org) :
   - Validation syntaxique
   - Test par user-agent
   - Analyse complète
```

### Monitoring continu

**Scripts de surveillance** :
```php
<?php
// Script de surveillance robots.txt
function check_robotstxt_health() {
    $url = 'https://votresite.com/robots.txt';
    $response = wp_remote_get($url);

    if (is_wp_error($response)) {
        error_log('robots.txt inaccessible: ' . $response->get_error_message());
        return false;
    }

    $body = wp_remote_retrieve_body($response);
    if (!preg_match('/User-agent:\s*\*/i', $body)) {
        error_log('robots.txt format invalide');
        return false;
    }

    return true;
}

// Planifier une vérification quotidienne
if (!wp_next_scheduled('check_robotstxt_daily')) {
    wp_schedule_event(time(), 'daily', 'check_robotstxt_daily');
}

add_action('check_robotstxt_daily', 'check_robotstxt_health');
?>
```

## Solutions par type d'hébergement

### Hébergement partagé

**Problèmes courants** :
```markdown
⚠️ **Limitations de ressources** :
   - Mémoire PHP limitée
   - Temps d'exécution restreint
   - Accès système limité

⚠️ **Restrictions de fichiers** :
   - Permissions limitées
   - Possibilité de .htaccess restreinte
   - Configuration serveur partagée
```

**Solutions adaptées** :
```markdown
✅ **Configuration optimisée** :
   - Utilisez le mode virtuel (pas de fichier physique)
   - Minimisez le nombre de règles
   - Activez la mise en cache WordPress

✅ **Communication avec l'hébergeur** :
   - Vérifiez les limitations spécifiques
   - Demandez si des restrictions robots.txt existent
   - Confirmez les permissions requises
```

### VPS/Dédié

**Avantages à exploiter** :
```markdown
✅ **Contrôle complet** :
   - Configuration Apache/Nginx personnalisée
   - Permissions complètes
   - Scripts personnalisés possibles

✅ **Performance** :
   - Mode physique recommandé
   - Cache avancé disponible
   - Monitoring personnalisé
```

**Configuration optimisée VPS** :
```markdown
🚀 **Nginx configuration** :
   server {
       location = /robots.txt {
           try_files $uri $uri/ /index.php?$args;
       }
   }

🚀 **Apache .htaccess** :
   <Files "robots.txt">
       Order Allow,Deny
       Allow from all
   </Files>

🚀 **Script de monitoring** :
   # Surveillance continue disponible
```

### Cloud/AWS

**Considérations spécifiques** :
```markdown
☁️ **Load balancing** :
   - Assurez la cohérence entre serveurs
   - Utilisez le mode physique
   - Configuez les caches partagés

☁️ **CDN integration** :
   - Mettez en cache robots.txt sur CDN
   - Configurez l'invalidation automatique
   - Optimisez les en-têtes Cache-Control
```

## Prévention et maintenance

### Checklist de maintenance mensuelle

```markdown
✅ **Vérifications mensuelles** :
   - Validez le fichier robots.txt
   - Testez les pages importantes
   - Vérifiez les sitemaps
   - Analysez les logs serveur
   - Surveillez les métriques SEO

✅ **Mises à jour régulières** :
   - Mettez à jour les listes de bots
   - Révisez les règles de blocage
   - Optimisez pour le nouveau contenu
   - Documentez les changements

✅ **Tests de performance** :
   - Vérifiez le temps de réponse
   - Testez différents user-agents
   - Validez la compatibilité mobile
   - Confirmez l'accessibilité CDN
```

### Surveillance proactive

**Alertes automatiques** :
```php
<?php
// Configuration d'alertes
function setup_robotstxt_monitoring() {
    // Vérification quotidienne
    wp_schedule_event(time(), 'daily', 'robotstxt_health_check');

    // Rapport hebdomadaire
    wp_schedule_event(time(), 'weekly', 'robotstxt_performance_report');
}

add_action('robotstxt_health_check', 'check_robotstxt_health');
add_action('robotstxt_performance_report', 'generate_robotstxt_report');
?>
```

---

**Besoin d'aide supplémentaire ?**
- [Support communautaire](https://wordpress.org/support/plugin/better-robots-txt/)
- [Support premium](https://better-robots.com/support)
- [Documentation complète](/fr/)