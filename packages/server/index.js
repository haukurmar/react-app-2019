import path from 'path'
import express from 'express'
import favicon from 'serve-favicon'

const app = express()

app.use(favicon(path.join(__dirname, './', 'favicon.ico')))
app.use(express.static('public'))

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../../', 'public', 'index.html'))
})

const port = process.env.PORT || 1337

app.listen(port, () => {
	console.log('Server running on port:%d', port)
})
