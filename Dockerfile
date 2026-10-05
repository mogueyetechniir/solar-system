FROM node:20-alpine

WORKDIR /usr/app

COPY package*.json /usr/app/

RUN npm ci --omit=dev

COPY . .

ENV MONGO_URI=uriPlaceholder
ENV MONGO_USERNAME=usernamePlaceholder
ENV MONGO_PASSWORD=passwordPlaceholder

EXPOSE 3000

USER node

CMD [ "npm", "start" ]