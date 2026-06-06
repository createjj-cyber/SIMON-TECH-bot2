require('dotenv').config();

module.exports = {
  // Bot Configuration
  bot: {
    name: process.env.BOT_NAME || 'SIMON TECH',
    prefix: process.env.BOT_PREFIX || '.',
    version: '2.1.0',
    owner: process.env.BOT_OWNER || 'Simon Tech'
  },

  // Owner Information
  owner: {
    number: process.env.OWNER_NUMBER || '2349166265317',
    name: process.env.OWNER_NAME || 'SIMON TECH'
  },

  // Features
  features: {
    autoRead: process.env.ENABLE_AUTO_READ === 'true',
    autoTyping: process.env.ENABLE_AUTO_TYPING === 'true',
    autoReply: process.env.ENABLE_AUTO_REPLY === 'true',
    groupWelcome: process.env.ENABLE_GROUP_WELCOME === 'true',
    logging: process.env.ENABLE_LOGGING === 'true'
  },

  // Server Configuration
  server: {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'production'
  },

  // Session
  session: {
    id: process.env.SESSION_ID || null,
    dir: './sessions'
  },

  // Logging
  logging: {
    level: process.env.LOG_LEVEL || 'info',
    timestamps: true
  },

  // API Keys (Optional)
  apis: {
    openai: process.env.OPENAI_API_KEY || null,
    gemini: process.env.GEMINI_API_KEY || null
  }
};
