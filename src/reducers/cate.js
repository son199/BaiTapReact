// khởi tạo giá trị ban đầu của state
const initialState = [
    { tabName: 'tabTopClothes', showName: 'Áo', type: 'topclothes' },
    { tabName: 'tabBotClothes', showName: 'Quần', type: 'botclothes' },
    { tabName: 'tabShoes', showName: 'Giày dép', type: 'shoes' },
    { tabName: 'tabHandBags', showName: 'Túi xách', type: 'handbags' },
    { tabName: 'tabNecklaces', showName: 'Dây chuyền', type: 'necklaces' },
    // { tabName: 'tabModels', showName: 'Người mẫu', type: 'models' },
    { tabName: 'tabHairStyle', showName: 'Kiểu tóc', type: 'hairstyle' },
    { tabName: 'tabBackground', showName: 'Nền', type: 'background' }
];

//  là 1 function 
//  nhận vào 2 tham số (params) : giá trị hiện tại của dử liêu mà reducer đang quản lý (state chính là categories) và action là 1 hành động từ component gửi lên 
//  reducer sẽ tiếp nhận action , chỉnh sửa state sau đó return về state mới 

// tạo ra 1 reducer
const cateReducer = (state = initialState, action) => {
    // nếu như không có chỉnh sủa đều bắt buộc phải return về 1 state;
    return state;
}

export default cateReducer;