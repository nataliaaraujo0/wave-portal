import { WrapperAddressCard, WrapperAddressList } from "./styled";

export function AddressList() {
  return (
    <WrapperAddressList>
      <WrapperAddressCard>
        <div>
          <strong>Adrress:</strong>
          <p>aaaaaa</p>
        </div>
        <div>
          <strong>Time:</strong>
          <p>Sat Nov 25 2023 11:18 GMT-300</p>
        </div>
        <div>
          <strong>Message:</strong>
          <p>This is message</p>
        </div>
      </WrapperAddressCard>
      <WrapperAddressCard>
        <div>
          <strong>Adrress:</strong>
          <p>aaaaaa</p>
        </div>
        <div>
          <strong>Time:</strong>
          <p>Sat Nov 25 2023 11:18 GMT-300</p>
        </div>
        <div>
          <strong>Message:</strong>
          <p>This is message</p>
        </div>
      </WrapperAddressCard>
    </WrapperAddressList>
  );
}
