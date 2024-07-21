FROM node:18

WORKDIR /usr/src/app

COPY ./http-api-gateway/package*.json ./
COPY ./shared-package/dist ./shared-package
RUN npm install

COPY ./http-api-gateway .
RUN npm run build

CMD ["npm", "run", "start:dev"]
