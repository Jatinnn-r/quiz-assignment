import { useState } from "react";

export default function Welcome({ onStart }: { onStart: () => void }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e7f4fa]">
      <div className="w-[450px] bg-white rounded-2xl shadow-lg p-8 border border-[#b8e0f7]">
        <h1 className="text-center text-3xl font-serif mb-6 text-[#164863]">
          Test Your Knowledge
        </h1>

        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
            className="w-full border rounded-md px-3 py-2 outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <button
          onClick={onStart}
          className="w-full mt-6 bg-[#5aa3e1] text-white py-2 rounded-md hover:bg-[#4a8fc8] transition"
        >
          Start
        </button>
      </div>
    </div>
  );
}
