FROM node:18.15.0-alpine3.17

WORKDIR /usr/src/app

RUN apk update && apk upgrade
RUN apk add git

RUN npm install -g npm@latest
RUN npm install --global nuxi@latest prisma@latest
COPY ["package.json", "yarn.lock", "./"]
RUN yarn install
COPY . .

RUN chown -R node /usr/src/app
USER node
