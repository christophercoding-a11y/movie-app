import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Main from './Main'
import Footer from './components/Footer'

import data from './data'


const App =()=> {

    const [myData, setMyData] = useState([])

    useEffect(()=> {
        setMyData(data)
    }, [])

    return (
        <>
        <Header />
        <Main data={myData} />
        <Footer />
        </>
    )
}

export default App