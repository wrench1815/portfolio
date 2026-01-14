<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Set page title
  document.title = 'Coding Is Easy, Engineering Is Hard - Portfolio'
})
</script>

<template>
  <div class="min-h-screen bg-background">
    <!-- Blog Content -->
    <main class="pt-24 pb-16">
      <article class="max-w-4xl mx-auto px-6">
        <!-- Header -->
        <header class="mb-12 text-center">
          <h1
            class="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight"
          >
            Coding Is Easy, Engineering Is Hard
          </h1>
          <div
            class="flex items-center justify-center space-x-4 text-muted-foreground"
          >
            <time class="text-sm">March 2024</time>
            <span class="w-1 h-1 bg-muted-foreground rounded-full"></span>
            <span class="text-sm">12 min read</span>
          </div>
        </header>

        <!-- Content -->
        <div class="prose prose-lg max-w-none">
          <div class="space-y-8 text-foreground/90 leading-relaxed">
            <p class="text-xl text-muted-foreground font-medium">
              Most of us remember the first time we got code to run. Maybe it
              was a flashing "Hello, World!" on the screen. Maybe it was a
              bouncing ball in a game engine. Maybe it was a Python script that
              printed your name in 100 different fonts just because you could.
            </p>

            <p>
              Whatever it was, that moment was magic. You wrote a few lines, hit
              "run," and the computer obeyed. You felt powerful. And in a way,
              you were right: coding is powerful. But here's the thing nobody
              tells you in that honeymoon phase:
            </p>

            <blockquote
              class="border-l-4 border-nord-blue pl-6 py-4 bg-muted/50 rounded-r-lg"
            >
              <p class="text-xl font-semibold text-foreground">
                Coding is easy. Engineering is hard.
              </p>
            </blockquote>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              Why Coding Feels Easy (Even When It's Not)
            </h2>

            <p>
              Now before you argue — yes, learning to code can be frustrating.
              The syntax errors, the missing semicolons, the cryptic compiler
              messages that sound like they came from an angry alien. That part
              isn't exactly "easy."
            </p>

            <p>
              But once you get the hang of it, you realize coding is
              fundamentally straightforward. You tell the computer what to do,
              and it does it.
            </p>

            <ul class="space-y-3 my-6">
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span
                  >Need to scrape a website? There's a library for that.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span
                  >Want to play sound when you click a button? Copy-paste two
                  lines from Stack Overflow.</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span
                  >Need to add physics to a cube in Unreal Engine? Drag, drop,
                  done.</span
                >
              </li>
            </ul>

            <p>
              The world is overflowing with tutorials, docs, and snippets. Once
              you know the basics, you can "make stuff work" fairly quickly.
            </p>

            <p>
              This is why people say anyone can learn to code. And they're
              right. You can learn enough JavaScript in a week to make a to-do
              app. But can you make that same to-do app still work flawlessly
              two years later, after three feature pivots, a new team, and five
              thousand users?
            </p>

            <p class="font-semibold text-lg">
              That's where engineering steps in.
            </p>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              The Hard Part Nobody Warns You About
            </h2>

            <p>
              Software engineering isn't about "making it work." It's about
              making it work reliably, repeatedly, and with other human beings
              constantly poking at it.
            </p>

            <div class="bg-muted/30 rounded-lg p-6 my-8">
              <p class="text-foreground/80">A login page is trivial.</p>
              <p class="text-foreground mt-2 font-semibold">
                A login system that handles millions of users, prevents brute
                force attacks, integrates with third-party OAuth providers, logs
                events securely, and still loads in under 200ms? That's
                engineering.
              </p>
            </div>

            <p>
              When you cross the line from "I wrote some code" to "I built a
              system that must survive the real world," you discover new
              enemies:
            </p>

            <div class="grid md:grid-cols-3 gap-6 my-8">
              <div class="bg-card border border-border rounded-lg p-6">
                <h3 class="font-bold text-lg mb-3 text-foreground">
                  Complexity creep
                </h3>
                <p class="text-sm text-muted-foreground">
                  Your 200-line project balloons into 20,000 lines spread across
                  services, each depending on three other services, none
                  documented properly.
                </p>
              </div>
              <div class="bg-card border border-border rounded-lg p-6">
                <h3 class="font-bold text-lg mb-3 text-foreground">
                  Other humans
                </h3>
                <p class="text-sm text-muted-foreground">
                  Your teammate pushes "just a small change," and suddenly
                  production is on fire. Half your time is spent deciphering
                  variable names like tempDataFinalV2.
                </p>
              </div>
              <div class="bg-card border border-border rounded-lg p-6">
                <h3 class="font-bold text-lg mb-3 text-foreground">
                  The future
                </h3>
                <p class="text-sm text-muted-foreground">
                  That quick hack you wrote to meet a deadline? It's now
                  permanent infrastructure. Six months later, you're the person
                  cursing your own name.
                </p>
              </div>
            </div>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              The Illusion of Progress
            </h2>

            <p>
              Part of what makes engineering difficult is that good engineering
              is invisible.
            </p>

            <p>
              When you write code, the output is obvious. You can point at a
              feature and say, "I built that." When you engineer a robust
              system, your reward is… silence. No crashes. No frantic late-night
              bug hunts. Just a boring system quietly doing its job.
            </p>

            <p class="italic text-muted-foreground">
              It's like plumbing: nobody compliments their pipes until water is
              shooting out of the ceiling.
            </p>

            <p>
              This creates a paradox: the more skilled you are as an engineer,
              the less flashy your work looks. And yet, without that invisible
              scaffolding, the flashy stuff collapses.
            </p>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              The Real Job: Trade-offs
            </h2>

            <p>
              If coding is about solving problems, engineering is about managing
              trade-offs.
            </p>

            <ul class="space-y-3 my-6">
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span>Do we ship fast, or build for maintainability?</span>
              </li>
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span>Do we optimize for performance, or readability?</span>
              </li>
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span
                  >Do we scale vertically (bigger servers) or horizontally (more
                  servers)?</span
                >
              </li>
              <li class="flex items-start">
                <span class="text-nord-blue mr-3 mt-1">•</span>
                <span
                  >Do we fix the bug properly, or patch it because the demo is
                  tomorrow?</span
                >
              </li>
            </ul>

            <p>
              There's rarely a perfect answer. Every decision comes with pain —
              you're just choosing which pain hurts less.
            </p>

            <p>
              This is why senior engineers aren't measured by how many lines of
              code they write. They're measured by how well they navigate these
              trade-offs without sinking the project.
            </p>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              A Personal Example (Because Theory Alone Is Boring)
            </h2>

            <p>
              When I was new to Unreal Engine, I built a procedural generation
              tool that placed walls in a scene. Coding it was fun — points,
              meshes, offsets, boom, walls everywhere. It worked on day one.
            </p>

            <p>
              By week two, it was broken. My voxel size didn't scale to
              different meshes, walls had gaps, and debugging was like chasing
              ghosts.
            </p>

            <p>
              I didn't have an "engineering mindset" yet — I wasn't thinking
              about constraints, reusability, or edge cases. I was just coding.
            </p>

            <p>
              The tool only became useful when I stepped back and rethought it
              as a system: what inputs it should accept, how it should adapt to
              different meshes, how to debug it visually. That's when it shifted
              from a "cool hack" to actual engineering.
            </p>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              Why We Confuse the Two
            </h2>

            <p>
              We tend to celebrate coding because it's measurable. Lines
              written, commits pushed, features added. Engineering feels less
              tangible.
            </p>

            <p>
              The irony? Engineering is what keeps projects alive. Most startups
              don't die because someone couldn't write code. They die because
              their systems couldn't scale, their architecture couldn't adapt,
              or their technical debt became unbearable.
            </p>

            <div
              class="bg-gradient-to-r from-nord-blue/10 to-nord-purple/10 rounded-lg p-6 my-8"
            >
              <p class="text-center">
                <span class="font-semibold">Coding is flashy.</span><br />
                <span class="font-semibold">Engineering is survival.</span>
              </p>
            </div>

            <h2 class="text-3xl font-bold text-foreground mt-12 mb-6">
              Final Thought
            </h2>

            <p>
              So yes, coding is easy. You can learn enough in a weekend to build
              something cool. But engineering? That's the craft. That's where
              the real work — and real headaches — begin.
            </p>

            <div class="space-y-4 my-8">
              <p>
                <span class="font-semibold"
                  >Coding is telling a computer what to do.</span
                ><br />
                <span class="font-semibold"
                  >Engineering is making sure the computer — and your teammates
                  — don't ruin your life later.</span
                >
              </p>
            </div>

            <p>
              If coding is Lego, engineering is city planning. Anyone can build
              a house. Building a city that doesn't collapse under traffic, bad
              weather, and human chaos? That's the hard part.
            </p>

            <p class="text-lg font-semibold text-nord-blue">
              And honestly, that's what makes it fun.
            </p>
          </div>
        </div>

        <!-- Footer -->
        <footer class="mt-16 pt-8 border-t border-border">
          <div class="flex items-center justify-between">
            <router-link
              to="/"
              class="inline-flex items-center text-nord-blue hover:text-nord-blue/80 transition-colors"
              data-testid="back-to-home"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to Portfolio
            </router-link>
            <div class="text-sm text-muted-foreground">© 2024 Portfolio</div>
          </div>
        </footer>
      </article>
    </main>
  </div>
</template>

<style scoped>
.prose {
  line-height: 1.7;
}

.prose h2 {
  scroll-margin-top: 100px;
}

.prose p {
  margin-bottom: 1.5rem;
}

.prose blockquote {
  font-style: normal;
}
</style>
