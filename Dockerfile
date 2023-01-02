FROM node:latest
WORKDIR /app
COPY package.json /app
COPY . /app
CMD node server.js
RUN npm install
EXPOSE 3690

