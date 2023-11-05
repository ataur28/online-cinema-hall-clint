import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title} - OCL`;
    }, [title])
}

export default useTitle;