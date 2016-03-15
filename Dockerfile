FROM daocloud.io/eyasliu/node-server:latest

MAINTAINER Eyas<liuyuesongde@163.com>

ENV NODE_ENV production

RUN cd /opt \
 && git clone https://github.com/eyasliu/eyasweb.git \
# && git branch master && git checkout master \
 && cd /opt/eyasweb \
# && npm install -g forever \
 && npm install \
 && cd /opt/eyasweb/app/server \
 && npm install \
# && cd /opt/eyasweb/app/client \
# && npm install
# && cd /opt/eyasweb \
# && mkdir database 
 && chmod 755 /opt/eyasweb/run


EXPOSE 8000

ENTRYPOINT /opt/eyasweb/run