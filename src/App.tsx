import DarkModeBtn from "./components/DarkModeBtn.jsx";
export default function App() {
    return (
        <main className="mt-20">
            <h1 className="text-center font-bold text-3xl text-primary">
                Todo<span className="text-black dark:text-white">Today!</span>
            </h1>
            <DarkModeBtn />
        </main>
    );
}
