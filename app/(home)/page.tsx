import { ptBR } from "date-fns/locale";
import Header from "../_components/header";
import { format } from "date-fns";
import Search from "./_components/search";
import BookingItem from "../_components/booking-item";


const Home = () => {
  return (
    <div>
      <Header />
      <div className="px-5 pt-5">
        <h2 className="text-xl font-bold">Olá, fulano</h2>
        <p className="capitalize text-sm">
          {format(new Date(), "EEEE',' d 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="px-5 mt-6">
        <Search />

        <div className="px-5 mt-6">
          <h2 className="text-sm mb-3 uppercase text-gray-400 font-bold">Agendamento</h2>
          <BookingItem />
        </div>
      </div>
    </div>
  );
};

export default Home;
