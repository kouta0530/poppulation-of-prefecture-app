FROM node:lts-alpine
RUN npm install -g "@vue/cli"
WORKDIR /app
COPY .  .
RUN yarn install 
EXPOSE 8080
CMD ["yarn","serve"]