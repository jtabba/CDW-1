import { useState, useEffect } from "react";  
import { useToast } from "@chakra-ui/react";

interface AxiosResponseObject {
    data?: any, 
    status: number;
    statusText: string,
    headers: any, 
    config: any,
    request: any,
}


export const useToastNotification = (response: AxiosResponseObject)=>{
    const toast = useToast()
    const [responseObj, setresponseObj] = useState<number>(404)

    useEffect(()=> {
        const codeStatus = response.status < 300 ? 'success' : 'error'
        setresponseObj(response.status)
        toast({
            title: 'Status message',
            description: `${response.statusText}`,
            status: codeStatus ,
            isClosable: true,
            duration: 2000,

        })
    },[response, toast, responseObj])
        return toast
}


























// export const useToastNotification  = (response: AxiosResponseObject) => {
//     const [resNumCode, setResNumCode] = useState<number>(0)
//     const toast = useToast()
    
//     useEffect(() => {
//         const codeStatus = response.status < 300 ? 'success' : 'error'
//         setResNumCode(response.status)
//         toast({
//             

//         })
       
//     }, [response, resNumCode, toast])

//     return toast
// }
