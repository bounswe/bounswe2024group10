/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,

  modal: {
    shown: false,
    title: '',
    text: '',
    variant: '',
    name: '',
  },
  toast: {
    shown: false,
    title: '',
    text: 'İşlem Başarılı.',
    variant: 'success',
    name: '',
    icon: null,
  },
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload
    },

    showModal: (state, action) => {
      const { title, text, variant, name } = action.payload
      state.modal.shown = true
      state.modal.title = title
      state.modal.text = text
      state.modal.variant = variant ?? 'success'
      state.modal.name = name ?? ''
    },

    closeModal: (state) => {
      state.modal.shown = false
      state.modal.title = ''
      state.modal.text = 'İşlem Başarılı'
      state.modal.variant = 'success'
      state.modal.name = ''
    },
    showToast: (state, action) => {
      const { title, text, variant, name, icon } = action.payload
      state.toast.shown = true
      state.toast.title = title
      state.toast.text = `${text}`
      state.toast.variant = variant
      state.toast.name = name
      state.toast.icon = icon
    },

    closeToast: (state) => {
      state.toast.shown = false
      state.toast.title = ''
      state.toast.text = 'İşlem Başarılı'
      state.toast.variant = 'success'
      state.toast.name = ''
      state.toast.icon = null
    },
  },
})

const { reducer, actions } = uiSlice
export const { showModal, closeModal, setLoading, closeToast, showToast } =
  actions
export default reducer
