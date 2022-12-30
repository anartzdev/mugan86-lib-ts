import {
  getWorldPositionRandom,
  randomValues,
} from '../../../../src/lib/utils/location/mock';

describe('sum module', () => {
  test('Generate specify points', () => {
    const vaalues = randomValues(
      10,
      {
        lat: 40.24494329371422,
        lng: -3.940658569335937,
      }, // southwest
      {
        lat: 40.55293936825807,
        lng: -3.45245361328125,
      }
    );
    expect(vaalues.length).toEqual(10);
  });

  test('Generate Poinst inside specify range', () => {
    const vaalues = randomValues(
      5,

      {
        lat: 40.55293936825807,
        lng: -3.45245361328125,
      },
      {
        lat: 40.24494329371422,
        lng: -3.940658569335937,
      }
    );

    vaalues.map((point: { lat: number; lng: number }) => {
      expect(point.lat).toBeGreaterThanOrEqual(40.24494329371422);
      expect(point.lat).toBeLessThanOrEqual(40.55293936825807);
      expect(point.lng).toBeGreaterThanOrEqual(-3.940658569335937);
      expect(point.lng).toBeLessThanOrEqual(-3.45245361328125);
    });
  });

  test('World Positions generate and check inside range', () => {
    for (let i = 0; i < 50; i++) {
      const point = getWorldPositionRandom();
      expect(point.lat).toBeGreaterThanOrEqual(-90);
      expect(point.lat).toBeLessThanOrEqual(90);
      expect(point.lng).toBeGreaterThanOrEqual(-180);
      expect(point.lng).toBeLessThanOrEqual(180);
    }
  });
});
