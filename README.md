# Socially

A modern social media application built with Next.js, Clerk, Prisma, PostgreSQL, and Uploadthing.

## Features

- **User Authentication**: Secure user authentication and management powered by Clerk.
- **User Profiles**: View personal and other users' profiles, showcasing posts, follower count, and following count.
- **Post Creation**: Create and share posts with text content and image attachments.
- **Post Interaction**: Like and comment on posts.
- **Follow/Unfollow**: Connect with other users by following and unfollowing.
- **Notifications**: Real-time notifications for likes, comments, and new followers.
- **Theme Toggling**: Switch between light and dark modes for a personalized experience.

## Technologies Used

### Frontend

- **Next.js**: React framework for building the application.
- **React**: UI library.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Shadcn/ui**: Re-usable components for a modern UI.
- **`next-themes`**: Theme management (light/dark mode).
- **`react-hot-toast`**: For elegant notifications.

### Backend

- **Next.js API Routes**: For server-side logic and API endpoints.
- **Prisma**: Next-generation ORM for database interaction.
- **PostgreSQL**: Robust relational database.
- **Clerk**: User authentication and authorization.
- **Uploadthing**: Simple and secure file uploads.

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Make sure you have the following installed:

- Node.js (v18 or higher)
- npm or Yarn
- PostgreSQL database

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/socially.git
    cd socially
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**
    Create a `.env` file in the root of your project and add the following:

    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=public"
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="YOUR_CLERK_PUBLISHABLE_KEY"
    CLERK_SECRET_KEY="YOUR_CLERK_SECRET_KEY"
    UPLOADTHING_SECRET="YOUR_UPLOADTHING_SECRET"
    UPLOADTHING_APP_ID="YOUR_UPLOADTHING_APP_ID"
    ```

    - Replace `DATABASE_URL` with your PostgreSQL connection string.
    - Obtain `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` and `CLERK_SECRET_KEY` from your Clerk dashboard.
    - Obtain `UPLOADTHING_SECRET` and `UPLOADTHING_APP_ID` from your Uploadthing dashboard.

4.  **Database Setup:**
    Push the Prisma schema to your PostgreSQL database:
    ```bash
    npx prisma db push
    ```

### Running the Development Server

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

To build the application for production:

```bash
npm run build
# or
yarn build
```

To start the production server:

```bash
npm run start
# or
yarn start
```

## Project Structure

- `prisma/`: Contains the Prisma schema definition (`schema.prisma`).
- `public/`: Static assets like images.
- `src/actions/`: Server actions for database operations (e.g., `post.action.ts`, `user.action.ts`).
- `src/app/`: Next.js pages and API routes.
  - `api/`: API endpoints (e.g., `uploadthing/`, `tasks/`).
  - `notifications/`: Notifications page.
  - `profile/[username]/`: Dynamic profile pages.
- `src/components/`: Reusable React components.
  - `ui/`: Shadcn/ui components.
- `src/lib/`: Utility functions and Prisma client instance.
- `src/middleware.ts`: Clerk middleware for authentication.
