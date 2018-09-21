var host = 'https://876379022.supergrass.club'
// var host = 'https://ksmqtv1c.qcloud.la'

export default {
  service: {
      host,
      loginUrl: `${host}/weapp/login`,
      getResUrl: `${host}/weapp/restaurant`,
      getDetail: `${host}/weapp/getres`,
      addUrl: `${host}/weapp/addres`,
      removeUrl: `${host}/weapp/removelike`,
      getfavUrl: `${host}/weapp/getlike`,
      getArticle: `${host}/weapp/tandian`,
      addRecommend: `${host}/weapp/addrecommend`,
      addComment: `${host}/weapp/addcomment`,
      getComment: `${host}/weapp/getcomment`,
      getAllComment: `${host}/weapp/getallcomment`,
      addLove: `${host}/weapp/addlove`,
      removeLove: `${host}/weapp/removelove`,
      getLove: `${host}/weapp/getlove`,
      getLoveNum: `${host}/weapp/getlovenum`,
      getAllLove: `${host}/weapp/getalllove`,
      getLotteries: `${host}/weapp/getlotteries`,
      getLottery: `${host}/weapp/getlottery`,
      attendIn: `${host}/weapp/attendin`,
      getCjusers: `${host}/weapp/getcjusers`,
      getAttendin: `${host}/weapp/getattendin`,
      getTotalnum: `${host}/weapp/gettotalnum`,
      getUseractive: `${host}/weapp/getuseractive`
      // getTopic: `${host}/weapp/gettopic`,
      // getTopicDetail: `${host}/weapp/gettopicdetail`,
      // getReply: `${host}/weapp/getreply`,
      // addReply: `${host}/weapp/addreply`,
      // getAllReply: `${host}/weapp/getallreply`
  }
}
