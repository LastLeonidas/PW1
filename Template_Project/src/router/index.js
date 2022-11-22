import { createRouter, createWebHistory } from "vue-router";
//import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import AgregarAmigoView from "../views/AddFriendsView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import UsuarioHomeView from "../views/UsuarioHomeView.vue";
import AmigosView from "../views/AmigosView.vue";
import RequestFriendsView from "../views/FriendsRequestView.vue";
import CloseSesionView from "../views/CloseSesionView.vue";
import DeleteAccountView from "../views/DeleteAccountView.vue";
import CreateEventView from "../views/CrearEventoView.vue";
import EventDescriptionView from "../views/EventDescriptionView.vue";
import ProfileUserView from "../views/ProfileUser.vue";
import EventListView from "../views/EventsListView.vue";
import MessageView from "../views/MessageView";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UsuarioHomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView,
    },
    {
      path: "/addfriend",
      name: "addfriend",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AgregarAmigoView,
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: RegisterView,
    },
    {
      path: "/usuarioHome",
      name: "usuarioHome",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: UsuarioHomeView,
    },
    {
      path: "/friends",
      name: "friends",
      component: AmigosView,
    },
    {
      path: "/requestfriends",
      name: "requestfriends",
      component: RequestFriendsView,
    },
    {
      path: "/closesesion",
      name: "closesesion",
      component: CloseSesionView,
    },
    {
      path: "/deleteaccount",
      name: "deleteaccount",
      component: DeleteAccountView,
    },
    {
      path: "/profileuser",
      name: "profileuser",
      component: ProfileUserView,
    },
    {
      path: "/eventslist",
      name: "eventslist",
      component: EventListView,
    },
    {
      path: "/eventsdescription",
      name: "eventsdescription",
      component: EventDescriptionView,
    },
    {
      path: "/messageUsers",
      name: "messageUsers",
      component: MessageView,
    },
    {
      path: "/createEvent",
      name: "createEvent",
      component: CreateEventView,
    },
    /*
    {
      path: "/events",
      name: "events",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EventsView,
    },*/
  ],
});

export default router;
