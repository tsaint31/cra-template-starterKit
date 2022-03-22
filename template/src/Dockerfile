FROM httpd:2.4
MAINTAINER http://decathlon.com

RUN apt-get update && apt-get install -y gettext-base && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && mkdir /config
COPY build/config/ /config
COPY build/ /usr/local/apache2/htdocs

# Change timezone to Paris
RUN rm -f /etc/localtime && ln -s /usr/share/zoneinfo/Europe/Paris /etc/localtime

# Disable directory listing and server information
RUN sed -i 's/Options Indexes FollowSymLinks/Options FollowSymLinks/' /usr/local/apache2/conf/httpd.conf
RUN echo "ServerTokens Prod" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ServerSignature Off" >> /usr/local/apache2/conf/httpd.conf
RUN echo "ServerName my-app" >> /usr/local/apache2/conf/httpd.conf
RUN sed -i 's/#LoadModule rewrite_module modules\/mod_rewrite.so/LoadModule rewrite_module modules\/mod_rewrite.so/' /usr/local/apache2/conf/httpd.conf
RUN sed -i 's/#LoadModule rewrite_module modules\/mod_headers.so/LoadModule rewrite_module modules\/mod_headers.so/' /usr/local/apache2/conf/httpd.conf
RUN sed -i '/<Directory "\/usr\/local\/apache2\/htdocs">/,/<\/Directory>/ s/AllowOverride None/AllowOverride All/' /usr/local/apache2/conf/httpd.conf

EXPOSE 80

CMD ["envsubst < /config/config.js.template > /usr/local/apache2/htdocs/config.js && httpd-foreground"]
ENTRYPOINT ["/bin/bash","-c"]
