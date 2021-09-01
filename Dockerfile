FROM node:16-alpine

RUN mkdir -p /usr/src/app
RUN chown node /usr/src/app

USER node

WORKDIR /usr/src/app

COPY ["package.json", "yarn.lock", "./"]

RUN yarn

COPY --chown=node:node . .

CMD "yarn" "dev"