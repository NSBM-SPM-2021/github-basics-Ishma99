import axios from 'axios'

export default axios.create(
    {
        baseURL:'https://the-cake-alchemy-default-rtdb.firebaseio.com/'
    }
)
