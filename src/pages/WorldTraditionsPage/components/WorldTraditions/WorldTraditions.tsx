import React, { FC } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { styles } from "./WorldTraditions.styled";
import kalyady from "assets/images/traditions/kalyady.jpg";
import nickolay from "assets/images/traditions/nickolay.jpg";
import tree from "assets/images/traditions/tree.jpg";
import food from "assets/images/traditions/food.jpg";
import moroz from "assets/images/traditions/moroz.jpg";

export const WorldTraditions: FC = () => {
  return (
    <Box sx={styles.traditionsContainer}>
      <Typography sx={styles.traditionsTitle}>
        Традиции празднования Нового года в мире. В разработке.
      </Typography>
      {/* <Box sx={styles.traditionsSection}>
        <Box sx={styles.traditionsText}>
          <Typography sx={styles.traditionsSubtitle}>
            Новый год в древности
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            В древности у белорусов было только два времени года - лето, когда
            царит тепло и все растет, и зима, которую нужно преодолеть. Люди
            внимательно наблюдали за звездами и определили день весеннего
            равноденствия, когда день становится длиннее, а погода - теплее.
            Именно этот день стали отмечать, ходя по соседским дворам и желая
            добра и счастья - так возник обычай &quot;валачобніцтва&quot;. В
            народе сложилось множество песен, связанных с этим обрядом.
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Но христианская церковь не одобряла языческие праздники. В
            результате, празднование Нового года было перенесено на три месяца
            раньше, связав его с Рождеством Христовым. Народ, хоть и с некоторым
            сопротивлением, согласился на это решение. Традиционные обряды
            &quot;валачобніцтва&quot; были перенесены на зиму и стали известны
            как Каляды. Калядовщики надевают маски с изображением козы, медведя
            и других животных, переворачивают тулупы наизнанку, чтобы отпугнуть
            злых сил. В таком обличии они гуляют по деревням и исполняют
            колядные песни.
          </Typography>
        </Box>
        <CardMedia
          sx={styles.traditionsPicture}
          component="img"
          image={kalyady}
          alt="Kalyady"
        />
      </Box>
      <Box sx={styles.traditionsSectionReverse}>
        <Box sx={styles.traditionsText}>
          <Typography sx={styles.traditionsSubtitle}>
            Зюзя и Святой Николай
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Древние белорусы верили, что божество Зюзя было связано с зимней
            стужей. Согласно народным легендам, Зюзя был пузатым коротышкой с
            непричесанной бородой и ходил босиком. Он обитал в лесу, но зимой
            приходил в деревни и являлся предвестником морозов. В праздничных
            обрядах Зюзя упоминался до XIX века и считался предшественником Деда
            Мороза.
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Изначально языческий Зюзя был ассоциирован с зимними обычаями, но со
            временем христианские традиции влияли на эти празднества. Важную
            роль в христианизации играл архиепископ Николай из Миры, который жил
            в IV веке в Византии. Николай стал покровителем народа, и после его
            смерти он был объявлен святым. В Беларуси день святителя Николая
            отмечается 19 декабря. По мнению некоторых, со временем Николай
            Чудотворец превратился в более понятного и детям знакомого персонажа
            - Деда Мороза. Таким образом, Дед Мороз считается эволюционным
            наследником Зюзи и Николая Чудотворца.
          </Typography>
        </Box>
        <CardMedia
          sx={styles.traditionsPicture}
          component="img"
          image={nickolay}
          alt="Nickolay"
        />
      </Box>
      <Box sx={styles.traditionsSection}>
        <Box sx={styles.traditionsText}>
          <Typography sx={styles.traditionsSubtitle}>
            Елочная традиция
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Традиция украшать елку на Новый год пришла к белорусам около 150 лет
            назад из Западной Европы. В исходной версии ставили только веточку,
            символизирующую вечную жизнь. Однако наши предки решили не
            ограничиваться маленьким деревцем и принесли в дом целую елку.
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Сначала эту новогоднюю традицию переняла только шляхта, а после в XX
            веке она стала распространяться среди простых людей - крестьян,
            ремесленников и рабочих. Елку украшали новогодними елочными
            игрушками, сладостями, мишурой, на макушку ставили звезду или
            верхушку.
          </Typography>
        </Box>
        <CardMedia
          sx={styles.traditionsPicture}
          component="img"
          image={tree}
          alt="Tree"
        />
      </Box>
      <Box sx={styles.traditionsSectionReverse}>
        <Box sx={styles.traditionsText}>
          <Typography sx={styles.traditionsSubtitle}>
            Блюда на Новый год
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            В Беларуси новогодние празднования традиционно начинались с
            Рождества, затем следовал Новый год и Крещение. На каждом ужине
            обязательно присутствовала кутья: постная на Рождество и Крещение и
            более богатая - с медом и изюмом - на Новый год.
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            На новогодний стол в Беларуси выставлялись 12 разнообразных блюд,
            которые символизировали разные времена года. Еда была простой -
            колбасы, котлеты, масло, сыр, блины, соленые и маринованные овощи,
            кисели или компоты, рыба, грибы. Все, что было в погребе. Накрывая
            богатый стол на праздник, люди надеялись, что такой достаток будет в
            семье весь год, ведь считалось, что «как встретишь Новый год, так
            его и проведешь».
          </Typography>
        </Box>
        <CardMedia
          sx={styles.traditionsPicture}
          component="img"
          image={food}
          alt="Food"
        />
      </Box>
      <Box sx={styles.traditionsSection}>
        <Box sx={styles.traditionsText}>
          <Typography sx={styles.traditionsSubtitle}>
            Современные традиции
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Сейчас на новогоднем столе белорусов можно встретить оливье, селедку
            под шубой, мандарины и другие блюда, а также шампанское. В момент,
            когда часы бьют полночь 12 раз, принято загадывать желания, и
            считается, что они обязательно сбудутся. Новый год по-прежнему
            считается семейным долгожданным праздником, когда за столом
            собираются родные люди, дарят друг другу подарки и желают счастья и
            благополучия.
          </Typography>
          <Typography sx={styles.traditionsDescription}>
            Еще в новогодние праздники можно посетить резиденцию Деда Мороза в
            Беловежской пуще или съездить в деревню Озерцы Витебской области к
            Зюзе Поозерскому, который радушно встречает туристов и угощает их
            традиционными блинами и пряниками, приготовленными по старинным
            рецептам.
          </Typography>
        </Box>
        <CardMedia
          sx={styles.traditionsPicture}
          component="img"
          image={moroz}
          alt="Moroz"
        />
      </Box> */}
    </Box>
  );
};
