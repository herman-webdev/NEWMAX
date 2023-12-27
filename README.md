# Backend test task

## Table of contents

- [Описание](#description)
- [Технологии](#technologies)
- [Установка](#installation)

## Описание
Написание NodeJS сервиса, с результатом работы, которого будет массив объектов, содержащих информацию об остатках каждого артикула поразмерно на складе "Казань WB". Данные парсить с сайта wildberries.ru
GET http://localhost:3000/api/data 

## Технологии
- Typescript
- Node.js
- Express.js

## Установка
- установка с докером:
```bash
$ docker login

$ docker compose up
```
- установка локально (если докер не видет порт):
```bash
$ npm ci

$ npm run start:dev
```
