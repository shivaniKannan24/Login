import styles from "./styles.module.css";


const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>fakebook</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>

			<div className={styles.container}>
				<div
					className={styles.card}
					onClick={() => window.location.href = "http://localhost:3000/"}
				>
					<img
						src="image1.jpg"
						alt="Example 1"
						className={styles.image}
					/>
					<h3>Meal-Planner</h3>
				</div>

				<div
					className={styles.card}
					onClick={() => window.location.href = "https://recipe-app-sandy-phi.vercel.app/"}
				>
					<img src="image2.jpg" alt="Example 2" className={styles.image} />
					
					<h3>Recipe-App</h3>
				</div>

				<div
					className={styles.card}
					onClick={() => window.location.href = "https://waste-manage-tau.vercel.app/"}
				>
					<img
						src="image3.jpg"
						alt="Example 3"
						className={styles.image}
					/>
					<h3>Manage-Food</h3>
				</div>
			</div>
		</div>
	);
};

export default Main;
