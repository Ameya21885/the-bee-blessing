import { Box, Fab } from '@mui/material'
import Image from 'next/image'

const WhattsAppShare = () => {
  return (
<Box
  sx={{
    position: 'fixed',
   
    bottom: 16,
    right: 16,
    '& > :not(style)': { m: 1 },
  }}
>
  <a href="https://wa.me/8208273955?text=Hello how can I help you?" target="_blank" rel="noopener noreferrer">
    <Fab color="primary" aria-label="add">
      <Image
        src="https://i.pinimg.com/enabled_hi/564x/93/b2/65/93b265c795140247db600ac92e58746a.jpg"
        alt="WhatsApp-logo"
        width={60}
        height={60}
        style={{ borderRadius:'15px'}}
      />
    </Fab>
  </a>
</Box>

  
  )
}

export default WhattsAppShare