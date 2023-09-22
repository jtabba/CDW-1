FROM node:18.15.0-slim AS Build

WORKDIR /usr/src/backend

COPY package.json package-lock.json ./

# Install depdencies
RUN npm install

COPY . .

RUN npm run build

# Stage 2
FROM node:18.15.0-slim AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/backend

COPY --from=Build /usr/src/backend/build ./build
COPY package.json package-lock.json ./

RUN npm install --only=production

CMD ["sh", "-c", "npm run start"]