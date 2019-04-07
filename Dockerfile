FROM node:dubnium

# set working directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH $PATH:/usr/src/app/node_modules/.bin

# start app
CMD ["npm", "start", "--", "--host=0.0.0.0", "--hmr-port=1337", "--hmr-hostname=localhost"]