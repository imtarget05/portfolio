# Multi-stage Dockerfile for Next.js 14 standalone + Vite immersive static (Render free tier)
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

# Install root dependencies (including devDependencies for build)
COPY package.json package-lock.json ./
RUN npm ci

# Install immersive dependencies
COPY immersive/package.json immersive/package-lock.json ./immersive/
RUN npm ci --prefix ./immersive

# Copy source code
COPY . .

# Build Next.js application
RUN npm run build

# Build Vite immersive 3D application
RUN npm run build --prefix ./immersive

# Copy immersive static output into Next.js public so it is served at /immersive
RUN mkdir -p public/immersive && cp -r immersive/dist/* public/immersive/

# Stage 2: Runtime
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output from builder
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set correct permissions
RUN chown -R nextjs:nodejs /app
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
