# 🎬 Movie Search App

A modern, responsive movie search application built with **React (Vite)** and **Tailwind CSS**. This app allows users to search for movies, view detailed information, and manage a list of favorite movies.

## 🚀 Features

* **Search Functionality:** Search for movies, series, and episodes using the OMDB API.
* **Premium UI:** Dark theme with "Hotstar-style" hover effects on movie cards.
* **Filtering:** Filter search results by Type (Movie, Series, Episode).
* **Pagination:** Easy navigation through search results.
* **Favorites List:** Add/Remove movies to favorites (Persisted using LocalStorage).
* **Detailed View:** Click on any movie to view full details like Plot, Cast, Genre, and Ratings.
* **Responsive Design:** Fully responsive layout that adjusts from mobile to large screens (5-column grid).

## 🛠️ Tech Stack

* **Frontend Library:** React.js (Vite)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **API:** OMDB API
* **State Management:** React Hooks (useState, useEffect)

## 📸 Screenshots

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/chandran-vengatesan/Movie-Search-App]
    cd movie-search-app
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Setup:**
    * Create a `.env` file in the root directory.
    * Add your OMDB API Key:
        ```env
        VITE_OMDB_API_KEY=your_api_key_here
        ```

4.  **Run the App:**
    ```bash
    npm run dev
    ```

## 📂 Project Structure
src/
├── api/             # API service logic (omdbService.js)
├── components/      # Reusable components (MovieCard, SearchBar, NavBar, etc.)
├── pages/           # Page components (Home, MovieDetails, FavoritesPage)
├── App.jsx          # Main application component with Routes
└── main.jsx         # Entry point

## 🌟 Future Improvements

* Add a "Trending Now" section.
* Implement user authentication.
* Add trailer playback functionality.

---

Made with ❤️ by [Chandran Vengatesan]