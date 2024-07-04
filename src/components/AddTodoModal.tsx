import { useEffect, useRef, useState } from "react";

export function AddTodoModal() {
    const [open, setOpen] = useState(false);
    const [todo, setTodo] = useState("");
    const modalRef = useRef(null);

    const handleOpen = () => setOpen(!open);

    const handleClickOutside = (event: MouseEvent) => {
        if (
            modalRef.current &&
            !(modalRef.current as any).contains(event.target)
        ) {
            setOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleAddTodo = () => {
        console.log("Todo:", todo);
        setTodo("");
        setOpen(false);
    };

    return (
        <>
            <button
                onClick={handleOpen}
                className="w-full bg-primary hover:bg-primary/90 duration-300 px-4 py-2.5 rounded-lg text-white"
            >
                Add Todo
            </button>
            {open && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                    <div
                        ref={modalRef}
                        className="relative bg-white dark:border border-white dark:bg-black rounded-xl sm:p-10 px-4 py-6 sm:w-[450px] w-full mx-8"
                    >
                        <button
                            onClick={handleOpen}
                            className="text-gray-700 text-4xl hover:text-black dark:text-white absolute top-3 right-4"
                        >
                            &times;
                        </button>

                        <h2 className="text-lg text-center font-semibold dark:text-white ">
                            New Note
                        </h2>

                        <div className="my-10">
                            <input
                                type="text"
                                placeholder="Enter your note"
                                value={todo}
                                onChange={(e) => setTodo(e.target.value)}
                                className="w-full px-4 py-2.5 rounded-lg focus:outline-none dark:bg-black dark:text-white border border-black dark:border-white"
                            />
                        </div>
                        <div className="mt-6 flex justify-between space-x-2">
                            <button
                                onClick={handleOpen}
                                className="px-4 py-2 bg-black hover:bg-black/85 border text-white rounded-lg"
                            >
                                Cancel
                            </button>
                            <button
                            type="submit"
                                onClick={handleAddTodo}
                                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/85"
                            >
                                Add Note
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
