FROM node:18.15.0-slim AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/frontend

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run start"]