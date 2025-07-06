const Notification = ({ message }) => {
  
  if (message === null) {
    return null
  }

  return <div className="cssnotify">{message}</div>
  
}
export default Notification