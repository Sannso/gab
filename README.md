# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).


## Tables
├── User
│   ├── email
│   ├── uuid
│   └── password
│
├── UserBasics
│   ├── id
│   ├── user_uuid
│   ├── user_name
│   ├── user_lastname
│   ├── amount
│   ├── history_amount
│   └── timestamp
│
├── UserActivity
│   ├── id
│   ├── user_uuid
│   ├── sold
│   ├── purchase
│   ├── profit
│   ├── product_id
│   ├── client_id
│   └── timestamp
│
├── Product
│   ├── id
│   ├── user_uuid
│   ├── name
│   ├── selling_price
│   ├── purchase_price
│   ├── description
│   ├── stock
│   └── category
│
├── Client
│   ├── id
│   ├── user_uuid
│   ├── name
│   ├── last_name
│   ├── email
│   ├── phone
│   └── address


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## GAB Project

## Tech Stack
- Astro v5.4.2
- Tailwind CSS v4
- Supabase

## Setup Instructions

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase credentials:
     - `PUBLIC_SUPABASE_URL`: Your Supabase project URL
     - `PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key

4. Start the development server:
```bash
npm run dev
```

## Using Supabase

The Supabase client is configured in `src/lib/supabase.ts`. Import it in your components like this:

```typescript
import { supabase } from '../lib/supabase';

// Example query
const { data, error } = await supabase
  .from('your_table')
  .select('*');

```

## Deployment to Vercel

This project is configured for deployment on Vercel. Follow these steps:

1. Push your code to a GitHub repository

2. Visit [Vercel](https://vercel.com) and create a new project

3. Connect your GitHub repository

4. Configure environment variables:
   - Add all variables from your `.env` file to Vercel's environment variables
   - Make sure to add them to both Production and Preview environments

5. Deploy!

The project includes a `vercel.json` configuration file that handles all the necessary build settings.
