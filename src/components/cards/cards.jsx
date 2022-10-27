import React, { Component, useState, useEffect } from "react";
import getData from './getData'
import Card from './card'
import './styles.css'

const Cards = (props) => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageNumbers, setPageNumbers] = useState([]);

    useEffect(() => {
        const loadCards = async () => {
            setLoading(true);

            getData().then((data) => {
                    let cards = []
                    
                    let images = []
                    
                    for (let i = 0; i < data.length; i++) {images.push(`https://api.portalmec.c3sl.ufpr.br/${data[i].thumbnail}`)}
        
                    for (let i = 0; i < data.length; i++) {
                        let subjects = []
                        let tags = data[i].tags
        
                        for (let tag in tags) {
                            let tagName = tags[tag].name
                            let capitalizedTagName = tagName.charAt(0).toUpperCase() + tagName.slice(1)
        
                            subjects.push(capitalizedTagName)
                        }
        
                        let card = <Card 
                                        cover = {images[i]} 
                                        name = {data[i].name}
                                        description = {data[i].description}
                                        author = {data[i].author}
                                        type = {data[i].object_type}
                                        link = {data[i].default_attachment_location}
                                        about = {data[i].link}
                                        subjects = {subjects}
                                    />
        
                        cards.push(card);
                    }
        
                    setCards(cards);

                    let numbers = [];

                    for (let i = 1; i <= Math.ceil(cards.length/15); i++) {
                        numbers.push(i);
                    }

                    setPageNumbers(numbers);
                });

            setLoading(false);
        }

        loadCards();


    }, [])

    let loadingText = <h2>Carregando...</h2> 
    let currentPageCards = cards.slice((page - 1) * 15, page * 15);

    const pages = []

    for (let i = 1; i <= pageNumbers.length; i++) {
        let pageElement = <li className='pageNumber' onClick={() => setPage(i)}>{i}</li>
        pages.push(pageElement)
    }

    const pagination = (
        <ul className='pagination'>
            {pages}
        </ul>
    )

    return (
        <div className='Cards'>
            {!loading ? currentPageCards : loadingText}
            
            {pagination}
        </div>
    )
};

export default Cards;