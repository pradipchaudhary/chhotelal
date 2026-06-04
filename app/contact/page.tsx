export const metadata = {
  title: "Contact Us | Chhotelal",
  description: "Get in touch with Chhotelal",
};

export default function ContactPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-14">
        <h1 className="text-5xl font-bold mb-4">
          Contact Us
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Have questions or business inquiries? We'd love
          to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-5">
          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Email
            </h3>
            <p>info@chhotelal.com.np</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Phone
            </h3>
            <p>+977-XXXXXXXXXX</p>
          </div>

          <div className="p-6 border rounded-xl">
            <h3 className="font-semibold mb-2">
              Address
            </h3>
            <p>Kathmandu, Nepal</p>
          </div>
        </div>

        <form className="space-y-5">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border rounded-lg p-4"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full border rounded-lg p-4"
          />

          <textarea
            rows={6}
            placeholder="Your Message"
            className="w-full border rounded-lg p-4"
          />

          <button
            type="submit"
            className="bg-black text-white px-6 py-3 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}