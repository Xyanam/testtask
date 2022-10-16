import {
  DashboardOutlined,
  PictureOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
  GiftOutlined,
  ShopOutlined,
  UsergroupAddOutlined,
  MailOutlined,
  SettingOutlined,
  MobileOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";
import { APP_PREFIX_PATH } from "configs/AppConfig";

const MainNavTree = [
  {
    key: "dashboards",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "ОСНОВНЫЕ",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "dashboards-default",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "Дашборд",
        icon: DashboardOutlined,
        breadcrumb: false,
        submenu: [],
      },

      {
        key: "catalog",
        path: `${APP_PREFIX_PATH}/dashboards/sales`,
        title: "Каталог",
        icon: ShoppingCartOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "shopItems",
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: "Товары",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "category",
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: "Категории",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "collection",
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: "Коллекции",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
          {
            key: "combo",
            path: `${APP_PREFIX_PATH}/dashboards/default`,
            title: "Комбо",
            icon: "",
            breadcrumb: false,
            submenu: [],
          },
        ],
      },
      {
        key: "orders",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "Заказы",
        icon: ShoppingOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "clients",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "Клиенты",
        icon: UserOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "extra-pages-list",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "Список клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-pages-group",
            path: `${APP_PREFIX_PATH}/pages/user-list`,
            title: "Группы клиентов",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "banners",
        path: `${APP_PREFIX_PATH}/dashboards/default`,
        title: "Баннеры",
        icon: PictureOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "promocode",
        title: "Промокоды",
        icon: GiftOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "offline_office",
        title: "Оффлайн точки",
        icon: ShopOutlined,
        breadcrumb: false,
        submenu: [
          {
            key: "extra-pages-group",
            title: "Адреса",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
          {
            key: "extra-pages-group",
            title: "Геозоны",
            icon: "",
            breadcrumb: true,
            submenu: [],
          },
        ],
      },
      {
        key: "stuff",
        title: "Сотрудники",
        icon: UsergroupAddOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mailing",
        title: "Рассылки",
        icon: MailOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const SystemMainTree = [
  {
    key: "system",
    path: `${APP_PREFIX_PATH}/dashboards`,
    title: "Системные",
    icon: DashboardOutlined,
    breadcrumb: false,
    submenu: [
      {
        key: "settings",
        title: "Настройки",
        icon: SettingOutlined,
        path: `${APP_PREFIX_PATH}/setting/edit/`,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "mobile",
        title: "Мобильное приложенеи",
        icon: MobileOutlined,
        breadcrumb: false,
        submenu: [],
      },
      {
        key: "logs",
        title: "Логи",
        icon: CarryOutOutlined,
        breadcrumb: false,
        submenu: [],
      },
    ],
  },
];

const navigationConfig = [...MainNavTree, ...SystemMainTree];

export default navigationConfig;
