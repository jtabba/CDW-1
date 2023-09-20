FROM node:18.15.0-slim AS Production

ENV NODE_ENV=production

WORKDIR /usr/src/backend

COPY package.json /usr/src/backend/
COPY package-lock.json /usr/src/backend/

RUN npm install

COPY . /usr/src/backend/

RUN npm run build

CMD ["sh", "-c", "npm run start"]