import Cardapio from "../../Components/Cardapio/Cardapio";
import NavBar from "../../Components/NavBar/NavBar";
import "../../Styles/TelaCardapio.css";
import Swiper from "../../Components/SwiperComponent/SwiperComponent";
import MenuHorizontal from "../../Components/MenuHorizontal/MenuHorizontal";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

export default function TelaCardapio() {
  return (
    <div>
      <NavBar />
      <Swiper/>
      <h3 className="welcome-text">Nova Grill - Freguesia do Ó</h3>
      <MenuHorizontal/>
      <ScrollToTop/>
      <Cardapio/> 
    </div>
  );
}
