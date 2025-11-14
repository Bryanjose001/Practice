let mySet = new Set()

console.log(mySet)



mySet = new Set(["Bryan", "Jose",  23, true, "bryanjose@gmail.com"])

console.log(mySet)





mySet.add("https://bryanjose.com")

console.log(mySet)

mySet.delete("https://novufoods.com")

console.log(mySet)

console.log(mySet.delete("Bryan"))
console.log(mySet.delete(4))

console.log(mySet)



console.log(mySet.has("Jose"))
console.log(mySet.has("Bryan"))



console.log(mySet.size)


let myArray = Array.from(mySet)
console.log(myArray)



mySet = new Set(myArray)
console.log(mySet)



mySet.add("bryanjose@gmail.com")
mySet.add("bryanjose@gmail.com")
mySet.add("bryanjose@gmail.com")
mySet.add("bryanjose@gmail.com")
console.log(mySet)