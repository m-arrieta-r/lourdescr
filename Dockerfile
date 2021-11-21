FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# COPY the package.json file, update any deps and install them
COPY package.json .
RUN npm install

# copy the whole source folder(the dir is relative to the Dockerfile
COPY . .

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]