FROM node:16.14.0-alpine

WORKDIR /usr/src/app

CMD npm install && \
    npm run start:dev
