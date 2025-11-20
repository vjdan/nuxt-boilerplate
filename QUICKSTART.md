# 🚀 Quick Start Guide

Choose your preferred setup method:

## 1️⃣ Docker (Recommended for Quick Testing)

```bash
# Clone and setup
git clone <your-repo-url>
cd nuxt-boilerplate

# Quick start with Docker
pnpm docker:setup
pnpm install
pnpm db:push
pnpm dev
```

✅ **Ready**: http://localhost:3000  
📊 **Database UI**: http://localhost:8080

## 2️⃣ Full Docker Stack

```bash
# Build and run everything in Docker
docker compose up --build -d

# View logs
docker compose logs -f app
```

✅ **App**: http://localhost:3000  
📊 **Adminer**: http://localhost:8080  
🗄️ **PostgreSQL**: localhost:5433

## 3️⃣ Local Development (Best for Active Development)

```bash
# Install dependencies
pnpm install

# Start database only
docker compose up postgres -d

# Setup database
pnpm db:push

# Run dev server
pnpm dev
```

---

## 📖 Next Steps

1. **Create an account**: Go to http://localhost:3000/register
2. **Explore dashboard**: Navigate to /dashboard
3. **Check database**: Open Adminer at http://localhost:8080
4. **Read docs**: See [README.md](./README.md) and [DOCKER.md](./DOCKER.md)

## 🛑 Common Issues

**Port already in use?**
```bash
# Stop existing containers
docker compose down

# Or use different ports in docker-compose.yml
```

**Database connection error?**
```bash
# Check if postgres is running
docker compose ps

# Restart database
docker compose restart postgres
```

**Need to reset everything?**
```bash
# Warning: This deletes all data!
docker compose down -v
docker compose up -d
pnpm db:push
```

---

📚 **Full Documentation**: [README.md](./README.md)  
🐳 **Docker Guide**: [DOCKER.md](./DOCKER.md)
