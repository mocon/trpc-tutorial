FROM node:16-alpine as build

WORKDIR /usr/src/app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
ENV PORT=8080
WORKDIR /usr/src/app
COPY package*.json .
RUN npm install --omit=dev
COPY --from=build /usr/src/app/dist ./dist
EXPOSE ${PORT}
CMD node dist/index.js
