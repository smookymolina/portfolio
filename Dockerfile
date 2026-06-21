# ── Stage 1: Install dependencies ──────────────────────────────────────────
FROM node:20-alpine AS deps
WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json package-lock.json* ./
RUN npm ci

# ── Stage 2: Build the app ──────────────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ── Stage 3: Production runner ──────────────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup -S nodejs && adduser -S nextjs -G nodejs

# Copy standalone output
COPY --from=builder /app/.next/standalone ./
# Copy static assets
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
# Copy public folder (not included in standalone)
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
