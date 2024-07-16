import priceData from "../mocks/priceData";
import PriceCard from "./PriceCard";
import styles from "./priceCards.module.css";

function PriceCards() {
  return (
    <div className={styles.cards}>
      {priceData.map((item, index) => (
        <PriceCard key={item.symbol} index={index} {...item} />
      ))}
    </div>
  );
}

export default PriceCards;
