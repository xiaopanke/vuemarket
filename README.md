# kemarket

> a market

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 启动mogodb

在一个终端里输入：
```
sudo mongod --config /usr/local/etc/mongod.conf
```
在别外一个终端里输入：
```
mongod
```
```
mongod
```

show 终端：
```
show dbs
```
切换到admin数据库：
```
use admin
```
创建账号：
```
db.createUser({user:'admin',pwd:'admin',roles:['root']})
```
认证：
```
db.auth('admin','admin')
```
返回1表示认证成功


切换到test数据库：
```
use test
```
给test创建账号：
```
db.createUser({user:'root',pwd:'123456',roles:[{role:'dbOwner',db:'test'}]})
```
roles里db  表示他只能访问test这个数据库
