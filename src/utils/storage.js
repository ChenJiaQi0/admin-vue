const TokenKey = 'accessToken'

// 获取token
export function getToken() {
  return localStorage.getItem(TokenKey)
}

// 设置token
export function setToken(token) {
  localStorage.setItem(TokenKey, token)
}

// 清除token
export function removeToken() {
  localStorage.removeItem(TokenKey)
}
<<<<<<< HEAD

const tabKey = 'tabList'

// 获取tabList
export function getTabList() {
  return JSON.parse(localStorage.getItem(tabKey))
}

// 设置tabList
export function setTabList(tabList) {
  localStorage.setItem(tabKey, JSON.stringify(tabList))
}

// 清除tabList
export function removeTabList() {
  localStorage.removeItem(tabKey)
}
=======
>>>>>>> 42420ff153ba7e7523fbb474a6a364a30e3c9369
