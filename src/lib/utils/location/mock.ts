import { getRandomInRange } from '../random';

/**
 * @param pointsTotal   number points generate
 * @param northEast     NorthEast latitude and longitude coordinates
 * @param southWest     South West latitude and longitude coordinates
 * @returns Array<{lat: number, lng: number}>
 */
const randomValues = (
  pointsTotal: number = 1,
  northEast: { lat: number; lng: number } = {
    lat: 42.2870876,
    lng: 3.2725862,
  },
  southWest: { lat: number; lng: number } = {
    lat: 37.2709008,
    lng: -6.9571999,
  }
) => {
  const lngSpan = northEast.lng - southWest.lng;
  const latSpan = northEast.lat - southWest.lat;

  const allPoints: Array<{ lat: number; lng: number }> = [];

  if (pointsTotal === 1) {
    return [
      {
        lat: southWest.lat + latSpan * Math.random(),
        lng: southWest.lng + lngSpan * Math.random(),
      },
    ];
  }
  // generate random points and add to array 'allPoints'
  for (let i = 0; i < pointsTotal; i++) {
    allPoints.push({
      lat: southWest.lat + latSpan * Math.random(),
      lng: southWest.lng + lngSpan * Math.random(),
    });
  }
  return allPoints;
};

// Info about how to working geographic coordinate sysstem:
// https://desktop.arcgis.com/en/arcmap/10.3/guide-books/map-projections/geographic-coordinate-system.htm
const getWorldPositionRandom = (fixed: number = 3) => {
  const lat = getRandomInRange(-90, 90, fixed);
  const lng = getRandomInRange(-180, 180, fixed);
  return { lat, lng };
};

export { randomValues, getWorldPositionRandom };
