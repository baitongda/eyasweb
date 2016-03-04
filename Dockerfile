FROM node:latest

MAINTAINER Eyas<liuyuesongde@163.com>

ENV NODE_ENV production

RUN cd /opt \
 && git clone https://github.com/eyasliu/eyasweb.git \
 && cd /opt/eyasweb \
 && npm install -g forever gulp \
 && npm install
 && cd /opt/eyasweb/app/server \
 && npm install \
 && cd /opt/eyasweb/app/client \
 && npm install \
 && cd /opt/eyasweb \
 && mkdir database \
 && gulp build \
 && chmod 755 /opt/eyasweb/run

EXPOSE 8000

WORKDIR /opt/eyasweb
CMD ['/opt/eyasweb/run']