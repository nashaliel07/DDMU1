FROM node:18


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ENV DB_CONNECTION=mongodb+srv://62684201:hsihSkWNGfdxGiro@cluster0.tjj58dv.mongodb.net/example1
ENV PORT 8080
EXPOSE 8080

CMD ["npm", "start:dev"]
