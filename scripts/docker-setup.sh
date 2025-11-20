#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo -e "${BLUE}║   Nuxt 4 Boilerplate - Docker Setup   ║${NC}"
echo -e "${BLUE}╔════════════════════════════════════════╗${NC}"
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo -e "${YELLOW}⚠️  No .env file found. Creating from .env.example...${NC}"
    cp .env.example .env
    echo -e "${GREEN}✓ Created .env file${NC}"
    echo -e "${YELLOW}⚠️  Please edit .env and set your JWT_SECRET!${NC}"
    echo ""
fi

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo -e "${YELLOW}⚠️  Docker is not running. Please start Docker Desktop.${NC}"
    exit 1
fi

echo -e "${BLUE}Starting Docker services...${NC}"
echo ""

# Start services
docker compose up -d postgres adminer

echo ""
echo -e "${GREEN}✓ Services started successfully!${NC}"
echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo -e "${GREEN}Services:${NC}"
echo -e "  • PostgreSQL:  ${BLUE}localhost:5433${NC}"
echo -e "  • Adminer:     ${BLUE}http://localhost:8080${NC}"
echo ""
echo -e "${GREEN}Adminer Login:${NC}"
echo -e "  System:   PostgreSQL"
echo -e "  Server:   postgres"
echo -e "  Username: postgres"
echo -e "  Password: postgres"
echo -e "  Database: nuxt_boilerplate"
echo ""
echo -e "${BLUE}════════════════════════════════════════${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo -e "  1. Run: ${BLUE}pnpm install${NC}"
echo -e "  2. Run: ${BLUE}pnpm db:push${NC}"
echo -e "  3. Run: ${BLUE}pnpm dev${NC}"
echo -e "  4. Open: ${BLUE}http://localhost:3000${NC}"
echo ""
echo -e "${YELLOW}To start the full Docker stack (app + db + adminer):${NC}"
echo -e "  ${BLUE}docker compose up --build${NC}"
echo ""
