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

## 🔐 Environment Variables

To run BazarDor locally, configure the required environment variables in a `.env` file at the root of the project.

### 1. Create a `.env` file

```env
BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_MONGODB_URL=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### 2. Configure the variables

| Variable | Description |
|---|---|
| `BETTER_AUTH_SECRET` | Secret used for authentication and session security |
| `BETTER_AUTH_URL` | Base URL of the application |
| `BETTER_AUTH_MONGODB_URL` | MongoDB connection string |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |

### ⚠️ Security Notice

- Never commit your `.env` file or real credentials to GitHub.
- Keep all secrets private and configure production variables in your hosting provider.
- Make sure `.env*` files containing secrets are excluded in `.gitignore`, while retaining any safe example file such as `.env.example`.
- Generate a strong authentication secret and rotate any credentials that have been exposed.


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
