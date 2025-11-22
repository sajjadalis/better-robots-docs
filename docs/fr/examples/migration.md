# Guide de migration

Instructions complètes pour migrer vers Better Robots.txt depuis d'autres plugins robots.txt.

## Avant de commencer

### Sauvegardez votre configuration actuelle

Avant toute migration, assurez-vous de :

1. **Exporter vos paramètres actuels**
   - Faites une capture d'écran de votre configuration robots.txt
   - Copiez le contenu de votre fichier robots.txt actuel
   - Sauvegardez la liste des règles personnalisées

2. **Notez les fonctionnalités utilisées**
   - Quels bots bloquez-vous ?
   - Quelles règles personnalisées avez-vous ?
   - Utilisez-vous des fonctionnalités spécifiques ?

3. **Testez votre site actuel**
   - Vérifiez que votre robots.txt fonctionne
   - Notez tout problème existant
   - Documentez les dépendances

## Migration depuis les plugins populaires

### 1. Depuis Yoast SEO

**Ce que Yoast SEO gère** :
- Génération robots.txt de base
- Règles WordPress standards
- Sitemap integration

**Étapes de migration** :

1. **Installez Better Robots.txt**
   ```bash
   # Via WordPress admin
   Extensions → Ajouter → Recherche "Better Robots.txt"
   ```

2. **Configurez Yoast SEO**
   - Allez dans SEO → Avancé → Outils d'exploration
   - **Désactivez** "Créer un fichier robots.txt"
   - Sauvegardez les modifications

3. **Configurez Better Robots.txt**
   - Activez le mode "Remplacer"
   - Importez vos règles existantes
   - Configurez la détection automatique de sitemap

4. **Vérifiez la migration**
   ```bash
   # Testez votre nouveau robots.txt
   curl -I https://votresite.com/robots.txt
   ```

### 2. Depuis Rank Math

**Ce que Rank Math gère** :
- Configuration robots.txt intégrée
- Règles SEO avancées
- Gestion sitemap

**Étapes de migration** :

1. **Exportez les paramètres Rank Math**
   - Allez dans Rank Math → Importer/Exporter
   - Exportez vos paramètres
   - Sauvegardez le fichier

2. **Configurez Rank Math**
   - Allez dans Rank Math → Titres et méta
   - **Désactivez** la modification robots.txt
   - Sauvegardez

3. **Configurez Better Robots.txt**
   - Choisissez le template approprié
   - Réimportez vos règles personnalisées
   - Activez l'intégration Rank Math

### 3. Depuis All in One SEO

**Étapes de migration** :

1. **Désactivez les robots.txt AIOSEO**
   - Allez dans All in One SEO → Outils d'exploration
   - **Décochez** "Utiliser robots.txt par défaut"
   - Sauvegardez

2. **Installez et configurez Better Robots.txt**
   - Importez les règles AIOSEO si disponibles
   - Configurez la détection de sitemap
   - Testez la configuration

### 4. Depuis plugins robots.txt dédiés

#### Robots.txt Manager, KB Robots.txt, etc.

**Étapes générales** :

1. **Sauvegardez les règles existantes**
   ```txt
   # Copiez votre contenu robots.txt actuel
   User-agent: *
   Disallow: /wp-admin/
   # ... autres règles
   ```

2. **Désactivez l'ancien plugin**
   - Allez dans Extensions → Extensions installées
   - Désactivez l'ancien plugin robots.txt
   - **Ne supprimez pas encore**

3. **Configurez Better Robots.txt**
   - Collez vos règles personnalisées
   - Utilisez les templates si approprié
   - Sauvegardez

4. **Testez complètement**
   - Vérifiez toutes les fonctionnalités
   - Testez avec différents user-agents
   - Supprimez l'ancien plugin après confirmation

## Migration depuis fichiers robots.txt physiques

### Scénario 1 : Fichier robots.txt basique

**Votre fichier actuel** :
```txt
User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
```

**Migration simple** :
1. **Supprimez le fichier physique**
   ```bash
   # Via FTP ou SSH
   rm /votre/chemin/robots.txt
   ```

2. **Configurez Better Robots.txt**
   - Utilisez le mode Virtuel (recommandé)
   - Ajoutez vos règles personnalisées
   - Sauvegardez

### Scénario 2 : Fichier robots.txt complexe

**Votre fichier actuel** :
```txt
User-agent: Googlebot
Allow: /
Disallow: /private/

User-agent: *
Disallow: /wp-admin/
Disallow: /wp-includes/
Disallow: /private/
Crawl-delay: 1

Sitemap: https://votresite.com/sitemap.xml
```

**Migration avancée** :
1. **Analysez vos règles**
   - Identifiez les user-agents spécifiques
   - Notez les directives spéciales
   - Documentez la logique

2. **Configurez dans Better Robots.txt**
   - Ajoutez les rules user-agent spécifiques
   - Configurez crawl-delay si nécessaire
   - Ajoutez le sitemap

