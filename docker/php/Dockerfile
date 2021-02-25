FROM php:7.2-fpm

# Install modules
RUN apt-get update && apt-get install -y \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libicu-dev \
    wget \
    git \
    --no-install-recommends

RUN docker-php-ext-install zip intl mbstring pdo_mysql exif \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install gd

RUN pecl install -o -f xdebug \
    && rm -rf /tmp/pear

ENV COMPOSER_ALLOW_SUPERUSER=1 COMPOSER_HOME=/tmp/.composer RUN_USER=root

COPY . /tmp/build/

# See https://getcomposer.org/doc/faqs/how-to-install-composer-programmatically.md
RUN set -ex; \
    curl -fso composer-setup.php 'https://getcomposer.org/installer'; \
    curl -fs 'https://composer.github.io/installer.sha384sum' | sha384sum -c -; \
    php composer-setup.php --quiet --no-ansi --install-dir=/usr/local/bin --filename=composer; \
    mv /tmp/build/php.ini ${PHP_INI_DIR}/conf.d; \
    mv /tmp/build/docker-entrypoint.sh /opt; \
    rm composer-setup.php;

# nodejs
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - ; \
    apt-get install -y nodejs;

RUN chmod +x /opt/docker-entrypoint.sh

RUN usermod -u 1000 www-data

WORKDIR /var/www

ENTRYPOINT ["/opt/docker-entrypoint.sh"]

CMD ["php-fpm"]
