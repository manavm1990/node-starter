const hostNameResolver = () => {
 if (process.platform === 'win32') {
  return '127.0.0.1'
 } else {
  return 'localhost'
 }
}

export default hostNameResolver;