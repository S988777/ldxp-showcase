// 上线前只需修改这里两项；请不要填入后台地址、对接码、Token、Cookie 或私人敏感信息。
const storeProfile = {
  storeUrl: "https://pay.ldxp.cn/shop/xiaoen666817",
  contactText: "1104198281",
};

const storeLink = document.querySelector("#store-link");
const copyButton = document.querySelector("#contact-copy");
const feedback = document.querySelector("#copy-feedback");
0
if (storeProfile.storeUrl) {
  storeLink.href = storeProfile.storeUrl;
  storeLink.textContent = "进入链动小铺";
  storeLink.insertAdjacentHTML("beforeend", " <span>↗</span>");
}

if (storeProfile.contactText) {
  copyButton.disabled = false;
  copyButton.textContent = storeProfile.contactText;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(storeProfile.contactText);
      feedback.textContent = "联系方式已复制";
    } catch {
      feedback.textContent = "请手动复制联系方式";
    }
  });
}

document.querySelector("#year").textContent = new Date().getFullYear();

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");
toggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
  nav.classList.remove("open");
  toggle.setAttribute("aria-expanded", "false");
}));
