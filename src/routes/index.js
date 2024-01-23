//import Layouts
import { HeaderOnly } from '~/Layout';

//Pages
import Home from '~/pages/HomePage';
import Cart from '~/pages/CartPage';
import ReviewTour from '~/pages/ReviewTourPage';
import CheckOutPage from '~/pages/CheckOutPage';
import TourCategory from '~/pages/TourCategoryPage';
import AccountPage from '~/pages/AccountPage';
import CarRental from '~/pages/CarRentalPage';
import TravelGuide from '~/pages/HandBookPage';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/cart', component: Cart },
    { path: '/tours/:tourName', component: ReviewTour },
    { path: '/checkout-page', component: CheckOutPage },
    { path: '/tour-category', component: TourCategory },
    { path: '/account', component: AccountPage },
    { path: '/car-rental', component: CarRental },
    { path: '/travel-guide', component: TravelGuide },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes }