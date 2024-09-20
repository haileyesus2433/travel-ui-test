import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import {
  Plane,
  Clock,
  Star,
  Users,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { ReactNode } from "react";

interface TravelCardProps {
  type: "flight" | "tour" | "hotel";
  title: string;
  subtitle?: string;
  badges: string[];
  rating?: { value: string; reviewCount?: number };
  details: ReactNode;
  image?: { src: string; alt: string };
}

function TravelCard({
  title,
  subtitle,
  badges,
  rating,
  details,
  image,
}: TravelCardProps) {
  return (
    <Card>
      <CardContent className="p-0">
        <div className="flex">
          {image && (
            <div className="w-1/3 relative">
              <img
                src={image.src}
                alt={image.alt}
                
                className="rounded-l-lg h-full object-cover"
              />
              {["left", "right"].map((direction) => (
                <div 
                className={`
                  absolute ${direction === "left" ? "left-2" : "right-5 "} top-1/2 -translate-y-1/2 
                  rounded-full w-12 h-12 flex items-center justify-center p-4 bg-gray-50 bg-opacity-50 hover:border hover:border-blue-600 hover:cursor-pointer`}
                    key={direction}
                  >
                    <Button
                      size="icon"
                  className={`
                    absolute ${direction}-2 top-1/2 -translate-y-1/2 
                    rounded-full w-8 h-8 p-0
                    
  
                    ${direction === "left" 
                    ? " left-2 bg-blue-600 hover:bg-blue-600 " 
                    : "right-2 bg-transparent border border-blue-600 hover:bg-blue-600 hover:bg-transparent"}
                    `}
                    >
                  <span className="sr-only">
                    {direction === "left" ? "Previous" : "Next"} image
                  </span>
                  <div className="relative w-full h-full flex items-center justify-center">
                    {direction === "left" 
                      ? <ChevronLeft className="h-4 w-4 text-white" /> 
                      : <ChevronRight className="h-4 w-4 text-blue-500" />
                    }
                  </div>
                </Button>
                    </div>
              ))}
            </div>
          )}
          <div className={image ? "w-2/3 pl-6" : "w-full p-2"}>
            <div className="flex justify-between items-start">
              <div>
                {subtitle && <p className="text-sm text-gray-500 mb-1">{subtitle}</p>}
                <div className="flex space-x-2">
                  {badges.map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-green-100 text-green-800"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <h3 className="text-lg font-semibold mt-2">{title}</h3>
              </div>
            </div>
            {rating && (
              <div className="flex items-center mt-2">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="ml-1 font-semibold">{rating.value}</span>
                {rating.reviewCount && (
                  <span className="text-sm text-gray-500 ml-1">
                    from {rating.reviewCount} reviews
                  </span>
                )}
              </div>
            )}
            {details}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function TravelBookingInterface() {
  return (
    <section className="py-8 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row min-h-screen items-center justify-center">
      <div className="lg:w-2/4 p-8 text-gray-300 flex items-center">
        <div>
          <h2 className="text-2xl text-black font-bold mb-4">
            Earn more money
          </h2>
          <p className="mb-4 text-gray-600">
            Take control of the entire travel experience. Effortlessly add
            markups to all travel products using our user-friendly dashboard.
            Upsell your customers with accommodations, things to do and
            insurance products.
          </p>
        </div>
      </div>
      <div className="lg:w-2/4 p-8 space-y-6">
        <TravelCard
          type="flight"
          title="18:30 - 06:30"
          subtitle="DEPARTURE · Turkish Airline"
          badges={["AMADEUS", "Earn Commission"]}
          details={
            <>
              <div className="flex justify-between items-center">
                <div className="flex items-center text-sm text-gray-500">
                  <Plane className="w-4 h-4 mr-1" />
                  <span>1 stop</span>
                </div>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Murtala Muhammed (LOS) Lagos</span>
                <span>London Heathrow (LHR), London</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>12h 14m</span>
                </div>
                <span>+ 1 day</span>
              </div>
            </>
          }
        />
        <TravelCard
          type="tour"
          image={{ src: "/assets/building.png", alt: "a beautiful image of a building" }}
          title="Official National Gallery Highlights Guided Tour"
          badges={["Marked up"]}
          rating={{ value: "4.5/5", reviewCount: 532 }}
          details={
            <div className="flex space-x-2 mt-2">
              <Badge variant="outline">Refundable Ticket</Badge>
              <Badge variant="outline">Mobile Voucher</Badge>
            </div>
          }
        />
        <TravelCard
          type="hotel"
          image={{ src: "/assets/hotel.png", alt: "a beautiful image of a hotel" }}
          title="Room two, 2 Twin Beds (Runway View, High Floor)"
          badges={["Marked up", "Earn Commission"]}
          rating={{ value: "8.7/10 Wonderful" }}
          details={
            <div className="flex space-x-4 mt-2">
              <div className="flex items-center">
                <Users className="w-4 h-4 mr-1" />
                <span className="text-sm text-gray-500">2 guests</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="text-sm text-gray-500">1 night</span>
              </div>
            </div>
          }
        />
      </div>
    </div>
    </div>
    </section>
  );
}
