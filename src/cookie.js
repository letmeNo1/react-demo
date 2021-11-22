import cookie from 'react-cookies'

// 获取当前用户cookie
export const loginUser = () => {
  return cookie.load('userName')
}

export const loginUserId = () => {
  return cookie.load('userId')
}

export const avatarUrl = () => {
  return cookie.load('avatarUrl')
}

// 用户登录，保存cookie
export const onLogin = ((user,password,id,avatarUrl) => {
  cookie.save('password', password, { path: '/' })
  cookie.save('userName', user, { path: '/' })
  cookie.save('userId', id, { path: '/' })
  cookie.save('avatarUrl', avatarUrl, { path: '/' })


  // window.location.href = '/'
})

// 用户登出，删除cookie
export const logout = () => {
  cookie.remove('userName', { path: '/' })
  cookie.remove('password', { path: '/' })
  cookie.remove('userId', { path: '/' })
  cookie.remove('avatarUrl', { path: '/' })


}
