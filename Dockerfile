FROM node:14

COPY ./micronode-company /opt/app

WORKDIR /opt/app

RUN yarn

CMD yarn start:dev