import React, { useState } from 'react'
import {
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  CircularProgress,
  ThemeProvider,
  createTheme
} from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import Evidence from '~/model/Evidence/Evidence'
import EvidenceApi from '~/api/EvidenceApi'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
interface EvidenceListProps {
  data: Evidence[]
}

const EvidenceList: React.FC<EvidenceListProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(data?.length / itemsPerPage)
  const currentData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value)
  }

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState<Date | null>(null)
  const [proofUrl, setProofUrl] = useState('')
  const [points, setPoints] = useState('')
  const [semesterId, setSemesterId] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const handleSubmit = async () => {
    setIsLoading(true)
    const dateString = date ? date.toISOString().split('T')[0] : ''
    const payload = {
      name,
      description,
      date: dateString,
      proof_url: proofUrl,
      points: Number(points),
      semester_id: Number(semesterId)
    }

    try {
      const response = await EvidenceApi.SubmitMyEvent(payload)
      console.log('Submit success:', response)
      setName('')
      setDescription('')
      setDate(null)
      setProofUrl('')
      setPoints('')
      setSemesterId('')
      handleClose()
    } catch (error) {
      console.error('Submit error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const customTheme = createTheme({
    palette: {
      primary: {
        main: '#1e3a8a'
      }
    }
  })

  return (
    <div className='w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-lg font-bold'>Danh sách minh chứng</h2>
        <div>
          <Button onClick={handleOpen} variant='contained'>
            Thêm mới
          </Button>
        </div>
      </div>
      {isLoading ? (
        <div className='flex justify-center items-center min-h-[200px]'>
          <CircularProgress />
        </div>
      ) : (
        <>
          <table className='w-full border-collapse border-blue-950'>
            <thead>
              <tr className='bg-blue-900 text-white border-blue-950'>
                <th className='border p-2 border-blue-950'>TT</th>
                <th className='border p-2 border-blue-950'>Thời điểm</th>
                <th className='border p-2 border-blue-950'>Số điểm</th>
                <th className='border p-2 border-blue-950'>Nguồn khai báo</th>
                <th className='border p-2 border-blue-950'>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {data?.length > 0 ? (
                currentData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={item.status === 'APPROVED' ? 'bg-pink-100 border-l-4 border-red-500' : ''}
                  >
                    <td className='border p-2 text-center'>{(currentPage - 1) * itemsPerPage + index + 1}</td>
                    <td className='border p-2 text-center'>{item.date}</td>
                    <td className='border p-2 text-center'>
                      <a href='#' className='text-blue-500'>
                        {item.points}
                      </a>
                    </td>
                    <td className='border p-2 text-center text-ellipsis max-w-[150px] whitespace-nowrap overflow-hidden'>
                      <a href={item.proofUrl}>{item.proofUrl}</a>
                    </td>
                    <td
                      className={`border p-2 text-center ${
                        item.status === 'APPROVED'
                          ? 'text-green-500 border-black'
                          : item.status === 'REJECTED'
                            ? 'text-red-500 border-black'
                            : item.status === 'PENDING'
                              ? 'text-yellow-500 border-black'
                              : 'text-gray-500 border-black'
                      }`}
                    >
                      {item.status === 'APPROVED'
                        ? 'Được duyệt'
                        : item.status === 'REJECTED'
                          ? 'Bị từ chối'
                          : item.status === 'PENDING'
                            ? 'Đang chờ duyệt'
                            : 'Không xác định'}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className='border p-4 text-center text-gray-500'>
                    Không có dữ liệu
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {data?.length > itemsPerPage && (
            <div className='mt-4 flex flex-row justify-end'>
              <Pagination
                count={totalPages}
                page={currentPage}
                onChange={handlePageChange}
                color='primary'
                sx={{ marginTop: '16px' }}
              />
            </div>
          )}
        </>
      )}

      <ThemeProvider theme={customTheme}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{ backgroundColor: '#1e3a8a', color: 'white' }}>Thêm Minh Chứng Mới</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin='dense'
              label='Tên minh chứng'
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin='dense'
              label='Mô tả'
              fullWidth
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker label='Ngày' value={date} onChange={(newValue) => setDate(newValue)} format='yyyy-MM-dd' />
            </LocalizationProvider>
            <TextField
              margin='dense'
              label='Link chứng từ'
              fullWidth
              value={proofUrl}
              onChange={(e) => setProofUrl(e.target.value)}
            />
            <TextField
              margin='dense'
              label='Số điểm'
              fullWidth
              value={points}
              onChange={(e) => setPoints(e.target.value)}
            />
            <TextField
              margin='dense'
              label='ID Kỳ học'
              fullWidth
              value={semesterId}
              onChange={(e) => setSemesterId(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color='primary' variant='outlined'>
              Hủy
            </Button>
            <Button onClick={handleSubmit} color='primary' variant='contained'>
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </ThemeProvider>
    </div>
  )
}

export default EvidenceList
