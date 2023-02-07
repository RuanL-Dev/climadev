export default async function handle(req, res) {
  console.log(req.url)
  const url = decodeURIComponent(req.url).replace('/api/openweathermap?url=', '')
  console.log(`https://api.openweathermap.org/${url}&appid=${process.env.OWM_KEY}`)
  const response = await fetch(`https://api.openweathermap.org/${url}&appid=${process.env.OWM_KEY}`)
  const json = await response.json()
  res.status(response.status).json(json)
}
