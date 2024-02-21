import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const jsxHeader = (
	<div>
		<h1 className="hai">
			Hello this is a JSX
		</h1>
		<p>aaa</p>
	</div>
)

const Name = () => (
	<p>Myeon</p>
)

const pet = 'Mija'

const Heading = () => (
	<div>
		<h2>{pet}</h2>
		{Name()}
		<h1>
			<Name />
			Budi Tanrim Functional Component
		</h1>
	</div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Heading />)