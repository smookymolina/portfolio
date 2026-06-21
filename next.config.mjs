/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  poweredByHeader: false,

  images: {
    // WebP only — AVIF encode is CPU-heavy and adds latency
    formats: ['image/webp'],
    // Match the breakpoints actually used in sizes="" props
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes:  [256, 384, 512],
    // 24 h cache — images are static assets
    minimumCacheTTL: 86400,
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },

  compress: true,

  async headers() {
    return [
      // Security headers on all routes
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options',  value: 'nosniff' },
          { key: 'X-Frame-Options',          value: 'DENY' },
          { key: 'X-XSS-Protection',         value: '1; mode=block' },
          { key: 'Referrer-Policy',           value: 'strict-origin-when-cross-origin' },
        ],
      },
      // Next.js hashed static bundles — immutable forever
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      // Project / profile / research images — 7-day cache with stale-while-revalidate
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800, stale-while-revalidate=86400' },
        ],
      },
      // Videos — 7-day cache
      {
        source: '/videos/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=604800' },
        ],
      },
      // CV PDF — 1-day cache
      {
        source: '/cv/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=86400' },
        ],
      },
    ];
  },
};

export default nextConfig;
