# 🧾 SoftSell - License Resale Landing Page

A single-page responsive marketing website for **SoftSell**, a fictional software license resale startup.

## 🚀 Live Demo

[🔗 View Live Website](https://resilient-quokka-aafaa6.netlify.app/)  
_(Replace with your actual Netlify)_

---

## 🛠 Tech Stack

- **React.js** with **Vite**
- **TailwindCSS** for styling
- **React Icons** for visual elements
- **Framer Motion** (optional animation support)
- **Hosted on:** Netlify /  GitHub Pages

---

## 📦 Features Implemented

### 1. 💡 Hero Section
- Catchy headline and subheading
- CTA button: “Sell My Licenses”

### 2. ⚙️ How It Works
- Three steps:  
  - Upload License  
  - Get Valuation  
  - Get Paid  
- With icons using `react-icons`

### 3. ✅ Why Choose Us
- Tiles for:
  - Secure Transactions
  - Fast Payouts
  - Trusted by 1000+ users

### 4. ⭐ Customer Testimonials
- Two dummy reviews with name, role, and company

### 5. 📬 Contact Form
- Inputs: Name, Email, Company, License Type (dropdown), Message
- Client-side validation only

### 6. 💬 AI Chat Widget (Bonus)
- Mocked AI chat assistant using `useState`
- Chat interface with sample response
- Icons for assistant and send button

---

## ✨ Bonus Features

- ✅ Light/Dark mode supported via Tailwind classes
- ✅ Responsive on all screen sizes
- ✅ Favicon & SEO-friendly page title/meta tags
- ✅ Animation-ready structure (Framer Motion can be added)

---

## 🗂 Folder Structure

src/
├── components/
│ ├── Hero.jsx
│ ├── HowItWorks.jsx
│ ├── WhyChooseUs.jsx
│ ├── Testimonials.jsx
│ ├── ContactForm.jsx
│ └── ChatWidget.jsx
├── App.jsx
└── index.css

---

## 📌 Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/shaswata-26/softsell

# 2. Navigate into project
cd softsell-landing-page

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev
