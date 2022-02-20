在基于demo2的基础上有以下两处改动：
（1）axios功能里，默认或者没有返回任何值是，不再显示“”；
（2）comment功能里，使用pubsub.js进行转值；


相关笔记：
组件间通信

方式一：通过props传递
1）共同的数据放在父组件上，特有数据放在自己组件内部（state）；
2）通过props可以传递一般数据和函数数据，只能一层一层传递；
3）一般数据-->父组件传递数据给子组件-->子组件声明并读取数据
4）函数数据-->子组件传递数据给父组件-->子组件调用函数；

方式二：【推荐】使用消息订阅（subscribe）-发布（publish）机制
1）工具库：PubSuJS
2）下载：npm install --save pubsub-js
3）使用：
import PubSub from "pubsub-js";
PubSub.subscribe('msgkey', function(msg, params) => { })//订阅消息，一般放在组件加载之后componentDidMount(){}里
PubSub.publish('delComment', params);//发布消息