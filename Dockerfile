FROM node:12-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# default to port 3000 for node,
ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

# you'll likely want the latest npm, regardless of node version, for speed and fixes
# but pin this version for the best stability
RUN npm i npm@latest -g

# create directory for app
RUN mkdir /home/api/

WORKDIR /home/api/

COPY . .
RUN npm install --no-optional && npm cache clean --force

CMD [ "node", "./index.js" ]