# Music Web Player with ChatGPT

This project is a music web player that incorporates ChatGPT, an AI language model, allowing users to interact with it and receive music recommendations based on their chat conversations. The application is built using Next.js 13, Tailwind CSS, and TypeScript.

![Screenshot 2023-07-15 231937](https://github.com/Sebasssssss/Music-player-with-ChatGPT/assets/105828786/62bf14f4-bc1e-44c5-9581-1af0039de8ab)

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000`

## Usage

To use the web player, create a `.env` file at the root level of the project and add the following environment variables:

```
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_url
REDIS_SECRET=your_redis_secret
```

You can obtain an OpenAI API key by signing up for an account on their website. For Redis, you can use a hosted service or run Redis locally.

To get the REDIS_URL and REDIS_SECRET, register on [Upstash](https://console.upstash.com/) and create a new database.

Once you've completed the setup, you can interact with ChatGPT by typing in the chat input box. Ask for music recommendations based on genres, artists, or any other relevant queries. ChatGPT will process your query and provide you with personalized recommendations.

## Libraries Used

The following libraries were used in the development of this project:

1. **Tailwind CSS**: A CSS framework for quick and easy UI development.
2. **Radix UI**: Provides high-quality React UI components like menus and tooltips.
3. **react-query** by Tanstack: Handles data fetching and caching in React apps.
4. **upstash/ratelimit and redis**: Enables rate-limiting to control server requests.
5. **axios**: A popular library for making HTTP requests in JavaScript.
6. **clsx**: A tiny utility for dynamic class name creation in React components.
8. **nanoid**: Generates unique IDs for elements in the app.
9. **sonner**: A toast component for displaying notifications in React.
10. **tailwind-merge**: A Tailwind CSS plugin for merging variants.
11. **zod**: A TypeScript-first schema validation library.

Please refer to the documentation for each library to understand how to use them effectively in your own projects.

## Contributing

Contributions to this project are welcome. Feel free to submit bug reports, feature requests, or pull requests on the project's GitHub repository.

## Credits

This project was inspired by the tutorial series by [Joschan](https://github.com/joschan21) on YouTube.
