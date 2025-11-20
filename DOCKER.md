# 🐳 Docker Guide

Complete guide for running the Nuxt 4 Boilerplate with Docker.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Services Overview](#services-overview)
- [Development Workflow](#development-workflow)
- [Production Deployment](#production-deployment)
- [Troubleshooting](#troubleshooting)

## 🚀 Quick Start

### Option 1: Automated Setup

```bash
# Run the setup script
pnpm docker:setup

# Or manually
bash docker-setup.sh
```

This will:
1. Create `.env` if it doesn't exist
2. Start PostgreSQL and Adminer
3. Display connection information

### Option 2: Manual Setup

```bash
# Start database and Adminer only
docker compose up postgres adminer -d

# Run migrations
pnpm db:push

# Start development server locally
pnpm dev
```

### Option 3: Full Docker Stack

```bash
# Build and start everything
docker compose up --build

# Or in detached mode
docker compose up -d --build
```

## 🏗️ Services Overview

### PostgreSQL Database
- **Port**: 5433 (host) → 5432 (container)
- **User**: postgres
- **Password**: postgres
- **Database**: nuxt_boilerplate
- **Volume**: `postgres_data` (persistent storage)

### Adminer (Database Admin)
- **URL**: http://localhost:8080
- **Features**:
  - Browse database tables
  - Execute SQL queries
  - Import/Export data
  - Manage users and permissions
  - Beautiful pepa-linha theme

### Nuxt Application
- **Port**: 3000
- **Environment**: Production optimized
- **Auto-migrations**: Runs `pnpm db:push` on startup

## 💻 Development Workflow

### Local Development (Recommended)

```bash
# 1. Start database services
pnpm docker:up

# 2. Install dependencies
pnpm install

# 3. Push database schema
pnpm db:push

# 4. Start dev server
pnpm dev
```

**Benefits**:
- Hot module replacement (HMR)
- Faster rebuilds
- Better debugging experience
- Use local Node.js tools

### Full Docker Development

```bash
# Start all services with live reload
docker compose up --build

# View logs
pnpm docker:logs

# Restart app container
pnpm docker:restart
```

## 📦 Available Scripts

```bash
# Docker management
pnpm docker:setup      # Run setup script
pnpm docker:up         # Start all services
pnpm docker:down       # Stop all services
pnpm docker:build      # Rebuild app image
pnpm docker:logs       # View app logs
pnpm docker:restart    # Restart app container

# Database
pnpm db:push           # Push schema changes
pnpm db:generate       # Generate migrations
pnpm db:studio         # Open Drizzle Studio
```

## 🔍 Useful Commands

### Container Management

```bash
# View running containers
docker compose ps

# View all logs
docker compose logs -f

# View specific service logs
docker compose logs -f postgres
docker compose logs -f adminer
docker compose logs -f app

# Execute commands in app container
docker compose exec app sh
docker compose exec app pnpm db:push

# Restart a specific service
docker compose restart postgres
```

### Database Management

```bash
# Access PostgreSQL CLI
docker compose exec postgres psql -U postgres -d nuxt_boilerplate

# Backup database
docker compose exec postgres pg_dump -U postgres nuxt_boilerplate > backup.sql

# Restore database
cat backup.sql | docker compose exec -T postgres psql -U postgres -d nuxt_boilerplate

# Reset database (DELETE ALL DATA!)
docker compose down -v
docker compose up postgres -d
pnpm db:push
```

### Cleanup

```bash
# Stop and remove containers
docker compose down

# Stop and remove containers + volumes (DELETES DATABASE!)
docker compose down -v

# Remove images
docker compose down --rmi all

# Full cleanup (containers, volumes, images)
docker compose down -v --rmi all
```

## 🚀 Production Deployment

### 1. Configure Environment

Create `.env.production`:

```env
DATABASE_URL="postgresql://postgres:STRONG_PASSWORD@postgres:5432/nuxt_boilerplate"
JWT_SECRET="generate-a-random-32-character-minimum-secret"
NODE_ENV="production"
```

### 2. Build Production Image

```bash
# Build optimized image
docker compose build app

# Tag for registry
docker tag nuxt-boilerplate-app:latest your-registry/nuxt-boilerplate:latest

# Push to registry
docker push your-registry/nuxt-boilerplate:latest
```

### 3. Deploy

```bash
# Deploy with production config
docker compose -f docker-compose.yml up -d

# Check health
docker compose ps
docker compose logs -f app
```

### 4. SSL/HTTPS Setup

For production, add a reverse proxy (nginx/traefik):

```yaml
# docker-compose.prod.yml
services:
  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app
```

## 🐛 Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -i :3000

# Kill process
kill -9 <PID>

# Or change port in docker-compose.yml
ports:
  - "3001:3000"  # Use port 3001 on host
```

### Database Connection Issues

```bash
# Check if postgres is running
docker compose ps postgres

# View postgres logs
docker compose logs postgres

# Test connection
docker compose exec postgres psql -U postgres -c "\l"

# Restart database
docker compose restart postgres
```

### App Won't Start

```bash
# Check logs
docker compose logs app

# Rebuild without cache
docker compose build --no-cache app

# Remove and recreate
docker compose down
docker compose up --build
```

### Permission Issues

```bash
# Fix on Linux/macOS
sudo chown -R $USER:$USER .

# On Windows, run Docker Desktop as Administrator
```

### Adminer Not Loading

```bash
# Check if adminer is running
docker compose ps adminer

# Restart adminer
docker compose restart adminer

# Access directly
http://localhost:8080
```

## 📊 Health Checks

The setup includes automatic health checks:

```yaml
# PostgreSQL health check
healthcheck:
  test: ["CMD-SHELL", "pg_isready -U postgres"]
  interval: 10s
  timeout: 5s
  retries: 5
```

Check health status:

```bash
docker compose ps
# Look for "healthy" status
```

## 🔐 Security Best Practices

1. **Change default passwords** in production
2. **Use secrets management** for sensitive data
3. **Enable SSL/TLS** for database connections
4. **Restrict network access** (internal network only)
5. **Regular backups** of database volumes
6. **Update images** regularly for security patches
7. **Use non-root users** in containers

## 📚 Additional Resources

- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)
- [Adminer Documentation](https://www.adminer.org/)
- [Nuxt Deployment Guide](https://nuxt.com/docs/getting-started/deployment)

## 🆘 Getting Help

If you encounter issues:

1. Check the logs: `docker compose logs -f`
2. Verify services are running: `docker compose ps`
3. Review this documentation
4. Check GitHub issues
5. Open a new issue with logs and error details
