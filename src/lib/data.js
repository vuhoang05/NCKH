export const Products =
    [
        {
            "id": 1,
            "ten": "SON HERMÈS ROSE ROSY LIP HỒNG",
            "hang": "BLACK ROUGE",
            "anh": "lipimage/pink.jpg",
            "mau": "Hồng",
            "coAr": true,
            "maAr": "public/lipAr/Pink.deepar",
            "gia": 239000,
            "phanLoai": "SON KEM LÌ",
            "moTa": "Màu hồng san hô nhẹ nhàng, tươi tắn, phù hợp với mọi tông da. Chất son kem lì mềm mịn, lên màu chuẩn và bám môi lâu trôi. Thiết kế sang trọng, đẳng cấp với vỏ son màu vàng gold và logo Hermès dập chìm. Mùi hương hoa hồng nhẹ nhàng. Giá thành cao."
        },
        {
            "id": 2,
            "ten": "SON CHANEL ROUGE ALLURE ĐỎ CAM",
            "hang": "CHANEL",
            "anh": "lipimage/2.jpg",
            "mau": "Đỏ cam",
            "coAr": true,
            "maAr": "lipAr/DoCam.deepar",
            "gia": 999000,
            "phanLoai": "SON KEM LÌ",
            "moTa": "Màu đỏ cam thời thượng, quyến rũ, phù hợp với những cô nàng cá tính. Chất son satin mềm mại, dưỡng ẩm tốt cho môi. Độ bám màu trung bình, khoảng 4-5 tiếng. Thiết kế thanh lịch, sang trọng với vỏ son đen tuyền và logo Chanel mạ vàng. Mùi hương vani nhẹ nhàng. Giá thành cao."
        },
        {
            "id": 3,
            "ten": "SON DƯỠNG ADDICT LIP 006 BLACK",
            "hang": "DIOR",
            "anh": "black.jpg",
            "mau": "Đen",
            "coAr": true,
            "maAr": "public/lipAr/SonDen.deepar",
            "gia": 839000,
            "phanLoai": "SON KEM LÌ",
            "moTa": "Màu đen huyền bí, độc đáo, tạo điểm nhấn cho đôi môi. Chất son dưỡng mềm mịn, giúp môi căng mọng và giảm thâm. Có khả năng chống nắng SPF 30, bảo vệ môi khỏi tác hại của tia UV. Thiết kế đơn giản, nhỏ gọn với vỏ son màu đen. Không có mùi hương. Giá thành tầm trung."
        },
        {
            "id": 4,
            "ten": "SON DƯỠNG MÔI WHOO BALM MÀU CAM",
            "hang": "WHOO",
            "anh": "lipimage/4.jpg",
            "mau": "Cam",
            "coAr": true,
            "maAr": "public/lipAr/Cam.deepar",
            "gia": 439000,
            "phanLoai": "SON DƯỠNG",
            "moTa": "Màu cam tươi tắn, trẻ trung, phù hợp với mọi tông da. Chất son dưỡng mềm mịn, giúp môi căng mọng và hồng hào. Chiết xuất từ các thành phần thiên nhiên như sâm núi, mật ong, nấm linh chi,... an toàn cho môi. Thiết kế sang trọng với vỏ son màu vàng gold và logo Whoo dập chìm. Mùi hương thảo mộc nhẹ nhàng. Giá thành cao."
        },
        {
            "id": 5,
            "ten": "SON DIOR ADDIC WILDIOR MÀU ĐỎ MẬN",
            "hang": "DIOR",
            "anh": "lipimage/5.jpg",
            "mau": "Đỏ mận",
            "coAr": true,
            "maAr": "lipAr/DoMan.deepar",
            "gia": 739000,
            "phanLoai": "SON KEM LÌ",
            "moTa": "Màu đỏ mận sang trọng, quyến rũ, phù hợp với những cô nàng trưởng thành. Chất son kem lì mềm mịn, lên màu chuẩn và bám môi lâu trôi. Thiết kế độc đáo với vỏ son hình trụ và logo Dior mạ vàng. Mùi hương hoa hồng nhẹ nhàng. Giá thành cao."
        },
        {
            "id": 6,
            "ten": "SON DIOR ADDIC ADDICT BERRY HỒNG MẬN",
            "hang": "DIOR",
            "anh": "lipimage/6.jpg",
            "mau": "Hồng mận",
            "coAr": true,
            "maAr": "lipAr/Berry.deepar",
            "gia": 739000,
            "phanLoai": "SON KEM LÌ",
            "moTa": "Màu hồng mận ngọt ngào, nữ tính, phù hợp với mọi tông da. Chất son kem lì mềm mịn, lên màu chuẩn và bám môi lâu trôi. Thiết kế sang trọng với vỏ son màu đen tuyền và logo Dior mạ vàng. Mùi hương vani nhẹ nhàng. Giá thành cao."
        }
    ];

export const getProducts = async () => {
    return Products;
};

export const getProduct = async (id) => {
    return Products.find((data) => data.id === id);
};
