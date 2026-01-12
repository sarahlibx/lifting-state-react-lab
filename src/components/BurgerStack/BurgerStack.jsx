// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  if (props.stack.length === 0) return <ul><li>Your have to build your burger!</li></ul>
  return <ul>
        {props.stack.map((ingredient, index) => (
            <li key={index} style={{ backgroundColor: ingredient.color }}>
              {ingredient.name}
                <button onClick={() => props.removeFromStack(index)}>x</button>
            </li>
        ))}
    </ul>;
};

export default BurgerStack;
