# Etapa 1: Construcción
FROM node:16 AS builder

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar el package.json y el package-lock.json para instalar las dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Etapa 2: Servir la aplicación
FROM nginx:stable-alpine

# Copiar los archivos construidos desde la etapa anterior al directorio predeterminado de Nginx
COPY --from=builder /app/build /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Comando predeterminado para iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
