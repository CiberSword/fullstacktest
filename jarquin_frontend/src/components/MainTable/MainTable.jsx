import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import axios from 'axios';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

export const MainTable = ({ handleMode, handleInitialData }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [personsData, setPersonsData] = useState([]);
  const dateFormat = 'DD-MM-YYYY';

  useEffect(() => {
    getPersonsData();
  }, []);

  const getPersonsData = async () => {
    const persons = await axios.get(apiUrl + '/person');
    setPersonsData(persons?.data?.data);
  };

  const deletePerson = async (id) => {
    await axios.delete(apiUrl + `/person/${id}`);
    return getPersonsData();
  };

  const createPerson = () => {
    handleInitialData(null);
    handleMode('FORM_VIEW');
  };

  const editPerson = (row) => {
    handleInitialData(row);
    handleMode('FORM_VIEW');
  };

  const openDeleteConfirmModal = (row) => {
    Swal.fire({
      text: '¿Estás seguro de eliminar esta fila?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#ff0000',
    }).then((result) => {
      result.isConfirmed && deletePerson(row.id);
    });
  };

  return (
    <Box>
      <TableContainer
        component={Paper}
        sx={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}
      >
        <Button variant={'contained'} sx={{ maxWidth: '12rem' }} onClick={createPerson}>
          Insertar registro
        </Button>

        <Table sx={{ minWidth: 850 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellido</TableCell>
              <TableCell>Fecha de Nacimiento</TableCell>
              <TableCell>Puesto</TableCell>
              <TableCell>Sueldo</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {personsData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.nombre}</TableCell>
                <TableCell>{row.apellido}</TableCell>
                <TableCell>{row.fechaNacimiento}</TableCell>
                <TableCell>{row.puesto}</TableCell>
                <TableCell>{row.sueldo}</TableCell>
                <TableCell>
                  {
                    <div>
                      <IconButton sx={{ color: '#0c2d73' }} onClick={() => editPerson(row)}>
                        <EditIcon />
                      </IconButton>
                      <IconButton sx={{ color: 'red' }} onClick={() => openDeleteConfirmModal(row)}>
                        <DeleteIcon />
                      </IconButton>
                    </div>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
