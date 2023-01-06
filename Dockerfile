FROM node:alpine
EXPOSE 5050

COPY package.json .

RUN npm install --only=production && npm cache clean --force && npm install -g typescript

COPY ./ .


RUN tsc


CMD ["node", "dist/index.js"]