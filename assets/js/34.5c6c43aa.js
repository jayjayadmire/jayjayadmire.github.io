(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{423:function(t,v,_){"use strict";_.r(v);var a=_(20),i=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"消息传输保障"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#消息传输保障"}},[t._v("#")]),t._v(" 消息传输保障")]),t._v(" "),_("p",[_("strong",[t._v("消息可靠传输")]),t._v(" 一般是业务系统接入消息中间件首要考虑的问题，一般消息中间件的消息传输保障分为三个层级：")]),t._v(" "),_("ul",[_("li",[_("code",[t._v("At most once")]),t._v("：最多一次。消息可能会丢失，但绝不会重复传输")]),t._v(" "),_("li",[_("code",[t._v("At least once")]),t._v("：最少一次。消息绝不会丢失，但可能重复传输")]),t._v(" "),_("li",[_("code",[t._v("Exactly once")]),t._v("：恰好一次。每条消息肯定会被传输一次且仅传输一次。")])]),t._v(" "),_("p",[_("strong",[t._v("RabbitMQ 支持 「最多一次」和「最少一次」")]),t._v("，其中最少一次投递实现需要考虑以下几个方面：")]),t._v(" "),_("ul",[_("li",[t._v("消息生产者需要开启事物机制或 publisher confirm 机制。"),_("strong",[t._v("确保消息传输到 RabbitMQ 中")])]),t._v(" "),_("li",[t._v("消息生产者需要配合使用 mandatory 参数或则备份交换器来 "),_("strong",[t._v("确保消息")]),t._v(" 能够从交换器路 "),_("strong",[t._v("由到队列中")]),t._v("，进而能够保存而不被丢弃")]),t._v(" "),_("li",[t._v("消息和队列都需要持久化处理，确保消息不会在 RabbitMQ 遇到异常情况时丢失。")]),t._v(" "),_("li",[t._v("消费者在消费小时时，需要将 autoAck 设置为 fasle，手动进行 ack")])]),t._v(" "),_("p",[t._v("最多一次，无需考虑。")]),t._v(" "),_("p",[t._v("恰好一次是 RabbitMQ 目前无法保障的。")]),t._v(" "),_("p",[t._v("考虑一种情况，来说明为什么无法保障：消费者在 "),_("strong",[t._v("消费完一条消息后")]),t._v("，向 RabbitMQ "),_("strong",[t._v("发送确认 Basic.Ack 命令")]),t._v("，此时某种原因（网络断开等）"),_("strong",[t._v("导致 RabbitMQ 并没有收到这个确认命令")]),t._v("。此时 RabbitMQ 不会将此条消息标记删除。在 "),_("strong",[t._v("重新建立连接后，还会消费到这一条消息")]),t._v("，这就造成了 "),_("strong",[t._v("重复消费")]),t._v("。")]),t._v(" "),_("p",[t._v("再来看一种情况：生产者使用 publisher confirm 机制，发送一条消息等待 RabbitMQ 返回确认通知，此时网络断开，生产者捕获到异常情况，为了确保消息可靠性选择重新发送，这样 RabbitMQ 中就有两条同样的消息。消费时就相当于重复消费。")]),t._v(" "),_("p",[t._v("总结起来，发生在业务系统与 RabbitMQ 交互网络连接方面。所以目前大多数主流的消息中间件都没有消息去重机制，来保障「恰好一次」。去重一般是在客户端实现，比如引入 GUID（Globally Unique Identifier）概念。")])])}),[],!1,null,null,null);v.default=i.exports}}]);