const url = 'http://worldtimeapi.org/api/America/New_York'

async function getDate() {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

getData()