import { AddTodoModal } from './components/AddTodoModal.tsx';
import DarkModeBtn from './components/DarkModeBtn.tsx'
export default function App() {
    return (
        <main className="mt-20 max-w-[800px] mx-auto p-4">
            <h1 className="text-center font-bold text-3xl text-primary">
                Todo<span className="text-black dark:text-white">Today!</span>
            </h1>
            <div className='flex justify-between items-center gap-6 mt-8'>
                <AddTodoModal />
                <DarkModeBtn />
            </div>
        </main>
    );
}
