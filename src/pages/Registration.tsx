import { useState } from "react";

const Register = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        alert("✅ Registration successful");
        form.reset();
      } else {
        alert("❌ Registration failed: " + result.message);
      }
    } catch (error: any) {
      alert("❌ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Workshop Registration</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 bg-white p-6 rounded shadow">
        <input name="name" type="text" placeholder="Full Name" required className="w-full border p-2 rounded" />
        <input name="email" type="email" placeholder="Email" required className="w-full border p-2 rounded" />
        <input name="phone" type="tel" placeholder="Phone Number" required className="w-full border p-2 rounded" />
        <input name="organization" type="text" placeholder="Organization" className="w-full border p-2 rounded" />
        <input name="paymentScreenshot" type="file" required className="w-full border p-2 rounded" />

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Registration"}
        </button>
      </form>
    </section>
  );
};

export default Register;
