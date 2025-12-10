import { useDispatch, useSelector } from "react-redux";
import TodoCard from "./TodoCard";
import { addItem } from "../redux/todoApp/action";

export default function TodoApp() {
    const form = useSelector((state) => state.todolist);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const date = e.target.date.value;
        const lrnType = e.target.type.value;
        const id = crypto.randomUUID();

        const todoInfo = { id, name, date, lrnType };
        dispatch(addItem(todoInfo))
    };

    return (
        <div className="min-h-screen bg-gray-100 p-5">
            <h1 className="text-3xl font-bold text-center mb-6">Todo Application</h1>
            {/* FORM */}
            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto bg-white p-5 rounded-xl shadow-md space-y-4"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                />
                <input
                    type="date"
                    name="date"
                    value={form.date}
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                />

                {/* LEARNING TYPE */}
                <select
                    name="type"
                    value={form.type}
                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                >
                    <option value="">Select Learning Type</option>
                    <option value="React">React</option>
                    <option value="Redux">Redux</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                    Add Todo
                </button>
            </form>

            {/* TODO CARDS */}
            <TodoCard />
        </div>
    );
}
