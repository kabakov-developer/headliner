$(document).ready(function(){


ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [43.240224, 76.893480],
            zoom: 15,
			controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Creating a geo object with the "Point" geometry type.
        myGeoObject = new ymaps.GeoObject({
            // The geometry description.
            geometry: {
                type: "Point",
                coordinates: [43.240224, 76.893480]
            },
        }, {
            // The placemark can be dragged.
            draggable: true
        });

    myMap.geoObjects
        .add(myGeoObject)
        // .add(myPieChart)
        .add(new ymaps.Placemark([43.240224, 76.893480], {
            balloonContent: 'the color of <strong>the water on Bondi Beach</strong>'
        }, {
            preset: 'islands#icon',
            iconColor: '#062c95'
        }))
}
})