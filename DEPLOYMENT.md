# 🚀 Production Deployment Guide

Complete guide for deploying the Nuxt 4 Boilerplate to production.

## 📋 Table of Contents

- [Pre-deployment Checklist](#pre-deployment-checklist)
- [VPS/Server Deployment](#vpsserver-deployment)
- [Docker Deployment](#docker-deployment)
- [Vercel/Netlify Deployment](#vercelnetlify-deployment)
- [Railway Deployment](#railway-deployment)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Performance Optimization](#performance-optimization)
- [Security Hardening](#security-hardening)
- [Monitoring & Logs](#monitoring--logs)

## ✅ Pre-deployment Checklist

### 1. Environment Variables

Create a `.env.production` file:

```env
# Database - Use production credentials!
DATABASE_URL="postgresql://prod_user:STRONG_PASSWORD@your-db-host:5432/nuxt_boilerplate"

# JWT Secret - Generate a strong random secret
JWT_SECRET="generate-a-secure-random-string-at-least-32-characters-long"

# Node Environment
NODE_ENV="production"

# Optional: Base URL for your app
NUXT_PUBLIC_SITE_URL="https://yourdomain.com"
```

### 2. Generate Secure JWT Secret

```bash
# Option 1: Using OpenSSL
openssl rand -base64 32

# Option 2: Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"

# Option 3: Using online generator
# https://generate-secret.vercel.app/32
```

### 3. Build Test

Test the production build locally:

```bash
# Build the app
pnpm build

# Test the build
NODE_ENV=production node .output/server/index.mjs
```

### 4. Database Migration

```bash
# Generate migrations (if needed)
pnpm db:generate

# Push schema to production database
DATABASE_URL="your-production-db-url" pnpm db:push
```

## 🖥️ VPS/Server Deployment

### Option 1: Docker on VPS (Recommended)

#### 1. Server Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Install Docker Compose
sudo apt install docker-compose-plugin

# Create user for app (optional but recommended)
sudo useradd -m -s /bin/bash nuxtapp
sudo usermod -aG docker nuxtapp
```

#### 2. Deploy Application

```bash
# SSH to your server
ssh user@your-server-ip

# Clone repository
git clone https://github.com/your-username/nuxt-boilerplate.git
cd nuxt-boilerplate

# Create production environment file
nano .env.production

# Build and start
docker compose -f docker-compose.yml up -d --build

# Check logs
docker compose logs -f app
```

#### 3. Setup Nginx Reverse Proxy

```bash
# Install Nginx
sudo apt install nginx -y

# Create Nginx config
sudo nano /etc/nginx/sites-available/nuxt-app
```

Add this configuration:

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/nuxt-app /etc/nginx/sites-enabled/

# Test config
sudo nginx -t

# Restart Nginx
sudo systemctl restart nginx
```

#### 4. Setup SSL with Let's Encrypt

```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Auto-renewal is set up automatically
# Test renewal
sudo certbot renew --dry-run
```

### Option 2: PM2 without Docker

```bash
# Install Node.js 24
curl -fsSL https://deb.nodesource.com/setup_24.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install pnpm
npm install -g pnpm

# Install PM2
npm install -g pm2

# Clone and setup
git clone https://github.com/your-username/nuxt-boilerplate.git
cd nuxt-boilerplate
pnpm install
pnpm build

# Setup PostgreSQL (if not using external DB)
sudo apt install postgresql postgresql-contrib
sudo -u postgres createdb nuxt_boilerplate
sudo -u postgres psql -c "CREATE USER nuxtapp WITH PASSWORD 'your_password';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE nuxt_boilerplate TO nuxtapp;"

# Push database schema
pnpm db:push

# Start with PM2
pm2 start ecosystem.config.cjs

# Save PM2 config
pm2 save

# Setup PM2 to start on boot
pm2 startup
```

Create `ecosystem.config.cjs`:

```javascript
module.exports = {
  apps: [{
    name: 'nuxt-app',
    script: './.output/server/index.mjs',
    instances: 'max',
    exec_mode: 'cluster',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
      HOST: '0.0.0.0'
    }
  }]
}
```

## 🐳 Docker Deployment (Standalone)

### Docker Compose Production

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:16-alpine
    restart: always
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    volumes:
      - ./docker/postgres-data:/var/lib/postgresql/data
    networks:
      - app-network
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U ${POSTGRES_USER}"]
      interval: 10s
      timeout: 5s
      retries: 5

  app:
    build:
      context: .
      dockerfile: Dockerfile
    restart: always
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@postgres:5432/${POSTGRES_DB}
      JWT_SECRET: ${JWT_SECRET}
      NODE_ENV: production
    depends_on:
      postgres:
        condition: service_healthy
    networks:
      - app-network
    command: sh -c "pnpm db:push && node .output/server/index.mjs"

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
    networks:
      - app-network

networks:
  app-network:
    driver: bridge
```

Deploy:

```bash
docker compose -f docker-compose.prod.yml up -d --build
```

## ☁️ Vercel/Netlify Deployment

### Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

**Note**: You'll need an external PostgreSQL database (like Neon, Supabase, or Railway).

Add environment variables in Vercel dashboard:
- `DATABASE_URL`
- `JWT_SECRET`

### Netlify

Create `netlify.toml`:

```toml
[build]
  command = "pnpm build"
  publish = ".output/public"

[build.environment]
  NODE_VERSION = "24"

[[redirects]]
  from = "/*"
  to = "/.netlify/functions/server"
  status = 200
```

Deploy:

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

## 🚂 Railway Deployment

Railway provides database and app hosting in one platform.

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize project
railway init

# Add PostgreSQL
railway add postgresql

# Deploy
railway up
```

Set environment variables in Railway dashboard:
- `JWT_SECRET`: Your secure secret
- Railway automatically provides `DATABASE_URL`

## ☸️ Kubernetes Deployment

### 1. Create Docker Image

```bash
# Build and tag
docker build -t your-registry/nuxt-app:latest .

# Push to registry
docker push your-registry/nuxt-app:latest
```

### 2. Kubernetes Manifests

`k8s/deployment.yaml`:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nuxt-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: nuxt-app
  template:
    metadata:
      labels:
        app: nuxt-app
    spec:
      containers:
      - name: nuxt-app
        image: your-registry/nuxt-app:latest
        ports:
        - containerPort: 3000
        env:
        - name: DATABASE_URL
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: database-url
        - name: JWT_SECRET
          valueFrom:
            secretKeyRef:
              name: app-secrets
              key: jwt-secret
        - name: NODE_ENV
          value: "production"
---
apiVersion: v1
kind: Service
metadata:
  name: nuxt-app-service
spec:
  selector:
    app: nuxt-app
  ports:
  - port: 80
    targetPort: 3000
  type: LoadBalancer
```

Deploy:

```bash
kubectl apply -f k8s/
```

## ⚡ Performance Optimization

### 1. Enable Compression

In `nuxt.config.ts`:

```typescript
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
    minify: true
  }
})
```

### 2. Database Connection Pooling

Update your database configuration:

```typescript
// db/index.ts
import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Maximum connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

export const db = drizzle(pool)
```

### 3. Caching Strategy

Add Redis for session caching:

```bash
# Add to docker-compose.yml
redis:
  image: redis:alpine
  ports:
    - "6379:6379"
```

## 🔒 Security Hardening

### 1. Security Headers

Create `server/middleware/security.ts`:

```typescript
export default defineEventHandler((event) => {
  setResponseHeaders(event, {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'X-XSS-Protection': '1; mode=block',
    'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    'Content-Security-Policy': "default-src 'self'"
  })
})
```

### 2. Rate Limiting

```bash
pnpm add nuxt-rate-limit
```

### 3. Environment Variables

Never commit:
- `.env`
- `.env.production`
- Private keys
- Database credentials

### 4. Database Security

- Use strong passwords
- Enable SSL for database connections
- Limit database access to app IP only
- Regular backups

## 📊 Monitoring & Logs

### 1. Docker Logs

```bash
# View logs
docker compose logs -f app

# Export logs
docker compose logs app > logs.txt
```

### 2. PM2 Monitoring

```bash
# Monitor
pm2 monit

# Logs
pm2 logs

# Web dashboard
pm2 plus
```

### 3. Health Checks

Add health endpoint in `server/api/health.get.ts`:

```typescript
export default defineEventHandler(async () => {
  return {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  }
})
```

### 4. Error Tracking

Consider integrating:
- **Sentry**: Error tracking
- **LogRocket**: Session replay
- **DataDog**: Full observability

## 🔄 CI/CD Pipeline

### GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '24'
          
      - name: Install pnpm
        run: npm install -g pnpm
        
      - name: Install dependencies
        run: pnpm install
        
      - name: Build
        run: pnpm build
        
      - name: Deploy to server
        env:
          SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
        run: |
          # Your deployment script here
```

## 📦 Backup Strategy

### Database Backup Script

`scripts/backup.sh`:

```bash
#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="./backups"
mkdir -p $BACKUP_DIR

# Backup database
docker compose exec -T postgres pg_dump -U postgres nuxt_boilerplate > \
  $BACKUP_DIR/db_backup_$DATE.sql

# Compress
gzip $BACKUP_DIR/db_backup_$DATE.sql

# Keep only last 30 days
find $BACKUP_DIR -name "*.gz" -mtime +30 -delete

echo "Backup completed: db_backup_$DATE.sql.gz"
```

Make executable and add to cron:

```bash
chmod +x scripts/backup.sh

# Add to crontab (daily at 2 AM)
0 2 * * * /path/to/scripts/backup.sh
```

## 🆘 Troubleshooting

### App Won't Start

```bash
# Check logs
docker compose logs app

# Verify environment variables
docker compose exec app printenv

# Check database connection
docker compose exec app pnpm db:push
```

### High Memory Usage

```bash
# Limit Docker memory
docker compose up -d --build --memory=512m
```

### Database Connection Issues

```bash
# Test connection
docker compose exec postgres psql -U postgres -c "\l"

# Check network
docker network ls
docker network inspect nuxt-boilerplate_nuxt-network
```

---

## 📚 Additional Resources

- [Nuxt Deployment Docs](https://nuxt.com/docs/getting-started/deployment)
- [Docker Security Best Practices](https://docs.docker.com/engine/security/)
- [PostgreSQL Production Checklist](https://www.postgresql.org/docs/current/runtime-config.html)
- [Node.js Production Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

---

**Need Help?** Check our [main documentation](./README.md) or [open an issue](https://github.com/your-repo/issues).
