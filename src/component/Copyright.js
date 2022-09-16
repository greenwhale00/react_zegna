import { Row, Col } from "reactstrap";


const Copyright = () => {
    const thisyear = () => {
        const year = new Date().getFullYear();
        return year
    };

    return (



        <section className="copy">

                       <Row>
                <Col>
                    <p>
                        copyrigth &copy; <span>{thisyear()}</span>
                    </p>
                </Col>
            </Row>


        </section >
    )














};




export default Copyright; 