FROM node:22-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Install serve
RUN npm install -g serve

EXPOSE 3000

# Serve the application
CMD ["serve", "-s", "build", "-l", "3000"]