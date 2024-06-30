import React,{ useState } from "react";
import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Typography,
} from "@material-tailwind/react";

export function AddTodoModal() {
    const [open, setOpen] = useState(false);
    const [note, setNote] = useState("");


    const handleOpen = () => setOpen(!open);

    const getNoteValue = () => {
        console.log(note); 
        handleOpen(); 
      };


    return (
        <>
            <button
                onClick={handleOpen}
                className="w-full bg-primary px-4 py-2.5 rounded-lg text-white"
            >
                Add Todo
            </button>
            <Dialog
                className="p-4 dark:bg-black dark:text-white dark:border border-white"
                open={open}
                size="xs"
                handler={handleOpen}
            >
                <div className="mb-6 flex  justify-between">
                    <DialogHeader className="mx-auto flex flex-col items-start">
                        {" "}
                        <Typography className="dark:text-white" variant="h4">
                            New Note
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6 cursor-pointer"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody>
                    <div className="grid mb-4">
                        <Input
                            className="dark:text-white"
                            color="cyan"
                            label="Input your note"
                            // value={note}
                            onChange={(e) => setNote(e.target.value)}
                        />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 flex justify-between">
                    <Button
                        variant="outlined"
                        color="cyan"
                        onClick={handleOpen}
                    >
                        cancel
                    </Button>
                    <Button
                        variant="gradient"
                        color="cyan"
                        onClick={getNoteValue}
                    >
                        Add
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
