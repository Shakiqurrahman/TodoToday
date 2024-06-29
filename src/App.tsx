import DarkModeBtn from './DarkModeBtn.tsx'
export default function App() {
    return (
        <main className="mt-20 max-w-[800px] mx-auto p-4">
            <h1 className="text-center font-bold text-3xl text-primary">
                Todo<span className="text-black dark:text-white">Today!</span>
            </h1>
            <div className='flex justify-between items-center gap-6 mt-8'>
                <button className="w-full bg-primary px-4 py-2.5 rounded-lg text-white">
                    Add Todo
                </button>
                <DarkModeBtn />
            </div>
        </main>
    );
}
