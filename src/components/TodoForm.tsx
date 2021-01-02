import React, {useState, useRef} from "react";

interface TodoFormProps {
    onAdd(title:string):void
}

export const TodoForm: React.FC<TodoFormProps> = (props) => {
   // const [title, setTitle] = useState<string>('');
/*
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }
*/
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = '';
          //  console.log(title);
          //  setTitle('');
        }
    }
    return (
        <div className="input-field mt2">
            <input
               // onChange={changeHandler}
                onKeyPress={keyPressHandler}
                ref={ref}
               // value={title}
                   type="text"
                   id="title" />
            <label htmlFor='title' className='active' placeholder='Введите название дела'>
                Введите название дела
            </label>
        </div>
    )
}
