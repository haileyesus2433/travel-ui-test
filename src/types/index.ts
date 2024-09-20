export interface Flight {
  departure: string;
  destination: string;
  price: number;
}

export interface Hotel {
  name: string;
  location: string;
  rating: number;
  price: number;
}

export interface Ancillary {
  service: string;
  price: number;
}
export interface FlightSearchParams {
  departure: string;
  return?: string;
  passengers: number;
  baggages: number;
  flightType: 'oneway' | 'roundtrip';
  class: 'economy' | 'business' | 'first';
}