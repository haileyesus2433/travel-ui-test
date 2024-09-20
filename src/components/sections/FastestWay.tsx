import { Card, CardContent } from "../ui/card";

export default function TravelSalesSteps() {
  const steps = [
    {
      number: "1",
      title: "Subscribe",
      description: "Subscribe to the website plan on Intraverse.",
    },
    {
      number: "2",
      title: "Customize",
      description: "Customize every content on your website to fit your brand.",
    },
    {
      number: "3",
      title: "Start selling",
      description: "Publish to your own domain and start selling instantly.",
    },
  ];

  return (
    <section className="py-8 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          The fastest way to sell travel
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <Card key={step.number} className="border-none shadow-none">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}