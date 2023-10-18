import Header from '~/Layout/component/Header'
import Footer from '~/Layout/DefaultLayout/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />

            <div className="container">
                {children}
            </div>

            <Footer />
        </div>
    );
}

export default DefaultLayout;