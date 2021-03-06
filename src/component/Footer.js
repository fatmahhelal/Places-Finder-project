import React, { Component } from 'react'
import axios from 'axios';

export default class Bottam extends Component {
    constructor(props) {
        super();
        this.state = {
            quote: "",
            quoteAuthor: ""
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.footerText()
        }, 500)
    }
    footerText = () => {
        axios
            .get(`http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`)
            .then((response) => {
                console.log('RESPONSE: ', response);
                console.log('DATA: ', response.data);
                this.setState({ quote: response.data.quoteText });
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };
    setTimeout = (() => {
        this.setState({ position: 1 });
    }, 10000);

    render() {
        return (
            <div>
                <footer class="text-muted py-5" class="AppColor" id="footer">
                    <div class="container">
                        <p class="float-end mb-1">
                        </p>
                        <p class="mb-1">"{this.state.quote}"</p>
                        <a href="#" className='uppage'>Back to top</a>
                        <p class="mb-1">Copyright&copy;Fatimah Alhelal</p>
                    </div>
                </footer>


            </div>
        )
    }
}
