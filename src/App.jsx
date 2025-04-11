import { Route, Switch } from "wouter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function Router() {
	return (
		<Switch>
			<Route path="/" component={Home} />
			<Route component={NotFound} />
		</Switch>
	);
}

function App() {
	return (
		<div className="min-h-screen bg-gray-50">
			<Router />
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				className="mt-16"
			/>
		</div>
	);
}

export default App;
