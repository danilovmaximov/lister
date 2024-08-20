FROM node:20.16.0-alpine AS frontend-build
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
CMD ["npm", "run", "build"]

FROM nginx:1.27.1-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=frontend-build /app/dist .