3. **Utilisez la version Pro si nécessaire**
   - Pour le mode Physique
   - Pour fonctionnalités avancées
   - Pour support prioritaire

## Scripts de migration automatisés

### Script WordPress CLI

```bash
#!/bin/bash
# Migration automatisée vers Better Robots.txt

# 1. Installer Better Robots.txt
wp plugin install better-robots-txt --activate

# 2. Désactiver les autres plugins
wp plugin deactivate yoast-seo
wp plugin deactivate rank-math
wp plugin deactivate all-in-one-seo-pack

# 3. Configurer (nécessite configuration manuelle)
echo "Configurez Better Robots.txt manuellement"
```

### Script d'importation

```php
<?php
// Importation de règles depuis un ancien plugin
function migrate_robotstxt_rules() {
    $old_rules = get_option('old_robotstxt_rules');

    if ($old_rules) {
        update_option('better_robotstxt_rules', $old_rules);
        delete_option('old_robotstxt_rules');
    }
}
```

## Validation post-migration

### 1. Tests automatisés

**Script de test** :
```bash
#!/bin/bash
# Testez votre nouveau robots.txt

echo "Test Googlebot..."
curl -A "Googlebot" https://votresite.com/robots.txt

echo "Test Bingbot..."
curl -A "Bingbot" https://votresite.com/robots.txt

echo "Test page spécifique..."
curl -A "Googlebot" -I https://votresite.com/wp-admin/
```

### 2. Tests SEO

**Points à vérifier** :
- [ ] Les pages importantes sont accessibles
- [ ] Les zones d'administration sont bloquées
- [ ] Le sitemap est référencé
- [ ] Pas de blocage accidentel

### 3. Tests de performance

**Métriques à surveiller** :
- Temps de réponse robots.txt
- Logs d'erreurs 404
- Taux d'exploration des moteurs
- Positions dans les SERPs

## Résolution des problèmes de migration

### Problème 1 : Conflit de règles

**Symptôme** : Règles contradictoires entre plugins

**Solution** :
1. Désactivez TOUS les autres plugins robots.txt
2. Utilisez le mode "Remplacer" dans Better Robots.txt
3. Recréez les règles manuellement

### Problème 2 : Fichier physique restant

**Symptôme** : Ancien fichier robots.txt toujours servi

**Solution** :
```bash
# Trouvez et supprimez le fichier physique
find /votre/chemin -name "robots.txt" -type f
rm /votre/chemin/robots.txt
```

### Problème 3 : Sitemap non trouvé

**Symptôme** : Erreur 404 pour le sitemap

**Solution** :
1. Vérifiez que votre plugin SEO est actif
2. Configurez la détection automatique
3. Ajoutez manuellement l'URL du sitemap

### Problème 4 : Permissions de fichiers

**Symptôme** : Erreur de permissions

**Solution** :
```bash
# Corrigez les permissions si nécessaire
chmod 755 /wp-content/
chmod 644 /wp-content/plugins/
```

## Bonnes pratiques de migration

### 1. Planification

- [ ] Testez d'abord sur un site de staging
- [ ] Planifiez la migration pendant les heures creuses
- [ ] Informez votre équipe du changement
- [ ] Préparez un plan de retour arrière

### 2. Documentation

- [ ] Documentez votre configuration originale
- [ ] Sauvegardez tous les paramètres
- [ ] Notez les décisions de configuration
- [ ] Gardez un journal des changements

### 3. Monitoring

- [ ] Surveillez les logs serveur
- [ ] Vérifiez Google Search Console
- [ ] Testez les positions SEO
- [ ] Écoutez les retours utilisateurs

## Rollback plan

### Si quelque chose ne va pas :

1. **Désactivez Better Robots.txt**
   ```bash
   wp plugin deactivate better-robots-txt
   ```

2. **Réactivez l'ancien plugin**
   ```bash
   wp plugin activate ancien-plugin-robotstxt
   ```

3. **Restaurez le fichier physique si nécessaire**
   ```bash
   # Copiez votre sauvegarde robots.txt
   cp backup-robots.txt /votre/chemin/robots.txt
   ```

4. **Vérifiez la restauration**
   ```bash
   curl -I https://votresite.com/robots.txt
   ```

## Support pendant la migration

### Si vous rencontrez des problèmes :

- **Documentation** : [Guide complet](/fr/)
- **Support communautaire** : [Forum WordPress.org](https://wordpress.org/support/plugin/better-robots-txt/)
- **Support premium** : Disponible pour les utilisateurs Pro
- **Contact direct** : Via le formulaire de support du plugin

### Informations à fournir :

1. **Version WordPress et PHP**
2. **Ancien plugin utilisé**
3. **Configuration robots.txt actuelle**
4. **Messages d'erreur spécifiques**
5. **Résultats des tests effectués**

---

**Félicitations !** Une fois la migration terminée, vous bénéficierez de fonctionnalités avancées, d'un support premium et d'améliorations continues avec Better Robots.txt.