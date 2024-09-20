import { useState } from "react";
import {
  ChevronDown,
  Plane,
  Calendar,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useStore from "../../store/store";
import { FlightSearchParams } from "../../types";


export default function FlightSearch() {
  const searchFlights = useStore((state) => state.searchFlights);
  const loading = useStore((state) => state.loading);
  const [tripType, setTripType] = useState("Round Trip");
  const [passengers, setPassengers] = useState("02 Passengers");
  const [travelClass, setTravelClass] = useState("Business Class");
  const [bags, setBags] = useState("02 Bags");
  const [departureDate, setDepartureDate] = useState<Date | null>(new Date());
  const [returnDate, setReturnDate] = useState<Date | null>(null);


 

  const handleSearchFlights = () => {
    const params: FlightSearchParams = {
      departure: "LOS Lagos",
      return: tripType === "Round Trip" ? "LHR London" : undefined,
      passengers: parseInt(passengers.split(" ")[0]),
      baggages: parseInt(bags.split(" ")[0]),
      flightType: tripType === "Round Trip" ? "roundtrip" : "oneway",
      class: travelClass.toLowerCase().split(" ")[0] as "economy" | "business" | "first",
    };

    searchFlights(params);
  };


  
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-4 overflow-hidden">
        <div className="bg-white shadow-md mb-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between px-4 py-3">
            <CustomSelect
              options={["Round Trip", "One Way"]}
              value={tripType}
              onChange={setTripType}
              className="mb-2 md:mb-0"
            />
            <CustomSelect
              options={[
                "01 Passenger",
                "02 Passengers",
                "03 Passengers",
                "04 Passengers",
              ]}
              value={passengers}
              onChange={setPassengers}
              className="mb-2 md:mb-0"
            />
            <CustomSelect
              options={["Economy Class", "Business Class", "First Class"]}
              value={travelClass}
              onChange={setTravelClass}
              className="mb-2 md:mb-0"
            />
            <CustomSelect
              options={["00 Bags", "01 Bag", "02 Bags", "03 Bags"]}
              value={bags}
              onChange={setBags}
            />
          </div>
        </div>
        <div className="bg-white shadow-md mb-4">
          <div className="p-4">
            <FlightOption
              from="LOS Lagos"
              fromDetails="Murtala Muhammed International Airport"
              to="LHR London"
              toDetails="Heathrow Airport"
              departureDate={departureDate}
              returnDate={returnDate}
              onDepartureDateChange={setDepartureDate}
              onReturnDateChange={setReturnDate}
            />
          </div>
        </div>
        <div>
          <div className="p-4">
            <button 
            disabled={loading}
            onClick={handleSearchFlights}
            className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded mx-auto block">
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

function CustomSelect({
  options,
  value,
  onChange,
  className = "",
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <button
        className="appearance-none bg-transparent text-gray-700 py-2 pl-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 border border-transparent hover:border-gray-300 flex items-center justify-between w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {value}
        <ChevronDown size={16} className="ml-2" />
      </button>
      {isOpen && (
        <div className="absolute z-10 w-full bg-white shadow-lg rounded-b-lg mt-1">
          {options.map((option) => (
            <div
              key={option}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface FlightOptionProps {
  from: string;
  fromDetails: string;
  to: string;
  toDetails: string;
  departureDate: Date | null;
  returnDate: Date | null;
  onDepartureDateChange: (date: Date | null) => void;
  onReturnDateChange: (date: Date | null) => void;
}

function FlightOption({
  from,
  fromDetails,
  to,
  toDetails,
  departureDate,
  returnDate,
  onDepartureDateChange,
  onReturnDateChange,
}: FlightOptionProps) {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between w-full">
      <div className="mb-4 md:mb-0">
        <div className="flex items-center">
          <Plane size={18} className="mr-2 text-green-600" />
          <span className="font-bold text-green-700">{from}</span>
        </div>
        <div className="text-xs text-gray-500 ml-6">{fromDetails}</div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="flex p-2 text-black  bg-gray-100 items-center mb-2 md:mb-0 ">
          <DatePicker
            selected={departureDate}
            onChange={onDepartureDateChange}
            customInput={<CustomDatePickerInput />}
            dateFormat="EEE do MMM"
          />
        </div>
        <div className="text-black">
          <ArrowRight size={24} className="hidden md:block" />
          <ArrowDown size={24} className="block md:hidden" />
        </div>
        <div className="flex p-2 text-black  bg-gray-100 items-center mb-2 md:mb-0 md:mr-4">
          <DatePicker
            selected={returnDate}
            onChange={onReturnDateChange}
            customInput={<CustomDatePickerInput />}
            dateFormat="EEE do MMM"
          />
        </div>
      </div>
      <div className="mt-4 md:mt-0">
        <div className="flex items-center">
          <span className="font-bold text-green-700">{to}</span>
          <Plane size={18} className="ml-2 text-green-600" />
        </div>
        <div className="text-xs text-gray-500">{toDetails}</div>
      </div>
    </div>
  );
}

interface CustomDatePickerInputProps {
  value?: string;
  onClick?: () => void;
}

function CustomDatePickerInput({ value, onClick }: CustomDatePickerInputProps) {
  return (
    <button className="flex items-center" onClick={onClick}>
      <Calendar size={18} className="mr-2 text-black" />
      <span className="text-sm font-bold">{value}</span>
    </button>
  );
}
