import InputContainerStyled from "./styles";

/**
 * A component for rendering radio inputs.
 * Typically used a child with a group of radio inputs within a fieldset
 */
const InputRadio = ({
  name,
  id,
  value,
  checked,
}: {
  /** The name of the group of input radios */
  name: string;
  /** The id of the answer */
  id: string;
  /** The value of the answer */
  value: string;
  /** A flag indicating whether this input is currently checked */
  checked: boolean;
}) => (
  <InputContainerStyled className={checked ? "checked" : ""}>
    <label htmlFor={id} className="radio">
      <input
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        readOnly
      />
      <span>{value}</span>
    </label>
  </InputContainerStyled>
);

export default InputRadio;
