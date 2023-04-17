(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{424:function(s,t,a){"use strict";a.r(t);var n=a(20),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"多租户与权限：vhost"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多租户与权限：vhost"}},[s._v("#")]),s._v(" 多租户与权限：vhost")]),s._v(" "),a("p",[s._v("每一个 RabbitMQ 服务器都能创建  "),a("strong",[s._v("虚拟的消息服务器")]),s._v("，称之为 "),a("strong",[s._v("虚拟主机（virtual host）")]),s._v("，简称 "),a("strong",[s._v("vhost")]),s._v("。")]),s._v(" "),a("p",[s._v("vhost 本质上是一个独立的小型 RabbitMQ 服务器，拥有自己独立的队列、交换器、绑定关系等，并且 "),a("strong",[s._v("拥有自己独立的权限")]),s._v("。")]),s._v(" "),a("p",[s._v("vhost 可避免队列和交换器等命名冲突，"),a("strong",[s._v("vhost 之间是绝对隔离的")]),s._v("，无法将 vhost1 中的交换器与 vhost2 中的队列进行绑定，这样的机制既保证了安全性，又确保可移植性。")]),s._v(" "),a("p",[s._v("如果使用的 RabbitMQ 达到一定规模的时候，"),a("strong",[s._v("建议用户对业务功能、场景进行归类区分，并分配独立的 vhost")])]),s._v(" "),a("p",[s._v("vhost 是 AMQP 概念的基础，客户端在联机的时候 "),a("strong",[s._v("必须指定一个 vhost")]),s._v("。RabbitMQ 默认创建的  vhost 为 "),a("code",[s._v("/")]),s._v("，使用默认的用户名  guest 和密码 guest 就可以访问它。但是为了安装和方便，建议重新建立一个新的用户来访问它。")]),s._v(" "),a("p",[s._v("下面对 rabbitmqctl 进行讲解")]),s._v(" "),a("h2",{attrs:{id:"创建-vhost：add-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建-vhost：add-host"}},[s._v("#")]),s._v(" 创建 vhost：add_host")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl add_host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("vhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\nvhost: 就是 vhost 名称\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("实践练习")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl add_vhost vhost1")]),s._v("\nCreating vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vhost1"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"vhost-查看：list-vhosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vhost-查看：list-vhosts"}},[s._v("#")]),s._v(" vhost 查看：list_vhosts")]),s._v(" "),a("p",[s._v("查看 vhost 的相关信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl list_vhosts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("vhostinfoitem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nvhostinfoitem 参数：\n\tname： vhost 名称\n\ttracing：表示是否使用了 RabbitMQ 的 trace 功能。trace 功能 RabbitMQ 扩展中讲解\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("实践练习")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts name tracing")]),s._v("\nListing vhosts\nvhost1\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n/\t    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开 trace 功能")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl trace_on")]),s._v("\nStarting tracing "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts name tracing")]),s._v("\nListing vhosts\nvhost1\t"),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),s._v("\n/\t    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以看到这里变成了 true")]),s._v("\n\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br")])]),a("h2",{attrs:{id:"删除-vhost：delete-host"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除-vhost：delete-host"}},[s._v("#")]),s._v(" 删除 vhost：delete_host")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl delete_host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("vhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("删除一个 vhost ，同时也会删除下面的队列、交换器、绑定关系、用户权限、参数和策略等信息。")]),s._v(" "),a("p",[s._v("实践练习")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl delete_vhost vhost1")]),s._v("\nDeleting vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vhost1"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts")]),s._v("\nListing vhosts\n/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"权限授予：set-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#权限授予：set-permissions"}},[s._v("#")]),s._v(" 权限授予：set_permissions")]),s._v(" "),a("p",[s._v("AMQP 协议中并没有指定权限在 vhost 级别还是在服务器级别实现，由具体的应用自定义。")]),s._v(" "),a("p",[s._v("在 RabbitMQ 中，权限以 vhost 为单位。在 "),a("strong",[s._v("创建一个用户时")]),s._v("，用户通常会被 "),a("strong",[s._v("指派给至少一个 vhost")]),s._v("，意味着该用户只能访问被指派的 vhost 内的资源。")]),s._v(" "),a("p",[s._v("授予权限命令为")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl set_permissions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p vhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("write"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("read"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n参数含义：\n "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-p vhost"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("：给哪一个 vhost 授权用户访问权限\n user：给哪一个用户指定权限\n conf： 用于匹配用户在哪些资源上拥有可配置权限的正则表达式；指：队列和交换器的创建及删除之类的操作\n write：用于匹配用户在哪些资源上拥有可写权限的正则表达式；指：发布消息\n read： 用于匹配用户在哪些资源上拥有可读权限的正则表达式；指：与消息有关的操作，包括读取消息及清空整个队列等\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("下表展示了不同 AMQP 命令的列表和对应的权限")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("AMQP 命令")]),s._v(" "),a("th",[s._v("可配置")]),s._v(" "),a("th",[s._v("可写")]),s._v(" "),a("th",[s._v("可读")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[a("code",[s._v("Exchange.Declare")])]),s._v(" "),a("td",[s._v("exchange")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Exchange.Declare(with AE)")])]),s._v(" "),a("td",[s._v("exchange")]),s._v(" "),a("td",[s._v("exchange(AE)")]),s._v(" "),a("td",[s._v("exchange")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Exchange.Delete")])]),s._v(" "),a("td",[s._v("exchange")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Declare")])]),s._v(" "),a("td",[s._v("queue")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Declare(with DLX)")])]),s._v(" "),a("td",[s._v("queue")]),s._v(" "),a("td",[s._v("exchange(DLX)")]),s._v(" "),a("td",[s._v("queue")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Delete")])]),s._v(" "),a("td",[s._v("queue")]),s._v(" "),a("td"),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Exchange.Bind")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("exchange(destination)")]),s._v(" "),a("td",[s._v("exchange(source)")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Exchange.Unbind")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("exchange(destination)")]),s._v(" "),a("td",[s._v("exchange(source)")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Bind")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("queue")]),s._v(" "),a("td",[s._v("exchange")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Unbind")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("queue")]),s._v(" "),a("td",[s._v("exchange")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Basic.Publish")])]),s._v(" "),a("td"),s._v(" "),a("td",[s._v("exchange")]),s._v(" "),a("td")]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Basic.Get")])]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("queue")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Basic.Consume")])]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("queue")])]),s._v(" "),a("tr",[a("td",[a("code",[s._v("Queue.Purge")])]),s._v(" "),a("td"),s._v(" "),a("td"),s._v(" "),a("td",[s._v("queue")])])])]),s._v(" "),a("p",[s._v("实践练习：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例 1. 授予 admin 用户可访问虚拟主机 vhost1，并且在所有资源上都具备可配置、可写、可读的权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# \t 前提是 vhost 要存在")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# rabbitmqctl set_permissions -p vhost1 admin ".*" ".*" ".*"')]),s._v("\nSetting permissions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vhost1"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 示例 2. 授予 admin 可访问虚拟主机 vhost2，在 queue 开头的资源上具备可配置权限，并在所有资源上拥有可写、可读权限")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# rabbitmqctl set_permissions -p vhost2 admin "^queue.*" ".*" ".*"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"vhost-权限查看：list-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vhost-权限查看：list-permissions"}},[s._v("#")]),s._v(" vhost 权限查看：list_permissions")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl list_permissions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p vhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查看虚拟主机上的权限")]),s._v(" "),a("p",[s._v("实践练习：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_permissions -p vhost1")]),s._v("\nListing permissions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vhost1"')]),s._v("\nadmin\t.*\t.*\t.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"用户权限查看：list-user-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户权限查看：list-user-permissions"}},[s._v("#")]),s._v(" 用户权限查看：list_user_permissions")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl list_user_permissions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("显示用户权限")]),s._v(" "),a("p",[s._v("实践练习：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_user_permissions admin")]),s._v("\nListing permissions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v("\nvhost1\t.*\t.*\t.*\n/\t\t.*\t.*\t.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"清除权限：clear-permissions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#清除权限：clear-permissions"}},[s._v("#")]),s._v(" 清除权限：clear_permissions")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl clear_permissions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-p vhost"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("实践练习")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl clear_permissions -p vhost1 admin")]),s._v("\nClearing permissions "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"admin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" vhost "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vhost1"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"rabbitmqctl-标准语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmqctl-标准语法"}},[s._v("#")]),s._v(" rabbitmqctl 标准语法")]),s._v(" "),a("p",[s._v("上述讲到的管理功能都是通过 rabbitmqctl 来操作的。它通过 "),a("strong",[s._v("连接各个 RabbitMQ 节点来执行所有操作")]),s._v("。")]),s._v(" "),a("p",[s._v("如果有节点没有运行，将显示诊断信息：不能到达或因不匹配的 Erlang cookie（后续章节：RabbitMQ 运维中讲解）而拒绝连接。")]),s._v(" "),a("p",[s._v("标准语法如下：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("rabbitmqctl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-n node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-t timeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-q"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("command"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("command options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n参数说明：\n\t-n node：默认节点是「rabbit@hostname」, "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" 是主机名称。\n\t\t     在一个名为「node.hidden.com」的主机上，RabbitMQ 节点的名称通常是 rabbit@node "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("除非是 RABBITMQ_NODENAME 参数在启动时被设置了自定义的值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\t\t     在 linux 指令的 "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hostname")]),s._v(" -s"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 下，通常输出的就是 @ 后面的信息\n\t-t timeout：操作超时时间，单位是秒。只适用于 list_xxx 类型的命令，默认无超时\n\t-q：启用 quiet 模式，可以屏蔽一些消息的输出。默认不开启\n\t\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("​")]),s._v(" "),a("p",[s._v("实践练习：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 演示 -q 和 -t timeout 的效果")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts")]),s._v("\nListing vhosts\nvhost1\n/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts -q")]),s._v("\nvhost1\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用 -q 看到这里少了一列 vhosts 的输出")]),s._v("\n/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts -q -t 1")]),s._v("\nvhost1\n/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@study ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# rabbitmqctl list_vhosts -q -t 0")]),s._v("\nError: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("timeout,0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 这里可以看到超时信息了")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);