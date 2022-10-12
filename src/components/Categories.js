import React from 'react'
import './../assets/styles/categories.css'

export const Categories = () => {

    return (
        <div id='categories__container'>
            <form>
                <input placeholder='Nombre de categoría' />
                <button>Crear Categoría</button>
            </form>
        </div>
    )
}