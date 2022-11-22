export function distance(currenPosition, stationGeo) {
  const earthRadiusInKm = 6371;
  const degreeToRadian = (degree) => (Math.PI * degree) / 180;

  const sphericToCartesian = ([latitude, longitude]) => [
    earthRadiusInKm *
      Math.cos(degreeToRadian(latitude)) *
      Math.cos(degreeToRadian(longitude)),
    earthRadiusInKm *
      Math.cos(degreeToRadian(latitude)) *
      Math.sin(degreeToRadian(longitude)),
    earthRadiusInKm * Math.sin(degreeToRadian(latitude)),
  ];

  const [myX, myY, myZ] = sphericToCartesian(currenPosition);
  const [stationX, stationY, stationZ] = sphericToCartesian(stationGeo);

  if (Number.isNaN(myX) !== true) {
    return (
      Math.round(
        Math.sqrt(
          (myX - stationX) ** 2 + (myY - stationY) ** 2 + (myZ - stationZ) ** 2
        ) * 100
      ) / 100
    );
  }
  return 0;
}
