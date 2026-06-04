export const metadata = {
  title: "About Us | Chhotelal",
  description: "Learn more about Chhotelal",
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">
          About Chhotelal
        </h1>

        <p className="text-gray-600 max-w-3xl mx-auto">
          Chhotelal is dedicated to delivering quality services,
          innovative solutions, and exceptional customer experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            Our Mission
          </h2>

          <p>
            To provide valuable services that help customers
            achieve their goals effectively.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            Our Vision
          </h2>

          <p>
            To become a trusted and recognized brand known
            for excellence and innovation.
          </p>
        </div>

        <div className="border rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-3">
            Our Values
          </h2>

          <p>
            Integrity, transparency, innovation,
            responsibility, and customer satisfaction.
          </p>
        </div>
      </div>
    </main>
  );
}