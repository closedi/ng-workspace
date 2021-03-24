### STAGE 1: Build ###
FROM node:12.7-alpine AS build
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

### STAGE 2: Run ###
FROM nginx:1.17.1-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/ng-workspace /usr/share/nginx/html

#docker build -t ng-workspace:server -f Dockerfile-server .
#docker run -d -p 8333:8333 ng-workspace:server

#docker build -t ng-workspace:front .
#docker run -p 4200:80 ng-workspace:front
