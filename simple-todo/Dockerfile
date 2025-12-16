# Stage 1: Build the React Application
FROM node:18-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build the app for production (creates a 'dist' folder)
RUN npm run build

# Stage 2: Serve the application using Nginx (Fast and Lightweight)
FROM nginx:alpine

# Copy the built files from the build stage to Nginx's public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx config (React Router ke liye zaroori)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Frontend port: 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]