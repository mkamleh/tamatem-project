# Use an official Node.js runtime as a parent image
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json for dependencies installation
COPY package*.json /app/

# Install dependencies
RUN npm install

# Copy the React app source code
COPY . /app/

# Expose the port the app will run on (default is 5173)
EXPOSE 5173

# Run the development server using npm run dev
CMD ["npm", "run", "dev"]