# Guide des paramètres

Guide complet de tous les paramètres et options de configuration de Better Robots.txt.

## Aperçu des paramètres

Better Robots.txt fournit des paramètres complets organisés en sections logiques :

- **Paramètres de base** : Configuration robots.txt principale
- **Gestion des bots** : Contrôle quels bots peuvent accéder à votre site
- **Intégration SEO** : Sitemap et optimisation des moteurs de recherche
- **Options avancées** : Règles personnalisées et fonctionnalités spécialisées
- **E-commerce** : Optimisations spécifiques à WooCommerce

## Paramètres de base

### 1. Règles par défaut

**Emplacement** : Paramètres → Configuration de base

Ce sont les règles fondamentales appliquées à tous les fichiers robots.txt :

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
```

**Ce que font ces règles** :
- ✅ **Allow** : Fonctionnalités et ressources WordPress essentielles
- ❌ **Disallow** : Zones d'administration, fichiers sensibles et contenu dupliqué

### 2. User-agents personnalisés

**Emplacement** : Paramètres → Règles personnalisées

Ajoutez vos propres règles robots.txt en utilisant la zone de texte :

**Format** :
```txt
User-agent: Googlebot
Allow: /special-content/
Disallow: /private/

User-agent: Bingbot
Crawl-delay: 1
```

**User-agents courants** :
- `Googlebot` : Robot Google
- `Bingbot` : Robot Bing
- `Slurp` : Robot Yahoo
- `DuckDuckBot` : Robot DuckDuckGo

### 3. Mode fichier

**Options** :
- **Virtuel (Gratuit)** : Généré à la volée
- **Physique (Pro)** : Fichier réel créé

**Recommandation** : Utilisez le mode virtuel pour la plupart des sites.

## Gestion des bots

### 1. Contrôle des bots principaux

**Emplacement** : Paramètres → Gestion des bots

**Moteurs de recherche autorisés par défaut** :
```markdown
✅ Googlebot : google.com/bot.html
✅ Bingbot : bing.com/bingbot.htm
✅ Slurp : help.yahoo.com/help/us/ysearch/slurp
✅ DuckDuckBot : duckduckgo.com/duckduckbot.html
```

### 2. Blocage des mauvais bots (Pro)

**Bots bloqués automatiquement** :
```markdown
🚫 Scrapers de contenu
🚫 Harvesters d'e-mails
🚫 Outils de copie de site
🚫 Bots de spam SEO
🚫 Outils d'analyse concurrentielle
```

**Mise à jour automatique** : La liste est maintenue par notre équipe et mise à jour régulièrement.

### 3. Protection ChatGPT

**Options** :
```markdown
🤖 Bloquer : Empêche l'entraînement IA
🤖 Autoriser : Permet l'indexation par l'IA
🤖 Personnalisé : Règles spécifiques par user-agent
```

## Intégration SEO

### 1. Paramètres de sitemap

**Emplacement** : Paramètres → Intégration SEO

**Détection automatique** :
- **Yoast SEO** : Détection automatique du sitemap
- **Rank Math** : Intégration transparente
- **All in One SEO** : Support complet
- **Sitemap personnalisé** : URL personnalisée

**Format de sortie** :
```txt
Sitemap: https://votresite.com/sitemap.xml
Sitemap: https://votresite.com/sitemap_index.xml
```

### 2. Optimisation du budget d'exploration

**Stratégies** :
- **Priorisation du contenu** : Pages importantes en premier
- **Réduction du gaspillage** : Bloque les pages sans valeur
- **Optimisation de vitesse** : Exploration plus rapide
- **Indexation intelligente** : Meilleure découverte

### 3. Directives SEO avancées

**Options disponibles** :
```txt
Crawl-delay: 1          # Délai entre les requêtes
Request-rate: 1/5s      # Taux de requêtes maximum
Disallow: /*?*          # Bloquer les URLs avec paramètres
Allow: /*.html$         # Autoriser seulement les fichiers HTML
```

## Options avancées

### 1. Règles personnalisées

**Emplacement** : Paramètres → Règles personnalisées

**Syntaxe supportée** :
```txt
# User-agent spécifique
User-agent: Googlebot
Disallow: /private/

# Directives Allow/Disallow
Allow: /wp-content/uploads/
Disallow: /wp-content/plugins/

# Caractères génériques
Disallow: /*.pdf$
Disallow: /temp/*/

