FROM node:14.20 as Angular
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . .
RUN npm run build


FROM nginx:alpine
COPY --from=Angular /app/dist/* /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]