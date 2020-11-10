FROM node:12

WORKDIR /usr/src/app

COPY ./public/ ./public/
COPY ./src/ ./src/
COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --production

CMD [ "yarn", "start" ]
