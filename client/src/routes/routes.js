import CreatePage from "../pages/CreatePage";
import EditPage from "../pages/EditPage";
import ListPage from "../pages/ListPage";

export const LIST_ROUTE = "/";
export const CREATE_ROUTE = "/create";
export const EDIT_ROUTE = "/edit";

export const PUBLIC_ROUTES = [
  {
    path: LIST_ROUTE,
    Component: ListPage,
  },
  {
    path: CREATE_ROUTE,
    Component: CreatePage,
  },
  {
    path: EDIT_ROUTE,
    Component: EditPage,
  },
];
