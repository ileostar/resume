import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-4 flex flex-col gap-4 items-center py-6">
      <div className="space-y-2 text-center">
        <img
          alt="Avatar"
          className="inline-block w-16 h-16 rounded-full object-cover"
          height="156"
          src="/favicon.png"
          style={{
            aspectRatio: "156/156",
            objectFit: "cover",
          }}
          width="156"
        />
        <div className="space-y-1">
          <h1 className="text-3xl font-bold tracking-tighter">LeoStar</h1>
          <p className="text-sm font-medium tracking-wide text-gray-500 dark:text-gray-400">Senior Frontend Engineer</p>
        </div>
      </div>
      <div className="grid gap-4 w-full max-w-2xl text-sm prose prose-gray prose-tomorrow">
        <p>
          Experienced software engineer with a passion for creating elegant and efficient user interfaces. I enjoy
          turning complex problems into simple and intuitive designs. My expertise lies in frontend development,
          particularly with modern frameworks like React and Vue.
        </p>
      </div>
      <div className="w-full max-w-2xl grid gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Senior Frontend Engineer</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">2020 - Present</p>
        </div>
        <div className="grid gap-1 text-sm ml-6">
          <p>
            Lead the frontend architecture for a high-traffic e-commerce platform, optimizing performance and improving
            the user experience.
          </p>
          <ul className="list-disc list-inside">
            <li>Implemented a responsive design system using Tailwind CSS.</li>
            <li>Integrated a headless CMS to enable marketing teams to update content dynamically.</li>
            <li>Optimized the website for mobile devices, resulting in a 20% increase in conversion rates.</li>
          </ul>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Frontend Developer</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">2017 - 2020</p>
        </div>
        <div className="grid gap-1 text-sm ml-6">
          <p>Collaborated with the design team to create interactive and user-friendly web applications.</p>
          <ul className="list-disc list-inside">
            <li>Developed custom components and animations using JavaScript and CSS.</li>
            <li>Implemented client-side routing with React Router to create a seamless browsing experience.</li>
            <li>Conducted code reviews and provided mentorship to junior team members.</li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-2xl grid gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Building a Personal Finance Tracker</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">2021</p>
        </div>
        <div className="grid gap-1 text-sm ml-6">
          <p>
            Created a web application that allows users to track their expenses and income, providing insights into
            their financial habits.
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              React
            </li>
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              TypeScript
            </li>
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              Chart.js
            </li>
          </ul>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Redesigning the Company Website</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">2019</p>
        </div>
        <div className="grid gap-1 text-sm ml-6">
          <p>
            Led the frontend development for the redesign of the company's website, focusing on creating a modern and
            engaging user experience.
          </p>
          <ul className="flex flex-wrap gap-2">
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              Vue.js
            </li>
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              SASS
            </li>
            <li className="rounded-full border border-gray-200 border-gray-200 bg-gray-100 px-3 text-sm dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50">
              GSAP
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-2xl grid gap-4">
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Bachelor of Science in Computer Science</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">University of Science and Technology</p>
        </div>
        <div className="space-y-1">
          <h2 className="text-lg font-semibold">Languages</h2>
        </div>
        <div className="grid gap-1 text-sm ml-6">
          <p>English (Fluent), Mandarin (Native)</p>
        </div>
      </div>
    </div>
  );
}
