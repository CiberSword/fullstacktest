import { useState } from 'react';
import { TextField, Button, Box, IconButton, Typography, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
dayjs.locale('es');

export const CreatePerson = ({ handleMode, initialFormData }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const dateFormat = 'DD-MM-YYYY';
  const currentDate = dayjs(new Date()).format(dateFormat);
  const emptyForm = {
    nombre: '',
    apellido: '',
    fechaNacimiento: currentDate,
    puesto: '',
    sueldo: '',
  };
  const [formData, setFormData] = useState(initialFormData || emptyForm);
  const isFormEmpty = Object.values(formData).some((value) => value === '');
  console.log('CS_date', dayjs(formData?.fechaNacimiento));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      fechaNacimiento: dayjs(date).isValid() ? dayjs(date).format(dateFormat) : '',
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    initialFormData
      ? await axios.put(`${apiUrl}/person`, formData)
      : await axios.post(`${apiUrl}/person`, formData);
    Swal.fire({
      text: 'Datos envíados correctamente.',
      icon: 'success',
      confirmButtonColor: '#a5dc86',
    }).then(() => {
      handleMode('TABLE_VIEW');
    });
  };

  return (
    <Stack
      sx={{
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '5px',
      }}
      spacing={2}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <IconButton sx={{ color: '#0c2d73' }} onClick={() => handleMode('TABLE_VIEW')}>
          <ArrowBackIcon />
        </IconButton>
        <Typography sx={{ color: 'black' }}>Completa los datos del formulario</Typography>
      </Box>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          width: '30rem',
        }}
      >
        <TextField label="Nombre" name="nombre" value={formData.nombre} onChange={handleChange} />
        <TextField
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleChange}
        />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Fecha de Nacimiento"
            value={dayjs(formData?.fechaNacimiento, 'DD-MM-YYYY')}
            format={dateFormat}
            onChange={handleDateChange}
          />
        </LocalizationProvider>
        <TextField label="Puesto" name="puesto" value={formData.puesto} onChange={handleChange} />
        <TextField
          label="Sueldo"
          type="number"
          name="sueldo"
          value={formData.sueldo}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" disabled={isFormEmpty}>
          Enviar
        </Button>
      </Box>
    </Stack>
  );
};
