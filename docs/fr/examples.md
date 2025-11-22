# Exemples de configuration

Exemples pratiques de configurations robots.txt pour différents types de sites WordPress.

## Configuration pour blog personnel

### Cas d'usage
Blog personnel avec articles, pages statiques et galeries d'images.

### Configuration recommandée
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Allow: /*.png$
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.gif$

# Bloquer les zones d'administration
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php
Disallow: /wp-register.php

# Bloquer les fichiers système
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Bloquer les pages non essentielles
Disallow: */disclaimer/*
Disallow: *?attachment_id=
Disallow: /privacy-policy

# Référencer le sitemap
Sitemap: https://monblog.com/sitemap.xml

# Généré par Better Robots.txt
```

### Explication
- **Autorise** : Ressources essentielles et médias
- **Bloque** : Zones d'administration et fichiers système
- **Sitemap** : Facilite l'indexation

## Configuration e-commerce (WooCommerce)

### Cas d'usage
Boutique en ligne avec produits, panier et processus de paiement.

### Configuration optimisée
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/

# Autoriser les pages de produits
Allow: /shop/
Allow: /product-category/
Allow: /products/
Allow: /*product*
Allow: /*.jpg$
Allow: /*.png$

# Bloquer les zones d'administration
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php

# Bloquer les URLs e-commerce sensibles
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /order-received/
Disallow: /add-to-cart*
Disallow: /*?remove_item*
Disallow: /*?quantity=*
Disallow: /lost-password/
Disallow: /customer-logout/

# Bloquer les fichiers système
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Optimisation SEO
Disallow: */page/*
Disallow: */tag/
Disallow: */search/
Disallow: *?attachment_id=

# Sitemaps multiples
Sitemap: https://boutique.com/sitemap.xml
Sitemap: https://boutique.com/sitemap_products.xml

# Généré par Better Robots.txt
```

### Explication
- **Produits** : Toutes les pages de produits accessibles
- **Sécurité** : Panier et paiement protégés
- **SEO** : Pages sans valeur bloquées

## Configuration site d'entreprise

### Cas d'usage
Site corporate avec pages de services, blog et ressources téléchargeables.

### Configuration professionnelle
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Allow: /services/
Allow: /about/
Allow: /contact/
Allow: /blog/
Allow: /*.pdf$
Allow: /*.docx$

# Autoriser les moteurs de recherche principaux
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Bloquer les zones d'administration
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php

# Protéger les ressources internes
Disallow: /internal/
Disallow: /admin-area/
Disallow: /team-resources/
Disallow: /confidential/

# Bloquer les fichiers système
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Optimisation pour les moteurs de recherche
Disallow: */feed/
Disallow: */trackback/
Disallow: */comments/
Disallow: */author/
Disallow: *?replytocom=

# Référencer les sitemaps
Sitemap: https://entreprise.com/sitemap.xml
Sitemap: https://entreprise.com/sitemap-services.xml

# Généré par Better Robots.txt
```

### Explication
- **Contenu public** : Pages importantes accessibles
- **Ressources** : Documents de l'entreprise autorisés
- **Protection** : Zones internes sécurisées

## Configuration multisite

### Cas d'usage
Réseau WordPress avec plusieurs sous-sites thématiques.

### Configuration réseau
```txt
# Règles globales pour tous les sites
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/

# Bloquer globalement les zones sensibles
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-login.php

# Règles spécifiques par sous-site
# Site principal (news.example.com)
User-agent: *
Allow: /news/wp-content/uploads/
Disallow: /news/wp-admin/

# Blog (blog.example.com)
User-agent: *
Allow: /blog/wp-content/uploads/
Disallow: /blog/wp-admin/

# Boutique (shop.example.com)
User-agent: *
Allow: /shop/wp-content/uploads/
Disallow: /shop/cart/
Disallow: /shop/checkout/

# Protection générale
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Sitemaps par sous-site
Sitemap: https://news.example.com/sitemap.xml
Sitemap: https://blog.example.com/sitemap.xml
Sitemap: https://shop.example.com/sitemap.xml

# Généré par Better Robots.txt
```

### Explication
- **Règles réseau** : Applicables à tous les sites
- **Spécifique** : Configurations individuelles par sous-site
- **Centralisation** : Maintenance facilitée

## Configuration haute sécurité

### Cas d'usage
Site avec données sensibles nécessitant protection maximale.

