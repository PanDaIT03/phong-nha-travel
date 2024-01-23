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
        to: "/car-rental"
    },
    {
        title: "Cẩm nang",
        to: "/travel-guide"
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
                    title: "Trang tài khoản",
                    to: "/account"
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

const TABLE_RENTAL_PRICE = [
    {
        id: 1,
        title: "Đồng Hới –  Động Phong Nha",
        prices: ["600", "800", "1500", "2000", "2800", "3300"]
    },
    {
        id: 2,
        title: "Đồng Hới – Động Thiên Đường",
        prices: ["900", "1000", "1800", "2500", "3000", "3800"]
    },
    {
        id: 3,
        title: "Đồng Hới – Động Phong Nha – Động Thiên Đường",
        prices: ["900", "1000", "1800", "2500", "3000", "3800"]
    },
    {
        id: 4,
        title: "Đồng Hới – Viếng mộ Đại Tướng  – Biển Đá Nhảy",
        prices: ["900", "1000", "1800", "2500", "3000", "3800"]
    },
    {
        id: 5,
        title: "Đồng Hới –Viếng mộ Đại Tướng – Động Thiên Đường",
        prices: ["1200", "1400", "2200", "3000", "3800", "4500"]
    },
    {
        id: 6,
        title: "Đón/ tiễn ( nhà ga, sân bay, khách sạn, nội thành trung tâm) /Ăn trưa/Ăn tối",
        prices: ["300", "400", "500", "600", "700", "800"]
    },
    {
        id: 7,
        title: "Đồng Hới – Huế",
        prices: ["1500", "1700", "2800", "3300", "3800", "4500"]
    },
    {
        id: 8,
        title: "Giá trọn gói bao gồm: Xe vận chuyển, lái xe nhiệt tình kinh nghiệm, phí cầu phà bến bãi, nhiên liệu xe"
    },
    {
        id: 9,
        title: "Không bao gồm: Thuế VAT 10%"
    }
];

const COMMIT_LIST = [
    {
        id: 1,
        title: "Chất lượng xe Du lịch Quảng Bình tốt nhất"
    },
    {
        id: 2,
        title: "Đội ngũ nhân viên chuyên viên tư vấn hỗ trợ nhanh chóng, nhiệt tình"
    },
    {
        id: 3,
        title: "Đội ngũ nhân viên lái xe chuyên nghiệp, có giấy phép vận chuyển khách du lịch, thông thạo lộ trình, tuyến điểm"
    },
    {
        id: 4,
        title: "Thanh toán nhanh chóng, uy tín"
    },
    {
        id: 5,
        title: "Mức giá tốt nhất, cạnh tranh nhất"
    },
    {
        id: 6,
        title: "Đem lại sự hài lòng cho quý khách hàng sử dụng dịch vụ"
    },
    {
        id: 7,
        title: "Hoàn tiền nếu phục vụ không tốt"
    },
];

const HAND_BOOK = [
    {
        id: 1,
        title: "Khu Du lịch Bang Osen Quảng Bình",
        datePublished: "10/08/2023",
        user: "Dương Đại",
        type: "Cẩm Nang",
        thumbnail: images.osen,
        articleSection: "Du lịch suối Bang, Khu Du lịch Bang Osen Quảng Bình, tour hang ngay quang binh",
        description: "Khu Du lịch Bang Osen Quảng Bình Quà Tặng từ thiên nhiên Khu Du lịch Bang Osen Quảng Bình là Suối nước khoáng nóng bang có từ hằng trăm năm nay. Nằm trên miền rừng núi xã Kim Thuỷ huyện Lệ Thuỷ. Cách Đồng Hới 60km và trung tâm huyện Lệ Thuỷ 21km về phía"
    },
    {
        id: 2,
        title: "BÁNH XÈO (QUẢNG HOÀ – BA ĐỒN)",
        datePublished: "02/03/2023",
        user: "Dương Đại",
        type: "Cẩm Nang",
        thumbnail: images.banhXeoBaDon,
        articleSection: "Am thuc quang binh, ăn gì ở Quảng Bình, BÁNH XÈO (QUẢNG HOÀ - BA ĐỒN), du lịch Quảng Bình",
        description: "BÁNH XÈO (QUẢNG HOÀ – BA ĐỒN) Địa Điểm BÁNH XÈO (QUẢNG HOÀ – BA ĐỒN) Bánh xèo ở xã Quảng Hòa, thị xã Ba Đồn nằm bên dòng sông Gianh thơ mộng. là món ăn quen thuộc với người dân và nay được du khách gần xa lựa chọn khi đến vùng bắc Quảng"
    },
    {
        id: 3,
        title: "TÚ LÀN LODGE – TRẢI NGHIỆM LƯU TRÚ ĐỘC ĐÁO BÊN TRIỀN NÚI TÂN HOÁ",
        datePublished: "22/02/2023",
        user: "Dương Đại",
        type: "Cẩm Nang",
        thumbnail: images.tuLanLodge,
        articleSection: "tour động thiên đường, tour du lịch phong nha, Tour Ghép Quảng Bình Hàng ngày",
        description: "TÚ LÀN LODGE – TRẢI NGHIỆM LƯU TRÚ ĐỘC ĐÁO BÊN TRIỀN NÚI TÂN HOÁ Vị trí lý tưởng, độc đáo Là khu lưu trú có địa thế độc đáo, Tu Lan Lodge toạ lạc ngay lưng chừng triền núi, có thiết kế chắc chắn và cao ráo để thích nghi với điều kiện thời"
    },
    {
        id: 4,
        title: "Lý do khách Sài Gòn du lịch Quảng Bình vào mùa đông",
        datePublished: "23/09/2020",
        user: "Dương Đại",
        type: "Cẩm Nang",
        thumbnail: images.tuLanLodge,
        articleSection: "co nen du lich quang binh vao mua dong, Lý do khách Sài gòn du lịch Quảng Bình vào mùa đông",
        description: "TÚ LÀN LODGE – TRẢI NGHIỆM LƯU TRÚ ĐỘC ĐÁO BÊN TRIỀN NÚI TÂN HOÁ Vị trí lý tưởng, độc đáo Là khu lưu trú có địa thế độc đáo, Tu Lan Lodge toạ lạc ngay lưng chừng triền núi, có thiết kế chắc chắn và cao ráo để thích nghi với điều kiện thời"
    }
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
    TABLE_RENTAL_PRICE,
    COMMIT_LIST,
    today,
    modifyTourName,
};