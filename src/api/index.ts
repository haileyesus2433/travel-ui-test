import { Ancillary, Flight, FlightSearchParams, Hotel } from "@/types";

const BASE_URL = "http://localhost:5000";

export async function searchFlights(params: FlightSearchParams): Promise<Flight[]> {
  const response = await fetch(`${BASE_URL}/search-flights`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  });

  if (!response.ok) {
    throw new Error('Failed to search flights');
  }

  return response.json();
}

export async function fetchFlights(): Promise<Flight[]> {
  const response = await fetch(`${BASE_URL}/flights`);

  if (!response.ok) {
    throw new Error('Failed to fetch flights');
  }

  return response.json();
}

export async function fetchHotels(): Promise<Hotel[]> {
  const response = await fetch(`${BASE_URL}/hotels`);

  if (!response.ok) {
    throw new Error('Failed to fetch hotels');
  }

  return response.json();
}

export async function fetchAncillaries(): Promise<Ancillary[]> {
  const response = await fetch(`${BASE_URL}/ancillaries`);

  if (!response.ok) {
    throw new Error('Failed to fetch ancillaries');
  }

  return response.json();
}
