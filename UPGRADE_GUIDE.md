# 🚀 SIMON TECH Bot v2.1.0 Upgrade Guide

## What's New in v2.1.0?

### 📦 Upgraded Dependencies
- **Express**: Updated to v4.21.0 (latest stable)
- **Baileys**: Maintained at v6.7.16 (latest stable)
- **Axios**: Added for external API calls
- **Dotenv**: Added for better env management
- **Chalk**: Added for colored console output
- **Moment**: Added for advanced time handling
- **Nodemon**: Added for development hot-reload

### 🔧 System Requirements
- **Node.js**: Now requires v20+ (was v14+)
- **npm**: Now requires v9+ (was any version)

## How to Upgrade

### Option 1: Fresh Installation
```bash
# Clone the latest version
git clone https://github.com/createjj-cyber/SIMON-TECH-bot2.git
cd SIMON-TECH-bot2

# Install updated dependencies
npm install

# Generate session
npm run session

# Start bot
npm start
```

### Option 2: Update Existing Installation
```bash
# Navigate to your bot directory
cd SIMON-TECH-bot2

# Update all dependencies
npm install

# Clear old node_modules (optional but recommended)
rm -rf node_modules package-lock.json
npm install

# Start bot
npm start
```

### Option 3: Update via Git
```bash
# Pull latest changes
git pull origin main

# Install updated dependencies
npm install

# Start bot
npm start
```

## New Features

### 1. Development Mode
```bash
npm run dev
# Auto-reloads on file changes (requires nodemon)
```

### 2. Enhanced Configuration
Check `.env.example` for new configuration options:
- `ENABLE_AUTO_TYPING`
- `ENABLE_GROUP_WELCOME`
- `LOG_LEVEL`
- `OPENAI_API_KEY` (for future AI features)
- `GEMINI_API_KEY` (for future AI features)

### 3. Centralized Config
New `config.js` file for easier configuration management:
```javascript
const config = require('./config.js');
console.log(config.bot.name); // SIMON TECH
```

## Breaking Changes

❌ **Node.js v14 Support Dropped**
- You now need Node.js v20 or higher
- Check your version: `node --version`
- [Download Node.js v20+](https://nodejs.org)

## Migration Checklist

- [ ] Backup your `.env` file
- [ ] Check Node.js version: `node --version` (must be v20+)
- [ ] Check npm version: `npm --version` (must be v9+)
- [ ] Delete `node_modules` folder
- [ ] Run `npm install`
- [ ] Update your `.env` file with new options (optional)
- [ ] Test bot with `.ping` command

## Troubleshooting

### "npm ERR! Node version incompatible"
```bash
# Update Node.js to v20 or higher
# Visit: https://nodejs.org
```

### "npm install" fails
```bash
# Clear npm cache
npm cache clean --force

# Try installing again
npm install
```

### Bot not starting
```bash
# Check logs
npm start

# If error persists, regenerate session
npm run session
```

## Performance Improvements

✅ **Faster Startup** - Latest Express optimizations
✅ **Better Stability** - Updated Baileys version
✅ **Reduced Memory** - Optimized dependencies
✅ **Improved Logging** - Color-coded output

## Support

- 📖 Read [README.md](README.md)
- 🐛 Report bugs on [GitHub Issues](https://github.com/createjj-cyber/SIMON-TECH-bot2/issues)
- 💬 Suggest features with `[FEATURE]` prefix

## Next Steps

1. ✅ Upgrade to v2.1.0
2. 🎯 Configure new options in `.env`
3. 🚀 Deploy to Railway
4. ⭐ Give us a star on GitHub!

---

**Happy Botting!** 🤖🎉
