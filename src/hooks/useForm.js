import { useState, useCallback } from 'react';
import { set } from 'lodash'

const useForm = (initialFormData) => {
    const [data, setData] = useState(initialFormData);
    
    const handleFormFieldChange = useCallback((event) => {
        setData((state) => {
            const { name, value } = event.target;
            const stateCopy = set(state, name, value);
            return {
                ...stateCopy
            }
        })
    }, [])

    const handleFormReset = useCallback(() => {
        setData(initialFormData)
    }, [initialFormData])

    return [data, handleFormFieldChange, handleFormReset];
}

export default useForm;