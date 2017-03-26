import add from './mod'

const defList = [1, 2, 3]

const mixList = [...defList, 6]

const defObj = {
    a: 1,
    b: 'str'
}

const mixObj = {
    ...defObj,
    c: true,
    e: 19919
}

document.getElementById('root').innerHTML = defList.join(',')

console.log(add(2,3))

console.log(mixList)

console.log(mixObj)