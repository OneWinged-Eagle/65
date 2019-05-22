FROM node AS builder

COPY package.json /65/
WORKDIR /65/
RUN npm install

COPY ./ /65/
RUN npm run build


FROM nginx

COPY nginx/default.conf /etc/nginx/conf.d/
COPY --from=builder /65/dist/ /var/www/65/
