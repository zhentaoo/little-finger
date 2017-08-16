## Little-Finger 网站－自动部署工具

使用Node child_process执行系统命令

### Usage
1. 将该工具部署在服务器上
2. 给希望自动部署的项目，配置webhook
3. 当项目有新的commit时，webhook会请求一次该工具提供的接口
4. 该工具执行事先定义好的命令，进行部署工作

### 设计思路
1. 要知道github（gitlab）的repo是可以设置**webhook**的
2. 如果push了新代码，则会触发repo的webhook，请求自己事先写好的接口
3. 写一个server，对外提供api，如果有来自github的请求，则git pull对应repo的最新代码

### Feature
1. 定义发布的多个阶段
2. 一套完整的UI
3. 完善的权限系统
4. 回滚策略，构建失败时的补偿策略

### Demo
看一下这个node server 稳定运行32天，仅仅占用不到40M的内存！！！
<img src="/img/auto-deploy.png" width = "650" height = "510" align=center />
