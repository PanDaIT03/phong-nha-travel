import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '~/routes'
import { DefaultLayout } from '~/Layout';
import { Fragment } from 'react';

import Cart from './pages/CartPage';
import ReviewTour from './pages/ReviewTourPage';
import CheckOutPage from './pages/CheckOutPage';
import FormSearch from './Component/FormSearch';
import { Provider } from './Component/Context/context';

function App() {
  return (
    <Router>
      <div className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = DefaultLayout;
            if (route.layout)
              Layout = route.layout;
            else if (route.layout === null)
              Layout = Fragment;

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    {
                      route.component === Cart || route.component === CheckOutPage
                        || route.component === ReviewTour
                        ? <Provider>
                          <Page />
                        </Provider>
                        : <Page />
                    }
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App;