import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Check } from "lucide-react";

// export default function TravelWebsiteCustomizer() {
//   interface NavigationItem {
//     label: string
//     isActive?: boolean
//   }

//   const navigationItems: NavigationItem[] = [
//     { label: "Hero Section" },
//     { label: "About us" },
//     { label: "Tours" },
//     { label: "Flights" },
//     { label: "Navigation", isActive: true },
//     { label: "Hotels" },
//     { label: "Chat" },
//     { label: "Contact Us" },
//     { label: "FAQs" },
//     { label: "Listing Style" },
//     { label: "Footer" },
//     { label: "Search Engine" },
//     { label: "ETC" }
//   ]

//   const navDesigns = [
//     {
//       id: 1,
//       items: ["Flight", "Stays", "Tours"],
//       hasHelp: true,
//       logoPosition: "center",
//       itemsPosition: "left",
//     },
//     {
//       id: 2,
//       items: ["Flight", "Stays", "Tours", "Help"],
//       hasHelp: false,
//       logoPosition: "left",
//       itemsPosition: "center",
//     },
//     {
//       id: 3,
//       items: ["Flight", "Stays", "Tours"],
//       hasHelp: true,
//       logoPosition: "left",
//       itemsPosition: "center",
//     },
//     {
//       id: 4,
//       items: ["Flight", "Stays", "Tours", "Help"],
//       hasHelp: false,
//       logoPosition: "left",
//       itemsPosition: "right",
//     },
//   ];

//   return (
//     <section className="pt-16 px-4 md:px-8 bg-gray-100">
//       <div className="max-w-6xl mx-auto">
//       <h2 className="text-3xl font-bold text-center m-8">
//         An Easy to Use Travel Booking Platform
//       </h2>
//       <div className="flex flex-col lg:flex-row items-center justify-center">
//         <div className="lg:w-1/2 p-8 flex flex-col  justify-center text-white">
//           <h1 className="text-2xl lg:text-4xl text-black font-bold leading-tight">
//             Customize every content on your website
//           </h1>
//           <p className="text-gray-600 text-lg">
//             Offer your customer a seamless travel booking experience, customised
//             to your brand.
//           </p>
//         </div>
//         <div className="lg:w-1/2 p-8 overflow-auto bg-sky-100  rounded-md">

//       <div className="flex flex-wrap gap-2 justify-center mb-2">
//         {navigationItems.map((item, index) => (
//           <Button
//             key={index}
//             variant={item.isActive ? "default" : "secondary"}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
//               item.isActive ? 'bg-blue-600 text-white' : 'bg-white text-gray-800'
//             } hover:bg-blue-500 hover:text-white transition-colors duration-200`}
//           >
//             {item.label}
//           </Button>
//         ))}
//       </div>

//       <div className="space-y-4 bg-white p-2 rounded-md">
//             {navDesigns.map((design) => (
//               <Card
//                 key={design.id}
//                 className={`p-1 ${
//                   design.id === 3 ? "bg-sky-200" : "bg-gray-200"
//                 }`}
//               >
//                 <div className="flex items-center space-x-4">
//                   {design.id === 3 ? (
//                     <Check className="text-blue-500 w-8 h-8 flex-shrink-0" />
//                   ) : (
//                     <div className="w-8 h-8 bg-[#DBDBDB] rounded-full flex-shrink-0" />
//                   )}
//                   <Card
//                     className={`${
//                       design.id === 3 ? "border-blue-500 border-2" : ""
//                     } flex-grow`}
//                   >
//                     <CardContent className="p-4">
//                       <div className="flex items-center justify-between">
//                         {design.id === 1 ? (
//                           <>
//                             <div className="flex items-center space-x-4">
//                               <Button
//                                 variant="ghost"
//                                 className="text-blue-500 font-medium"
//                               >
//                                 Flight
//                               </Button>
//                               <Button
//                                 variant="ghost"
//                                 className="text-gray-700 font-medium"
//                               >
//                                 Stays
//                               </Button>
//                               <Button
//                                 variant="ghost"
//                                 className="text-gray-700 font-medium"
//                               >
//                                 Tours
//                               </Button>
//                             </div>
//                             <div className="w-16 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-500 mx-4">
//                               Logo
//                             </div>
//                             <div className="flex items-center space-x-4">
//                               <Button
//                                 variant="ghost"
//                                 className="text-gray-700 font-medium"
//                               >
//                                 Help
//                               </Button>
//                               <Button className="bg-blue-600 text-white hover:bg-blue-700">
//                                 My Account
//                               </Button>
//                             </div>
//                           </>
//                         ) : (
//                           <>
//                             <div className="w-16 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
//                               Logo
//                             </div>
//                             <div
//                               className={`flex items-center space-x-4 ${
//                                 design.id === 2
//                                   ? "mx-auto rounded-full bg-gray-100 px-4 py-2"
//                                   : ""
//                               }`}
//                             >
//                               {design.items.map((item, index) => (
//                                 <Button
//                                   key={index}
//                                   variant="ghost"
//                                   className={`${
//                                     item === "Flight"
//                                       ? "text-blue-500"
//                                       : "text-gray-700"
//                                   } font-medium`}
//                                 >
//                                   {item}
//                                 </Button>
//                               ))}
//                             </div>
//                             <div className="flex items-center space-x-4">
//                               {design.hasHelp && (
//                                 <Button
//                                   variant="ghost"
//                                   className="text-gray-700 font-medium"
//                                 >
//                                   Help
//                                 </Button>
//                               )}
//                               <Button
//                                 className={`bg-blue-600 text-white hover:bg-blue-700 ${
//                                   design.id === 2 ? "rounded-full" : ""
//                                 }`}
//                               >
//                                 My Account
//                               </Button>
//                             </div>
//                           </>
//                         )}
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     </section>

