const travelCollection = {

    getAllTravelPlaces() {
      return fetch("http://localhost:8088/places")
      .then(response => response.json())
},
    getAllTravelInterests() {
        return fetch("http://localhost:8088/interests")
        .then(response => response.json())
    }
}
  export default travelCollection