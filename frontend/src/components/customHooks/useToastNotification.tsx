import React, { useState, useEffect} from "react";
import {Box, useToast} from '@chakra-ui/react'
import { MESSAGE_ENUM } from "./enums";


export const useToastNotification = () => {
    const [message, setMessage] = useState('')
    const toast = useToast()

    const getStatusBytoasat = (code: number) => {
        if(code >= 200 && code < 300){
            return 'success'
            // green toast
        }else if(code >=300 && code < 400){
            return 'info'
            // blue toast
        }else if(code >= 400 && code <= 500){
            return 'error'
            // red toast
        }else if(code >= 500 && code < 600){
            return 'warning'
            //yellow toast
        }
    }

    const showToast = (statusCode: number) => {
        
            const status = getStatusBytoasat(statusCode)
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
       
        return showToast
    
    
} 