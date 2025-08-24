// src/pages/About.jsx
import LandingLayout from "../components/layouts/LandingLayout";

export default function About() {
  return (
    <LandingLayout>
      <section className="px-8 py-20 max-w-3xl mx-auto text-gray-700">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">About Us</h1>
        <p>
          We are a team of developers passionate about building modern web applications with clean UI and fast performance.
        </p>
      </section>
    </LandingLayout>
  );
}
