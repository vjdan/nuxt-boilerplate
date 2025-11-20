# 🔥 Docker Hot Reload Development

Guide pour développer avec Docker en mode hot reload (rechargement automatique des modifications).

## 🚀 Quick Start

### Option 1 : Mode Développement avec Hot Reload (Recommandé)

```bash
# Démarrer en mode développement avec hot reload
pnpm docker:dev

# Ou avec rebuild
pnpm docker:dev:build
```

Vos modifications de code seront **automatiquement rechargées** sans rebuild !

### Option 2 : Mode Production (Sans Hot Reload)

```bash
# Démarrer en mode production
pnpm docker:up

# Rebuild nécessaire après chaque modification
pnpm docker:build && pnpm docker:up
```

## 📊 Comparaison

| Fonctionnalité | Mode Dev (`docker:dev`) | Mode Prod (`docker:up`) |
|----------------|------------------------|-------------------------|
| Hot Reload | ✅ Oui | ❌ Non |
| Rebuild requis | ❌ Non | ✅ Oui |
| Performance | Moyenne | Excellente |
| Taille image | Grande | Optimisée |
| Debugging | Facile | Difficile |
| Usage | Développement | Production |

## 🛠️ Scripts Disponibles

### Mode Développement

```bash
# Démarrer avec hot reload
pnpm docker:dev

# Démarrer avec rebuild complet
pnpm docker:dev:build

# Arrêter les conteneurs dev
pnpm docker:dev:down

# Voir les logs en temps réel
pnpm docker:dev:logs
```

### Mode Production

```bash
# Démarrer
pnpm docker:up

# Rebuild et démarrer
pnpm docker:build && pnpm docker:up

# Arrêter
pnpm docker:down

# Voir les logs
pnpm docker:logs
```

## ⚙️ Configuration Technique

### Mode Développement (`docker-compose.dev.yml`)

- **Dockerfile**: `Dockerfile.dev`
- **Port App**: 3000
- **Port HMR**: 24678 (Vite Hot Module Replacement)
- **Volumes**: Code source monté pour hot reload
- **Node Modules**: Volume séparé pour éviter les conflits
- **Environment**: `NODE_ENV=development`
- **File Watching**: Activé avec `CHOKIDAR_USEPOLLING=true`

### Mode Production (`docker-compose.yml`)

- **Dockerfile**: `Dockerfile`
- **Build**: Multi-stage optimisé
- **Port App**: 3000
- **Volumes**: Base de données uniquement
- **Environment**: `NODE_ENV=production`
- **Optimisations**: Minification, compression

## 🔄 Hot Reload - Comment ça marche ?

1. **Volume Mounting**: Votre code source est monté dans le conteneur
   ```yaml
   volumes:
     - ./:/app
     - /app/node_modules  # Exclut node_modules
   ```

2. **File Watching**: Chokidar détecte les changements de fichiers
   ```yaml
   environment:
     CHOKIDAR_USEPOLLING: "true"
   ```

3. **HMR (Hot Module Replacement)**: Vite recharge automatiquement
   - Port HMR: 24678
   - Compatible navigateur

## 📝 Workflow de Développement

### Démarrage

```bash
# 1. Arrêter le mode production si actif
pnpm docker:down

# 2. Démarrer en mode dev
pnpm docker:dev:build
```

### Développement

1. Modifiez votre code dans VS Code
2. Sauvegardez (Cmd+S / Ctrl+S)
3. Le navigateur se rafraîchit automatiquement ! ✨

### Debugging

```bash
# Voir les logs en temps réel
pnpm docker:dev:logs

# Entrer dans le conteneur
docker compose -f docker-compose.dev.yml exec app sh

# Vérifier les variables d'environnement
docker compose -f docker-compose.dev.yml exec app printenv
```

## 🐛 Résolution de Problèmes

### Le hot reload ne fonctionne pas

1. **Vérifiez que le port HMR est ouvert** :
   ```bash
   curl http://localhost:24678
   ```

2. **Vérifiez les logs** :
   ```bash
   pnpm docker:dev:logs
   ```

3. **Redémarrez les conteneurs** :
   ```bash
   pnpm docker:dev:down
   pnpm docker:dev:build
   ```

### Les modifications ne sont pas détectées

- Sur Windows/Mac, parfois le file watching nécessite un polling plus agressif
- Vérifiez que `CHOKIDAR_USEPOLLING=true` est bien défini

### Performance lente

Le mode dev est plus lent que le mode production car :
- Pas de minification
- Source maps activées
- File watching actif

**Solution** : Utilisez le mode production pour tester les performances réelles.

## 📦 Différences de Fichiers

### `Dockerfile.dev` (Développement)

```dockerfile
FROM node:24-alpine
RUN npm install -g pnpm
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
EXPOSE 3000
CMD ["pnpm", "dev", "--host", "0.0.0.0"]
```

### `Dockerfile` (Production)

```dockerfile
# Multi-stage build
FROM node:24-alpine as base
RUN npm install -g pnpm

FROM base as builder
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM base as runner
WORKDIR /app
COPY --from=builder /app/.output ./.output
# ... optimisations
CMD ["node", ".output/server/index.mjs"]
```

## 🎯 Recommandations

### Pour le Développement

✅ Utilisez `pnpm docker:dev`  
✅ Modifiez le code directement  
✅ Profitez du hot reload  
✅ Utilisez les DevTools du navigateur  

### Pour la Production

✅ Utilisez `pnpm docker:up`  
✅ Testez les performances réelles  
✅ Vérifiez la taille de l'image  
✅ Testez le déploiement  

## 🔗 Services Accessibles

En mode développement :

- **App** : http://localhost:3000
- **Adminer** : http://localhost:8080
- **PostgreSQL** : localhost:5433
- **HMR WebSocket** : ws://localhost:24678

## 📚 Ressources

- [Nuxt Docker Guide](https://nuxt.com/docs/getting-started/deployment#docker)
- [Vite HMR Configuration](https://vitejs.dev/config/server-options.html#server-hmr)
- [Docker Volumes](https://docs.docker.com/storage/volumes/)

---

**🎉 Profitez du hot reload et développez plus rapidement !**
