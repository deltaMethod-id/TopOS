module.exports = {
  app: {
    name: "TopOS",
    version: "1.0.0",
    author: "deltamethod-id",
    description: "TopOS Runtime Configuration"
  },

  runtime: {
    environment: "production",
    debug: false,
    strictMode: true
  },

  server: {
    host: "0.0.0.0",
    port: 3000,
    timeout: 60000,
    compression: true
  },

  security: {
    cors: true,
    helmet: true,
    csrf: false,
    rateLimit: true
  },

  logs: {
    enabled: true,
    level: "info",
    saveToFile: true,
    file: "./logs/latest.log"
  },

  cache: {
    enabled: true,
    ttl: 3600,
    directory: "./cache"
  },

  storage: {
    data: "./data",
    temp: "./temp",
    uploads: "./uploads",
    backup: "./backup"
  },

  database: {
    enabled: false,
    type: "sqlite",
    host: "localhost",
    port: 3306,
    username: "",
    password: "",
    database: "topos"
  },

  network: {
    ipv6: true,
    dnsCache: true,
    keepAlive: true,
    maxConnections: 500
  },

  api: {
    enabled: true,
    prefix: "/api",
    version: "v1"
  },

  features: {
    autoRestart: true,
    hotReload: false,
    telemetry: false,
    analytics: false
  },

  paths: {
    public: "./public",
    views: "./views",
    assets: "./assets",
    config: "./config"
  }
};
