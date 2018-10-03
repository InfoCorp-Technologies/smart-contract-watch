FROM node:8.11.4-alpine

WORKDIR /smart-contract-watch

COPY package.json yarn.lock ./

RUN apk add --update --no-cache --virtual .git \
        git \
    && yarn --pure-lockfile && yarn cache clean \
    && apk del .git

COPY . ./

CMD [ "yarn", "start"]