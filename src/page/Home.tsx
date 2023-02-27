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

        <WrapperImage src={imgCar} />
        <p>Conecte sua carteira Ethereum e me envie sua música favorita !</p>
      </WrapperHeader>
      <WriteMessageCard />
      <SendByeButton />
      <AddressList />
    </WrapperContainer>
  );
}
