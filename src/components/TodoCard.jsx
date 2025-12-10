import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, editItem } from '../redux/todoApp/action';
import { useState } from 'react';

const TodoCard = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const todos = useSelector((state) => state.todolist);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState('');

    const handldeDelete = (id) => {
        dispatch(deleteItem(id));
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const date = e.target.date.value;
        const lrnType = e.target.type.value;
        const id = editId;
        const updatedInfo = { id, name, date, lrnType };
        dispatch(editItem(updatedInfo));
        setModalOpen(false);
    }

    const openModal = (id) => {
        setModalOpen(true);
        setEditId(id);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="max-w-7xl mx-auto mt-8 space-y-4 grid grid-cols-4 gap-10">
            {todos.map((item) => (
                <div
                    key={item.id}
                    className="bg-white py-4 px-2 rounded-xl shadow flex flex-col space-y-1"
                >
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <span className="text-sm text-gray-500">{item.date}</span>
                    <div className='flex justify-between items-center mt-1'>
                        <span className="inline-block mt-2 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-fit">
                            {item.lrnType}
                        </span>
                        <button onClick={() => handldeDelete(item.id)} className='inline-block mt-2 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-fit cursor-pointer'>Delete</button>
                        <button onClick={() => openModal(item.id)} className='inline-block mt-2 bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium w-fit cursor-pointer'>Update</button>
                    </div>
                    {/* Modal */}
                    {modalOpen && (
                        <div className="fixed inset-0 bg-gray-100 pt-20 z-50">
                            <h1 className='text-3xl font-bold text-center mb-6'>Update Todo Application</h1>
                            <form
                                onSubmit={handleUpdate}
                                className="max-w-md mx-auto bg-white p-5 rounded-xl shadow-md space-y-4"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Name"
                                    defaultValue={item.name}
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                />
                                <input
                                    type="date"
                                    name="date"
                                    defaultValue={item.date}
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                />

                                {/* LEARNING TYPE */}
                                <select
                                    name="type"
                                    defaultValue={item.lrnType}
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 outline-none"
                                >
                                    <option >Select Learning Type</option>
                                    <option value="React">React</option>
                                    <option value="Redux">Redux</option>
                                    <option value="Python">Python</option>
                                    <option value="Java">Java</option>
                                </select>
                                <div className='flex gap-5'>
                                    <button
                                        onClick={closeModal}
                                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                    >
                                        Cancle
                                    </button>
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                                    >
                                        Update Todo
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default TodoCard;