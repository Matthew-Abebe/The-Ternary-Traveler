const travelList = {
    travelling(){
        travelCollection.getAllTravelPlaces()
        .then(allTravel => {
            console.log(allTravel)
        })
    }
}