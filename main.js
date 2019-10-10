var sum = items.reduce((a, b) => a + b.price, 0) 
{
avg = sum / items.length
} console.log(avg)

document.querySelector("#answer1").innerHTML = `The average of all prices is $ ${avg.toFixed(2)}`

var arr = items.filter (item => item.price > 14.00 && item.price < 18.00)
var titles = arr.map(title => title.title).join("\n")
console.log(arr)

document.querySelector("#answer2").innerHTML = `${titles}`

var ccode  = items.filter (item => item.currency_code == 'GBP')
.map(name => `${name.title} cost &#163; ${name.price}`)

document.querySelector("#answer3").innerHTML = `${ccode}`

var w = items.filter (item => item.materials.includes('wood'))
.map(name => `${name.title}`).join("\n")

document.querySelector("#answer4").innerHTML = `${w}`


var more = items.filter (item => item.materials.length > 8)
var mts = more.map(function (item)
{
    return item.materials }).join("\n")
var  t = more.map(function (item)
{
    return item.title})
var qty = more.map(function (item)
{
    return item.quantity}).join("\n")

document.querySelector("#answer5").innerHTML = `${mts} ${qty} ${t}`

var sm = items.filter (item => item.who_made === ("i_did"))
.map(item => `${item.who_made}`) 
{
sm.length
}


document.querySelector("#answer6").innerHTML = `${sm.length} were made by their sellers`

