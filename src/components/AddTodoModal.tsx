import {
    Button,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Input,
    Textarea,
    Typography,
} from "@material-tailwind/react";
import { useState } from "react";

export function AddTodoModal() {
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    return (
        <>
            <button onClick={handleOpen} className="w-full bg-primary px-4 py-2.5 rounded-lg text-white">
                Add Todo
            </button>
            <Dialog className="p-4" open={open} size="xs" handler={handleOpen}>
                <div className="mb-6 flex  justify-between">
                    <DialogHeader className="mx-auto flex flex-col items-start">
                        {" "}
                        <Typography className="" variant="h4">
                            New Note 
                        </Typography>
                    </DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-6 w-6"
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
                        <Input color="cyan" label="Input your note" />
                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2 flex justify-between">
                    <Button variant="outlined" color="cyan" onClick={handleOpen}>
                        cancel
                    </Button>
                    <Button
                        variant="gradient"
                        color="cyan"
                        onClick={handleOpen}
                    >
                        Apply
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
