FROM node:latest

WORKDIR /app
COPY package.json .
## Instalamos las dependencias
RUN npm install

## Copiamos todo lo que tenemos en local dentro de /app
COPY . .

EXPOSE 4200

## Ejecuta el comando definido en el package.json
CMD npm start
#CMD ng serve --host 0.0.0.0 --disable-host-check
# ENTRYPOINT [ "/bin/bash" ]