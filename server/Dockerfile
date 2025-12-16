FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy application source code
COPY . .

# Backend port: 5000
EXPOSE 5000

# Start the Node.js server
CMD ["node", "index.js"]