# Crawl-delay
User-agent: *
Crawl-delay: 1
```

### 2. Variables dynamiques

**Variables disponibles** :
- `%SITE_URL%` : URL de votre site
- `%UPLOAD_DIR%` : Répertoire d'upload
- `%THEME_DIR%` : Répertoire du thème
- `%PLUGIN_DIR%` : Répertoire des plugins

**Exemple** :
```txt
Allow: %UPLOAD_DIR%/
Disallow: %PLUGIN_DIR%/
```

### 3. Tests et validation

**Outils intégrés** :
- **Validateur de syntaxe** : Vérifie les erreurs
- **Testeur de règles** : Simule le comportement des bots
- **Analyseur d'impact** : Évalue les changements
- **Rapport de santé** : Score de configuration

## Paramètres e-commerce

### 1. Optimisation WooCommerce

**Emplacement** : Paramètres → E-commerce

**URLs bloquées par défaut** :
```txt
# Panier et paiement
Disallow: /cart/
Disallow: /checkout/
Disallow: /my-account/
Disallow: /add-to-cart/

# Pages de compte
Disallow: /lost-password/
Disallow: /customer-logout/
Disallow: /order-received/

# Paramètres de produits
Disallow: /*?add-to-cart=*
Disallow: /*?remove_item=*
Disallow: /*?quantity=*
```

**URLs autorisées** :
```txt
# Contenu important
Allow: /shop/
Allow: /product-category/
Allow: /products/
Allow: /*product*
```

### 2. Protection des données clients

**Sécurité renforcée** :
- **Chiffrement** : Protection des données sensibles
- **Masquage** : Cache les informations personnelles
- **Journalisation** : Suivi des accès suspects
- **Alertes** : Notifications de sécurité

### 3. Optimisation des performances

**Améliorations** :
- **Réduction de la charge** : Moins de requêtes inutiles
- **Mise en cache** : Réponses mises en cache
- **CDN** : Intégration avec les réseaux de distribution
- **HTTP/2** : Support des derniers protocoles

## Paramètres multisite

### 1. Gestion réseau

**Emplacement** : Paramètres → Multisite

**Options de contrôle** :
- **Centralisé** : Une configuration pour tous les sites
- **Par site** : Configurations individuelles
- **Hybride** : Règles globales + spécifiques

### 2. Héritage des règles

**Priorité des règles** :
1. **Règles du site** : Priorité la plus élevée
2. **Règles réseau** : Appliquées si pas de surcharge
3. **Règles par défaut** : Fallback de sécurité

### 3. Déploiement en masse

**Fonctionnalités** :
- **Application groupée** : Mettez à jour plusieurs sites
- **Modèles** : Appliquez des configurations prédéfinies
- **Tests** : Validation avant déploiement
- **Restauration** : Retour en arrière automatique

## Bonnes pratiques de configuration

### 1. Sécurité

**Règles essentielles** :
```txt
# Toujours bloquer ces zones
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /wp-config.php
Disallow: /.htaccess

# Protéger les données sensibles
Disallow: /private/
Disallow: /confidential/
Disallow: /*?secret=*
```

### 2. Performance

**Optimisations recommandées** :
```txt
# Réduire le gaspillage de budget
Disallow: */page/*
Disallow: */tag/
Disallow: */search/

# Contrôler le taux d'exploration
Crawl-delay: 1
Request-rate: 1/5s
```

### 3. SEO

**Directives optimales** :
```txt
# Assurer l'indexation du contenu important
Allow: /wp-content/uploads/
Allow: /*.jpg$
Allow: /*.png$
Allow: /*.html$

# Référencer les sitemaps
Sitemap: https://votresite.com/sitemap.xml
```

## Dépannage des paramètres

### Problèmes courants

#### robots.txt ne se met pas à jour
1. Videz tous les caches
2. Vérifiez les permissions de fichiers
3. Testez avec différents user-agents

#### Règles non appliquées
1. Vérifiez la syntaxe
2. Testez avec l'outil de validation
3. Confirmez l'ordre de priorité

#### Conflits avec d'autres plugins
1. Désactivez les autres plugins robots.txt
2. Vérifiez les paramètres SEO des plugins
3. Utilisez le mode de remplacement

### Outils de test

**Test manuel** :
```bash
curl -A "Googlebot" https://votresite.com/robots.txt
curl -A "Bingbot" -I https://votresite.com/limited-page/
```

**Outils en ligne** :
- Google Search Console
- Bing Webmaster Tools
- Robots.txt Tester
- Screaming Frog

## Sauvegarde et restauration

### 1. Sauvegarde automatique

**Options** :
- **Quotidienne** : Sauvegarde quotidienne des paramètres
- **Avant modification** : Sauvegarde avant chaque changement
- **Versioning** : Conservation des versions précédentes

### 2. Export/Import

**Formats supportés** :
- **JSON** : Paramètres complets
- **TXT** : Règles robots.txt uniquement
- **CSV** : Liste des user-agents et règles

### 3. Restauration

**Options de récupération** :
- **Dernière sauvegarde** : Restauration rapide
- **Point dans le temps** : Sélection d'une date spécifique
- **Réinitialisation** : Retour aux paramètres par défaut

---

**Besoin d'aide ?** Consultez notre [Guide de dépannage](/fr/troubleshooting) ou contactez notre support premium.