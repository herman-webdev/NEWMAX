FROM node:18

RUN mkdir /app
WORKDIR /app
EXPOSE 3000

COPY . .
RUN npm ci
CMD npm run start
