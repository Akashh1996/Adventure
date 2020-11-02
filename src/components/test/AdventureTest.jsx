// import React, { useEffect, useState, Component } from 'react';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { loadPlace } from '../../actions/place-actions';
// import placeStore from '../../store/place-store';

// class GoogleMap extends Component {

//   renderMap = ()=>{
//     console.log("renderMaprenderMaprenderMaprenderMaprenderMaprenderMaprenderMap")
//     loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyAdieiJad-Cvlk9W_e-YqhsLVYb-BzJcOk&callback=initMap")
//   }



//  initMap=()=> {
//      var map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: -34.397, lng: 150.644},
//           zoom: 8
//         });
//       }

//   render() {
//     return (
//       <main>
//         <div id="map">
//         </div>        
//       </main>
//     )
//   }
// }
// /*
//       <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"
//     async defer></script>
//  */
//  function loadScript(url){

//    var index= window.document.getElementsByTagName("script")[0]
//    var script=window.document.createElement("script")
//    script.src = url
//    script.async = true
//    script.defer = true
//    index.parentNode.insertBefore(script,index)
//  }

// export default GoogleMap


