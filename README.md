# Movie App

![Movie App Screenshot](/public/findMovies.png)

A modern React application for discovering and searching movies built with TypeScript, Vite, Tailwind CSS, and Appwrite.

## Features

- **Movie Search**: Search for movies using The Movie Database (TMDB) API
- **Trending Searches**: Track and display trending movie searches
- **Responsive Design**: Beautiful UI that works on all device sizes
- **Modern Stack**: Built with React, TypeScript, Vite, and Tailwind CSS
- **Backend Integration**: Uses Appwrite for storing and retrieving trending searches

## Technologies Used

- **React**: Frontend library for building user interfaces
- **TypeScript**: For type-safe JavaScript code
- **Vite**: Next-generation frontend tooling for fast development
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Appwrite**: Open-source backend server for storing trending searches data
- **TMDB API**: Movie database API for fetching movie information

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Appwrite account and project
- TMDB API key

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

## Features Explained

### Movie Search

Users can search for movies using the search bar. The application fetches results from the TMDB API and displays them as cards with details like title, rating, language, and release year.

### Trending Searches

Each search is recorded in Appwrite database. The most popular searches are displayed in the trending section, showing which movie queries are most common among users.

## Project Structure

```
public/           # Public assets (images, icons)
src/
  ├── components/ # React components (MovieCard, Search, Spinner)
  ├── assets/     # Additional assets
  ├── appwrite.ts # Appwrite configuration and helper functions
  ├── App.tsx     # Main application component
  └── main.tsx    # Application entry point
```

## Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the application.

## License

This project is licensed under the MIT License.
