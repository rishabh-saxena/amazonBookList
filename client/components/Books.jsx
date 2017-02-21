import React from 'react';
import Description from './Description.jsx';
export default class Books extends React.Component {
    constructor() {
        super();
        this.state = { desc: '' };
    }
    clickMe(description) {
        this.setState({desc: description})
    }
    render() {
        let bookData = [{ name: 'Book1', author: 'author1', pages: '200', price: '200', description: 'hello book1',imgurl:'http://ecx.images-amazon.com/images/I/51Z-2y9+fmL._AC_US218_FMwebp_QL70_.jpg' }, { name: 'Book2', author: 'author2', pages: '200', price: '200', description: 'hello book2',imgurl:'http://ecx.images-amazon.com/images/I/51ml6YjoUOL._AC_US218_FMwebp_QL70_.jpg' },
        { name: 'Book3', author: 'author3', pages: '200', price: '200', description: 'hello book3',imgurl:'http://ecx.images-amazon.com/images/I/51Z-2y9+fmL._AC_US218_FMwebp_QL70_.jpg' },
        { name: 'Book4', author: 'author4', pages: '200', price: '200', description: 'hello book4' ,imgurl:'http://ecx.images-amazon.com/images/I/51Z-2y9+fmL._AC_US218_FMwebp_QL70_.jpg'}];
        let that = this;
        let bookList = bookData.map(function (item, index) {
            return (<div key={index}><li><img src={item.imgurl}></img>Name:<b>{item.name}</b>
                <button key={index} onClick={that.clickMe.bind(that, item.description)}>Know More!!</button></li>
                Author:{item.author}<br></br>
                Pages:{item.pages}<br></br>
                Price:{item.price}

                <br></br>
                <br></br>
                <br></br></div>);
        });
        return (<div><ul>{bookList}</ul><div><h1>{this.state.desc}</h1></div></div>);
    }
}



