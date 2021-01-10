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

    footerText = () => {
        console.log('send API');
        axios
            .get(`http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json`)
            .then((response) => {
                console.log('RESPONSE: ', response);
                console.log('DATA: ', response.data);
                this.setState({quote: response.data.quoteText});
            })
            .catch((err) => {
                console.log('ERR: ', err);
            });
    };
    setTimeout=(() => {
        this.setState({ position: 1 });
      }, 7000);
    
    render() {
        this.footerText()
        return (
            <div>
                <footer class="text-muted py-5" class="Fprimary">
                    <div class="container">
                        <p class="float-end mb-1">
                        </p>
                        <p class="mb-1">{this.state.quote}</p>

                        <p class="mb-1">Copyright &copy; Fatimah Alhelal</p>
                        <a href="#" className='uppage'>Back to top</a>

                        <p class="mb-1">.</p>
                        <p class="mb-1">.</p>


                        {/* <p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.0/getting-started/introduction/">getting started guide</a>.</p> */}
                    </div>
                </footer>


                <script src="/docs/5.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" crossorigin="anonymous"></script>


            </div>
        )
    }
}
