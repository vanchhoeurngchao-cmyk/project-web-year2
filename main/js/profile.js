document.addEventListener("DOMContentLoaded", () => {
    const settingsBtn = document.getElementById("setting");
    const doneBtn = document.getElementById("done-btn");

    const profileSection = document.getElementById("profile-section");
    const rightMain = document.getElementById("right-main-content");
    const settings = document.getElementById("settings-section");
    const mobileWrapper = document.getElementById("settings-mobile-wrapper");

    if (!settingsBtn || !doneBtn || !settings || !mobileWrapper) return;
    settingsBtn.addEventListener("click", () => {
        profileSection.classList.add("hidden");
        rightMain?.classList.add("hidden");

        mobileWrapper.appendChild(settings);
        mobileWrapper.classList.remove("hidden");
        doneBtn.classList.remove("hidden");
    });
    doneBtn.addEventListener("click", () => {
        mobileWrapper.classList.add("hidden");
        profileSection.classList.remove("hidden");

        rightMain.appendChild(settings);
        doneBtn.classList.add("hidden");
    });
});
