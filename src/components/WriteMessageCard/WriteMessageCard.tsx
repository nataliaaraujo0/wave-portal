import { InputWriteMessageCard, WrapperWriteMessageCard } from "./styled";

export function WriteMessageCard() {
  return (
    <WrapperWriteMessageCard>
      <h3>Escreva sua mensagem aqui: </h3>
      <InputWriteMessageCard />
    </WrapperWriteMessageCard>
  );
}
