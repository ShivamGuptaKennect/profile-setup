FROM node:erbium

ENV jwtPrivateKey='oh nice'
RUN mkdir /home/api/

COPY . /home/api/
WORKDIR /home/api/
RUN rm -rf node_modules/
RUN npm ci

CMD [ "node", "/home/api/index.js" ]