export default function createSocialList() {
  const socialsWrapper = document.querySelector(".footer__socials");

  const socials = [
    {
      href: "#",
      icon: "./image/socials/telegram.svg",
      alt: "telegram",
    },
    {
      href: "#",
      icon: "./image/socials/vk.svg",
      alt: "vk",
    },
    {
      href: "#",
      icon: "./image/socials/zen.svg",
      alt: "zen",
    },
    {
      href: "#",
      icon: "./image/socials/habr.svg",
      alt: "habr",
    },
    {
      href: "#",
      icon: "./image/socials/youtube.svg",
      alt: "youtube",
    },
    {
      href: "#",
      icon: "./image/socials/rutube.svg",
      alt: "rutube",
    },
    {
      href: "#",
      icon: "./image/socials/odnoklassniki.svg",
      alt: "odnoklassniki",
    },
  ];

  const socialsFragment = document.createDocumentFragment();

  socials.forEach((social) => {
    const li = document.createElement("li");
    li.classList.add("form__input");
    li.innerHTML = `
            <a href="${social.href}" target="_blank"><img class="footer__socials-item" src="${social.icon}" alt="${social.alt}"></a>
        `;
    socialsFragment.append(li);
  });

  socialsWrapper.append(socialsFragment);
}
