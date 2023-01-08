const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

export const formatMessageDate = (date) => {
    const newDate = new Date(
        date.seconds * 1000 + date.nanoseconds / 1000000
      )
    const formatedDate = `${weekday[newDate.getDay()]}, ${newDate.getHours()}:${newDate.getMinutes()}`
    return formatedDate
}