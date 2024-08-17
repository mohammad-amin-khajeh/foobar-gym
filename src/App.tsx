import "./App.css";
import About from "./components/about";
import Blog from "./components/blog";
import Classes from "./components/classes";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Membership from "./components/membership";
import Team from "./components/team";
import Testimonial from "./components/testimonial";

export default function App() {
	return (
		<main className="max-w-[1920px] bg-white mx-auto">
			<Header />
			<Hero />
			<About />
			<Classes />
			<Team />
			<Membership />
			<Testimonial />
			<Blog />
			<Footer />
		</main>
	);
}
