<script lang="ts">
  let readMore = false;

  const projects: Project[] = [
    {
      name: "Math Run",
      description: "Game where you speed run through math problems",
      link: "https://math-run.vercel.app",
      date: "Ongoing"
    },
    {
      name: "Countdowns",
      description: "Create live countdowns for any occasion and get a quick shareable link",
      link: "/",
      date: "Ongoing"
    },
    {
      name: "Your next project?",
      description: "Contact me and we'll work together to make the next big thing!",
      link: "https://twitter.com/ronyfied",
      date: "2024"
    }
  ];

  const testimonial: Testimonial = {
    content: "Rony is super creative, working with him is always an opportunity to learn new things.",
    author: {
      name: "Hiftie",
      occupation: "Awesome Developer",
      link: "https://hiftie.xyz"
    }
  }
</script>

<div class="flex justify-center p-3 leading-loose sm:py-20">
  <div class="flex flex-col w-full p-6 bg-black rounded-lg bg-opacity-50 sm:w-3/4 ring-white ring-opacity-25 ring-1">
    <div class="flex flex-col gap-4 sm:flex-row sm:justify-between">
      <div class="flex items-center gap-4">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <img class="border-white border-opacity-25 rounded-full w-11 border-1" src="Chibee.png" alt="Profile Picture">
        <h1 class="text-4xl">Rony Kati</h1>
      </div>
      <ul class="flex items-center gap-4">
        <li>
          <a href="https://twitter.com/ronyfied">
            <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.9014 0.807816H22.5816L14.5415 9.99708L24 22.5016H16.5941L10.7935 14.9177L4.15631 22.5016H0.473926L9.07356 12.6726L0 0.807816H7.59394L12.8372 7.73981L18.9014 0.807816ZM17.6098 20.2988H19.649L6.48589 2.89487H4.29759L17.6098 20.2988Z" fill="white"/></svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/ronyfied">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z" fill="white"/></svg>
          </a>
        </li>
      </ul>
    </div>
    <a href="/">
      <div class="px-3 py-1 mt-6 rounded-md bg-green w-fit ring-white ring-1 ring-opacity-25 bg-opacity-15 hover:ring-opacity-50">
        <a href="https://discord.com/users/791222882499690519" class="text-white text-opacity-80"><span class="mr-2 text-sm animate-pulse">🟢</span>Currently online on Discord</a>
      </div>
    </a>
    <div class="mt-6">
      <p class="text-white text-opacity-80">
        Hi there! I'm a 15yo self-taught developer and novice designer. I focus on making things easy to use with a simple and minimal style.
        {#if !readMore}
          <button on:click={() => readMore = true} class="text-white text-opacity-50 underline underline-offset-4 decoration-1">Read More...</button>
        {:else}
          <br><br>
          I started coding when I was around 12 and I've loved every moment of it! Anything related to Aviation and Astronomy always catches my interest. I also enjoy touching grass every now and then. <button on:click={() => readMore = false} class="text-white text-opacity-50 underline underline-offset-4 decoration-1">Read Less</button>
        {/if}
      </p>
    </div>
    <div class="grid gap-4 mt-8 md:grid-cols-2">
      {#each projects as project}
        <a href="{project.link}">
          <div class="h-full px-5 py-4 bg-white rounded-md bg-opacity-10 ring-white ring-1 ring-opacity-25 hover:ring-opacity-50">
            <div class="flex justify-between">
              <h1 class="text-lg">{project.name}</h1>
              <h1 class="text-lg text-white text-opacity-80">{project.date}</h1>
            </div>
            <p class="mt-3 text-white text-opacity-80">{project.description}</p>
          </div>
        </a>
      {/each}
    </div>
    <div class="flex flex-col gap-4 mt-10 text-center">
      <h1 class="text-2xl italic leading-normal">"{testimonial.content}"</h1>
      <p class="text-white text-opacity-80">- <a class="text-white underline text-opacity-80 hover:text-opacity-100 underline-offset-4 decoration-1" href="{testimonial.author.link}">{testimonial.author.name}</a>, {testimonial.author.occupation}</p>
    </div>
  </div>
</div>