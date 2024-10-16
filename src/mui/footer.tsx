import { Box, Link } from '@mui/material'

const items = ['PRIVACY POLICY', 'TERMS OF SERVICE', 'SUPPORT']

const MuiFooter = () => {
  return (
    <Box
      sx={{
        flex: 0,
        minHeight: '76px',
        backgroundColor: '#f5f7f8',
        color: 'black',
        borderTop: '1px solid black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}>
      {items.map((item) => (
        <Link key={item} href='#' color='inherit' underline='hover'>
          {item}
        </Link>
      ))}
    </Box>
  )
}
export { MuiFooter }
