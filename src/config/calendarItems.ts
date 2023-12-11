import ballRed from "assets/images/calendar-items-icons/ball-red.png";
import ballWoody from "assets/images/calendar-items-icons/ball-woody.png";
import berries from "assets/images/calendar-items-icons/berries.png";
import berriesSmall from "assets/images/calendar-items-icons/berries-small.png";
import cake from "assets/images/calendar-items-icons/cake.png";
import chocolate from "assets/images/calendar-items-icons/chocolate.png";
import christmasGift from "assets/images/calendar-items-icons/christmas-gift.png";
import christmasOrnament from "assets/images/calendar-items-icons/christmas-ornament.png";
import christmasOrnamentColorful from "assets/images/calendar-items-icons/christmas-ornament-colorful.png";
import christmasTree from "assets/images/calendar-items-icons/christmas-tree.png";
import christmasTreeGifts from "assets/images/calendar-items-icons/christmas-tree-gifts.png";
import christmasTreeSnowy from "assets/images/calendar-items-icons/christmas-tree-snowy.png";
import cup from "assets/images/calendar-items-icons/cup.png";
import heart from "assets/images/calendar-items-icons/heart.png";
import hotChocolate from "assets/images/calendar-items-icons/hot-chocolate.png";
import man from "assets/images/calendar-items-icons/man.png";
import pearlPine from "assets/images/calendar-items-icons/pearl-pine.png";
import pine from "assets/images/calendar-items-icons/pine.png";
import pineCone from "assets/images/calendar-items-icons/pine-cone.png";
import ring from "assets/images/calendar-items-icons/ring.png";
import snowflake from "assets/images/calendar-items-icons/snowflake.png";
import snowman from "assets/images/calendar-items-icons/snowman.png";
import snowmanWithHat from "assets/images/calendar-items-icons/snowman-with-hat.png";
import snowmanWithRedHat from "assets/images/calendar-items-icons/snowman-with-red-hat.png";
import socks from "assets/images/calendar-items-icons/socks.png";
import star from "assets/images/calendar-items-icons/star.png";
import starWoodyBig from "assets/images/calendar-items-icons/star-woody-big.png";
import stars from "assets/images/calendar-items-icons/stars.png";
import starSmall from "assets/images/calendar-items-icons/star-small.png";
import starWoody from "assets/images/calendar-items-icons/star-woody.png";
import tree from "assets/images/calendar-items-icons/tree.png";
import ballDecemberFirst from "assets/images/balls/ball-1.png";
import ballDecemberSecond from "assets/images/balls/ball-2.png";
import ballDecemberThird from "assets/images/balls/ball-3.png";
import ballDecemberFourth from "assets/images/balls/ball-4.png";
import ballDecemberFifth from "assets/images/balls/ball-5.png";
import ballDecemberSixth from "assets/images/balls/ball-6.png";
import ballDecemberSeventh from "assets/images/balls/ball-7.png";
import ballDecemberEighth from "assets/images/balls/ball-8.png";
import ballDecemberNinth from "assets/images/balls/ball-9.png";
import ballDecemberTenth from "assets/images/balls/ball-10.png";
import ballDecemberEleventh from "assets/images/balls/ball-11.png";
import ballDecemberTwelfth from "assets/images/balls/ball-12.png";
import ballDecemberThirteenth from "assets/images/balls/ball-13.png";
import ballDecemberFourteenth from "assets/images/balls/ball-14.png";
import ballDecemberFifteenth from "assets/images/balls/ball-15.png";
import ballDecemberSixteenth from "assets/images/balls/ball-16.png";
import ballDecemberSeventeenth from "assets/images/balls/ball-17.png";
import ballDecemberEighteenth from "assets/images/balls/ball-18.png";
import ballDecemberNineteenth from "assets/images/balls/ball-19.png";
import ballDecemberTwentyth from "assets/images/balls/ball-20.png";
import ballDecemberTwentyFirst from "assets/images/balls/ball-21.png";
import ballDecemberTwentySecond from "assets/images/balls/ball-22.png";
import ballDecemberTwentyThird from "assets/images/balls/ball-23.png";
import ballDecemberTwentyFourth from "assets/images/balls/ball-24.png";
import ballDecemberTwentyFifth from "assets/images/balls/ball-25.png";
import ballDecemberTwentySixth from "assets/images/balls/ball-26.png";
import ballDecemberTwentySeventh from "assets/images/balls/ball-27.png";
import ballDecemberTwentyEighth from "assets/images/balls/ball-28.png";
import ballDecemberTwentyNinth from "assets/images/balls/ball-29.png";
import ballDecemberThirtieth from "assets/images/balls/ball-30.png";
import ballDecemberThirtyFirst from "assets/images/balls/ball-31.png";

