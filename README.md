# 🛒 বাজার দর | BazarDor

### বাংলাদেশের নিত্যপ্রয়োজনীয় পণ্যের দাম জানুন এক নজরে 🇧🇩

<p align="center">
  A modern, responsive web application for exploring daily market prices of essential products in Bangladesh.
</p>

<p align="center">
  <a href="https://bajar-dor-eight.vercel.app">
    <img src="https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-16A34A?style=for-the-badge" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-App_Router-black?style=for-the-badge&logo=next.js" alt="Next.js" />
</p>

---

## 🌐 Live Website

🔗 **[Visit BazarDor — বাজার দর](https://bajar-dor-eight.vercel.app)**

BazarDor is a modern market price tracking application designed to help users explore the prices of everyday essentials, compare market rates, and stay informed about daily price changes through a clean and user-friendly interface.

## ✨ Key Features

- 📊 **Daily Price Tracking** — Explore the latest available prices of essential products.
- 📈 **Price Change Indicators** — Identify products with rising and falling prices.
- 🛍️ **Product Categories** — Browse products by category with easy navigation.
- 🔎 **Product Details** — View product information, price summaries, and market-based prices.
- 🔐 **Authentication System** — Sign up, sign in, and manage your account securely.
- 🔑 **Social Login** — Support for Google and GitHub authentication.
- ↕️ **Smart Price Sorting** — Sort products from lowest to highest price or vice versa.
- 👤 **Profile Management** — Update your account information.
- 📱 **Fully Responsive Design** — Optimized for mobile, tablet, and desktop devices.
- ⚡ **Smooth User Experience** — Loading skeletons, toast notifications, and friendly error pages.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| Next.js | React framework and application routing |
| React | Building reusable UI components |
| Tailwind CSS | Responsive styling and modern UI |
| HeroUI Components | Reusable interface elements |
| Better Auth | User authentication and account management |
| React Hot Toast | Success, error, and feedback notifications |
| Lucide React | Modern icons |
| JavaScript | Application logic and interactivity |
| Vercel | Deployment and hosting |

## 🚀 Getting Started

Follow these steps to run BazarDor locally.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd your-project-folder
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the project root and add the environment variables required by your Better Auth configuration and database setup.

```env
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000
```

Add your database and OAuth provider credentials if your configuration requires them. Never commit real secrets or API keys to GitHub.

### 5. Start the Development Server

```bash
npm run dev
```

### 6. Open the Application

Visit the following URL in your browser:

**http://localhost:3000**

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build the application for production |
| `npm start` | Start the production server |
| `npm run lint` | Run the configured linter |

## 📁 Project Highlights

- **Home Page:** Featured price changes and a complete product listing.
- **Category Pages:** Category-based product browsing and price sorting.
- **Product Details:** Product summaries and market-wise price information.
- **Authentication:** Registration, login, and social authentication.
- **User Profile:** View and update account information.
- **Responsive UI:** Consistent experience across different screen sizes.
- **Error Handling:** Friendly 404 pages and protected-route redirects.

## 🔒 Authentication & Security

BazarDor uses Better Auth for authentication and account management. Protected pages require an authenticated session, while validation feedback and toast notifications help users understand the result of their actions.

Configure the appropriate database, authentication secret, and OAuth credentials before running the application in production.

## 🌍 Deployment

The application is deployed on Vercel.

🔗 **Live URL:** https://bajar-dor-eight.vercel.app

For production deployment, configure all required environment variables in your hosting platform and ensure that dynamic routes work correctly after refreshing a page.

## 🎯 Project Goal

The goal of BazarDor is to make everyday market price information easier to explore through a modern, accessible, and responsive web application.

## 👨‍💻 Author

Developed with ❤️ using Next.js and modern web technologies.

---

<p align="center">
  🛒 <strong>বাজার দর — প্রয়োজনীয় পণ্যের দাম এক নজরে।</strong>
  <br />
  <sub>সকল দাম সম্ভাব্য; বাজার অবস্থার ওপর নির্ভর করে পরিবর্তিত হয়।</sub>
</p>
