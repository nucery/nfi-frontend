# nfi-frontend

### Introduction

It is the frontend of One-Stop Crypto Bank.

The production URL is https://ocb.finance/ .

### Deploy

#### Directory

```
# cd nginx-deploy/
# ls -al
drwxr-xr-x   2 root root   39 Nov 11 04:36 .
dr-xr-x---. 13 root root 4096 Nov 11 04:39 ..
lrwxrwxrwx   1 root root   18 Nov 10 17:53 conf.d -> /etc/nginx/conf.d/
lrwxrwxrwx   1 root root   29 Nov 10 20:31 ocb.finance -> /usr/share/nginx/ocb.finance/
```

```
nginx-deploy/
├─ conf.d/
│  ├─ https/
│  │  ├─ cert.pem
│  │  ├─ https.conf
│  │  ├─ key.pem
│  ├─ nuc.ocb.finance.conf
│  ├─ ocb.finance.conf
│  ├─ test-nuc.ocb.finance.conf
│  ├─ test.ocb.finance.conf
├─ ocb.finance/
│  ├─ @/
│  ├─ nuc/
│  ├─ test/
│  ├─ test-nuc/
```

#### HTTPS

config file `nginx-deploy/conf.d/https/https.conf` for HTTPS

``` nginx
listen                     443 ssl http2;
ssl_certificate            /etc/nginx/conf.d/https/cert.pem;
ssl_certificate_key        /etc/nginx/conf.d/https/key.pem;
ssl_session_timeout        5m;
ssl_ciphers                HIGH:!aNULL:!MD5;
ssl_protocols              SSLv2 SSLv3 TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
ssl_prefer_server_ciphers  on;
error_page                 497 https://$host$request_uri;

if ($server_port = 80) {
    return 497;
}
```

File `nginx-deploy/conf.d/https/cert.pem` is the certificate.

File `nginx-deploy/conf.d/https/key.pem` is the public key.

#### Development Environment

##### NGINX Configuration

config file `nginx-deploy/conf.d/test.ocb.finance.conf` for site https://test.ocb.finance/

``` nginx
server {
    listen         80 http2;
    server_name    ~^test.ocb.finance$;
    include        /etc/nginx/conf.d/https/https.conf;
    if ($request_method !~ ^(GET)$ ) {
        return 405;
    }
    error_page    404 /404.html;
    error_page    500 502 503 504 /50x.html;
    location = /404.html {
        root    /usr/share/nginx/html/404.html;
    }
    location = /50x.html {
        root    /usr/share/nginx/html/50x.html;
    }
    location / {
        root     /usr/share/nginx/ocb.finance/test/;
        index    index.html;
    }
    location /static/ {
        return    302 https://test-ocb-finance.oss-accelerate.aliyuncs.com$request_uri;
    }
}
```

config file `nginx-deploy/conf.d/test-nuc.ocb.finance.conf` for site https://test-nuc.ocb.finance/

``` nginx
server {
    listen         80 http2;
    server_name    ~^test-nuc.ocb.finance$;
    include        /etc/nginx/conf.d/https/https.conf;
    if ($request_method !~ ^(GET)$ ) {
        return 405;
    }
    error_page    404 /404.html;
    error_page    500 502 503 504 /50x.html;
    location = /404.html {
        root    /usr/share/nginx/html/404.html;
    }
    location = /50x.html {
        root    /usr/share/nginx/html/50x.html;
    }
    location / {
        root     /usr/share/nginx/ocb.finance/test/;
        index    index.html;
    }
    location /static/ {
        return    302 https://test-nuc-ocb-finance.oss-accelerate.aliyuncs.com$request_uri;
    }
}
```

##### HTTP Content

Build and upload results to server.

``` sh
git checkout master && git pull && yarn install && yarn build

# content in directory `build/` except directory `build/static`
# => directory `nginx-deploy/ocb.finance/test/`

# directory `build/static/`
# => Aliyun OSS bucket `test-ocb-finance`
```

``` sh
git checkout nuc-branch && git pull && yarn install && yarn build

# content in directory `build/` except directory `build/static`
# => upload to directory `nginx-deploy/ocb.finance/test-nuc/`

# directory `build/static/`
# => Aliyun OSS bucket `test-nuc-ocb-finance`
```

#### Production Environment

##### NGINX Configuration

config file `nginx-deploy/conf.d/ocb.finance.conf` for site https://ocb.finance/

``` nginx
server {
    listen         80 http2;
    server_name    ~^ocb.finance$;
    include        /etc/nginx/conf.d/https/https.conf;
    if ($request_method !~ ^(GET)$ ) {
        return 405;
    }
    error_page    404 /404.html;
    error_page    500 502 503 504 /50x.html;
    location = /404.html {
        root    /usr/share/nginx/html/404.html;
    }
    location = /50x.html {
        root    /usr/share/nginx/html/50x.html;
    }
    location / {
        root     /usr/share/nginx/ocb.finance/test/;
        index    index.html;
    }
    location /static/ {
        return    302 https://ocb-finance.oss-accelerate.aliyuncs.com$request_uri;
    }
}
```

config file `nginx-deploy/conf.d/nuc.ocb.finance.conf` for site https://nuc.ocb.finance/

``` nginx
server {
    listen         80 http2;
    server_name    ~^nuc.ocb.finance$;
    include        /etc/nginx/conf.d/https/https.conf;
    if ($request_method !~ ^(GET)$ ) {
        return 405;
    }
    error_page    404 /404.html;
    error_page    500 502 503 504 /50x.html;
    location = /404.html {
        root    /usr/share/nginx/html/404.html;
    }
    location = /50x.html {
        root    /usr/share/nginx/html/50x.html;
    }
    location / {
        root     /usr/share/nginx/ocb.finance/test/;
        index    index.html;
    }
    location /static/ {
        return    302 https://nuc-ocb-finance.oss-accelerate.aliyuncs.com$request_uri;
    }
}
```

##### HTTP Content

Build locally and upload results to server.

``` sh
# macOS / Linux
git checkout master && git pull && yarn install && yarn build-production
# Windows
git checkout master && git pull && yarn install && yarn build-production-windows

# content in directory `build/` except directory `build/static`
# => upload to directory `nginx-deploy/ocb.finance/@/`

# directory `build/static/`
# => Aliyun OSS bucket `ocb-finance`
```

``` sh
# macOS / Linux
git checkout nuc-branch && git pull && yarn install && yarn build-production
# Windows
git checkout nuc-branch && git pull && yarn install && yarn build-production-windows

# content in directory `build/` except directory `build/static`
# => upload to directory `nginx-deploy/ocb.finance/nuc/`

# directory `build/static/`
# => Aliyun OSS bucket `nuc-ocb-finance`
```

### Develop

Execute following commands before making any change.

``` sh
git config --local core.autocrlf false
git config --local core.safecrlf true
git config --local core.eol lf
```

### Others

- All code files are edited by [Visual Studio Code](https://code.visualstudio.com/).
- All ".md" files are edited by [Typora](http://typora.io/).
- The style of all ".md" files is [Github Flavored Markdown](https://guides.github.com/features/mastering-markdown/#GitHub-flavored-markdown).
- There is a LF (Linux) at the end of each line.
