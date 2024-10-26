# Gunakan image Node.js untuk tahap build
FROM node:17 AS builder
WORKDIR /app
COPY package.json ./
RUN npm cache clean --force
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Gunakan image Nginx untuk tahap run
FROM nginx:1.23
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]