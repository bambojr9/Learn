import React, { Component } from 'react'
import NewsItem from './NewsItem'
import dulieujson from './dulieu.json'

export default class News extends Component {
  
    render() {
        return (
            <div>
                  <div>
        <div className="page-title ">
          <div className="container">
            <div className="page-title__content text-center">
              <h2 className="wow shake">Tin Tuc</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
          {
            dulieujson.map((value,key) => {
              return (
                <NewsItem key={key}
                 id={value.id}
                  anh={value.anh} 
                  tieuDe={value.tieuDe} 
                  trichDan={value.trichDan} 
                  noiDung={value.noiDung}  ></NewsItem>
              )
            })
          }
            </div>
          </div>
        </div>
      </div>
         
        )
    }
}
