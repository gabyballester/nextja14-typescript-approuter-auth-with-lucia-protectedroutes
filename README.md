# 📱 Blog App

## 📝 Description

Next Auth App is a Tech Assessment Project to demonstrate knowledge of Next.js. It allows you to signup and login

## 🛠️ Code Quality and Best Practices

The platform ensures high code quality and follows best practices.

## 🚀 Getting Started

1. Install the necessary dependencies: Before running the development server, make sure to install all project dependencies. You can do this with one of the following commands:

```bash
npm install
```

2. Run the development server: You can start the development server using one of the following commands:

```bash
npm run dev
```

## 🗄️ Database

This application uses SQLite as its database. Ensure that the SQLite database is properly set up before running the application.

It includes a built-in db through the use of this file `services\api.services.ts` which recreates the db if it doesn't exist.

## 📚 Base libraries used

- **Next.js:** As the chosen framework to build with.
- **React:** As the UI library in the background.
- **TypeScript:** Adding strong static types and advanced features to improve large-scale development and code maintainability.

## 🌟 Special Features

- **Form Management and Validation**
  The application leverages useFormState and useFormStatus to manage forms and handle button interactions, ensuring seamless user experiences and maintaining data integrity.

- **Server Actions:** The application uses Server Actions to efficiently and securely handle server actions.

- **Authentication with Lucia:** Lucia is an authentication tool used to securely verify user identities. Its main purpose is to ensure that only authorized individuals can access certain parts of the application or perform specific actions. This helps protect sensitive information and maintain data integrity and security.

## 📦 Prepare for production

1. Install image optimization package sharp.

```bash
npm i sharp
```

2. Creating an optimized production build

```bash
npm run build
```

3. Start the production build

```bash
npm run start
```

## 🤝 Contributions

Contributions are welcome. If you would like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature/new-feature).
3. Make your changes and commit them (git commit -am 'Add new feature').
4. Push your branch (git push origin feature/new-feature).
   Open a Pull Request.
