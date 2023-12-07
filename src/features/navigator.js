import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  nature: true,
  benefits: false,
  about: false,
}

const navigatorSLice = createSlice({
  name: 'navigator',
  initialState,
  reducers: {
    toNature: (state) => {
      if (state.nature) return state
      const newState = {}
      for (let nav in state) {
        newState[nav] = nav === 'nature'
      }
      return newState
    },
    toBenefits: (state) => {
      if (state.benefits) return state
      const newState = {}
      for (let nav in state) {
        newState[nav] = nav === 'benefits'
      }
      return newState
    },
    toAbout: (state) => {
      if (state.about) return state
      const newState = {}
      for (let nav in state) {
        newState[nav] = nav === 'about'
      }
      return newState
    },
  },
})

export default navigatorSLice.reducer

export const { toAbout, toNature, toBenefits } = navigatorSLice.actions
