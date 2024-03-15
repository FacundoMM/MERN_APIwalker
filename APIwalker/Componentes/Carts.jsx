import React from 'react';

const Carts = ({ Opciones, datos }) => {
    if (Object.keys(datos).length != 0) {
        switch (Opciones) {
            case 'people':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.name}</h1>
                        <div className='card-body'>
                            <p>Height: {datos.height}</p>
                            <p>Gender: {datos.gender}</p>
                            <p>Birth year: {datos.birth_year}</p>
                            <p>Skin color: {datos.skin_color}</p>
                        </div>
                    </div>
                )
            case 'planets':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.name}</h1>
                        <div className='card-body'>
                            <p>Diameter: {datos.diameter}</p>
                            <p>Gravity: {datos.gravity}</p>
                            <p>Orbital_period: {datos.orbital_period}</p>
                            <p>Population: {datos.population}</p>
                            <p>Terrain: {datos.terrain}</p>
                        </div>
                    </div>
                )

            case 'films':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.title}</h1>
                        <div className='card-body'>
                            <p>Director: {datos.director}</p>
                            <p>Producer: {datos.producer}</p>
                            <p>{datos.opening_crawl}</p>
                        </div>
                    </div>
                )
            case 'species':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.name}</h1>
                        <div className='card-body'>
                            <p>Average height: {datos.average_height}</p>
                            <p>Average lifespan: {datos.average_lifespan}</p>
                            <p>Language: {datos.language}</p>
                            <p>Skin color: {datos.skin_colors}</p>
                        </div>
                    </div>
                )
            case 'vehicles':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.name}</h1>
                        <div className='card-body'>
                            <p>Cargo capacity: {datos.cargo_capacity}</p>
                            <p>Passengers: {datos.passengers}</p>
                            <p>Vehicle class: {datos.vehicle_class}</p>
                            <p>Consumables: {datos.consumables}</p>
                        </div>
                    </div>
                )

            case 'starships':
                return (
                    <div className='card bg-light mt-3 container' style={{ maxWidth: '30rem' }}>
                        <h1 className='card-header'>{datos.name}</h1>
                        <div className='card-body'>
                            <p>Cargo capacity: {datos.cargo_capacity}</p>
                            <p>Passengers: {datos.passengers}</p>
                            <p>Cost in credits: {datos.cost_in_credits}</p>
                            <p>Consumables: {datos.consumables}</p>
                        </div>
                    </div>
                )
            default:
                return (
                    <>
                        <h1 className='text-center mt-3 text-danger'>Estos no son los droides que está buscando</h1>
                    </>
                )
        }
    }
}

export default Carts;