//import Layouts
import { HeaderOnly } from '~/Layout';

//Pages
import Home from '~/pages/Home';
import Cart from '~/pages/Cart';
import ReviewTour from '~/pages/ReviewTour';
import CheckOutPage from '~/pages/CheckOutPage';
import TourCategory from '~/pages/TourCategory';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/tours/:tourName', component: ReviewTour },
    { path: '/checkout-page', component: CheckOutPage },
    { path: '/tour-category', component: TourCategory },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }