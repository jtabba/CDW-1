import { QueryClientProvider, QueryClient } from 'react-query'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { customTheme } from './theme/theme'
import { render } from 'react-dom'
import './index.css'

const App = () => {
    const queryClient = new QueryClient()

    return (
        <Box maxWidth="100%" maxHeight="100%" position="relative">
            <ChakraProvider theme={customTheme}>
                <QueryClientProvider client={queryClient}></QueryClientProvider>
            </ChakraProvider>
        </Box>
    )
}

render(<App />, document.getElementById('App'))
