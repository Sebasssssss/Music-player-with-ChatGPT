# Chatbot

This project is a chat application where users can interact with ChatGPT, an AI language model, to receive book recommendations based on questions made in the chat. The application is built using Next.js 13, Tailwind CSS, and TypeScript.

## Installation

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open your browser and navigate to `http://localhost:3000`

## Usage

To use the application, you must create a `.env` file at the root level of the project and add the following environment variables:

```
OPENAI_API_KEY=your_openai_api_key
REDIS_URL=your_redis_url
REDIS_SECRET=your_redis_secret
```

You can obtain an OpenAI API key by signing up for an account on their website. For Redis, you can use a hosted service or run Redis locally.

To get the REDIS_URL and REDIS_SECRET, you will have to register on [upstash](https://console.upstash.com/) and create a new database.


Once the you've done all of that, you can interact with ChatGPT by typing in the chat input box. Ask for book recommendations based on genres, authors, or any other relevant queries. ChatGPT will process your query and provide you with personalized book recommendations.

## Libraries Used

The following libraries were used in the development of this project:

- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid UI development.
- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms) - A plugin for Tailwind CSS that provides pre-styled form components.
- [radix-ui](https://www.radix-ui.com/) - A collection of high-quality React UI components.
- [tanstack/react-query](https://react-query.tanstack.com/) - A library for managing remote data fetching and caching in React.
- [upstash/ratelimit and redis](https://github.com/upstash/ratelimit)
- [axios](https://axios-http.com/) - A popular JavaScript library for making HTTP requests.
- [class-variance-authority](https://github.com/zilioner/class-variance-authority)
- [clsx](https://github.com/lukeed/clsx) - A tiny utility for constructing class names dynamically.
- [licide-react](https://github.com/reiinakano/licide) - Icons
- [nanoid](https://github.com/ai/nanoid) - A small and secure library for generating unique IDs.
- [sonner](https://github.com/bpmn-io/sonner) - An opinionated toast component for React. 
- [tailwind-merge](https://github.com/benface/tailwindcss-merge) - A Tailwind CSS plugin for merging variants.
- [zod](https://github.com/colinhacks/zod) - A TypeScript-first schema validation library.

Please refer to the documentation for each library to understand how to use them effectively in your own projects.

## Contributing

Contributions to this project are welcome. Feel free to submit bug reports, feature requests, or pull requests on the project's GitHub repository.

## Credits

This project was inspired by the tutorial series by [Joschan](https://github.com/joschan21) on YouTube.
