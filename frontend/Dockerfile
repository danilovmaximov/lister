FROM node:iron-alpine AS lister-frontend
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . ./
CMD ["npm", "run", "build"]

