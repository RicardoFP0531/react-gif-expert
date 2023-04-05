
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifs(category);
  
    return (
        //se crea el fragmento
        <>
         <h3>{category}</h3>
         {
            isLoading && ( <h2>Cargando...</h2> )
         }

         <div className="card-grid">
                { images.map((image) => (
                <GifItem 
                    key={image.id}
                    //otra forma de mandar las properties con una sintaxis permitida
                    {...image}
               
                />
                ))
                }
         </div>
           
       
        </>
    
  )
}




