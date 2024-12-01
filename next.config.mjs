/** @type {import('next').NextConfig} */
import path from 'path';
import withPWA from 'next-pwa';

const nextConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
	runtimeCaching: [
    {
      urlPattern: /\.(?:js|css|html)$/, // Кэширование статических файлов
      handler: 'CacheFirst',
      options: {
        cacheName: 'static-resources',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 дней
        },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|gif|svg)$/, // Кэширование изображений
      handler: 'CacheFirst',
      options: {
        cacheName: 'images-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
    {
      urlPattern: /.*/,
      handler: 'NetworkFirst', // или 'CacheFirst'
      options: {
        cacheName: 'my-cache',
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 30 * 24 * 60 * 60,
        },
      },
    },
  ],
});

export default nextConfig;
