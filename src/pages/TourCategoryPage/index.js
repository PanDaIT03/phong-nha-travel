import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import * as getServices from "~/apiServices/getServices";
import TourCategoryItem from "~/Component/TourCategoryItem";

import style from "~/Component/PageStyle/TourCategory/TourCategory.module.scss";
const cx = classNames.bind(style);

function TourCategoryPage() {
    const searchData = useSelector(state => state.search.list);
    const [tours, setTours] = useState([]);

    //Search
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const response = await getServices.getTourByParams("ControllerTour.php", {
                    name: "search",
                    data: searchData
                });
                setTours(response);

                return response;
            } catch (error) {
                console.log(error);
            }
        };
        fetchAPI();
    }, [searchData]);

    console.log(tours);

    return (
        <div className={cx("wrapper")}>
            {tours.map((tour, index) => (
                <TourCategoryItem
                    data={tour}
                    key={index}
                />
            ))}
        </div>
    );
}

export default TourCategoryPage;