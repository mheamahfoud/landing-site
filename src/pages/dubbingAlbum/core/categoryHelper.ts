const CATEGORY_PAGINATION_LOCAL_STORAGE_KEY = 'KT-REACT-current-pagination-index'
const getCurrentPage = (categoryId:number): number => {
  if (!localStorage) {
    return
  }

  const lsValue: string | null = localStorage.getItem(CATEGORY_PAGINATION_LOCAL_STORAGE_KEY+categoryId)
 
  if (!lsValue) {
    return 1
  }

  try {
    const pageNumber: number = JSON.parse(lsValue) as number
   
    if (pageNumber) {
      // You can easily check auth_token expiration also
      return pageNumber
    }
    else{
      return 1;
    }
  } catch (error) {

    console.error('AUTH LOCAL STORAGE PARSE ERROR', error)
  }
}

const setPagination = (pageNumber: number,categoryId:number) => {
  if (!localStorage) {
    return
  }

  try {
    const lsValue = JSON.stringify(pageNumber)
    localStorage.setItem(CATEGORY_PAGINATION_LOCAL_STORAGE_KEY+categoryId, lsValue)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE SAVE ERROR', error)
  }
}

const removePagination = (categoryId:number) => {
  if (!localStorage) {
    return
  }
  try {
    localStorage.removeItem(CATEGORY_PAGINATION_LOCAL_STORAGE_KEY+categoryId)
  } catch (error) {
    console.error('AUTH LOCAL STORAGE REMOVE ERROR', error)
  }
}

export {getCurrentPage,setPagination,removePagination}