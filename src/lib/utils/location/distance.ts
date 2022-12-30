/* 
Title: Get Distance from two Latitude / Longitude in Kilometers.

Description: This Javascript snippet calculates great-circle distances between the two points 
—— that is, the shortest distance over the earth’s surface; using the ‘Haversine’ formula.
Based from : https://bitbucket.org/amugika/gpxreaderandstats/src/master/lib/Calculator.class.php
*/

import { EDistanceUnit, MILES_IN_KM, NAUTICAL_MILES_IN_KM } from "../../constants/distance";

function _getDistanceFromLatLonInKm(
    startLat,
    startLng,
    finishLat,
    finishLng,
    precise,
    distanceUnit: EDistanceUnit = EDistanceUnit.KM
  ) {
    var EARTH_RADIUS = 6371; // Radius of the earth in kilometers
    var differenceBetweenLatsInRadians = degreeToRad(finishLat - startLat); // deg2rad below
    var differenceBetweenLngsInRadians = degreeToRad(finishLng - startLng);
    var a =
      Math.sin(differenceBetweenLatsInRadians / 2) *
        Math.sin(differenceBetweenLatsInRadians / 2) +
      Math.cos(degreeToRad(startLat)) *
        Math.cos(degreeToRad(finishLat)) *
        Math.sin(differenceBetweenLngsInRadians / 2) *
        Math.sin(differenceBetweenLngsInRadians / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distanceInKm = EARTH_RADIUS * c; // Distance in KM
    return distanceUnit === EDistanceUnit.KM
      ? precise
        ? distanceInKm
        : roundNumber(distanceInKm)
      : distanceConversionFromKm(distanceInKm, distanceUnit, precise);
  }
  
  function distanceConversionFromKm(
    distance: number,
    unit: EDistanceUnit,
    precise: boolean
  ) {
    return unit === EDistanceUnit.MILE
      ? precise
        ? distance * MILES_IN_KM
        : roundNumber(distance * MILES_IN_KM)
      : precise
      ? distance * NAUTICAL_MILES_IN_KM
      : roundNumber(distance * NAUTICAL_MILES_IN_KM);
  }
  
  const roundNumber = (distance: number) => Math.round(distance * 100) / 100;
  
  function degreeToRad(deg) {
    return deg * (Math.PI / 180);
  }

  export { _getDistanceFromLatLonInKm, roundNumber, degreeToRad, distanceConversionFromKm}