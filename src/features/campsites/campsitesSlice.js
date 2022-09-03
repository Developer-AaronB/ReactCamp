import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';


const initialState = {
  campsitesArray: CAMPSITES,
};

const campsitesSlice = createSlice({
  name: "campsites",
  initialState,
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = (state) => {
    return state.campsites.campsitesArray;
};

// export const selectRandomCampsite = () => {
//     return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
// };

export const selectCampsiteBySlug = (slug) => (state) => {
    return state.campsites.campsitesArray.find(
      (campsite) => campsite.slug === slug);
};

export const selectFeaturedCampsite = (state) => {
    return state.campsites.campsitesArray.find((campsite) => campsite.featured);
};


