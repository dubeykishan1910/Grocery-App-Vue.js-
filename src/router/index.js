import { createRouter, createWebHistory } from "vue-router";
import DefaultCom from "../components/DefaultCom.vue";
import HomeC from "../components/HomeC.vue";
import VegItem from "../components/VegItem.vue";
import FrutItem from "../components/FrutItem";
import DairyItem from "../components/DairyItem.vue";
import ElectronicItem from "../components/ElectronicItem.vue";


const routes = [
  { path: "/", name: "HomeC", component: HomeC },


  // dynamic route call
  { path: "/fru", name: "FrutItem", component: FrutItem },
  { path: "/veg", name: "VegItem", component: VegItem },
  { path: "/dairy", name: "DairyItem", component: DairyItem },
  { path: "/elect", name: "DairyItem", component: ElectronicItem },
  
  

  {
    name: "/NotFound",
    path: "/:pathMatch(.*)*",
    component: DefaultCom,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
