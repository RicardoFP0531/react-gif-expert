import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";


export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }


    //realizar una peticion HTTP para traer la info del APi y tener en ese componente
    //lo que queramos regresar
    useEffect(() => {
       getImages(); 
    }, [])

  return {
    images,
    isLoading,
  }
   
  
}
