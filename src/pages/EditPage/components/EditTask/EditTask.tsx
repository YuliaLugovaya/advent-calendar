import React, { FC, useState } from "react";
import {
  Box,
  Button,
  CardMedia,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { styles } from "./EditTask.styled";
import { CalendarItemsState, Task } from "store/edit/editTypes";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "store/edit/editActions";
import edit from "assets/images/png/edit.png";
import done from "assets/images/png/complete.png";

export const EditTask: FC = () => {
  const tasks = useSelector(
    (rootReducer: { edit: CalendarItemsState }) => rootReducer.edit.tasks,
  );
  const isMobile = useMediaQuery("(max-width: 767px)");

  const dispatch = useDispatch();

  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedTask, setEditedTask] = useState("");

  const handleEdit = (task: Task) => {
    setEditingTask(task);
    setEditedTitle(task.title);
    setEditedTask(task.task);
  };

  const handleSave = () => {
    if (!editingTask) return;

    const updatedTask: Task = {
      ...editingTask,
      title: editedTitle,
      task: editedTask,
    };

    dispatch(updateTask(updatedTask));

    setEditingTask(null);
    setEditedTitle("");
    setEditedTask("");
  };

  return (
    <Box sx={styles.editContainer}>
      <Table>
        <TableHead sx={styles.editHead}>
          <TableRow>
            {isMobile ? (
              <>
                <TableCell sx={styles.editTitles}>Число / Заголовок</TableCell>
                <TableCell sx={styles.editTitles}>Задание</TableCell>
                <TableCell sx={styles.editTitles}>
                  <Typography>Ред.</Typography>
                </TableCell>
              </>
            ) : (
              <>
                <TableCell sx={styles.editTitles}>
                  <Typography>Число</Typography>
                </TableCell>
                <TableCell sx={styles.editTitles}>Заголовок</TableCell>
                <TableCell sx={styles.editTitles}>Задание</TableCell>
                <TableCell sx={styles.editTitles}>
                  <Typography>Опция</Typography>
                </TableCell>
              </>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((item) => (
            <TableRow key={item.id}>
              {isMobile ? (
                <>
                  <TableCell sx={styles.editTable}>
                    <TableRow sx={styles.editTable}>{item.text}</TableRow>
                    <TableRow sx={styles.editTitle}>
                      {editingTask?.id === item.id ? (
                        <TextField
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          multiline
                          sx={styles.editTextarea}
                        />
                      ) : (
                        item.title
                      )}
                    </TableRow>
                  </TableCell>
                </>
              ) : (
                <>
                  <TableCell sx={styles.editTable}>{item.text}</TableCell>
                  <TableCell sx={styles.editTitle}>
                    {editingTask?.id === item.id ? (
                      <TextField
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                        multiline
                        sx={styles.editTextarea}
                      />
                    ) : (
                      item.title
                    )}
                  </TableCell>
                </>
              )}

              <TableCell sx={styles.editTable}>
                {editingTask?.id === item.id ? (
                  <TextField
                    value={editedTask}
                    onChange={(e) => setEditedTask(e.target.value)}
                    multiline
                    sx={styles.editTextarea}
                  />
                ) : (
                  item.task
                )}
              </TableCell>
              <TableCell sx={styles.editTable}>
                {editingTask?.id === item.id ? (
                  <Button onClick={handleSave} sx={styles.saveButton}>
                    {isMobile ? (
                      <CardMedia
                        sx={styles.editIcon}
                        component="img"
                        image={done}
                        alt="Save"
                      />
                    ) : (
                      <Typography>Сохранить</Typography>
                    )}
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit(item)}
                    sx={styles.editButton}
                  >
                    {isMobile ? (
                      <CardMedia
                        sx={styles.editIcon}
                        component="img"
                        image={edit}
                        alt="Save"
                      />
                    ) : (
                      <Typography>Редактировать</Typography>
                    )}
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
