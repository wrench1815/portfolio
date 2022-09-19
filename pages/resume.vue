<template>
  <section>
    <div class="card rounded-0 shadow-0">
      <h3 class="mx-auto">Resume</h3>
    </div>
    <div class="container-fluid py-4">
      <div class="bg-white rounded-5">
        <section>
          <div class="row">
            <!-- start:name and links -->
            <div class="col-12 col-lg-3">
              <div class="card-body">
                <div class="d-flex justify-content-center">
                  <img
                    :data-src="myImage"
                    class="img-fluid avatar rounded-circle avatar-size object-top"
                    alt="Hardeep Kumar"
                    v-lazy-load
                  />
                </div>
                <div
                  class="card-body pb-0 pe-lg-0 d-flex flex-column align-items-center align-items-lg-start align-items-xxl-center"
                >
                  <!-- name -->
                  <h1 class="fw-bold" :class="IBM">Hardeep Kumar</h1>

                  <!-- role -->
                  <span class="h5 text-muted" :class="hind">Web Developer</span>
                </div>

                <div
                  class="d-flex flex-column align-items-center align-items-lg-start align-items-xxl-center"
                >
                  <ul class="list-unstyled mt-5">
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-mail-line"></i
                      ><a
                        class="link-primary"
                        :class="hind"
                        href="mailto:hardeepkumar1815@gmail.com"
                        target="_blank"
                        >hardeepkumar1815@gmail.com</a
                      >
                    </li>
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-map-pin-line"></i>Jammu, J & K
                    </li>
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-time-line"></i>Full Time/Intern
                    </li>
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-user-3-line"></i>Full Stack
                    </li>
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-phone-line"></i
                      ><a
                        class="link-primary"
                        :class="hind"
                        target="_blank"
                        href="tel:+917889555278"
                        >+91 7889555278</a
                      >
                    </li>
                    <li class="d-flex gap-1 fs-5 mb-2 text-break" :class="hind">
                      <i class="fw-bold ri-compass-discover-line"></i>
                      <a
                        href="https://hardeepkumar.in"
                        target="_blank"
                        class="link-primary"
                        :class="hind"
                        >hardeepkumar.in</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="pt-0 d-none d-lg-block">
                  <div class="card-body px-lg-0">
                    <h3 class="fw-bold" :class="IBM">Technical Skills</h3>

                    <ul class="list-unstyled mt-3">
                      <li class="mb-3">
                        <div class=" " :class="hind">Django</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-100 bg-primary"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Nuxt/Vue</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-75 bg-primary"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Python</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-75 bg-primary"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Javascript</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-50 bg-primary"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">HTML/CSS</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-85 bg-primary"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Linux</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-90 bg-primary"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <!-- end:name and links -->

            <div class="col">
              <div class="card-body">
                <h3 class="fw-bold" :class="IBM">Professional Summary</h3>
                <p class="fs-5" :class="hind">
                  Full Stack Web Developer with a strong-hold on DJango and Nuxt
                  JS. Skilled at Creating APIs with Django, Consuming APIs in
                  Nuxt, Deployment and CI/CD. Practiced Django for 2+ years and
                  Nuxt for 1 year.
                </p>
              </div>

              <div class="card-body mt-3">
                <h3 class="fw-bold" :class="IBM">Employment</h3>

                <div class="py-3">
                  <div
                    class="d-flex flex-column flex-lg-row justify-content-between"
                  >
                    <div class="h5 fw-bold" :class="IBM">
                      Web Development Intern(Django)
                    </div>
                    <div class="h5 fw-bold text-muted" :class="hind">
                      Intern
                    </div>
                  </div>

                  <div class="row">
                    <div
                      class="col-12 col-lg-8 d-flex flex-column flex-lg-row justify-content-between"
                    >
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-compass-3-line"></i>Link List Technologies
                        LLP
                      </div>
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-map-pin-line"></i>Gurugram, Haryana
                      </div>
                    </div>
                    <div class="col d-flex justify-content-lg-end">
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-time-line"></i>6 Sep, 2021
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card-body d-none d-lg-block">
                <h3 class="fw-bold" :class="IBM">Education</h3>

                <div class="py-3">
                  <div class="d-flex justify-content-between">
                    <div class="h5 fw-bold" :class="IBM">
                      Bachelor of Computer Applications
                    </div>
                  </div>

                  <div class="row">
                    <div
                      class="col d-flex flex-column flex-lg-row justify-content-between"
                    >
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-map-pin-line"></i>GGM Science College,
                        Jammu
                      </div>
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-time-line"></i>July 2019 - Current
                      </div>
                    </div>
                  </div>
                </div>

                <div class="py-3">
                  <div class="d-flex justify-content-between">
                    <div class="h5 fw-bold" :class="IBM">
                      Higher Education(11-12th)
                    </div>
                  </div>

                  <div class="row">
                    <div
                      class="col d-flex flex-column flex-lg-row justify-content-between"
                    >
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-map-pin-line"></i>Shiksha Niketan Sr.
                        Secondary School, Jammu
                      </div>
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-time-line"></i>May 2016 - Apr 2018
                      </div>
                    </div>
                  </div>
                </div>

                <div class="py-3">
                  <div class="d-flex justify-content-between">
                    <div class="h5 fw-bold" :class="IBM">
                      Base Education(till 10th)
                    </div>
                  </div>

                  <div class="row">
                    <div
                      class="col d-flex flex-column flex-lg-row justify-content-between"
                    >
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-map-pin-line"></i>Birmingham Intl. Public
                        School, Bishnah
                      </div>
                      <div class="d-flex gap-1 text-muted" :class="hind">
                        <i class="ri-time-line"></i>till May 2018
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- visible only below lg -->
          <div class="d-lg-none">
            <div class="row">
              <!-- start:Technical Skills -->
              <div class="col-12 col-lg-3">
                <div class="card-body pt-0">
                  <div class="card-body px-0">
                    <h3 class="fw-bold" :class="IBM">Technical Skills</h3>

                    <ul class="list-unstyled mt-3">
                      <li class="mb-3">
                        <div class=" " :class="hind">Django</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-100 bg-primary"
                            role="progressbar"
                            aria-valuenow="100"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Nuxt/Vue</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-75 bg-primary"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Python</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-75 bg-primary"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Javascript</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-50 bg-primary"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">HTML/CSS</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-85 bg-primary"
                            role="progressbar"
                            aria-valuenow="85"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>

                      <li class="mb-3">
                        <div class=" " :class="hind">Linux</div>
                        <div class="progress mt-1">
                          <div
                            class="progress-bar w-90 bg-primary"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end:Technical Skills -->

              <!-- start:Education -->
              <div class="col">
                <div class="card-body">
                  <h3 class="fw-bold" :class="IBM">Education</h3>

                  <div class="py-3">
                    <div class="d-flex justify-content-between">
                      <div class="h5 fw-bold" :class="IBM">
                        Bachelor of Computer Applications
                      </div>
                    </div>

                    <div class="row">
                      <div
                        class="col d-flex flex-column flex-lg-row justify-content-between"
                      >
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-map-pin-line"></i>GGM Science College,
                          Jammu
                        </div>
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-time-line"></i>July 2019 - Current
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="d-flex justify-content-between">
                      <div class="h5 fw-bold" :class="IBM">
                        Higher Education(11-12th)
                      </div>
                    </div>

                    <div class="row">
                      <div
                        class="col d-flex flex-column flex-lg-row justify-content-between"
                      >
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-map-pin-line"></i>Shiksha Niketan Sr.
                          Secondary School, Jammu
                        </div>
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-time-line"></i>May 2016 - Apr 2018
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="py-3">
                    <div class="d-flex justify-content-between">
                      <div class="h5 fw-bold" :class="IBM">
                        Base Education(till 10th)
                      </div>
                    </div>

                    <div class="row">
                      <div
                        class="col d-flex flex-column flex-lg-row justify-content-between"
                      >
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-map-pin-line"></i>Birmingham Intl. Public
                          School, Bishnah
                        </div>
                        <div class="d-flex gap-1 text-muted" :class="hind">
                          <i class="ri-time-line"></i>till May 2018
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end:Education -->
            </div>
          </div>
        </section>

        <!-- pdf generation -->
        <client-only>
          <vue-html2pdf
            :show-layout="false"
            :float-layout="true"
            :enable-download="true"
            :preview-modal="false"
            :paginate-elements-by-height="942"
            filename="Hardeep Kumar Resume"
            :pdf-quality="2"
            pdf-format="a4"
            pdf-orientation="portrait"
            pdf-content-width="210mm"
            :manual-pagination="true"
            ref="html2Pdf"
            :html-to-pdf-options="{
              margin: [0, 0, 0, 0],
              filename: `Hardeep Kumar Resume.pdf`,
              image: {
                type: 'jpeg',
                quality: 1,
              },
              enableLinks: true,
              html2canvas: {
                scale: 3,
                useCORS: true,
              },
              jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
              },
            }"
          >
            <section slot="pdf-content">
              <div class="row">
                <!-- start:name and links -->
                <div class="col-4">
                  <div class="card-body">
                    <div class="d-flex justify-content-center">
                      <img
                        :data-src="myImage"
                        class="img-fluid avatar rounded-circle avatar-size object-cover object-top"
                        alt="Hardeep Kumar"
                        v-lazy-load
                      />
                    </div>
                    <div
                      class="card-body pb-0 d-flex flex-column align-items-start pe-0"
                    >
                      <!-- name -->
                      <h1 class="ff-IBM fw-bold">Hardeep Kumar</h1>

                      <!-- role -->
                      <span class="h5 ff-hind text-muted">Web Developer</span>
                    </div>

                    <ul class="list-unstyled mt-5">
                      <!-- start:email -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <span class="mt-n1"
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z"
                              fill="rgba(79,79,79,1)"
                            /></svg
                        ></span>
                        <a
                          class="ff-hind link-primary"
                          href="mailto:hardeepkumar1815@gmail.com"
                          target="_blank"
                          >hardeepkumar1815@gmail.com</a
                        >
                      </li>
                      <!-- end:email -->

                      <!-- start:address -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <!-- <i class="fw-bold ri-map-pin-line"></i>Jammu, J & K -->
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                              fill="rgba(79,79,79,1)"
                            /></svg
                        ></span>
                        Jammu, J & K
                      </li>
                      <!-- end:address -->

                      <!-- start:Type -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <!-- <i class="fw-bold ri-time-line"></i>Full Time/Intern -->
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                              fill="rgba(79,79,79,1)"
                            /></svg
                        ></span>
                        Full Time/Intern
                      </li>
                      <!-- end:Type -->

                      <!-- start:Role -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <!-- <i class="fw-bold ri-user-3-line"></i>Full Stack -->
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
                              fill="rgba(79,79,79,1)"
                            /></svg
                        ></span>
                        Full Stack
                      </li>
                      <!-- end:Role -->

                      <!-- start:Tel -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <!-- <i class="fw-bold ri-phone-line"></i
                        ><a
                          class="ff-hind link-primary"
                          target="_blank"
                          href="tel:+917889555278"
                          >+91 7889555278</a
                        > -->
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M9.366 10.682a10.556 10.556 0 0 0 3.952 3.952l.884-1.238a1 1 0 0 1 1.294-.296 11.422 11.422 0 0 0 4.583 1.364 1 1 0 0 1 .921.997v4.462a1 1 0 0 1-.898.995c-.53.055-1.064.082-1.602.082C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 0 1 4.077 3h4.462a1 1 0 0 1 .997.921A11.422 11.422 0 0 0 10.9 8.504a1 1 0 0 1-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 0 1 7.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 0 1-3.668-1.097l-1.357 1.9a12.442 12.442 0 0 1-1.588-.75l-.058-.033a12.556 12.556 0 0 1-4.702-4.702l-.033-.058a12.442 12.442 0 0 1-.75-1.588z"
                              fill="rgba(79,79,79,1)"
                            /></svg></span
                        ><a
                          class="ff-hind link-primary"
                          target="_blank"
                          href="tel:+917889555278"
                          >+91 7889555278</a
                        >
                      </li>
                      <!-- end:Tel -->

                      <!-- start:website -->
                      <li
                        class="d-flex align-items-baseline gap-1 ff-hind fs-5 mb-2 text-break"
                      >
                        <span
                          ><svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                          >
                            <path fill="none" d="M0 0h24v24H0z" />
                            <path
                              d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-5-8.5L16 8l-3.5 9.002L11 13l-4-1.5z"
                              fill="rgba(79,79,79,1)"
                            /></svg
                        ></span>
                        <a
                          href="https://hardeepkumar.in"
                          target="_blank"
                          class="ff-hind link-primary"
                          >hardeepkumar.in</a
                        >
                      </li>
                      <!-- end:website -->
                    </ul>

                    <div class="pt-3">
                      <div>
                        <h3 class="ff-IBM fw-bold">Technical Skills</h3>

                        <ul class="list-unstyled mt-3">
                          <li class="mb-3">
                            <div class="ff-hind">Django</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-100 bg-primary"
                                role="progressbar"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-3">
                            <div class="ff-hind">Nuxt/Vue</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-75 bg-primary"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-3">
                            <div class="ff-hind">Python</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-75 bg-primary"
                                role="progressbar"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-3">
                            <div class="ff-hind">Javascript</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-50 bg-primary"
                                role="progressbar"
                                aria-valuenow="50"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-3">
                            <div class="ff-hind">HTML/CSS</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-85 bg-primary"
                                role="progressbar"
                                aria-valuenow="85"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>

                          <li class="mb-3">
                            <div class="ff-hind">Linux</div>
                            <div class="progress mt-1">
                              <div
                                class="progress-bar w-90 bg-primary"
                                role="progressbar"
                                aria-valuenow="90"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end:name and links -->

                <div class="col">
                  <div class="card-body">
                    <h3 class="ff-IBM fw-bold">Professional Summary</h3>
                    <p class="fs-5 ff-hind">
                      Full Stack Web Developer with a strong-hold on DJango and
                      Nuxt JS. Skilled at Creating APIs with Django, Consuming
                      APIs in Nuxt, Deployment and CI/CD. Practiced Django for
                      2+ years and Nuxt for 1 year.
                    </p>
                  </div>

                  <div class="card-body mt-3">
                    <h3 class="ff-IBM fw-bold">Employment</h3>

                    <div class="py-3">
                      <div class="d-flex flex-row justify-content-between">
                        <div class="h5 ff-IBM fw-bold">
                          Web Development Intern(Django)
                        </div>
                        <div class="h5 ff-hind fw-bold text-muted">Intern</div>
                      </div>

                      <div class="row">
                        <div
                          class="col-8 d-flex flex-row justify-content-between gap-2"
                        >
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm4.5-12.5L14 14l-6.5 2.5L10 10l6.5-2.5zM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                                  fill="rgba(117,117,117,1)"
                                /></svg
                            ></span>
                            <span class="ff-hind"
                              >Link List Technologies LLP</span
                            >
                          </div>
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                  fill="rgba(117,117,117,1)"
                                /></svg
                            ></span>
                            <span class="ff-hind">Gurugram, Haryana</span>
                          </div>
                        </div>

                        <div class="col d-flex justify-content-end">
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                                  fill="rgba(117,117,117,1)"
                                /></svg
                            ></span>
                            <span class="ff-hind">6 Sep, 2021</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-body">
                    <h3 class="ff-IBM fw-bold">Education</h3>

                    <div class="py-3">
                      <div class="d-flex justify-content-between">
                        <div class="h5 ff-IBM fw-bold">
                          Bachelor of Computer Applications
                        </div>
                      </div>

                      <div class="row">
                        <div
                          class="col d-flex flex-row justify-content-between gap-1"
                        >
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                  fill="rgba(117,117,117,1)"
                                /></svg
                            ></span>
                            <span class="ff-hind"
                              >GGM Science College, Jammu</span
                            >
                          </div>
                          <div class="d-flex gap-1 ff-hind text-muted">
                            <span class="mt-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                                  fill="rgba(117,117,117,1)"
                                />
                              </svg>
                            </span>
                            <span class="ff-hind">July 2019 - Current</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="py-3">
                      <div class="d-flex justify-content-between">
                        <div class="h5 ff-IBM fw-bold">
                          Higher Education(11-12th)
                        </div>
                      </div>

                      <div class="row">
                        <div
                          class="col d-flex flex-row justify-content-between gap-1"
                        >
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                  fill="rgba(117,117,117,1)"
                                /></svg></span
                            ><span class="ff-hind"
                              >Shiksha Niketan Sr. Secondary School, Jammu</span
                            >
                          </div>
                          <div class="d-flex gap-1 ff-hind text-muted">
                            <span class="mt-n1">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                                  fill="rgba(117,117,117,1)"
                                />
                              </svg> </span
                            ><span class="ff-hind">May 2016 - Apr 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="py-3">
                      <div class="d-flex justify-content-between">
                        <div class="h5 ff-IBM fw-bold">
                          Base Education(till 10th)
                        </div>
                      </div>

                      <div class="row">
                        <div
                          class="col d-flex flex-row justify-content-between gap-1"
                        >
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 20.9l4.95-4.95a7 7 0 1 0-9.9 0L12 20.9zm0 2.828l-6.364-6.364a9 9 0 1 1 12.728 0L12 23.728zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm0 2a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
                                  fill="rgba(117,117,117,1)"
                                /></svg></span
                            ><span class="ff-hind"
                              >Birmingham Intl. Public School, Bishnah</span
                            >
                          </div>
                          <div
                            class="d-flex gap-1 ff-hind text-muted align-items-baseline"
                          >
                            <span class="mt-n1"
                              ><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="16"
                                height="16"
                              >
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path
                                  d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-8h4v2h-6V7h2v5z"
                                  fill="rgba(117,117,117,1)"
                                /></svg
                            ></span>
                            <span class="ff-hind">till May 2018</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </vue-html2pdf>
        </client-only>

        <!-- Download Resume PDF -->
        <section class="d-flex justify-content-center pb-3">
          <button class="btn btn-primary blob-anim" @click="getPDF">
            <i class="ri-download-2-line ri-2x"></i>
          </button>
        </section>
      </div>
    </div>

    <!-- font toggler -->
    <section class="position-fixed top-50 end-0 d-none">
      <button
        class="btn btn-warning btn-floating"
        @click="toggleResumeDisplayFonts"
      >
        <span class="d-flex justify-content-center align-items-center">
          <i class="ri-font-color ri-lg"></i>
        </span>
      </button>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Resume',

  data() {
    return {
      hind: '',
      IBM: '',
      myImage:
        'https://res.cloudinary.com/dnzbu6wqv/image/upload/v1663592209/IMG_20200214_151850square_qdcao8.jpg',
    }
  },

  methods: {
    getPDF() {
      this.$refs.html2Pdf.generatePdf()
    },

    toggleResumeDisplayFonts() {
      this.hind == '' ? (this.hind = 'ff-hind') : (this.hind = '')
      this.IBM == '' ? (this.IBM = 'ff-IBM') : (this.IBM = '')
    },
  },
}
</script>

<style scoped>
.avatar-size {
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
}
</style>
