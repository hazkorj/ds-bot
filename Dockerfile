# Use the official Node.js image as the base image
FROM node:20

ENV NODE_PATH=/app

# Установка зависимостей
WORKDIR /app

# Copy the application files into the working directory
COPY . /app
# Install the application dependencies
RUN npm install

# Экспорт порта
EXPOSE 80

# Define the entry point for the container
CMD ["npm", "start"]