FROM node:18

WORKDIR /usr/src/app

COPY ./users-microservice/package*.json ./
COPY ./shared-package/dist ./shared-package
RUN npm install

COPY ./users-microservice .
RUN npm run build

CMD ["npm", "run", "start:dev"]