const colors = {
  yellow: "#c29463",
  green: "#434a38",
  turquoise: "#1e2724",
  burgundy: "#421417",
  peach: "#d99f94",
  violet: "#5e4a4b",
};

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

const calendarItems = () => [
  {
    icon: ballRed,
    text: "1",
    id: "1",
    title: "Первый день зимы!",
    task: "Как здорово! Сегодня первый день зимы. Это значит, что совсем скоро будет Новый год. И самое первое праздничное задание - наряди с мамой ёлочку.",
    ball: ballDecemberFirst,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 1),
  },
  {
    icon: berries,
    text: "2",
    id: "2",
    title: "Дари обнимашки",
    task: "Начни день с самых тёплых объятий с любимыми людьми. А ещё подари обнимашку любимой игрушке.",
    ball: ballDecemberSecond,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 2),
  },
  {
    icon: cake,
    text: "3",
    id: "3",
    title: "День новогодних фильмов",
    task: "Начни с родными традицию - в выходной декабрьский день смотреть новогодний фильм. Выбери любой фильм и посмотри его полностью. Это может быть Гарри Поттер, Один дома или другой фильм.",
    ball: ballDecemberThird,
    colorBg: colors.turquoise,
    date: new Date(currentYear, 11, 3),
  },
  {
    icon: ballWoody,
    text: "4",
    id: "4",
    title: "День доброты",
    task: "Придумай, какие добрые дела ты можешь сделать сегодня. Это может быть помощь родным людям. Можешь помочь маме сделать завтрак или отсортировать игрушки. Придумай, что ты будешь делать в удовольствие.",
    ball: ballDecemberFourth,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 4),
  },
  {
    icon: chocolate,
    text: "5",
    id: "5",
    title: "Сегодня ты - волшебница!",
    task: "Придумай подарки для всех своих близких. Не забывай, что самое ценное в подарках - это любовь и забота, которые мы вкладываем в них. Запиши свои идеи и постарайся придумать что-то особенное для каждого.",
    ball: ballDecemberFifth,
    colorBg: colors.peach,
    date: new Date(currentYear, 11, 5),
  },
  {
    icon: christmasGift,
    text: "6",
    id: "6",
    title: "Веселая уборка",
    task: "Сегодня тебе предстоит навести порядок в своих вещах. А чтобы было веселее. включи свои любимые песни и преврати уборку в танцевальную вечеринку. Подпевай, танцуй и убирай одновременно!",
    ball: ballDecemberSixth,
    colorBg: colors.violet,
    date: new Date(currentYear, 11, 6),
  },
  {
    icon: christmasOrnament,
    text: "7",
    id: "7",
    title: "Преврати свой дом в сказку",
    task: "Укрась комнаты снежинками из бумаги. Помни, что волшебство находится в твоих руках!",
    ball: ballDecemberSeventh,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 7),
  },
  {
    icon: christmasTreeSnowy,
    text: "8",
    id: "8",
    title: "Бегом на улицу!",
    task: "Время насладиться зимними радостями! Если выпал снег - поиграй в снежки или слепи снеговика. А если снега нет - отправляйся исследовать местные достопримечательности.",
    ball: ballDecemberEighth,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 8),
  },
  {
    icon: heart,
    text: "9",
    id: "9",
    title: "Время вкусного какао",
    task: "Сегодня сделай с помощью взрослых самое вкусное зимнее какао. Включи новогоднюю музыку, наслаждайся напитком и почувствуй, что праздник уже близко!",
    ball: ballDecemberNinth,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 9),
  },
  {
    icon: cup,
    text: "10",
    id: "10",
    title: "День новогодних фильмов",
    task: "Продолжи традицию просмотра новогодних фильмов. Выбери любой фильм и посмотри его полностью.",
    ball: ballDecemberTenth,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 10),
  },
  {
    icon: hotChocolate,
    text: "11",
    id: "11",
    title: "Время рисовать волшебство",
    task: "Возьми свои любимые карандаши и нарисуй самый новогодний рисунок. Изобрази ёлочку, подарки, гирлянду и всё, с чем ассоциируется у тебя Новый год. А потом помести рисунок в рамочку!",
    ball: ballDecemberEleventh,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 11),
  },
  {
    icon: berriesSmall,
    text: "12",
    id: "12",
    title: "Новогодние украшения",
    task: "Сегодня маме нужна твоя помощь, чтобы сделать новогодние украшения. Это могут быть новогодние орешки-игрушки на ёлку или что-то другое. Пора создавать красоту своими руками!",
    ball: ballDecemberTwelfth,
    colorBg: colors.turquoise,
    date: new Date(currentYear, 11, 12),
  },
  {
    icon: pearlPine,
    text: "13",
    id: "13",
    title: "День историй про Новый год",
    task: "Сегодня тебе предстоит узнать про традиции празднования Нового года в Беларуси. Найди и посмотри интересные видео или почитай книги про праздник в нашей стране.",
    ball: ballDecemberThirteenth,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 13),
  },
  {
    icon: man,
    text: "14",
    id: "14",
    title: "Яркие раскраски",
    task: "Сегодня тебе нужно разукрасить три интересные новогодние раскраски. Где же их взять? Спроси у мамы, она подскажет!",
    ball: ballDecemberFourteenth,
    colorBg: colors.peach,
    date: new Date(currentYear, 11, 14),
  },
  {
    icon: star,
    text: "15",
    id: "15",
    title: "День историй про Новый год",
    task: "Сегодня тебе предстоит узнать про традиции празднования Нового года во всем мире. Вперед к интересным историям!",
    ball: ballDecemberFifteenth,
    colorBg: colors.violet,
    date: new Date(currentYear, 11, 15),
  },
  {
    icon: tree,
    text: "16",
    id: "16",
    title: "День новогодних мультфильмов",
    task: "Сегодня выбери интересный новогодний мультик и посмотри его. Это может быть сборник мультиков про зиму или большой длинынй мультфильм.",
    ball: ballDecemberSixteenth,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 16),
  },
  {
    icon: snowman,
    text: "17",
    id: "17",
    title: "День новогодних фильмов",
    task: "Продолжи традицию просмотра новогодних фильмов. Выбери любой фильм и посмотри его полностью.",
    ball: ballDecemberSeventeenth,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 17),
  },
  {
    icon: stars,
    text: "18",
    id: "18",
    title: "Ты - звезда!",
    task: "Сегодня тебе предстоит выбрать и начать разучивать новогоднее стихотворение, чтобы рассказать его в новогоднюю ночь!",
    ball: ballDecemberEighteenth,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 18),
  },
  {
    icon: pine,
    text: "19",
    id: "19",
    title: "Наслаждайся музыкой",
    task: "Сегодня устрой новогодний музыкальный день! Найди интересные новогодние песни и послушай их.",
    ball: ballDecemberNineteenth,
    colorBg: colors.turquoise,
    date: new Date(currentYear, 11, 19),
  },
  {
    icon: starWoody,
    text: "20",
    id: "20",
    title: "Проведи интересно время",
    task: "Если выпал снег - выходи на улицу и поиграй в снежки или слепи снеговика. Если снега нет - просто погуляй. А если идет дождь - нарисуй рисунок со снеговиком.",
    ball: ballDecemberTwentyth,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 20),
  },
  {
    icon: ring,
    text: "21",
    id: "21",
    title: "Вкусный стол",
    task: "Сегодня самое время подумать, какие блюда ты вместе с родными будешь готовить на Новый год. Составь список желаемых блюд, напиши рецепты и отдельно составь список продуктов.",
    ball: ballDecemberTwentyFirst,
    colorBg: colors.turquoise,
    date: new Date(currentYear, 11, 21),
  },
  {
    icon: snowflake,
    text: "22",
    id: "22",
    title: "Время мастерить подарки",
    task: "Помнишь, как ты записывала идеи подарков для близких? Сегодня нужно смастерить то, что ты придумала, и спрятать подарки так, чтобы родные их не нашли до Нового года.",
    ball: ballDecemberTwentySecond,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 22),
  },
  {
    icon: christmasOrnamentColorful,
    text: "23",
    id: "23",
    title: "День рождественских фильмов и мультфильмов",
    task: "Продолжи традицию просмотра новогодних фильмов. Сегодня выбери фильм или мультик именно про Рождество, потому что этот праздник уже через пару дней.",
    ball: ballDecemberTwentyThird,
    colorBg: colors.peach,
    date: new Date(currentYear, 11, 23),
  },
  {
    icon: starSmall,
    text: "24",
    id: "24",
    title: "День перед Рождеством",
    task: "Сегодня будет волшебный вечер! Когда стемнеет, выключи свет и зажги с помощью взрослых рождественские свечи. Послушай интересный рассказ про Рождество и почувствуй волшебство!",
    ball: ballDecemberTwentyFourth,
    colorBg: colors.violet,
    date: new Date(currentYear, 11, 24),
  },
  {
    icon: christmasTreeGifts,
    text: "25",
    id: "25",
    title: "С Рождеством!",
    task: "Ура! Сегодня праздник! Помоги родным сделать рождественские блюда и украсить красиво праздничный стол.",
    ball: ballDecemberTwentyFifth,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 25),
  },
  {
    icon: snowmanWithRedHat,
    text: "26",
    id: "26",
    title: "Мечтать полезно",
    task: "Закрой глаза на несколько минут и представь себя в будущем году. Какие мечты и цели ты хочешь достичь? Это может быть что угодно: игра на музыкальном инструменте, новые занятия, изучение иностранного языка. Нарисуй или запиши свои мысли и сохрани!",
    ball: ballDecemberTwentySixth,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 26),
  },
  {
    icon: pineCone,
    text: "27",
    id: "27",
    title: "Супер-сила!",
    task: "Супергерои всегда готовы выручить, и ты - одна из них! Помогай сегодня маме во всём, о чём она попросит. Помни, твоя помощь очень важна и будет оценена! Когда закончишь задание, похвали себя за то, что справилась с ним. Почувствуй радость того, что сделала что-то полезное и важное для своей мамы.",
    ball: ballDecemberTwentySeventh,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 27),
  },
  {
    icon: starWoodyBig,
    text: "28",
    id: "28",
    title: "Путешествие ко льдам",
    task: "Ты можешь выбрать одну из двух опций: посмотреть увлекательную передачу о северном полюсе или погрузиться в чтение энциклопедии и узнать всё о нём. Узнай больше о ледяных горизонтах, о животных и морских обитателях, северном сиянии.",
    ball: ballDecemberTwentyEighth,
    colorBg: colors.yellow,
    date: new Date(currentYear, 11, 28),
  },
  {
    icon: snowmanWithHat,
    text: "29",
    id: "29",
    title: "Время рисовать волшебство",
    task: "Ты уже рисовала ёлочку с подарками и гирляндой. Сегодня изобрази доброго смешного снеговика! Не забудь потом также поместить рисунок в рамочку.",
    ball: ballDecemberTwentyNinth,
    colorBg: colors.green,
    date: new Date(currentYear, 11, 29),
  },
  {
    icon: socks,
    text: "30",
    id: "30",
    title: "Ты - звезда!",
    task: "Помнишь, как ты выбрала зимнее стихотворение? Сегодня самое время его повторить, чтобы в новогоднюю ночь порадовать близких красивым произведением!",
    ball: ballDecemberThirtieth,
    colorBg: colors.turquoise,
    date: new Date(currentYear, 11, 30),
  },
  {
    icon: christmasTree,
    text: "31",
    id: "31",
    title: "Встречай Новый год!",
    task: "Ураа! Вот и пролетел месяц ожидания самого волшебного праздника в году - Нового года. Ты - молодец: выполняла интересные задания и радовалась приятным сюрпризам. Уже сегодня ты будешь помогать родным готовить вкусные новогодние блюда, украшать и накрывать праздничный стол. Положи под ёлочку подарки для близких и встречай Новый год! Пусть он будет радостным, светлым и добрым!",
    ball: ballDecemberThirtyFirst,
    colorBg: colors.burgundy,
    date: new Date(currentYear, 11, 31),
  },
];

export default calendarItems;
