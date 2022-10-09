import {
  Paper,
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Box,
} from '@mui/material';
import dayjs from 'dayjs';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CourseForm from '../components/CourseForm';

function CoursePage() {
  const courseId = Number(useParams().courseId);
  const navigate = useNavigate();
  const toHome = () => navigate('/courses');

  const [showForm, setShowForm] = React.useState(false);
  const openForm = () => setShowForm(true);
  const onFormClose = () => setShowForm(false);
  const onFormSubmit = () => {};

  return (
    <Paper sx={{ width: '100%' }}>
      <Toolbar>
        <Typography component="div" variant="h6" sx={{ flex: 1 }}>
          Курс #{courseId}
        </Typography>
        <Tooltip title="Новый курс">
          <IconButton onClick={openForm}>
            <Icon>edit</Icon>
          </IconButton>
        </Tooltip>
        <Tooltip title="К списку курсов">
          <IconButton onClick={toHome}>
            <Icon>list</Icon>
          </IconButton>
        </Tooltip>
      </Toolbar>
      <CourseForm
        open={showForm}
        onClose={onFormClose}
        onSubmit={onFormSubmit}
        edit
      />
      <Box sx={{ px: 3, pb: 3 }}>
        <Box>
          <Typography
            component="span"
            variant="body1"
            color="white"
            sx={{ backgroundColor: 'primary.main', p: 0.5 }}
          >
            {dayjs().format('DD-MM-YYYY')}
          </Typography>
          <Typography component="p" variant="body1" sx={{ mt: 2 }}>
            Ducimus ut exercitationem rerum vero alias dolorum. Quisquam aperiam
            cumque id consectetur. Ducimus odit cum sint ut velit id quod
            veritatis. Incidunt qui ipsum error. Voluptatum atque sapiente nisi
            fugit dicta et quis illo. Vitae officia ducimus eum repellendus. Est
            cum quidem enim molestias. Culpa enim autem quod. Quia reiciendis
            mollitia dolorem qui sapiente molestiae. Aliquid non et quia. Illum
            ratione ut consectetur ducimus dolorem consequuntur. Reprehenderit
            quas et atque dolorem adipisci ex. Sequi occaecati fugiat nostrum
            est modi nobis. Eligendi sint eum ex. Ex ea dolores fuga esse.
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

export default CoursePage;
