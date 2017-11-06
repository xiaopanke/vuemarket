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

创建集合
```
db.createCollection('user')
```

创建集合并插入数据
```
db.users.insert({id:123,name:'hello'})
```

显示集合
```
show collections
```

删除数据库
```
db.dropDatabase()
```

删除集合
```
db.user.drop()
```
查看数据
```
db.user.find()
db.user.findOne()
db.user.find().pretty()
```
pretty() 格式化


更改数据
```
db.user.update({userId:102},{$set:{userAge:17}})
```
前面是查询，后面是查询到的数据更新掉

查询数据
```
db.user.find({userId:102})
```


查询年龄大于20的
```
db.user.find({userAge:{$gt:20}})
```

$gt：大于   $lt:  小于   $eq:等于   $gte:大于等于


查询数据
```
db.user.remove({userId:102})
```
