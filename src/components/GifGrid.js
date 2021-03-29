import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    //custom hook. Load data. Rename "data" to "images".
    const { data: images, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {loading && <p>Loading...</p>}

            <div className="card-grid">
                <ol>
                    {
                        images.map((img) => (
                            <GifGridItem
                                key={img.id}
                                {...img} />
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default GifGrid
