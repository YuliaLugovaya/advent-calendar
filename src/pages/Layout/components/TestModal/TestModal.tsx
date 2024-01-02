import React, { FC } from "react";
import { Typography, Box, Modal, IconButton, CardMedia } from "@mui/material";
import { ReactComponent as CloseIcon } from "assets/svg/icon_close.svg";
import { styles } from "./TestModal.styled";
import { ITestModalProps } from "./TestModalTypes";
import lights from "assets/images/png/christmas-lights.png";

export const TestModal: FC<ITestModalProps> = ({ openModal, modalClose }) => {
  return (
    <Modal
      open={openModal}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modalContainer}>
        <CardMedia
          sx={styles.modalLights}
          component="img"
          image={lights}
          alt="lights"
        />
        <IconButton
          aria-label="Close"
          sx={styles.modalIconClose}
          onClick={modalClose}
        >
          <CloseIcon />
        </IconButton>
        <Typography sx={styles.modalDescription}>
          До декабря новогодний адвент-календарь работает в режиме ограниченной
          функциональности. Первые 5 заданий открыты и доступны круглый год -
          можно их посмотреть, оценить и пройти, поместить шарики на ёлку,
          почитать про Новый год в отдельном разделе. Остальные задания ждут
          своего часа.
        </Typography>
        <Typography sx={styles.modalDescription}>
          Начиная с 1 декабря каждый день вы сможете открывать новое задание,
          чтобы почувствовать атмосферу праздника и окунуться в атмосферу
          предновогоднего волшебства!
        </Typography>
      </Box>
    </Modal>
  );
};
