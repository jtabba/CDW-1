# Stage 1: Build the React app
FROM node:18.15.0 AS Build

WORKDIR /usr/src/frontend

COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy application source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Create the production image
FROM node:18.15.0-slim AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/frontend

# Copy only the production-ready files from the build stage
COPY --from=Build /usr/src/frontend/build ./build
COPY package.json package-lock.json ./

# Install only production dependencies
RUN npm install --only=production

# Start the application
# CMD ["npm", "start"]
RUN npm install -g serve
CMD ["serve", "-s", "build"]
