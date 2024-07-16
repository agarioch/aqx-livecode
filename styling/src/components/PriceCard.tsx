import { HTMLProps } from "react";
import styles from "./priceCard.module.css";
import clsx from "clsx";
import { PriceData } from "../mocks/priceData";

type PriceCardProps = {
  index: number;
} & PriceData &
  HTMLProps<HTMLDivElement>;

function PriceCard({
  index,
  symbol,
  name,
  price,
  movement,
  segment,
  className,
  ...props
}: PriceCardProps) {
  const movementClass =
    movement > 0 ? "positive" : movement === 0 ? "neutral" : "negative";
  return (
    <div className={clsx(styles.card, className)} {...props}>
      <div className={styles.imageWrapper}>
        <img
          className={styles.bgImage}
          src={`/bg-${(index % 4) + 1}.jpg`}
          alt=""
        />
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <p className={styles.symbol}>{symbol}</p>
          <p className={styles.label}>{name}</p>
        </div>
        <div className={styles.divider} />
        <div className={styles.stat}>
          <p className={styles.value}>{price}</p>
          <p className={styles.label}>Price</p>
        </div>
        <div className={styles.stat}>
          <p className={`${styles.value} ${styles[movementClass]}`}>
            {movement.toLocaleString("en-GB", { signDisplay: "never" })}
          </p>
          <p className={styles.label}>Change</p>
        </div>
      </div>
      <div className={clsx(styles.segment, segment === "APEX" && styles.apex)}>
        {segment}
      </div>
    </div>
  );
}

export default PriceCard;
