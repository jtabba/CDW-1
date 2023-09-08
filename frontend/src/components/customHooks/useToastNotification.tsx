import React, { useState, useEffect} from "react";
import {Box, useToast} from '@chakra-ui/react'
import { MESSAGE_ENUM } from "./enums";


export const useToastNotification = (responseObject: number) => {
    const [message, setMessage] = useState('')
    const [statusCode, setStatusCode] = useState(null)
    const toast = useToast()

    const toastStatus = (code: number) => code < 300 ? 'success' : 'error'

    useEffect(()=> {
       setStatusCode(responseObject)
    }, [responseObject])

    const showToast = (statusCode: number) => {
            
        const status = toastStatus(statusCode)
        setMessage(MESSAGE_ENUM[statusCode])

            toast({
                position: 'bottom-right',
                status: status,
                isClosable: true,
                variant: 'left-accent',
                render: ()=>(
                    <Box>
                        {message}
                    </Box>
                )
            })
        }
       
        return { showToast }
    
    
} 