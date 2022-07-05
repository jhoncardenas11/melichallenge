import { BrowserRouter, Routes, Route } from "react-router-dom";
import DetailProducts from "./components/detailProducts/DetailProduct";
import Home from "./Home";

import './Styles/App.scss';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/detail/:id" element={<DetailProducts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
