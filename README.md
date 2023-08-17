# Music Web Player with ChatGPT

This project is a music web player that incorporates ChatGPT, an AI language model, allowing users to interact with it and receive music recommendations based on their chat conversations. The application is built using Next.js 13, Tailwind CSS, and TypeScript.

![image](https://github.com/Sebasssssss/Music-player-with-ChatGPT/assets/105828786/96c2067a-bfc0-4734-9d90-468cf75dbdc8)

![image](https://github.com/Sebasssssss/Music-player-with-ChatGPT/assets/105828786/49d9db94-42af-42f1-9926-97ce07be7f66)

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

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [Radix UI](https://www.radix-ui.com/) - A collection of high-quality React UI components.
- [react-query](https://react-query.tanstack.com/) by Tanstack - A library for managing remote data fetching and caching in React.
- [upstash/ratelimit and redis](https://github.com/upstash/ratelimit)
- [axios](https://axios-http.com/) - A popular JavaScript library for making HTTP requests.
- [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing class names dynamically.
- [nanoid](https://github.com/ai/nanoid) - A small and secure library for generating unique IDs.
- [sonner](https://github.com/bpmn-io/sonner) - An opinionated toast component for React.
- [tailwind-merge](https://github.com/benface/tailwindcss-merge) - A Tailwind CSS plugin for merging variants.
- [zod](https://github.com/colinhacks/zod) - A TypeScript-first schema validation library.

Please refer to the documentation for each library to understand how to use them effectively in your own projects.

## Contributing

Contributions to this project are welcome. Feel free to submit bug reports, feature requests, or pull requests on the project's GitHub repository.

## Credits

This project was inspired by the tutorial series by [Joschan](https://github.com/joschan21) on YouTube.
