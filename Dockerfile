FROM node:24-alpine

RUN apk add --no-cache git

WORKDIR /app

COPY package*.json .

RUN npm install && \
    npm cache clean --force

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
