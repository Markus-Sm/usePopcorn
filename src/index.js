import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
// import App from './App'

import StarRating from './StarRating'

function Test() {
	const [movieRating, setMovieRating] = useState(0)
	return (
		<div>
			<StarRating
				color='blue'
				maxRating={5}
				onSetRating={setMovieRating}
				messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
			/>
			<p>This movies was rated {movieRating} stars</p>
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Awsome']} />
		<StarRating maxRating={10} />

		<Test />
	</React.StrictMode>
)
