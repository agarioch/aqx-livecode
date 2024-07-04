import { useId } from "react";
import styles from "./RadioGroup.module.css";

type RadioGroupProps = {
  values: {
    value: string;
    label: string;
    description: string;
  }[];
  currentValue: string;
  handleChangeValue: (value: string) => void;
};

function RadioGroup({
  values,
  currentValue,
  handleChangeValue,
}: RadioGroupProps) {
  const id = useId();

  return (
    <ul className={styles.roleList}>
      {values.map(
        ({ value, label, description }) => {
          const optionId = `radio-group-${id}-${value}`;

          return (
            <li key={value}>
              <input
                type="radio"
                id={optionId}
                required={true}
                name={id}
                value={value}
                checked={
                  value === currentValue
                }
                onChange={() => {
                  handleChangeValue(value);
                }}
              />
              <label htmlFor={optionId}>
                <span className={styles.roleTitle}>
                  {label}
                </span>
                <p>{description}</p>
              </label>
            </li>
          );
        }
      )}
    </ul>
  );
}

export default RadioGroup;