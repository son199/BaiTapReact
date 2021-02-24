import React, { Component } from 'react'
import Header from './header'
import ProductList from './productList'
import ProductDetail from './productDetail'
import Cart from './cart';

export default class Home extends Component {
    products = [
        {
            id: 1,
            name: "iphoneX",
            price: 2000,
            screen: "screen_1",
            backCamera: "backCamera_1",
            frontCamera: "frontCamera_1",
            img: "https://sudospaces.com/mobilecity-vn/images/2019/12/iphonex-black.jpg",
            desc: "iPhone X features a new all-screen design. Face ID, which makes your face your password",
            type: "iphone"
        },
        {
            id: 2,
            name: "Note 7",
            price: 1900,
            screen: "screen_2",
            backCamera: "backCamera_2",
            frontCamera: "frontCamera_2",
            img: "https://www.xtmobile.vn/vnt_upload/product/01_2018/thumbs/600_note_7_blue_600x600.png",
            desc: "The Galaxy Note7 comes with a perfectly symmetrical design for good reason",
            type: "samsung"
        },
        {
            id: 3,
            name: "Iphone 13",
            price: 1000,
            screen: "screen_3",
            backCamera: "backCamera_3",
            frontCamera: "frontCamera_3",
            img: "https://www.gizmochina.com/wp-content/uploads/2019/11/Vivo-Y19.jpg",
            desc: "A young global smartphone brand focusing on introducing perfect sound quality",
            type: "iphone"
        },
        {
            id: 4,
            name: "Samsumg s21",
            price: 1200,
            screen: "screen_4",
            backCamera: "backCamera_4",
            frontCamera: "frontCamera_4",
            img: "https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg",
            desc: "BlackBerry is a line of smartphones, tablets, and services originally designed",
            type: "samsung"
        }];

    // viết hàm lấy dử liệu tử item lên home ,truyền duwr liệu từ con ra cha
    state = {
        selectedProduct: null,
        // tạo cart rổng
        cart: [],
        totalItems: 0,
        totalAmount: 0,
    };
    addToCart = (productFromChilren) => {
        const cloneCart = [...this.state.cart];
        // kiểm tra sp đã tồn tại trong giỏ hàng hay chưa 
        const index = cloneCart.findIndex((item) => {
            return item.product.id === productFromChilren.id;
        });
        if (index === -1) {
            // chưa  có, push vào giỏ hàng
            const cartItem = {
                product: productFromChilren,
                quantity: 1,
            };
            cloneCart.push(cartItem);

        }
        else {
            cloneCart[index].quantity++;
        }
        // lưu localstorge
        localStorage.setItem("cart", JSON.stringify(cloneCart));
        this.setState({
            cart: cloneCart,
            totalItems: this.state.totalItems + 1,
            totalAmount: this.state.totalAmount + productFromChilren.price,
        }, () => {
            console.log(this.state.cart);
        })
        // nếu chưa có thì push vào
        // nếu đã có rồi thì thay đổi số lượng
        // this.state.cart.push(productFromChilren);
        // console.log(this.state.cart);

    }
    getProduct = (productFromChilren) => {
        // gán giá trị từ proItem vao
        this.setState({
            selectedProduct: productFromChilren,
        })
        // console.log(productFromChilren);
    }

    removeCartItem = (cartItem) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.product.id === cartItem.product.id;
        });
        cloneCart.splice(index, 1);
        this.setState({
            cart: cloneCart,
            totalItems: this.state.totalItems - cartItem.quantity,
            totalAmount: this.state.totalAmount - (cartItem.quantity * cartItem.product.price),


        })
        // console.log(this.state.cart)
    }
    decreaseQuantity = (data) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.product.id === data.product.id;
        });
        if (data.quantity > 1) {
            cloneCart[index].quantity -= 1;
            this.setState({
                cart: cloneCart,
                totalItems: this.state.totalItems - 1,
                totalAmount: this.state.totalAmount - data.product.price,

            })
        }


    }
    tangQuantity = (data) => {
        const cloneCart = [...this.state.cart];
        const index = cloneCart.findIndex((item) => {
            return item.product.id === data.product.id;
        });
        if (index !== -1) {
            cloneCart[index].quantity += 1;
        }
        this.setState({
            cart: cloneCart,
            totalItems: this.state.totalItems + 1,
            totalAmount: this.state.totalAmount + data.product.price,


        })

    }
    payCart = () => {
        this.setState({
            cart: [],
            totalAmount: 0,
            totalItems: 0,
        })
    }
    fetchCart = () => {
        // fetchCart form localStorge 
        const cartJSON = localStorage.getItem("cart");
        if (!cartJSON) return;

        const cart = JSON.parse(cartJSON);

        let totalAmount = 0;
        let totalItems = 0

        for (let item of cart) {
            totalAmount += item.product.price * item.quantity;
            totalItems += item.quantity;

        }
        this.setState({
            // parse cartJson thành array
            cart: JSON.parse(cartJSON),
            totalAmount: totalAmount,
            totalItems: totalItems,
        })

    };
    render() {
        return (
            <div>
                <Header totalItems={this.state.totalItems} />
                <ProductList data={this.products} getProduct={this.getProduct} addToCart={this.addToCart} />
                {/* */}
                {this.state.selectedProduct && (<ProductDetail selectedProduct={this.state.selectedProduct} />)}
                <Cart payCart={this.payCart} tangQuantity={this.tangQuantity} decreaseQuantity={this.decreaseQuantity} removeCartItem={this.removeCartItem} totalAmount={this.state.totalAmount} cart={this.state.cart} />
            </div>
        )
    }
    // code chạy khi component khởi ntạo
    componentDidMount() {
        this.fetchCart();
    }
}
