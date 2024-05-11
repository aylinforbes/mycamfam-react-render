import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        sex: "Sex",
        dob: "Dob",
        dod: "Dod",
        dams_sire: "Dams_sire",
        sire: "Sire",
        dams: "Dams"
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseSex: (state, action) => { state.sex = action.payload},
        chooseDob: (state, action) => { state.dob = action.payload},
        chooseDod: (state, action) => { state.dod = action.payload},
        chooseDams_sire: (state, action) => { state.dams_sire = action.payload},
        chooseSire: (state, action) => { state.sire= action.payload},
        chooseDams: (state, action) => { state.dams = action.payload}
}
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseSex, chooseDob, chooseDod, chooseDams_sire, chooseSire, chooseDams } = rootSlice.actions