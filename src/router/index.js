// import CryptoList from "@/components/CryptoList";
// import CryptoInfo from "@/components/CryptoInfo";
import MainPage from "@/views/MainPage";
import InfoPage from "@/views/InfoPage";
import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    component: MainPage,
    name: "MainPage",
  },
  {
    path: "/crypto/:id",
    component: InfoPage,
    name: "InfoPage",
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
