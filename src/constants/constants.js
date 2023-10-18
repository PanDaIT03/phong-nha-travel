import images from "~/asset/images";

const categoryIcons = [
    {
        id: 1,
        content: "remarkable"
    },
    {
        id: 2,
        content: "deal"
    },
    {
        id: 3,
        content: "daily"
    }
];

const topics = [
    {
        id: 1,
        text: "Tour Book Nhiều",
        style: "#47a0ff"
    },
    {
        id: 2,
        text: "Tour HOT",
        style: "#ee202e"
    }
];

const findATour = [
    {
        id: 1,
        text: "Tour Deal"
    },
    {
        id: 2,
        text: "Tour hằng ngày"
    },
    {
        id: 3,
        text: "Tour mạo hiểm"
    },
    {
        id: 4,
        text: "Tour miền trung"
    },
    {
        id: 5,
        text: "Tour nổi bật"
    },
    {
        id: 6,
        text: "Tour phong nha trọn gói"
    }
];

const alertPopupState = [
    {
        id: 1,
        state: true,
        style: "success",
        image: images.faceSmile,
        title: "success!",
        text: "Bạn đã nhập mã thành công!",
        subText: "Bạn được giảm giá.",
        buttonColor: "#50b489"
    },
    {
        id: 2,
        state: false,
        style: "failure",
        image: images.faceSad,
        title: "error!",
        text: "Mã giảm giá của bạn không đúng!",
        subText: "Vui lòng thử lại sau.",
        buttonColor: "#ed3833"
    }
];

const formatter = new Intl.NumberFormat('vi', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
});

const chooseDifference = [
    {
        id: 1,
        title: "Đa dạng tour",
        description: "Phong Nha Travel cung cấp nhiều loại Tour hằng ngày, mạo hiểm, trọn gói…",
        icon: "globe"
    },
    {
        id: 2,
        title: "Giá tour hợp lý",
        description: "Phong Nha Travel tối ưu hóa chi phí cho khách hàng book được tour giá hợp lý nhất, chất lượng tốt nhất.",
        icon: "cash"
    },
    {
        id: 3,
        icon: "photograph",
        title: "Điểm đến nhiều cảnh đẹp",
        description: "Phong Nha Travel sẽ lựa chọn những điểm dừng, những điểm đến đẹp để cho du khách có những khung cảnh đẹp nhất."
    },
    {
        id: 4,
        icon: "calendar",
        title: "Hệ thống Book Tour nhanh",
        description: "Đội ngũ kỹ thuật của Phong Nha Travel luôn tối ưu hệ thống đảm bảo cho khách hàng có trải nghiệm book tour dễ dàng và nhanh nhất."
    },
    {
        id: 5,
        icon: "support",
        title: "Đội ngũ hỗ trợ tận tình",
        description: "Hotline của Phong Nha Travel luôn thường trực. Đội ngũ hướng dẫn nhiều kinh nghiệm sẽ mang đến cho bạn những chuyến đi an tâm."
    },
    {
        id: 6,
        icon: "love",
        title: "To Travel - To Discovery",
        description: "Hơn cả du lịch, mỗi chuyến đi còn là những trải nghiệm khám phá. Phong Nha Travel sẽ luôn đồng hành cùng bạn."
    },
];

const today = () => {
    let newDate = new Date();
    let bookeDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1 < 10 ? `0${newDate.getMonth() + 1}` :
        `${newDate.getMonth() + 1}`}-${newDate.getDate() < 10 ? `0${newDate.getDate()}` : newDate.getDate()}`;

    return bookeDate;
};

const MENU_ITEMS = [
    {
        title: "Tour hằng ngày",
        to: "/"
    },
    {
        title: "Tour quảng bình",
        to: "/"
    },
    {
        title: "Tour phong nha",
        to: "/"
    },
    {
        title: "Tour khác",
        to: "/",
        children: {
            data: [
                {
                    title: "Tour miền trung"
                },
                {
                    title: "Tour deal"
                },
                {
                    title: "Tour nổi bật"
                },
                {
                    title: "Tour mạo hiểm"
                }
            ]
        }
    },
    {
        title: "Thuê xe",
        to: "/"
    },
    {
        title: "Cẩm nang",
        to: "/"
    },
    {
        title: "Liên hệ",
        to: "/"
    },
    {
        title: "",
        icon: "cart",
        to: "/cart",
        children: {
            data: [
                {
                    title: "Trang giỏ hàng",
                    to: "/cart"
                },
                {
                    title: "Trang thanh toán",
                    to: "/checkout-page"
                },
                {
                    title: "Trang tài khoản"
                }
            ]
        }
    },
];

const CATEGORY_ITEMS = [
    {
        id: 1,
        title: "Tour Miền Trung"
    },
    {
        id: 2,
        title: "Tour mạo hiểm"
    },
    {
        id: 3,
        title: "Tour hằng ngày"
    },
    {
        id: 4,
        title: "Tour Quảng Bình Trọn Gói"
    },
];

const modifyTourName = (name, type) => {
    let item = "",
        length = 0,
        tourName = "";

    switch (type) {
        case "PATH":
            item = name.split(" ");
            length = item.length;

            item.map((item, index) => {
                if (index === length - 1) {
                    tourName += item;
                } else {
                    tourName += item + "-";
                }
            });
            break;

        case "API":
            item = name.split("-");
            length = item.length;

            item.map((item, index) => {
                if (index === length - 1) {
                    tourName += item;
                } else {
                    tourName += item + " ";
                }
            });
            break;
        default:
            break;
    };

    return tourName;
};

export {
    categoryIcons,
    topics,
    findATour,
    alertPopupState,
    formatter,
    chooseDifference,
    MENU_ITEMS,
    CATEGORY_ITEMS,
    today,
    modifyTourName,
};