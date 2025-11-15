# DevPulse

A web-app for developers to link their GitHub (or similar) and visualize their activity—commits, languages, streaks, project summaries. Kind of like “your dev dashboard”.

## Tech Stack

### Frontend Framework
- **Svelte 5** - Latest version with runes for reactive state management

### Backend Framework
- **Laravel:** - Latest version with latest features and security updates

### Styling
- **TailwindCSS** - Utility-first CSS framework
- **Custom Theme** - Neutral color palette optimized for both light and dark modes
- **Responsive Design** - Mobile-first approach with breakpoints

### Data Visualization
- **Chart.js** - Interactive and animated charts for language usage and repository stats

### State Management
- **Svelte Stores** - Built-in reactive stores for theme and user state
- **LocalStorage** - Persistent theme preferences across sessions


## 📁 Project Structure

```
devpulse/
├── src/
│   ├── lib/
│   │   ├── components/       # Reusable UI components
│   │   │   ├── Header.svelte
│   │   │   ├── Sidebar.svelte
│   │   │   ├── Footer.svelte
│   │   │   ├── StatsCard.svelte
│   │   │   ├── LanguageChart.svelte
│   │   │   └── StarsChart.svelte
│   │   ├── stores/           # Svelte stores for state management
│   │   │   ├── theme.ts
│   │   │   └── user.ts
│   │   ├── types/            # TypeScript type definitions
│   │   │   └── index.ts
│   │   └── api.ts            # API client with mock data
│   ├── routes/               # SvelteKit routes (pages)
│   │   ├── login/
│   │   │   └── +page.svelte
│   │   ├── register/
│   │   │   └── +page.svelte
│   │   ├── profile/
│   │   │   └── +page.svelte
│   │   ├── settings/
│   │   │   └── +page.svelte
│   │   ├── +layout.svelte    # Root layout with navigation
│   │   ├── +page.svelte      # Dashboard home page
│   │   └── +error.svelte     # 404 error page
│   ├── app.css               # Global styles and Tailwind imports
│   └── app.html              # HTML template
├── static/                   # Static assets
├── package.json
├── svelte.config.js
├── tailwind.config.js
├── vite.config.ts
└── tsconfig.json
```

##  Development Commands

Run the command in bash

```bash
 chmod +x start-dev.sh
 ./start-dev.sh
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

---
    
## Social Links

- X [@LChristianDev](https://x.com/LChristianDev)
- [LinkedIn](https://www.linkedin.com/in/lordchristian-regacho/)
- [Portfolio](https://lord-christian-portfolio.vercel.app/)
