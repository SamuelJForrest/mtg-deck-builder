import styles from "./App.scss";
import { Container, Row, Col } from "react-bootstrap";

function App() {
	return (
		<div className="App">
			<Container>
				<Row>
					<Col>
						<h1 className={styles.headerone}>
							Magic the Gathering: Deck Builder
						</h1>
						<p>
							This is going to be a card building application in
							the future, but right now it is in the planning
							stage
						</p>
						<p>
							I was originally intended to build this using a
							standard MTG API - but to get all cards, I may want
							to consider then
						</p>
						<a
							href="https://github.com/MagicTheGathering/mtg-sdk-javascript"
							target="_blank"
							rel="noreferrer"
						>
							MTG JavaScript SDK
						</a>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
