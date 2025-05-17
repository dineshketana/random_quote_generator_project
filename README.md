# 🎯 Random Quote Generator

This is a simple web-based **Random Quote Generator** built using **HTML**, **CSS**, and **JavaScript**. It fetches inspirational quotes from a public API and displays them with a clean and responsive user interface.

## 🌟 Features

* 🖱️ One-click quote generation
* 🌐 Real-time quotes from an external API
* 🎨 Attractive UI with background image and styled components
* 📱 Fully responsive and user-friendly

## 📸 Preview
![image](https://github.com/user-attachments/assets/b7d16e8d-c92c-4fdd-9473-d05e0a651996)

## 🚀 How It Works

When the **GENERATE** button is clicked, a `fetch()` request is made to the **API Ninjas Quotes API**, retrieving a random quote and its author. The quote is then dynamically displayed on the page.

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* [API Ninjas Quotes API](https://api-ninjas.com/api/quotes)

## 📂 Project Structure

```
random-quote-generator/
├── index.html
├── style.css (optional if separated)
├── script.js (optional if separated)
├── screenshot.png
└── README.md
```

## 🔑 API Key Setup

To use the project with your own API key:

1. Go to [API Ninjas](https://api-ninjas.com/api/quotes) and sign up to get your API key.
2. Replace the placeholder `'X-Api-Key'` value in the JavaScript section:

   ```js
   'X-Api-Key': 'YOUR_API_KEY_HERE'
   ```

> ⚠️ **Note**: Never expose your API key in public repositories. Consider using environment variables or backend integration for production.

## 🧪 How to Use

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/random-quote-generator.git
   ```
2. Open `index.html` in your browser.
3. Click the **GENERATE** button to see a random quote.

## 📌 To-Do / Improvements

* Add a loading animation
* Enable sharing quotes on social media
* Support category-based quotes
* Add localStorage for previously shown quotes

## 📄 License

This project is licensed under the [MIT License](LICENSE).

