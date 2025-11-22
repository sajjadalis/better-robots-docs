# Questions fréquentes

Questions courantes sur la fonctionnalité et l'utilisation du plugin Better Robots.txt.

## Questions générales

### Qu'est-ce que robots.txt ?

**robots.txt** est un fichier texte qui indique aux crawlers des moteurs de recherche quelles pages ou fichiers le crawler **peut** ou **ne peut pas** demander à votre site. Il est utilisé principalement pour gérer le trafic d'exploration vers votre site et prévenir la surcharge de votre serveur.

### Ai-je besoin d'un fichier robots.txt ?

**Oui**, la plupart des sites web bénéficient d'un fichier robots.txt car il :
- Aide les moteurs de recherche à comprendre la structure de votre site
- Empêche l'exploration de fichiers inutiles
- Protège les zones sensibles de votre site web
- Améliore l'efficacité d'exploration
- Réduit la charge du serveur

### Quelle est la différence entre robots.txt virtuel et physique ?

**robots.txt virtuel** :
- Généré dynamiquement par WordPress
- Facile à mettre à jour via les paramètres du plugin
- Aucun accès au système de fichiers requis
- Par défaut dans Better Robots.txt

**robots.txt physique** :
- Fichier réel sur votre serveur
- Mieux pour les CDN et la mise en cache
- Requiert l'accès au système de fichiers
- Disponible dans la version Pro

### Est-ce que ce plugin est compatible avec mon hébergeur ?

**Oui**, Better Robots.txt est compatible avec :
- La plupart des hébergeurs WordPress partagés
- Hébergements VPS et dédiés
- Services cloud (AWS, DigitalOcean, etc.)
- Hébergeurs avec restrictions de fichiers
- Environnements multisite

## Installation et configuration

### Comment installer le plugin ?

1. **Via WordPress.org** :
   - Allez dans Extensions → Ajouter
   - Recherchez "Better Robots.txt"
   - Installez et activez

2. **Manuellement** :
   - Téléchargez depuis WordPress.org
   - Uploadez le dossier dans `/wp-content/plugins/`
   - Activez depuis Extensions

### Quelles sont les exigences système ?

- **WordPress** : Version 4.1 ou supérieure
- **PHP** : Version 7.4 ou supérieure
- **Mémoire** : 32MB minimum recommandé
- **Permissions** : Accès administrateur requis

### Comment migrer depuis un autre plugin robots.txt ?

1. Installez Better Robots.txt
2. Le plugin détectera automatiquement les configurations existantes
3. Passez en revue les règles importées
4. Sauvegardez les modifications
5. Désactivez l'ancien plugin

### Puis-je utiliser mes règles personnalisées existantes ?

**Oui**, vous pouvez :
- Importer des règles depuis un fichier robots.txt existant
- Ajouter des règles personnalisées dans la zone de texte
- Utiliser des variables dynamiques
- Créer des règles spécifiques par user-agent

## Fonctionnalités gratuites vs Pro

### Quelles sont les fonctionnalités gratuites ?

- **Génération robots.txt de base** : Règles essentielles WordPress
- **Blocage ChatGPT Bot** : Protection contre le scraping IA
- **Support Ads.txt** : Accès aux fichiers de vérification publicitaire
- **Interface conviviale** : Configuration simple
- **Mises à jour de sécurité** : Maintenance régulière

### Quelles sont les fonctionnalités Pro ?

- **Génération de fichiers physiques** : robots.txt réel
- **Détection automatique de sitemaps** : Intégration SEO
- **Blocage avancé de bots** : Liste maintenue automatiquement
- **Optimisation WooCommerce** : Spécialisé e-commerce
- **Support multisite** : Gestion réseau
- **Support prioritaire** : Assistance premium

### Comment passer à la version Pro ?

1. Allez dans Better Robots.txt → Mises à jour
2. Cliquez sur "Passer à Pro"
3. Suivez les instructions de paiement
4. Activez les fonctionnalités Pro
5. Configurez les nouvelles options

### Puis-je annuler la version Pro ?

**Oui**, vous pouvez :
- Annuler à tout moment
- Continuer à utiliser les fonctionnalités gratuites
- Exporter vos paramètres avant annulation
- Réactiver plus tard si nécessaire

## Problèmes techniques

### Mon robots.txt ne se met pas à jour

**Solutions possibles** :
1. Videz le cache WordPress
2. Videz le cache de votre navigateur
3. Vérifiez les permissions de fichiers
4. Attendez 5-10 minutes pour la propagation
5. Testez avec un autre navigateur

### J'obtiens une erreur 404

**Causes courantes** :
- WordPress en mode "Décourager les moteurs de recherche"
- Permissions de fichiers incorrectes
- Fichier robots.txt physique existant
- Problèmes de structure de permaliens

**Solutions** :
1. Allez dans Réglages → Lecture
2. Décochez "Décourager les moteurs de recherche..."
3. Sauvegardez les permaliens (Réglages → Permaliens)
4. Vérifiez les permissions du dossier

### Les règles ne s'appliquent pas

**Étapes de dépannage** :
1. Vérifiez la syntaxe des règles
2. Testez avec l'outil Google Robots.txt Tester
3. Confirmez que les règles sont sauvegardées
4. Vérifiez les conflits avec d'autres plugins

### Conflit avec d'autres plugins SEO

**Résolution** :
1. Désactivez temporairement les autres plugins robots.txt
2. Configurez votre plugin SEO pour ignorer robots.txt
3. Utilisez le mode de remplacement dans Better Robots.txt
4. Testez chaque plugin individuellement

## SEO et performance

### Est-ce que ce plugin améliore mon SEO ?

**Oui**, il aide votre SEO en :
- Optimisant le budget d'exploration
- Empêchant l'indexation du contenu dupliqué
- Protégeant contre les scrapers de contenu
- Améliorant la vitesse d'indexation
- Fournissant des directives claires aux moteurs de recherche

### Comment savoir si ça fonctionne ?

**Méthodes de vérification** :
1. Visitez `votresite.com/robots.txt`
2. Utilisez Google Search Console
3. Testez avec Bing Webmaster Tools
4. Surveillez les logs du serveur
5. Utilisez des outils d'analyse SEO

### Quel est l'impact sur les performances ?

**Avantages** :
- Réduction des requêtes inutiles
- Moins de charge serveur
- Mise en cache efficace
- Génération rapide

**Considérations** :
- Traitement supplémentaire minime
- Cache WordPress requis
- Compatible avec les caches CDN

### Dois-je bloquer les bots IA ?

**Considérez** :
- **Contenu original** : Peut vouloir bloquer
- **Marketing** : Peut vouloir autoriser
- **Secteur** : Certains secteurs bloquent systématiquement
- **Préférences personnelles** : Choix éditorial

## Sécurité

### Est-ce sûr pour mon site ?

**Oui**, le plugin est sécurisé car il :
- Utilise les API WordPress standard
- Valide toutes les entrées utilisateur
- Maintient les permissions de fichiers
- Reçoit des mises à jour de sécurité régulières
- Suit les meilleures pratiques WordPress

### Comment protège-t-il mon contenu ?

**Mécanismes de protection** :
- Blocage des zones d'administration
- Protection des fichiers sensibles
- Contrôle d'accès granulaire
- Détection de comportements suspects
- Alertes de sécurité

### Puis-je bloquer les mauvais bots ?

**Oui**, vous pouvez bloquer :
- Scrapers de contenu
- Harvesters d'e-mails
- Outils de copie de site
- Bots de spam SEO
- User-agents malveillants

## Support et assistance

### Comment obtenir de l'aide ?

**Options de support** :
- **Forum WordPress.org** : Support communautaire gratuit
- **Documentation** : Guides détaillés
- **Support premium** : Prioritaire pour les utilisateurs Pro
- **Contact direct** : Via le formulaire de support

### Quelles informations fournir pour le support ?

**Informations utiles** :
- Version WordPress et PHP
- Version du plugin
- Configuration actuelle robots.txt
- Messages d'erreur spécifiques
- Autres plugins installés

### Comment signaler un bug ?

**Procédure** :
1. Recherchez les rapports existants
2. Créez un nouveau ticket sur GitHub
3. Décrivez le problème en détail
4. Fournissez les étapes de reproduction
5. Incluez les informations système

## Gestion avancée

### Puis-je utiliser des variables dans les règles ?

**Oui**, variables supportées :
- `%SITE_URL%` : URL de votre site
- `%UPLOAD_DIR%` : Répertoire d'upload
- `%THEME_DIR%` : Répertoire du thème
- `%PLUGIN_DIR%` : Répertoire des plugins

### Comment gérer les sites multisites ?

**Options multisite** :
- **Contrôle centralisé** : Une configuration pour tous
- **Par site** : Configurations individuelles
- **Hybride** : Règles globales + spécifiques
- **Déploiement en masse** : Application groupée

### Puis-je sauvegarder mes paramètres ?

**Oui**, options de sauvegarde :
- Export JSON des paramètres
- Sauvegarde automatique
- Versioning des configurations
- Import/export facile

---

**Besoin de plus d'aide ?** Consultez notre [Guide de dépannage](/fr/troubleshooting) ou contactez notre [Support](https://wordpress.org/support/plugin/better-robots-txt/).