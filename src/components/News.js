import React, { Component } from 'react';
import NewItems from './NewItems';
import Data from './Data.json';


class News extends Component {
    render() {

        return (
            <div>
                {/* Header */}
                <header className="masthead News">
                    <div className="container h-100">
                        <div className="row h-100">
                            <h1 className="content-header">NEWS LIST</h1>
                        </div>
                    </div>
                </header>
                {/* Content News */}
                <section>
                    <div className="container">
                        
                            <div className="row">
                                

                                {
                                    Data.map((value, key) => {
                                        return (
 
                                            <NewItems key={key} image={value.Image} title={value.Title} summary={value.Summary} ID={value.id} ></NewItems>

                                        );
                                    })
                                }
                            </div>                       
                    </div>
                </section>
                {/* End Content  */}
            </div>
        );
    }
}

export default News;