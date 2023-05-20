import Accordion from 'react-bootstrap/Accordion';
import img from '../../assets/blog.webp'

const Blog = () => {
    return (
        <div className='container'>
            <div className='row'>
                < img src={img} alt="" className='w-50 col-sm-12 col-lg-6' />
                <div className='w-50 pt-5 mt-5 col-sm-12  col-lg-6'>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What is an access token and refresh token? How do they work and where should we store them on the client-side?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                An access token and a refresh token are both used in authentication and authorization systems. Here is an overview of what they are, how they work, and where they should be stored on the client-side:

                                1. Access Token:
                                An access token is a credential that is used to gain access to protected resources, such as APIs or web services.

                                2. Refresh Token:
                                A refresh token is a long-lived credential that is used to obtain a new access token once the current access token expires.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Compare SQL and NoSQL databases ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                SQL (Structured Query Language) and NoSQL (Not Only SQL) are two types of database management systems that differ in their data models, querying languages, and usage scenarios. Here is a comparison between SQL and NoSQL databases:

                                <strong>Data Model:</strong>

                                <strong>SQL:</strong> SQL databases use a structured data model based on tables with predefined schemas. Data is organized into rows and columns, and relationships between tables are established using foreign keys.
                                <strong>NoSQL:</strong> NoSQL databases provide a flexible data model that can vary between different databases. They typically use a key-value, document, columnar, or graph-based model. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is express js ? What is Nest JS ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                <strong>Express.js</strong> is a minimal and flexible web application framework for Node.js. It is one of the most popular frameworks for building web applications and APIs in the Node.js ecosystem. Express.js provides a set of features and middleware that simplifies the process of handling HTTP requests, routing, and building web applications.

                                <strong>NestJS</strong> is a progressive, TypeScript-based web framework for building scalable and efficient server-side applications. It is built on top of Express.js and leverages modern JavaScript features and design patterns.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What is MongoDB aggregate and how does it work ?</Accordion.Header>
                            <Accordion.Body>
                                <span className='fw-bold'>Ans : </span>
                                In MongoDB, the aggregate function is used to perform advanced data aggregation operations on the documents within a collection. It allows you to process and transform the data in various ways, such as grouping, filtering, sorting, calculating aggregates, and performing complex computations.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </div>
    );
};

export default Blog;