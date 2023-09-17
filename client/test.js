const today = new Date()
const formattedDate = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeZone: 'Asia/Jakarta' }).format(today)

console.log(formattedDate)