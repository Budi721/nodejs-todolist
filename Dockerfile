# First Stage : to install and build dependences
FROM node:16.17.1 AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build


# Second Stage : Setup command to run your app using lightweight node image
FROM node:16.17.1-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3030
CMD ["npm", "run", "start:prod"]