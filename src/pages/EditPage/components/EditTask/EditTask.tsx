import React, { FC, useState } from "react";
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { styles } from "./EditTask.styled";
import { CalendarItemsState, Task } from "store/edit/editTypes";
import { useDispatch, useSelector } from "react-redux";
import { updateTask } from "store/edit/editActions";

export const EditTask: FC = () => {
  const tasks = useSelector(
    (rootReducer: { edit: CalendarItemsState }) => rootReducer.edit.tasks,
  );

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
            <TableCell sx={styles.editTitles}>Число</TableCell>
            <TableCell sx={styles.editTitles}>Заголовок</TableCell>
            <TableCell sx={styles.editTitles}>Задание</TableCell>
            <TableCell sx={styles.editTitles}>Опция</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tasks.map((item) => (
            <TableRow key={item.id}>
              <TableCell sx={styles.editTable}>{item.text}</TableCell>
              <TableCell sx={styles.editTable}>
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
                    Сохранить
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleEdit(item)}
                    sx={styles.editButton}
                  >
                    Редактировать
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
