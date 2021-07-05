FROM node:14

EXPOSE 6001

WORKDIR /app

COPY . .

RUN npm install

CMD node app.js