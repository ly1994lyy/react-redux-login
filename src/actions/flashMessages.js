import {ADD_FLASH_MESSAGE,DELETE_FLASH_MESSAGE} from '../constants'

export const addFlashMessage = (message) => {
  return {
    type:ADD_FLASH_MESSAGE,
    message
  }
}

export const daleteFlashMessage = (id) => {
  return {
    type:DELETE_FLASH_MESSAGE,
    id
  }
}