import React, {useRef} from 'react';
import './styles.css';

interface Props {
  todo: string | number;
  setTodo: React.Dispatch<React.SetStateAction<string | number>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  // OR
  //const InputField: React.FC<Props> = ({todo, setTodo}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className = "input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur(); // blur shifts the focus from the input box
      }}
    >
      <input
        ref={inputRef}
        type="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a task"
        className = "input__box"

      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};
