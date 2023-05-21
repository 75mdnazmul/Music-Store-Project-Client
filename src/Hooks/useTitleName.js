import { useEffect } from "react"

const useTitleName = title => {
    useEffect(()=>{
        document.title = `${title} - Music Store`;
    },[title])
}

export default useTitleName;