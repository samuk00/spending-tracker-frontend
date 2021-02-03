import categoryService from '../services/categories'

export const initializeCategories = (id) => {
    return async dispatch => {
        const categories = await categoryService.getCategories(id)
        dispatch({
            type: 'INIT_CATEGORIES',
            data: categories
        })
    }
}

const categoryReducer = (state = [], action) => {
    console.log(action.type) 
        switch(action.type){
            case 'INIT_CATEGORIES':
                return action.data
            default:
                return state
        }
}

export default categoryReducer