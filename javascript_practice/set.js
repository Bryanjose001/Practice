let mySet = new Set()

console.log(mySet)



mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])

console.log(mySet)





mySet.add("https://moure.dev")

console.log(mySet)

mySet.delete("https://moure.dev")

console.log(mySet)

console.log(mySet.delete("Brais"))
console.log(mySet.delete(4))

console.log(mySet)



console.log(mySet.has("Moure"))
console.log(mySet.has("Brais"))



console.log(mySet.size)


let myArray = Array.from(mySet)
console.log(myArray)



mySet = new Set(myArray)
console.log(mySet)



mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet)