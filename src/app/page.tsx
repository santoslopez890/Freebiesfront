import Image from 'next/image';

export default function TopServices() {
  const services = [
    {
      featured: true,
      title: 'Displays the most recent items near you!',
      image: 'freestuff.png',
    },
    {
      featured: true,
      title: 'Displays the newest paid items of a selected category near you!',
      image: 'paidstuff.png',
    },
    {
      featured: true,
      title: 'Displays newest Vehicles near you!',
      image: 'vehicles.png',
    },
  ];

  return (
    <div className="bg-white px-6 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Top Most Services</h2>
        <p className="text-gray-600">Picked Top Serviced For You</p>
        <p className="text-gray-400 mt-2">
          Lorem ipsum dolor amet consectetur adipisicing eliteuiim sete eiusmod tempor incididunt ut labore etnalom dolore magna aliqua udiminimate veniam quis norud
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-xl shadow overflow-hidden flex flex-col">
            <div className="relative h-90 w-full">
              {service.featured && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">Featured</span>
              )}
              <img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
              <p className=" text-lg text-emerald-700 mt-2 font-serif">
  {service.title}
</p>

              </div>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

