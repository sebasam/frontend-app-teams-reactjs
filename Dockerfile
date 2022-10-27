FROM node

COPY [".", "/usr/src"]

WORKDIR /usr/src/public

RUN npm install

CMD ["npm", "start"]