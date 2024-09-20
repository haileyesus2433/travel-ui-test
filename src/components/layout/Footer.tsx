import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export default function TravelWebsiteBanner() {
  return (
    <section className="py-16 px-4 md:px-8 bg-gray-100">
      <div className="max-w-6xl mx-auto">
    <Card className="w-full max-w-6xl mx-auto bg-gray-50 shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
              Get your website today!
            </h2>
            <p className="text-gray-600">
              Sell flights, hotels, and tours from about the world.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              02839082932
            </Button>
            <span className="text-blue-600 font-semibold">hello@test.com</span>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
    </section>
  );
}
