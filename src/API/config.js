//父级URL
const fatherURl = 'http://127.0.0.1:8080'

// 用户登入URL
//使用用户名登入
export const userLogin_AccountURL = fatherURl+'/login/username'
// 使用邮箱登入
export const userLogin_EmailURL = fatherURl+'/login/email'

// 注册
export const userRegisterURL = fatherURl+'/enroll/user'
// 检查注册信息是否重复
export const userCheckUsernameURL = fatherURl+'/repeat/'