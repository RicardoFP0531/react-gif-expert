import { useState } from "react";


export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');
                    //recibe el evento comop parametro
    const onInputChange = ({target}) => {
    //de este evento nos interesa el target y el value
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        //condicion para no meter valores vacios
        if(inputValue.trim().length <= 1) return;
        //tarea hacer que al dar enter tome ese valor y lo meta al array de las categorias que bucamos
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        //dejando el inputValue vacio
        setInputValue('');
        
    }

        return (
            <form onSubmit={ onSubmit }>
                <input type="text"
                    placeholder="Buscar GIF"
                    value={inputValue}
                    onChange={ onInputChange }
                />
            </form>
            
        )
}
