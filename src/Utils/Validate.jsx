export const validate = (email,password)=>{
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passPattern = /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password)
  console.log(emailPattern)

  if(!emailPattern) return"Please enter a valid email"
  if(!passPattern) return"Invalid Password "

 return null
}