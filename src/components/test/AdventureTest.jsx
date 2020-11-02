import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getPlaceByID } from '../../actions/place-actions';
import placeStore from '../../store/place-store';

function PlaceDetail(props) {
    const [placeDetail, setplaceDetail] = useState(placeStore.getPlace());

    useEffect(() => {
        placeStore.addEventListener(handleChange);
        if (!placeDetail) {
            getPlaceByID();
        }
        return () => {
            placeStore.removeEventListener(handleChange);
        };
    }, [placeDetail]);
    function handleChange() {
        setplaceDetail(placeStore.getPlace());
    }
    return (
        <>
            {placeDetail &&
                <div>
                    <h1>{placeDetail.name}</h1>
                </div>
            }
        </>
    );
}
export default PlaceDetail