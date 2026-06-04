export const metadata = {
  title: "Terms & Conditions | Chhotelal",
  description: "Terms and Conditions for Chhotelal",
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 mb-6">
        Last Updated: June 2026
      </p>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Website Usage
          </h2>
          <p>
            By using this website, you agree to use it lawfully
            and not attempt unauthorized access.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Intellectual Property
          </h2>
          <p>
            All content including text, graphics, logos,
            and images are the property of Chhotelal.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Limitation of Liability
          </h2>
          <p>
            We are not responsible for any damages resulting
            from the use of this website.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">
            Governing Law
          </h2>
          <p>
            These terms are governed by the laws of Nepal.
          </p>
        </div>
      </section>
    </main>
  );
}