import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball']);

    const onAddCategory = () => {
        setCategories([...categories, 'Valorant']);
    }

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory/>

        {/* Listado de gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            {
                categories.map( category => {
                    return <li key= { category }>{category}</li>
                })
            }
        </ol>
    </>
  )
}
