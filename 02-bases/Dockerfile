# Usa una imagen base de Node.js con la versión deseada
FROM node:18

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Instala Angular CLI de manera global
RUN npm install -g @angular/cli

# Copia el resto de los archivos al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación de Angular escucha (por defecto es 4200)
EXPOSE 4200

# Comando para iniciar la aplicación de Angular cuando se inicie el contenedor
CMD ["ng", "serve", "--host", "0.0.0.0"]
