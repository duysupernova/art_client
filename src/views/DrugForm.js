import React, {
    useEffect,
    useState
} from 'react'
import PropTypes from 'prop-types'
const fetch = require('node-fetch');

function DrugForm(props) {

    const [drugs, setDrugs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/drug')
            .then(res => res.json())
            .then(json => {
                console.log('json :>> ', json);
                setDrugs(json)
            });
    }, [])


    return ( <
            >
            {
                drugs.map(drug => < div > {
                    drug.name
                } < /div>)} < / > )
            }

            DrugForm.propTypes = {

            }

            export default DrugForm