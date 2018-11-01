function server(app) {
  app.get('/getNews', function(req, res) {
    if(req.query.type === 'all') {
      res.json([{
        id: '1',
        title: '习近平主持政治局会议 分析研究当前经济形势和经济工作',
        images: ['http://192.168.201.111:8082/static/img/news1.jpg'],
        author: '央视网新闻'
      },
      {
        id: '2',
        title: '习近平主持政治局会议 分析研究当前经济形势和经济工作',
        images: ['http://192.168.201.111:8082/static/img/news2.gif'],
        author: '央视网新闻'
      },
      {
        id: '3',
        title: '交通部公布坠江公交出水“正面照”，车体扭曲变形，86小时救援全过程回顾',
        images: ['http://192.168.201.111:8082/static/img/news3.jpg'],
        author: '环球网'
      },
      {
        id: '4',
        title: '支付宝到账语音小姐姐亮相福州 现场市民争相排队定制语音到账',
        images: ['http://192.168.201.111:8082/static/img/news4.jpg'],
        author: '光明视野'
      },
      {
        id: '5',
        title: '男子一夜暴富，50天把500万挥霍一空，花钱方式让警察都佩服',
        images: ['http://192.168.201.111:8082/static/img/news5.jpg'],
        author: '看疯狂视界'
      },
      {
        id: '6',
        title: '七旬老人翻出六十年前存单，存有“巨款”？银行查证后：有效',
        images: ['http://192.168.201.111:8082/static/img/news6.jpg'],
        author: '央视网新闻'
      },
      {
        id: '7',
        title: '李咏等五大名嘴因癌离世，癌症的真相！为了你和家人都值得一看',
        images: ['http://192.168.201.111:8082/static/img/news7.jpg'],
        author: '四川旅游新闻网'
      },
      {
        id: '8',
        title: '男女有如下同居行为属违法，当事人需承担刑事责任！',
        images: ['http://192.168.201.111:8082/static/img/news8.jpg'],
        author: '小游观社会'
      },
      {
        id: '9',
        title: '李咏去世后哈文朋友圈首次发文：我和女儿会坚强，需要时间',
        images: ['http://192.168.201.111:8082/static/img/news9.jpg'],
        author: '秃顶少女裘千尺'
      },
      {
        id: '10',
        title: '关之琳年轻的时候有多美，穿衣的动作竟然成为经典！',
        images: ['http://192.168.201.111:8082/static/img/news10.jpg'],
        author: '新评风'
      },
      {
        id: '11',
        title: '哈文晒李咏生前轮椅照：虽然疾病缠身但是李咏和妻子依然坚强乐观',
        images: ['http://192.168.201.111:8082/static/img/news11.jpg'],
        author: '随心所LL'
      },
      {
        id: '12',
        title: '百年前的海难遗产！泰坦尼克号沉没推动制定《海上人命安全公约》',
        images: ['http://192.168.201.111:8082/static/img/news12.jpg'],
        author: '随心所LL'
      }
    ]);
    }
    if(req.query.type === 'hot') {
      res.json([
      {
        id: '5',
        title: '男子一夜暴富，50天把500万挥霍一空，花钱方式让警察都佩服',
        images: ['http://192.168.201.111:8082/static/img/news5.jpg'],
        author: '看疯狂视界'
      },
      {
        id: '6',
        title: '七旬老人翻出六十年前存单，存有“巨款”？银行查证后：有效',
        images: ['http://192.168.201.111:8082/static/img/news6.jpg'],
        author: '央视网新闻'
      },
      {
        id: '7',
        title: '李咏等五大名嘴因癌离世，癌症的真相！为了你和家人都值得一看',
        images: ['http://192.168.201.111:8082/static/img/news7.jpg'],
        author: '四川旅游新闻网'
      },
      {
        id: '8',
        title: '男女有如下同居行为属违法，当事人需承担刑事责任！',
        images: ['http://192.168.201.111:8082/static/img/news8.jpg'],
        author: '小游观社会'
      },
      {
        id: '9',
        title: '李咏去世后哈文朋友圈首次发文：我和女儿会坚强，需要时间',
        images: ['http://192.168.201.111:8082/static/img/news9.jpg'],
        author: '秃顶少女裘千尺'
      },
      {
        id: '10',
        title: '关之琳年轻的时候有多美，穿衣的动作竟然成为经典！',
        images: ['http://192.168.201.111:8082/static/img/news10.jpg'],
        author: '新评风'
      },
      {
        id: '11',
        title: '哈文晒李咏生前轮椅照：虽然疾病缠身但是李咏和妻子依然坚强乐观',
        images: ['http://192.168.201.111:8082/static/img/news11.jpg'],
        author: '随心所LL'
      },
      {
        id: '12',
        title: '百年前的海难遗产！泰坦尼克号沉没推动制定《海上人命安全公约》',
        images: ['http://192.168.201.111:8082/static/img/news12.jpg'],
        author: '随心所LL'
      }
    ]);
    }
    if(req.query.type === 'city') {
      res.json([
      {
        id: '4',
        title: '支付宝到账语音小姐姐亮相福州 现场市民争相排队定制语音到账',
        images: ['http://192.168.201.111:8082/static/img/news4.jpg'],
        author: '光明视野'
      },
      {
        id: '5',
        title: '男子一夜暴富，50天把500万挥霍一空，花钱方式让警察都佩服',
        images: ['http://192.168.201.111:8082/static/img/news5.jpg'],
        author: '看疯狂视界'
      },
      {
        id: '6',
        title: '七旬老人翻出六十年前存单，存有“巨款”？银行查证后：有效',
        images: ['http://192.168.201.111:8082/static/img/news6.jpg'],
        author: '央视网新闻'
      },
      {
        id: '7',
        title: '李咏等五大名嘴因癌离世，癌症的真相！为了你和家人都值得一看',
        images: ['http://192.168.201.111:8082/static/img/news7.jpg'],
        author: '四川旅游新闻网'
      },
      {
        id: '8',
        title: '男女有如下同居行为属违法，当事人需承担刑事责任！',
        images: ['http://192.168.201.111:8082/static/img/news8.jpg'],
        author: '小游观社会'
      }
    ]);
    }
    if(req.query.type === 'entertainment') {
      res.json([
      {
        id: '9',
        title: '李咏去世后哈文朋友圈首次发文：我和女儿会坚强，需要时间',
        images: ['http://192.168.201.111:8082/static/img/news9.jpg'],
        author: '秃顶少女裘千尺'
      },
      {
        id: '10',
        title: '关之琳年轻的时候有多美，穿衣的动作竟然成为经典！',
        images: ['http://192.168.201.111:8082/static/img/news10.jpg'],
        author: '新评风'
      },
      {
        id: '11',
        title: '哈文晒李咏生前轮椅照：虽然疾病缠身但是李咏和妻子依然坚强乐观',
        images: ['http://192.168.201.111:8082/static/img/news11.jpg'],
        author: '随心所LL'
      }
    ]);
    }
  })
}

module.exports = server