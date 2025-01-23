import { Box, Typography } from '@mui/material';
import { MainTable } from '../../components/MainTable/MainTable.jsx';
import { useState } from 'react';
import { CreatePerson } from '../CreatePerson/CreatePerson.jsx';

export const StartPage = () => {
  const [mode, setMode] = useState('TABLE_VIEW');
  const [initialFormData, setInitialFormData] = useState();

  const handleMode = (mode) => setMode(mode);
  const handleInitialData = (data) => setInitialFormData(data);

  const RENDER_COMPONENT = {
    TABLE_VIEW: <MainTable handleMode={handleMode} handleInitialData={handleInitialData} />,
    FORM_VIEW: <CreatePerson handleMode={handleMode} initialFormData={initialFormData} />,
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Typography variant="h4">Administración de Personal</Typography>
      {RENDER_COMPONENT[mode]}
    </Box>
  );
};
