import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Nav from './Nav'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
