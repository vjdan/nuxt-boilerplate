#!/bin/bash

echo "🔐 Generating secure JWT_SECRET..."
echo ""
echo "Add this to your .env file:"
echo ""
echo "JWT_SECRET=\"$(openssl rand -base64 32)\""
echo ""
