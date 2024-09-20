import React from "react";
import Header from "../components/layout/Header";
import FastestWaySection from "../components/sections/FastestWay";
import FeaturesOverview from "../components/sections/EverythingYouNeed";
import PaymentsAndOrders from "../components/sections/FocusOn";
import EasyBooking from "../components/sections/EarnMore";
import CustomizeContent from "../components/sections/CustomizeContent";
import Footer from "../components/layout/Footer";
import { useEffect } from "react";
import useStore from "../store/store";

const Home: React.FC = () => { 
    const { fetchFlights, fetchHotels, fetchAncillaries } = useStore();

    useEffect(() => {
      fetchFlights();
      fetchHotels();
      fetchAncillaries();
    }, [fetchFlights, fetchHotels, fetchAncillaries]);


  return (
    <div className="min-h-screen bg-white">
      <Header />
      <FastestWaySection />
      <FeaturesOverview />
      <CustomizeContent />
      <PaymentsAndOrders />
      <EasyBooking />
      <Footer />
    </div>
  );
};

export default Home;
