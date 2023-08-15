import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

import { useRef, useState } from 'react';

const MealItemForm = (props) => {
  const ammountInputRef = useRef();

  const [ammountIsValid, setAmmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = ammountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={ammountInputRef}
        label='Ammoung'
        input={{
          id: 'ammount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button onClick={submitHandler}>+ Add</button>
      {!ammountIsValid && <p>Please enter a valid ammount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
