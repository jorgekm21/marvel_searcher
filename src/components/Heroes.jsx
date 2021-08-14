import { Fragment, useEffect, useState } from "react"

const axios = require('axios')

const Heroes = (heroe) => {

    //States
    const [data, setData] = useState([])

    useEffect(() => {
        getData(heroe)
    }, [])

    const getData = async (heroe) => {
        const text_search = heroe.heroe.replaceAll(' ', '%20')
        const hash = 'be86ff1116af4115ab8630e6d346fbcc'
        const apikey = '985df732fdee7ed63f7d5eb1a2143982'
        const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${text_search}&apikey=${apikey}&hash=${hash}&ts=1`
    
        await axios(url)
            .then((response) => {
                switch (response.status) {
                    case 200:
                        setData(response.data.data.results)
                        break
                    default:
                        break;
                }
            })
            .then((data) => {
                console.log(data)
                return data
            })
    
    }

    return (
        <Fragment>
            <div className="comics">
                    {
                        data.map(item => (
                            <div className="card" key={item.id}>
                                <img src={item.thumbnail.path+"/portrait_incredible."+item.thumbnail.extension} alt={item.name}/>
                                <div className="info">
                                    <h3 className="title">{item.name}</h3>
                                    <p className="description">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
            </div>
        </Fragment>
    )
}

export default Heroes