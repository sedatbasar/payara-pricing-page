# Payara Pricing Page

A modern, responsive pricing page built with **Next.js**, **TypeScript**, and **TailwindCSS**, designed to be highly customizable and visually appealing.

![GitHub last commit](https://img.shields.io/github/last-commit/sedatbasar/payara-pricing-page)
![Vercel Deployment](https://vercelbadge.vercel.app/api/sedatbasar/payara-pricing-page)
![GitHub Pages](https://img.shields.io/github/deployments/sedatbasar/payara-pricing-page/github-pages)

## 🚀 Live Demo

- **Production Deployment (Vercel)**: [payara-pricing-page.vercel.app](https://payara-pricing-page.vercel.app/)
- **Storybook Deployment (GitHub Pages)**: [GitHub Pages Storybook](https://sedatbasar.github.io/payara-pricing-page)

---

## 📌 **Tech Stack**

The project utilizes the following modern technologies:

- **[Next.js](https://nextjs.org/)** – A React framework for server-side rendering, static site generation, and API routes.
- **[TypeScript](https://www.typescriptlang.org/)** – Enhances JavaScript with static typing.
- **[TailwindCSS](https://tailwindcss.com/)** – A utility-first CSS framework for building responsive designs.
- **[Shadcn](https://ui.shadcn.com/)** – A modern component library based on TailwindCSS.

---

## ⚡ **Features**

- 📄 **Dynamic Pricing Component**: Switch between **monthly and yearly billing** seamlessly.
- 🎨 **Fully Responsive**: Optimized for **desktop, tablet, and mobile** devices.
- 🔥 **Storybook Integration**: UI components are documented and tested in **Storybook**.
- ✅ **Vitest Unit Testing**: Ensures the correctness of core functionality.
- 🎭 **Light & Dark Mode Support**: Fully supports **light and dark themes**.
- 🚀 **Automated Deployments**:
  - **Vercel** deploys the **main application** on pushes to `main`.
  - **GitHub Pages** deploys the **Storybook** on pushes to `main`.

---

## 📂 **Project Structure**
```
/.github 
  ├── workflows          # Github workflows
/.storybook              # Storybook configuration
/src
  ├── components/        # Reusable UI components
  ├── context/           # Global state management (Billing Context)
  ├── app/               # Next.js App Router
  ├── stories/           # Storybook stories
  ├── fonts/             # Local fonts
  ├── utils/             # Utility functions
```

---

## 🛠 **Setup & Development**

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/sedatbasar/payara-pricing-page.git
cd payara-pricing-page
```

### **2️⃣ Install Dependencies**
```bash
npm install
```

### **3️⃣ Start Development Server**
```bash
npm run dev
```
- Runs the Next.js app at **`http://localhost:3000`**.

### **4️⃣ Run Tests**
```bash
npm run test
```
- Runs all **unit tests** using **Vitest**.

### **5️⃣ Run Storybook**
```bash
npm run storybook
```
- Starts Storybook UI at **`http://localhost:6006`**.

---

## 🚀 **Deployment Workflow**

### ✅ **Automatic Deployments**
| **Environment** | **Deployed On** | **Live URL** |
|---------------|---------------|-------------|
| **Production (Vercel)** | Pushes to `main` | [payara-pricing-page.vercel.app](https://payara-pricing-page.vercel.app/) |
| **Storybook (GitHub Pages)** | Pushes to `main` | [GitHub Pages Storybook](https://sedatbasar.github.io/payara-pricing-page) |

### 📌 **How It Works**
- **Vercel Deployment**: Every push to `main` triggers an automatic deployment to [Vercel](https://vercel.com/).
- **Storybook Deployment**: GitHub Actions deploys the latest **Storybook build** to GitHub Pages.

---

## 📌 **Project Management**

All issues and tickets were tracked using **GitHub Projects**.

- 🔗 **Project Board**: [GitHub Projects](https://github.com/users/sedatbasar/projects/1/views/1)

---
