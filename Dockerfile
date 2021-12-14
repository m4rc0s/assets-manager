FROM node:14-alpine as builder

WORKDIR /usr/src/service

COPY package*.json ./

RUN npm config set unsafe-perm true

COPY . .

RUN npm install -g typescript
RUN npm install -g ts-node

RUN npm install
RUN npm run build
RUN npm run preserve

EXPOSE 7070

CMD ["npm", "run", "start"]
