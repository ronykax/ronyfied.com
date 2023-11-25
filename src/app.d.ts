interface Project {
  name: string;
  description: string;
  link: string;
  date: "2022" | "2023" | "2024" | "Ongoing";
}

interface Testimonial {
  content: string;
  author: {
    name: string;
    occupation: string;
    link: strin;
  };
}

// // See https://kit.svelte.dev/docs/types#app
// // for information about these interfaces
// declare global {
// 	namespace App {
// 		// interface Error {}
// 		// interface Locals {}
// 		// interface PageData {}
// 		// interface Platform {}
// 	}
// }

// export {};
