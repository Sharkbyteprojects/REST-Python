FROM alpine:3.7
WORKDIR /usr/src/app
RUN apk add nodejs python3 npm
COPY package*.json ./
RUN npm install
RUN addgroup noadmin
RUN adduser node -g noadmin -D
COPY . .
EXPOSE 8080
RUN chmod 777 .
USER node
WORKDIR /usr/src/app/restpy
#CMD ./run.sh