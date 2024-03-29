import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'

import StarRating from './StarRating'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']} />
		<StarRating maxRating={10} size={20} color='red' />
		<StarRating maxRating={5} size={50} color='brown' />
	</React.StrictMode>
)
