import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Plane, Clock } from "lucide-react";

const FeatureCard: React.FC<{
  title: string;
  description: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}> = ({ title, description, children, className = "" }) => (
  <div className={className}>
    <Card className="bg-blue-50 border-none shadow-md h-full">
      <CardContent className="p-4">
        <div className="mb-4">{children}</div>
        <h3 className="text-xl font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  </div>
);

const WhiteCard: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-white p-4 rounded-l mb-4 mr-[-1.25rem] relative overflow-hidden">
    <div
      className="absolute inset-y-0 left-0 w-4 pointer-events-none"
      style={{
        boxShadow: "0 0 6px -1px rgba(0,0,0,0.001)",
      }}
    ></div>
    <div className="relative z-10">{children}</div>
  </div>
);

export default function TravelBookingFeatures() {
  return (
    <section className="py-8 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Everything you need, in one link.
        </h2>
        <div className="flex flex-wrap -mx-3">
          <FeatureCard
            title="Search"
            description="Make searching flights an intuitive experience for your customers."
            className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6"
          >
            <div className="flex space-x-2 mb-4">
              <Select defaultValue="return">
                <SelectTrigger className="w-24 h-8 text-xs bg-white border border-gray-200">
                  <SelectValue placeholder="Return" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="return">Return</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="select-seat">
                <SelectTrigger className="w-28 h-8 text-xs bg-blue-600 text-white border-none">
                  <SelectValue placeholder="Select Seat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="select-seat">Select Seat</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="1stop">
                <SelectTrigger className="w-20 h-8 text-xs bg-white border border-gray-200">
                  <SelectValue placeholder="1 stop" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1stop">1 stop</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                className="h-8 text-xs border border-gray-200"
              >
                Airline
              </Button>
            </div>
            <WhiteCard>
              <div className="flex items-center space-x-2 mb-1">
                <div className="text-sm font-medium">10:30</div>
                <Plane className="w-4 h-4 text-blue-500 rotate-45" />
                <div className="text-xs text-gray-500">1 stop</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="text-sm text-gray-500">
                Murtala Muhammed (LOS) Lagos
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                12h 14m
              </div>
            </WhiteCard>
          </FeatureCard>

          <FeatureCard
            title="Book"
            description="Capture all relevant details from your customer in a one-step checkout"
            className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                VS
              </div>
              <div className="text-sm">411 LOS - LHR</div>
              <div className="text-sm text-gray-500">10:30PM - 05:25PM +1</div>
              <div className="text-sm font-medium">06:55</div>
            </div>
            <WhiteCard>
              <div className="flex items-center space-x-2 mb-1">
                <div className="text-sm font-medium">10:30</div>
                <Plane className="w-4 h-4 text-blue-500 rotate-45" />
                <div className="text-xs text-gray-500">1 stop</div>
                <div className="flex-grow border-t border-gray-300"></div>
              </div>
              <div className="text-sm text-gray-500">
                Murtala Muhammed (LOS) Lagos
              </div>
              <div className="text-xs text-gray-400 flex items-center">
                <Clock className="w-3 h-3 mr-1" />
                12h 14m
              </div>
            </WhiteCard>
          </FeatureCard>

          <FeatureCard
            title="Ancillaries"
            description="Let your customers book premium seats and pay for additional baggage."
            className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Button
                variant="default"
                size="sm"
                className="text-xs h-8 bg-blue-600 text-white"
              >
                Select Seat
              </Button>
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                VS
              </div>
              <div className="text-sm">411</div>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>
            <WhiteCard>
              <div className="flex justify-between mb-2">
                {["A", "B", "", "D", "E", "F", "G", "H"].map((seat, index) => (
                  <div
                    key={index}
                    className={`flex items-center justify-center w-8 h-8 text-xs ${
                      seat ? "bg-gray-100" : ""
                    } ${
                      seat === "E" || seat === "F"
                        ? "bg-blue-100 text-blue-600 font-medium"
                        : ""
                    } rounded`}
                  >
                    {seat === "E" || seat === "F" ? "10" : seat}
                  </div>
                ))}
              </div>
            </WhiteCard>
          </FeatureCard>

          <FeatureCard
            title="Payments"
            description="Take payments securely from your customers using our payments."
            className="w-full md:w-1/2 px-3 mb-6"
          >
            <WhiteCard>
              <div className="text-sm text-gray-500 mb-2">
                Secured payment with
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="font-bold text-blue-600">paystack</div>
                  <div className="text-sm text-gray-500">
                    **** **** **** 3920 | MM/YY CVC
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 text-white">
                  Pay
                </Button>
              </div>
            </WhiteCard>
          </FeatureCard>

          <FeatureCard
            title="Order Management"
            description={
              <span className="text-gray-500">
                <a href="#" className="text-blue-600 hover:underline">
                  Register interest today...
                </a>
              </span>
            }
            className="w-full md:w-1/2 px-3 mb-6"
          >
            <WhiteCard>
              <div className="text-sm text-gray-500 mb-2">Order</div>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-medium">00:10 - 06:40</div>
                    <div className="text-xs text-gray-500">
                      TK490390, AP109302
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">₦8,500,400</div>
                  <Button size="sm" className="mt-1 bg-blue-600 text-white">
                    Issue Ticket
                  </Button>
                </div>
              </div>
            </WhiteCard>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}