/**
 * Represents a geographical location with an address
 */
export interface Location {
  /**
   * The address of the location.
   */
  address: string;
}

/**
 * Represents coordinates of a location
 */
export interface Coordinates {
  /**
   * The latitude of the location.
   */
  lat: number;
  /**
   * The longitude of the location.
   */
  lng: number;
}

/**
 * Asynchronously retrieves coordinates for a given location.
 *
 * @param location The location for which to retrieve coordinates.
 * @returns A promise that resolves to a Coordinates object containing latitude and longitude.
 */
export async function getCoordinates(location: Location): Promise<Coordinates> {
  // TODO: Implement this by calling an API.

  return {
    lat: 34.052235,
    lng: -118.243683
  };
}