### Configuration sécurisée
```txt
# Bloquer tous les bots par défaut
User-agent: *
Disallow: /

# Autoriser uniquement les bons bots
User-agent: Googlebot
Allow: /wp-content/uploads/
Allow: /*.css
Allow: /*.js
Allow: /public-content/
Disallow: /private/
Disallow: /admin/
Disallow: /sensitive/

User-agent: Bingbot
Allow: /wp-content/uploads/
Allow: /*.css
Allow: /*.js
Allow: /public-content/
Disallow: /private/
Disallow: /admin/
Disallow: /sensitive/

# Bloquer les bots suspects
User-agent: *
Disallow: /
Crawl-delay: 1

# Protection renforcée
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-config.php
Disallow: /.htaccess
Disallow: /backup/
Disallow: /logs/
Disallow: /temp/
Disallow: /cache/

# Contenu très restrictif
Allow: /wp-content/themes/current-theme/style.css
Allow: /wp-content/plugins/essential-plugin/
Disallow: /wp-content/themes/
Disallow: /wp-content/plugins/
Disallow: /wp-content/backup/

# Fichiers système critiques
Disallow: /*.php$
Disallow: /*.sql$
Disallow: /*.log$
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Pas de sitemap public pour sécurité
# Généré par Better Robots.txt
```

### Explication
- **Liste blanche** : Autorise uniquement les bots de confiance
- **Restrictions** : Blocage maximal par défaut
- **Protection** : Sécurité renforcée des données

## Configuration site média

### Cas d'usage
Site avec beaucoup d'images, vidéos et fichiers médias.

### Configuration optimisée médias
```txt
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Allow: /wp-content/uploads/
Allow: /*.jpg$
Allow: /*.jpeg$
Allow: /*.png$
Allow: /*.gif$
Allow: /*.webp$
Allow: /*.svg$
Allow: /*.mp4$
Allow: /*.avi$
Allow: /*.mov$
Allow: /*.pdf$

# Autoriser les galeries et portfolios
Allow: /gallery/
Allow: /portfolio/
Allow: /media/
Allow: /images/

# Bloquer l'administration mais autoriser les médias
Disallow: /wp-admin/
Allow: /wp-admin/admin-ajax.php
Disallow: /wp-includes/

# Optimisation des performances
Disallow: */page/*
Disallow: */tag/
Disallow: */category/page/*
Disallow: *?attachment_id=

# Bloquer les fichiers non essentiels
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Sitemap multimédia
Sitemap: https://mediasite.com/sitemap.xml
Sitemap: https://mediasite.com/sitemap-images.xml

# Généré par Better Robots.txt
```

### Explication
- **Médias** : Accès complet aux fichiers multimédias
- **Galleries** : Portfolios et galeries accessibles
- **Performance** : Optimisation pour les gros volumes

## Configuration API et services

### Cas d'usage
Site offrant des services API avec endpoints publics et privés.

### Configuration orientée API
```txt
# User-agent général
User-agent: *
Allow: /wp-admin/admin-ajax.php
Allow: /*/*.css
Allow: /*/*.js
Disallow: /wp-admin/
Disallow: /wp-includes/

# Autoriser les crawlers API
User-agent: Googlebot
Allow: /api/public/
Allow: /docs/
Allow: /wp-json/wp/v2/posts
Allow: /wp-json/wp/v2/pages
Disallow: /api/private/
Disallow: /api/admin/
Disallow: /wp-json/wp/v2/users

User-agent: Mozilla/* (API clients)
Allow: /api/
Allow: /wp-json/
Crawl-delay: 1

# Protéger les endpoints sensibles
Disallow: /api/private/
Disallow: /api/admin/
Disallow: /api/internal/
Disallow: /wp-json/wp/v2/users
Disallow: /wp-json/wp/v2/settings
Disallow: /wp-json/wp/v2/themes
Disallow: /wp-json/wp/v2/plugins

# Documentation API autorisée
Allow: /api/docs/
Allow: /swagger/
Allow: /redoc/

# Protection standard
Disallow: /readme.html
Disallow: /license.txt
Disallow: /xmlrpc.php

# Limitation de taux
Crawl-delay: 1
Request-rate: 1/5s

# Sitemaps
Sitemap: https://apisite.com/sitemap.xml
Sitemap: https://apisite.com/api-sitemap.xml

# Généré par Better Robots.txt
```

### Explication
- **API** : Endpoints publics accessibles
- **Sécurité** : Endpoints privés protégés
- **Documentation** : API docs accessibles pour développeurs

## Bonnes pratiques

### 1. Testez toujours votre configuration
```bash
# Test avec Googlebot
curl -A "Googlebot" https://votresite.com/robots.txt

# Test une page spécifique
curl -A "Googlebot" -I https://votresite.com/private-page/
```

### 2. Utilisez Google Search Console
- Soumettez votre robots.txt pour test
- Vérifiez les erreurs d'URL bloquées
- Surveillez les statistiques d'exploration

### 3. Maintenez vos règles à jour
- Revoyez trimestriellement
- Adaptez aux nouveaux contenus
- Mettez à jour les sitemaps

### 4. Documentez vos décisions
- Notez pourquoi certaines règles existent
- Gardez une trace des changements
- Expliquez les exceptions

---

**Besoin d'aide ?** Consultez notre [Guide de configuration](/fr/settings) ou notre [FAQ](/fr/faq).