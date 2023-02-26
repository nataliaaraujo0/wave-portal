import { AddressList } from "../components/AddressList/AddressList";
import { SendByeButton } from "../components/SendByeButton/SendByeButton";
import { WriteMessageCard } from "../components/WriteMessageCard/WriteMessageCard";
import { WrapperContainer, WrapperHeader, WrapperImage } from "./styled";
import imgCar from "../assets/car.png";

export function Home() {
  return (
    <WrapperContainer>
      <WrapperHeader>
        <h1>Olá pessoal!</h1>
        <p>
          Eu sou a Natália e tenho um canal no youtube. Conecte sua carteira
          Ethereum e manda um tchauzinho !
        </p>
        <WrapperImage src={imgCar} />
      </WrapperHeader>
      <WriteMessageCard />
      <SendByeButton />
      <AddressList />
    </WrapperContainer>
  );
}
