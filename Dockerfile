# Build stage
FROM node:20 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build disertatie-fe-v2 --configuration production

# Serve dist
FROM nginx:alpine
COPY --from=build /app/dist/disertatie-fe-v2 /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
