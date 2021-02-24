import React, { Component } from 'react';
import { connect } from 'react-redux';
class Category extends Component {
    rederCategories = () => {
        // const { cateList } = this.props;
        // const cate = cateList.map(item => {
        //     return (
        //         <button className=" btn btn-success">{item.showName}</button>
        //     )

        // })
        // return cate;
        return this.props.cateList.map(item =>
            <button className="btn btn-success">{item.showName}</button>
        )
    }
    render() {
        return (
            <div className="btn-group">
                {this.rederCategories()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // đại diện toàn bộ state trên store
    return {
        cateList: state.categories
    }
}
export default connect(mapStateToProps)(Category);

