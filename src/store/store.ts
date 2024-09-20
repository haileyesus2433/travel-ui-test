import { create } from "zustand";
import { Flight, Hotel, Ancillary } from "../types";
import { fetchAncillaries, fetchFlights, fetchHotels, searchFlights } from "../api";

interface FlightSearchParams {
  departure: string;
  return?: string;
  passengers: number;
  baggages: number;
  flightType: 'oneway' | 'roundtrip';
  class: 'economy' | 'business' | 'first';
}

interface StoreState {
  flights: Flight[];
  hotels: Hotel[];
  ancillaries: Ancillary[];
  selectedFlight: Flight | null;
  selectedHotel: Hotel | null;
  loading: boolean;
  searchTerm: string;
  fetchFlights: () => Promise<void>;
  fetchHotels: () => Promise<void>;
  fetchAncillaries: () => Promise<void>;
  selectFlight: (flight: Flight) => void;
  selectHotel: (hotel: Hotel) => void;
  setSearchTerm: (term: string) => void;
  getFilteredItems: () => (Flight | Hotel | Ancillary)[];
  searchFlights: (params: FlightSearchParams) => Promise<void>;
}

const useStore = create<StoreState>((set, get) => ({
  flights: [],
  hotels: [],
  ancillaries: [],
  selectedFlight: null,
  selectedHotel: null,
  loading: false,
  searchTerm: "",

  fetchFlights: async () => {
    set({ loading: true });
    try {
      const flights = await fetchFlights();
      set({ flights, loading: false });
    } catch (error) {
      console.error("Error fetching flights:", error);
      set({ loading: false });
    }
  },

  fetchHotels: async () => {
    set({ loading: true });
    try {
      const hotels = await fetchHotels();
      set({ hotels, loading: false });
    } catch (error) {
      console.error("Error fetching hotels:", error);
      set({ loading: false });
    }
  },

  fetchAncillaries: async () => {
    set({ loading: true });
    try {
      const ancillaries = await fetchAncillaries();
      set({ ancillaries, loading: false });
    } catch (error) {
      console.error("Error fetching ancillaries:", error);
      set({ loading: false });
    }
  },

  searchFlights: async (params: FlightSearchParams) => {
    set({ loading: true });
    try {
      const searchedFlights = await searchFlights(params);
      set({ flights: searchedFlights, loading: false });
    } catch (error) {
      console.error("Error searching flights:", error);
      set({ loading: false });
    }
  },


  selectFlight: (flight) => set({ selectedFlight: flight }),
  selectHotel: (hotel) => set({ selectedHotel: hotel }),

  setSearchTerm: (term) => set({ searchTerm: term }),

  getFilteredItems: () => {
    const { flights, hotels, ancillaries, searchTerm } = get();
    const allItems = [...flights, ...hotels, ...ancillaries];
    
    if (!searchTerm) return allItems;

    return allItems.filter((item) => {
      const searchableText = `${item.price} ${item.price || ''}`.toLowerCase();
      return searchableText.includes(searchTerm.toLowerCase());
    });
  },
}));

export default useStore;
