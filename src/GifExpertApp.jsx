import { useState } from "react";
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    //inicializando el primer componente y se inicializa con un arreglo
        const [categories, setCategories] = useState(['Ultra Instinct']);

        const onAddCategory = (newCategory) => {

            if( categories.includes(newCategory) ) return;

            
            // setCategories(categories.concat('Valorant')); PRIMERA FORMA DE HACERLO
            //SEGUNDA FORMA DE HACERLO
            setCategories([newCategory, ...categories]);

        }


        return (
            <>

            <h1>GifExpertApp</h1>

            <AddCategory 
                onNewCategory = {(value) => onAddCategory(value)}
            />

   
                {/* expresion de javascript */}
                
            {
                categories.map( (category) => (
              
                    <GifGrid 
                     key={category} 
                     category={category} />
                
                ))
            }

            
            </>
        )


};