FROM node:latest as builder

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN yarn install -g
RUN yarn build

FROM nginx

RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx

COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]