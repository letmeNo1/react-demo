import http from './index'



function getDecodeKeywordInfo(keyword){
  return new Promise((resolve, reject) => {
    http("get",'/keyword/displayFull?keywordId='+ keyword).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  getDecodeKeywordInfo
}

function updateDecodeKeywordAnswer(answerId,userId,content){
  return new Promise((resolve, reject) => {
    http("put",'/answer/modify',{
      "answerId": answerId,
      "userId": userId,
      "content": content
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  updateDecodeKeywordAnswer
}


function deleteKeywordAnswer(answerId,userId){
  return new Promise((resolve, reject) => {
    http("delete",'/answer/delete',{
      data:{
        "userId": userId,
        "answerId": answerId
      }
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  })
}

export {
  deleteKeywordAnswer
}

function findUserInfo(userId){
  return new Promise((resolve, reject) => {
    http("get",'/user/find?id='+userId).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 

}

export {
  findUserInfo
}


function addDecodeKeywordAnswer(keywordId,userId,content){
  return new Promise((resolve, reject) => {
    http("post",'/answer/add',{
      "keywordId": keywordId,
      "userId": userId,
      "content": content
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  addDecodeKeywordAnswer
}

function KeywordCreate(keyword,userId){
  return new Promise((resolve, reject) => {
    http("post",'/keyword/add',{
      "keyword": keyword,
      "userId": userId,
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  KeywordCreate
}

function Login(userName,passWord){
  return new Promise((resolve, reject) => {
    http("post",'/user/login',{
      "userName": userName,
      "passWord": passWord,
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  Login
}

function addComment(answerId,userId,content){
  return new Promise((resolve, reject) => {
    http("post",'/answer/addComment',{
      "answerId": answerId,
      "userId": userId,
      "content": content
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  addComment
}

function deleteComment(commentId,userId){
   return new Promise((resolve, reject) => {
    http("delete",'/answer/deleteComment',{
      data:{
        "commentId": commentId,
        "userId": userId
      }
    }).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  deleteComment
}

function showComments(answerId){
  return new Promise((resolve, reject) => {
    http("get",'/answer/showComments?answerId='+answerId).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  showComments
}

function findUser(userId){
  return new Promise((resolve, reject) => {
    http("get",'/user/find?id='+userId).then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  findUser
}