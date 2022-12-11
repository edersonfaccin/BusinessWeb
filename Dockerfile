FROM node:18 as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
CMD yarn run build

FROM nginx:1.23.2
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /usr/src/app/out /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]