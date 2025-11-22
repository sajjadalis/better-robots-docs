# Configuration de base

Apprenez les paramètres essentiels pour configurer votre plugin Better Robots.txt pour des performances optimales.

## Démarrage avec les paramètres de base

Après installation, naviguez vers **Better Robots.txt → Paramètres** dans votre tableau de bord WordPress pour accéder à ces options de configuration.

## Paramètres principaux

### Configuration générale

#### Mode robots.txt
- **Virtuel (Gratuit)** : Générer robots.txt dynamiquement (recommandé)
- **Physique (Pro)** : Créer un fichier robots.txt réel dans le répertoire racine

::: tip Recommandation
Utilisez le mode Virtuel pour la plupart des sites. Le mode Physique n'est nécessaire que pour des exigences d'hébergement spécifiques.
:::

#### User-agent par défaut
Contrôle quels crawlers vos règles s'appliquent :
```
User-agent: *
```

## Directives essentielles

### Directives Allow
Celles-ci spécifient ce que les crawlers PEUVENT accéder :

#### Accès CSS/JS commun
```
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css$
Allow: /*/*.js$
```

#### Fichiers média
```
Allow: /wp-content/uploads/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$
```

### Directives Disallow
Celles-ci spécifient ce que les crawlers NE PEUVENT PAS accéder :

#### Zones d'administration
```
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php
Disallow: /wp-register.php
```

#### Fichiers système
```
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php
```

#### Paramètres dynamiques
```
Disallow: */disclaimer/*
Disallow: *?attachment_id=
Disallow: *?preview=true
```

## Paramètres de bots

### Gestion des bots malveillants

#### Bloquer les mauvais bots
```markdown
✅ Activer : "Bloquer les mauvais bots (recommandé par IA)"
✅ Inclut : Backlinks de spam, scrapers, harvesters d'e-mails
✅ Maintenu : Liste mise à jour régulièrement
```

#### Protection spécifique
```markdown
✅ ChatGPT Bot : Blocage optionnel
✅ Bots IA : Contrôle granulaire
✅ Bots personnalisés : Ajoutez vos propres règles
```

### Autoriser les bons bots

#### Moteurs de recherche principaux
```markdown
✅ Google : Autorisé par défaut
✅ Bing : Autorisé par défaut
✅ Yahoo : Autorisé par défaut
✅ DuckDuckGo : Autorisé par défaut
```

#### Bots des réseaux sociaux
```markdown
✅ Facebook : facebookexternalhit
✅ Twitter : Twitterbot
✅ LinkedIn : LinkedInBot
✅ Pinterest : Pinterestbot
```

## Intégration de sitemap

### Détection automatique (Pro)
```markdown
✅ Yoast SEO : Intégration automatique
✅ Rank Math : Intégration automatique
✅ All in One SEO : Intégration automatique
✅ Sitemap personnalisé : Support complet
```

### Référencement de sitemap manuel
```txt
Sitemap: https://votresite.com/sitemap.xml
Sitemap: https://votresite.com/sitemap_index.xml
```

## Paramètres e-commerce

### Optimisation WooCommerce
```markdown
✅ Bloquer : /panier/, /commande/, /mon-compte/
✅ Bloquer : add-to-cart, remove-from-cart
✅ Bloquer : Pages de paiement et résultats de commande
✅ Autoriser : Produits, catégories, pages de boutique
```

### Autres plateformes e-commerce
```markdown
✅ Easy Digital Downloads : Support complet
✅ WooCommerce Bookings : Optimisé
✅ WP eCommerce : Compatible
```

## Paramètres Ads.txt

### Fichiers publicitaires
```markdown
✅ ads.txt : Autoriser l'accès
✅ app-ads.txt : Autoriser l'accès
✅ Validation : Vérification automatique
```

### Placement dans robots.txt
```txt
Allow: /ads.txt
Allow: /app-ads.txt
```

## Configuration multisite

### Gestion réseau
```markdown
✅ Mode réseau : Contrôle centralisé
✅ Sous-sites : Règles individuelles
✅ Héritage : Règles globales + spécifiques
```

### Paramètres par sous-site
```markdown
✅ Personnalisation : Par site
✅ Surcharges : règles uniques par site
✅ Défaut : Règles réseau applicables
```

## Bonnes pratiques de configuration

### Priorités de sécurité
1. **Toujours** bloquer `/wp-admin/`
2. **Toujours** bloquer `/wp-includes/`
3. **Jamais** autoriser l'accès `wp-config.php`
4. **Toujours** protéger les fichiers de connexion

### Priorités SEO
1. **Toujours** autoriser l'accès au sitemap
2. **Toujours** autoriser les fichiers CSS/JS
3. **Toujours** autoriser les images
4. **Jamais** bloquer les pages de contenu

### Priorités de performance
1. **Bloquer** les URLs avec paramètres inutiles
2. **Bloquer** les pages de recherche si non indexées
3. **Autoriser** les ressources critiques
4. **Limiter** l'accès aux zones d'administration

## Test et validation

### Vérification manuelle
```bash
# Testez votre robots.txt
curl -I https://votresite.com/robots.txt

# Vérifiez les en-têtes HTTP
curl -H "User-Agent: Googlebot" https://votresite.com/
```

### Outils de test
- **Google Search Console** : Test des robots.txt
- **Bing Webmaster Tools** : Validation des fichiers
- **Screaming Frog** : Simulation de crawling
- **robots.txt Tester** : Outils en ligne

## Résolution des problèmes courants

### Fichier non trouvé
1. Vérifiez les permissions des fichiers
2. Confirmez les réglages de confidentialité WordPress
3. Testez avec différents user-agents

### Règles non appliquées
1. Videz tous les caches (site, CDN, navigateur)
2. Vérifiez les conflits de plugins
3. Testez avec l'outil Google Robots.txt Tester

### Erreurs de syntaxe
1. Utilisez des validateurs robots.txt
2. Vérifiez les caractères spéciaux
3. Testez chaque directive individuellement

## Exemples de configuration

### Blog personnel minimal
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*.css$
Allow: /*.js$
Disallow: /wp-admin/
Disallow: /wp-includes/
```

### Site e-commerce complet
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*.css$
Allow: /*.js$
Allow: /wp-content/uploads/
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Sitemap: https://votresite.com/sitemap.xml
```

### Site multisite
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*.css$
Allow: /*.js$
Disallow: /wp-admin/
Disallow: /wp-includes/
Crawl-delay: 1
```

## Prochaines étapes

- 📖 Explorez les [Paramètres avancés](/fr/settings/advanced)
- 🎯 Consultez les [Exemples de configuration](/fr/examples)
- 🛠️ Apprenez les [Bonnes pratiques](/fr/best-practices)
- ❓ Vérifiez notre [FAQ](/fr/faq)

---

**Besoin d'aide ?** Consultez notre [Guide de dépannage](/fr/troubleshooting) ou contactez le support.