//   );
// }

///////////////////////////////////

export default function TravelWebsiteCustomizer() {
  interface NavigationItem {
    label: string;
    isActive?: boolean;
  }

  const navigationItems: NavigationItem[] = [
    { label: "Hero Section" },
    { label: "About us" },
    { label: "Tours" },
    { label: "Flights" },
    { label: "Navigation", isActive: true },
    { label: "Hotels" },
    { label: "Chat" },
    { label: "Contact Us" },
    { label: "FAQs" },
    { label: "Listing Style" },
    { label: "Footer" },
    { label: "Search Engine" },
    { label: "ETC" },
  ];

  const navDesigns = [
    {
      id: 1,
      items: ["Flight", "Stays", "Tours"],
      hasHelp: true,
      logoPosition: "center",
      itemsPosition: "left",
    },
    {
      id: 2,
      items: ["Flight", "Stays", "Tours", "Help"],
      hasHelp: false,
      logoPosition: "left",
      itemsPosition: "center",
    },
    {
      id: 3,
      items: ["Flight", "Stays", "Tours"],
      hasHelp: true,
      logoPosition: "left",
      itemsPosition: "center",
    },
    {
      id: 4,
      items: ["Flight", "Stays", "Tours", "Help"],
      hasHelp: false,
      logoPosition: "left",
      itemsPosition: "right",
    },
  ];

  return (
    <section className="pt-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen bg-gray-100">
          <h2 className="text-3xl font-bold text-center m-8">
            An Easy to Use Travel Booking Platform
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <div className="lg:w-1/3 p-8 flex flex-col justify-center text-white">
              <h1 className="text-xl lg:text-2xl text-black font-bold leading-tight">
                Customize every content on your website
              </h1>
              <p className="text-gray-600 text-md">
                Offer your customer a seamless travel booking experience,
                customised to your brand.
              </p>
            </div>
            <div className="lg:w-2/3 p-8 overflow-auto bg-sky-100 rounded-md">

              <div className="flex flex-wrap gap-2 justify-center mb-2">
                {navigationItems.map((item, index) => (
                  <Button
                    key={index}
                    variant={item.isActive ? "default" : "secondary"}
                    className={`px-4 py-2 rounded-full text-sm font-medium ${
                      item.isActive
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-800"
                    } hover:bg-blue-500 hover:text-white transition-colors duration-200`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
              <div className="space-y-4 bg-white p-4 rounded-md">
                {navDesigns.map((design) => (
                  <Card
                    key={design.id}
                    className={`p-4 ${
                      design.id === 3 ? "bg-sky-200" : "bg-gray-200"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      {design.id === 3 ? (
                        <Check className="text-blue-500 w-8 h-8 flex-shrink-0" />
                      ) : (
                        <div className="w-8 h-8 bg-[#DBDBDB] rounded-full flex-shrink-0" />
                      )}
                      <Card
                        className={`${
                          design.id === 3 ? "border-blue-500 border-2" : ""
                        } flex-grow`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            {design.id === 1 ? (
                              <>
                                <div className="flex items-center space-x-4">
                                  <Button
                                    variant="ghost"
                                    className="text-blue-500 font-medium"
                                  >
                                    Flight
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    className="text-gray-700 font-medium"
                                  >
                                    Stays
                                  </Button>
                                  <Button
                                    variant="ghost"
                                    className="text-gray-700 font-medium"
                                  >
                                    Tours
                                  </Button>
                                </div>
                                <div className="w-16 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-500 mx-4">
                                  Logo
                                </div>
                                <div className="flex items-center space-x-4">
                                  <Button
                                    variant="ghost"
                                    className="text-gray-700 font-medium"
                                  >
                                    Help
                                  </Button>
                                  <Button className="bg-blue-600 text-white hover:bg-blue-700">
                                    My Account
                                  </Button>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="w-16 h-8 bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                                  Logo
                                </div>
                                <div
                                  className={`flex items-center space-x-4 ${
                                    design.id === 2
                                      ? "mx-auto rounded-full bg-gray-100 px-4 py-2"
                                      : ""
                                  }`}
                                >
                                  {design.items.map((item, index) => (
                                    <Button
                                      key={index}
                                      variant="ghost"
                                      className={`${
                                        item === "Flight"
                                          ? "text-blue-500"
                                          : "text-gray-700"
                                      } font-medium`}
                                    >
                                      {item}
                                    </Button>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4">
                                  {design.hasHelp && (
                                    <Button
                                      variant="ghost"
                                      className="text-gray-700 font-medium"
                                    >
                                      Help
                                    </Button>
                                  )}
                                  <Button
                                    className={`bg-blue-600 text-white hover:bg-blue-700 ${
                                      design.id === 2 ? "rounded-full" : ""
                                    }`}
                                  >
                                    My Account
                                  </Button>
                                </div>
                              </>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
