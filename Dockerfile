# Gunakan image resmi Node.js
FROM node:20-alpine

# Set direktori kerja
WORKDIR /app

# Salin file dependency
COPY package*.json ./

# Install dependency
RUN npm install

# Salin seluruh source code
COPY . .

# Build aplikasi Next.js
RUN npm run build

# Buat user non-root untuk keamanan
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    chown -R nextjs:nodejs /app

USER 1001

# Expose port default Next.js
EXPOSE 3000

# Jalankan aplikasi Next.js
CMD ["npm", "start"]