const express = require('express')
const app = express()

const PORT = '4500'

app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS')
    next()
})

app.get('/api/v1/products', function (req, res) {
    const { name, id, value, sort, page } = req.query

    res.type('json')
    res.header('Content-Type', 'text/html; charset=utf-8')

    let data = [
        { id: 1, name: 'AAA', value: 1.02 },
        { id: 2, name: 'AAB', value: 1.5 },
        { id: 3, name: 'AAC', value: 2 },
        { id: 4, name: 'AAD', value: 2 },
        { id: 5, name: 'AAE', value: 1.9 },
        { id: 6, name: 'AAF', value: 1.53 },
        { id: 7, name: 'AAG', value: 1.6 },
        { id: 8, name: 'AAH', value: 1.46 },
        { id: 9, name: 'AAI', value: 1.01 },
        { id: 10, name: 'AAJ', value: 1.08 }
    ]

    if (name) {
        data = data.filter((record) => record.name.toUpperCase().includes(name.toUpperCase()))
    }

    if (id) {
        data = data.filter((record) => record.id === Number(id))
    }

    if (value) {
        data = data.filter((record) => String(record.value).toUpperCase().includes(value.toUpperCase()))
    }

    if (sort) {
        switch (sort.toLowerCase()) {
            case 'id':
                data = data.sort((a, b) => a.id - b.id)
                break
            case '-id':
                data = data.sort((a, b) => b.id - a.id)
                break
            case 'name':
                data = data.sort((a, b) => {
                    const nameA = a.name
                    const nameB = b.name
                    if (nameA < nameB) return -1
                    if (nameA > nameB) return 1
                    return 0
                })
                break
            case '-name':
                data = data.sort((a, b) => {
                    const nameA = a.name
                    const nameB = b.name
                    if (nameA > nameB) return -1
                    if (nameA < nameB) return 1
                    return 0
                })
                break
            case 'value':
                data = data.sort((a, b) => a.value - b.value)
                break
            case '-value':
                data = data.sort((a, b) => b.value - a.value)
                break
            default:
                break
        }
    }

    const totalPages = data.length
    let pageNumber = Number.parseInt(page) || 1
    pageNumber = pageNumber > 0 ? pageNumber : 1
    data = data.slice((pageNumber - 1) * 3, pageNumber * 3)

    const answer = {
        page: pageNumber,
        total: totalPages,
        data: data
    }
    res.send(answer)
})

app.listen(PORT, () => {
    console.log(`Server start on port ${PORT}`)
})
