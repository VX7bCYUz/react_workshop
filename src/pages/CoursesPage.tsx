import {
  Icon,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import CourseForm from '../components/CourseForm';

interface Data {
  id: number;
  name: string;
  from: Date;
  to: Date;
}

const createData = (id: number, name: string, from: Date, to: Date): Data => ({
  id,
  name,
  from,
  to,
});
const rows = [
  createData(305, 'Cupcake', new Date(), new Date()),
  createData(452, 'Donut', new Date(), new Date()),
  createData(262, 'Eclair', new Date(), new Date()),
  createData(159, 'Yoghurt', new Date(), new Date()),
  createData(356, 'Bread', new Date(), new Date()),
  createData(488, 'Honey', new Date(), new Date()),
  createData(565, 'Icecream', new Date(), new Date()),
  createData(113, 'Jelly', new Date(), new Date()),
  createData(121, 'KitKat', new Date(), new Date()),
  createData(844, 'Lollipop', new Date(), new Date()),
  createData(841, 'Lime', new Date(), new Date()),
  createData(287, 'Mango', new Date(), new Date()),
  createData(885, 'Lemon', new Date(), new Date()),
];

function CoursesPage() {
  const navigate = useNavigate();

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleClick = (event: React.MouseEvent<unknown>, id: Data['id']) => {
    navigate(`/courses/${id}`);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const [showForm, setShowForm] = React.useState(false);
  const openForm = () => setShowForm(true);
  const onFormClose = () => setShowForm(false);
  const onFormSubmit = () => {};

  return (
    <Paper sx={{ width: '100%' }}>
      <Toolbar>
        <Typography component="div" variant="h6" sx={{ flex: 1 }}>
          Курсы
        </Typography>
        <Tooltip title="Новый курс">
          <IconButton onClick={openForm}>
            <Icon>add</Icon>
          </IconButton>
        </Tooltip>
      </Toolbar>
      <CourseForm
        open={showForm}
        onClose={onFormClose}
        onSubmit={onFormSubmit}
      />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Дата начала</TableCell>
              <TableCell>Дата окончания</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
              .map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ cursor: 'pointer' }}
                  onClick={(evt) => handleClick(evt, row.id)}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.from.toLocaleDateString('ru-RU')}</TableCell>
                  <TableCell>{row.to.toLocaleDateString('ru-RU')}</TableCell>
                </TableRow>
              ))}
            {page > 1 && emptyRows > 0 && (
              <TableRow>
                <TableCell
                  colSpan={3}
                  sx={{ height: emptyRows * 53 }}
                ></TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10, 25]}
        page={page}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Элементов на странице"
        labelDisplayedRows={({ from, to, count }) =>
          `${from}-${to} из ${count}`
        }
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default CoursesPage;
