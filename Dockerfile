FROM alpine:3.7
WORKDIR /usr/src/app
RUN apk add nodejs python3 npm
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
RUN chmod 777 .
WORKDIR /usr/src/app/restpy
#CMD ./run.sh