FROM node:erbium

ENV jwtPrivateKey='oh nice'
RUN mkdir /home/api/

COPY . /home/api/

CMD [ "node", "/home/api/index.js" ]