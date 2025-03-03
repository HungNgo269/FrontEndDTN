import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { Avatar } from '@mui/material'

export default function ActivityCard({ CardImage }) {
  return (
    <div className='flex flex-col justify-center items-center h-full sm:p-1 md:p-2 lg:p-4 mx-4'>
      <Card
        className=' lg:w-[21rem] lg:h-[31rem] cursor-pointer'
        sx={{
          borderRadius: '20px',
          boxShadow: 3,
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            transform: 'scale(1.05)',
            boxShadow: 6
          }
        }}
      >
        <CardMedia
          component='img'
          image={CardImage}
          alt='Activity'
          className='cursor-pointer'
          sx={{
            aspectRatio: '3/2',
            objectFit: 'cover',
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px'
          }}
        />
        <CardHeader
          avatar={
            <Avatar className='bg-amber-900' aria-label='recipe'>
              R
            </Avatar>
          }
          title='Tên hoạt động'
          className='text-blue-900 hover:text-blue-900 cursor-pointer'
          titleTypographyProps={{ variant: 'h6', fontWeight: 'bold' }}
        />
        <CardContent className='border-b border-gray-100 w-full h-2/7'>
          <Typography variant='body2' className='text-blue-900'>
            Nội dung hoạt động
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
