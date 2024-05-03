FROM node:14 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run start
# Expose the Node.js port
EXPOSE 3000