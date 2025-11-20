# 🔥 Quick Start - Docker Hot Reload

## ✨ Mode Développement (Hot Reload Actif)

```bash
# Démarrer en mode dev
pnpm docker:dev

# OU avec rebuild
pnpm docker:dev:build
```

**✅ Avantages** :
- ✨ Hot reload automatique
- 🚀 Modifications de code rechargées instantanément
- 🐛 DevTools activés
- 📝 Logs détaillés

**📍 Services** :
- App: http://localhost:3000
- Adminer: http://localhost:8080  
- PostgreSQL: localhost:5433

## 🔄 Test du Hot Reload

1. **Démarrez le serveur** :
   ```bash
   pnpm docker:dev
   ```

2. **Ouvrez le navigateur** :
   - http://localhost:3000/dashboard

3. **Modifiez un fichier** :
   - Éditez `/pages/dashboard.vue`
   - Changez le texte "Welcome back 👋"
   - Sauvegardez (Cmd+S)

4. **🎉 Le navigateur se rafraîchit automatiquement !**

## 📊 Modes Disponibles

### Mode Dev (Recommandé pour développer)

```bash
pnpm docker:dev       # Hot reload ON
```

- ✅ Modifications instantanées
- ✅ DevTools
- ✅ Source maps
- ⏱️ Build : ~30s
- 💾 Taille : ~450MB

### Mode Production (Pour tester les perfs)

```bash
pnpm docker:up        # Hot reload OFF
```

- ❌ Rebuild requis
- ✅ Optimisé
- ✅ Minifié
- ⏱️ Build : ~60s
- 💾 Taille : ~120MB

## 🛠️ Commandes Utiles

```bash
# Voir les logs en temps réel
pnpm docker:dev:logs

# Arrêter
pnpm docker:dev:down

# Redémarrer
pnpm docker:dev:down && pnpm docker:dev

# Entrer dans le conteneur
docker compose -f docker-compose.dev.yml exec app sh

# Voir l'état
docker compose -f docker-compose.dev.yml ps
```

## 🐛 Problèmes Courants

### Le hot reload ne fonctionne pas

```bash
# 1. Vérifier que l'app tourne en mode dev
docker compose -f docker-compose.dev.yml ps

# 2. Vérifier les logs
pnpm docker:dev:logs

# 3. Redémarrer
pnpm docker:dev:down
pnpm docker:dev
```

### Changements non détectés

- Vérifiez que vous éditez bien les fichiers dans `/Users/17j4ck/nuxt-boilerplate`
- Les fichiers dans `node_modules/` et `.nuxt/` sont exclus du hot reload

### Port déjà utilisé

```bash
# Arrêter le mode production d'abord
docker compose down

# Puis démarrer en dev
pnpm docker:dev
```

## 📚 Documentation Complète

Voir [DOCKER-DEV.md](./DOCKER-DEV.md) pour plus de détails.

---

**Bon développement ! 🚀**
