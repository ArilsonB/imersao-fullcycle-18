import { EventCard } from "@/components/EventCard";
import { Title } from "@/components/Title";
import { EventModel } from "@/models";
import Image from "next/image";

export default function Home() {
  const events: EventModel[] = [
    {
      id: "123",
      name: "teste",
      organization: "teste",
      date: "2022-01-01",
      price: 10,
      rating: "10",
      image_url: "https://via.placeholder.com/150",
      location: "Rio de Janeiro, RJ",
    },
    {
      id: "124",
      name: "Evento de Tecnologia",
      organization: "teste",
      date: "2022-01-01",
      price: 10,
      rating: "10",
      image_url: "https://via.placeholder.com/150",
      location: "Rio de Janeiro, RJ",
    },
    {
      id: "124",
      name: "Evento de Tecnologia",
      organization: "teste",
      date: "2022-01-01",
      price: 10,
      rating: "10",
      image_url: "https://via.placeholder.com/150",
      location: "Rio de Janeiro, RJ",
    },
  ];

  return (
    <main className="mt-10 flex flex-col">
      <Title>Eventos disponíveis</Title>
      <div className="sm:grid sm:grid-cols-auto-fit-cards flex flex-wrap justify-center gap-x-2 gap-y-4 mt-4">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </main>
  );
}
