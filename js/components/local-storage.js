import {readFile, writeFile} from 'fs/promises'

// Defining a Data Structure 
export const monthData = [
    {name: 'January', data: []},
    {name: 'February', data: []},
    {name: 'March', data: []},
    {name: 'April', data: []},
    {name: 'May', data: []},
    {name: 'June', data: []},
    {name: 'July', data: []},
    {name: 'August', data: []},
    {name: 'September', data: []},
    {name: 'October', data: []},
    {name: 'November', data: []},
    {name: 'December', data: []},
]

// Savings to a local storage 
const saveMonthData = () => {
    localStorage.setItem('monthData', JSON.stringify(monthData))
}

// Retrieve Data from the local storage
const retrieveMonthData = () => {
    const storedData = localStorage.getItem('monthData')
    if (storedData) {
        monthData = JSON.parse(storedData)
    }
}
// not sure if i am going to use this one yet 
const createJsonfile = () => {
    let monthDateStr = JSON.stringify(monthData)
    writeFile('test.json', monthDateStr)
}