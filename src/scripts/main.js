import travelCollection from "./travelCollection"
console.log(travelCollection)

travelCollection.getAllTravelPlaces()
.then(allTravel => {
    console.log(allTravel)
})