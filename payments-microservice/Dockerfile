FROM node:18

WORKDIR /usr/src/app

COPY ./payments-microservice/package*.json ./
COPY ./shared-package/dist ./shared-package
RUN npm install

COPY ./payments-microservice .
RUN npm run build

CMD ["npm", "run", "start:dev"]
