import Cardapio from "../../Components/Cardapio/Cardapio";
import NavBar from "../../Components/NavBar/NavBar";
import "../../Styles/TelaCardapio.css";
import Swiper from "../../Components/SwiperComponent/SwiperComponent";

export default function TelaCardapio() {
  return (
    <div>
      <NavBar />
      <Swiper/>
      <h3 className="welcome-text">NovaGrill - Freguesia</h3>
      <Cardapio />
    </div>
  );
}
