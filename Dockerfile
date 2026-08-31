# Use official lightweight Node.js LTS Alpine image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (leveraging Docker layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application source code
COPY . .

# Set permissions for non-root user
RUN chown -R node:node /app

# Use non-root node user
USER node

# Expose default application port
EXPOSE 8080

# Environment variables
ENV NODE_ENV=production \
    PORT=8080

# Start application
CMD ["node", "app.js"]
